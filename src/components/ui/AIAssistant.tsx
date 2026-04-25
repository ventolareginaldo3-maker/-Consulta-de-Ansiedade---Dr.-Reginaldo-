import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const analytics = {
  trackLead: (type: string) => {
    console.log(`Lead tracked: ${type}`);
  }
};

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [userName, setUserName] = useState<string | null>(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('ana_user_name');
    return null;
  });
  const [interactionCount, setInteractionCount] = useState<number>(() => {
    if (typeof window !== 'undefined') return parseInt(localStorage.getItem('ana_interaction_count') || '0');
    return 0;
  });
  
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string, showTriageButton?: boolean }[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ana_chat_history');
      if (saved && JSON.parse(saved).length > 0) return JSON.parse(saved);
      
      const existingName = localStorage.getItem('ana_user_name');
      if (existingName && existingName !== 'null' && existingName !== '') {
        return [
          { role: 'ai', text: `Oi ${existingName}, que bom te ver de novo! Como você está se sentindo hoje? Em que posso te ajudar agora?` }
        ];
      }
    }
    return [
      { role: 'ai', text: 'Olá! Sou a Ana, assistente virtual do Dr. Reginaldo. Como posso te ajudar hoje? Antes de continuarmos, como você se chama? Gostaria de te tratar pelo nome.' }
    ];
  });

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 1) {
        setShowBubble(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (userName) {
        localStorage.setItem('ana_user_name', userName);
      } else {
        localStorage.removeItem('ana_user_name');
      }
      localStorage.setItem('ana_interaction_count', interactionCount.toString());
      localStorage.setItem('ana_chat_history', JSON.stringify(messages));
    }
  }, [userName, interactionCount, messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const clearChat = () => {
    setMessages([
      { role: 'ai', text: 'Olá! Sou a Ana, assistente virtual do Dr. Reginaldo. Como posso te ajudar hoje? Antes de continuarmos, como você se chama? Gostaria de te tratar pelo nome.' }
    ]);
    setInteractionCount(0);
    setUserName(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ana_chat_history');
      localStorage.removeItem('ana_interaction_count');
      localStorage.removeItem('ana_user_name');
    }
  };

  useEffect(() => {
    if (location.pathname.includes('triagem')) {
      setIsOpen(false);
      if (userName !== null || messages.length > 1 || interactionCount > 0) {
        clearChat();
      }
    }
  }, [location.pathname, userName, messages.length, interactionCount]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Dynamic system instruction based on state
      let instruction = `Você é a Ana, a assistente virtual humana, empática e acolhedora do Dr. Reginaldo Ventola.
      Seu objetivo principal é acolher a paciente e entender o que ela está passando.
      
      ESTADO ATUAL:
      * Nome da usuária: ${userName || 'Ainda não sei'}
      * Número de perguntas feitas: ${interactionCount}
      
      REGRAS DE COMPORTAMENTO:
      1. NÃO SE APRESENTE NOVAMENTE. Você já se apresentou como Ana. Se o nome da usuária for conhecido (${userName}), use-o naturalmente.
      2. NUNCA diga "Sou a Ana" ou "Meu nome é Ana" se interactionCount for maior que 0.
      3. Use uma linguagem extremamente humana, doce e empática.
      4. FLUXO OBRIGATÓRIO:
         * Se você ainda não sabe o nome (userName é nulo ou vazio): Sua prioridade absoluta é descobrir o nome. Se a usuária disser o nome agora, salve-o e faça a PRIMEIRA pergunta investigativa.
         * Se interactionCount está entre 1 e 1: Faça perguntas individuais (uma de cada vez) sobre os sintomas, sentimentos ou o que trouxe a pessoa aqui hoje.
         * Se interactionCount for 2: Explique que o próximo passo ideal é realizar a Triagem Gratuita para um pré-diagnóstico e depois conhecer a avaliação completa com o Dr. Reginaldo Ventola. DEFINA showTriageButton como true nesta resposta.
      5. Não responda tudo de uma vez. Ouça a usuária.
      6. Se a pessoa estiver em crise aguda, foque em acalmá-la primeiro.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: instruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: "object",
            properties: {
              reply: { type: "string" },
              detectedName: { type: "string", description: "O nome da usuária se detectado nesta mensagem" },
              showTriageButton: { type: "boolean", description: "Se deve mostrar o botão de triagem agora" }
            },
            required: ["reply"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      
      if (data.detectedName && !userName) {
        setUserName(data.detectedName);
        // Track Lead Event when name is first detected in chat
        analytics.trackLead('contato');
      }
      
      setInteractionCount(prev => prev + 1);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: data.reply || 'Desculpe, tive um problema técnico. Pode repetir?',
        showTriageButton: data.showTriageButton || interactionCount === 2
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Estou um pouco sobrecarregada agora. Que tal fazer nossa triagem gratuita enquanto eu me recupero?' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-8 z-[100] pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white w-[350px] h-[500px] rounded-[2rem] shadow-2xl border border-brand-ink/5 flex flex-col overflow-hidden mb-4 pointer-events-auto"
          >
            <div className="bg-clinic-bg-dark p-6 text-white flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-accent/50 flex-shrink-0 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=150&h=150" 
                    alt="Ana" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-serif italic tracking-wide text-white">Ana</p>
                  <p className="text-[10px] font-light uppercase tracking-[0.1em] text-white/70">Atendimento VIP</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-paper/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-white rounded-tr-none' 
                      : 'bg-white text-brand-ink rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.showTriageButton && (
                    <Link 
                      to="/metodo-e-tratamento"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 bg-brand-accent text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-brand-ink transition-colors shadow-xl shadow-brand-accent/20 animate-bounce"
                    >
                      Iniciar Jornada de Resgate Agora
                    </Link>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <div className="w-1 h-1 bg-brand-accent rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-brand-accent rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1 h-1 bg-brand-accent rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-brand-ink/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Converse com a Ana..."
                className="flex-1 bg-brand-paper/50 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-brand-accent"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-brand-ink text-brand-paper rounded-xl flex items-center justify-center hover:bg-brand-accent transition-colors"
              >
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        className="w-16 h-16 bg-brand-ink text-brand-paper rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative overflow-hidden pointer-events-auto"
      >
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.5 }}
              className="absolute right-20 bottom-0 bg-white text-brand-ink px-4 py-2 rounded-2xl shadow-2xl border border-brand-ink/5 w-max max-w-[180px] text-xs font-serif italic pointer-events-none"
            >
              Oi! Sou a Ana. Posso te ajudar?
              <div className="absolute right-[-8px] bottom-6 w-4 h-4 bg-white rotate-45 border-r border-t border-brand-ink/5" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute -top-1 -right-1 bg-brand-accent text-white text-[8px] px-1.5 py-0.5 rounded-full z-10 font-bold">
          ANA
        </div>
        {isOpen ? null : (
          <img 
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=150&h=150" 
            alt="Ana" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        )}
      </button>
    </div>
  );
};
