import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { collection, addDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../firebase';
import JourneySteps from '../../components/ui/JourneySteps';
import { QUIZ_QUESTIONS, CONTACT_INFO, WEB3FORMS_ACCESS_KEY } from '../../constants';
import { analytics } from '../../services/analytics';

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [leadInfo, setLeadInfo] = useState({ name: '', phone: '', profession: '' });
  const [qualStep, setQualStep] = useState(0);
  const [qualAnswers, setQualAnswers] = useState<Record<string, string>>({});
  const [showQual, setShowQual] = useState(false);

  const questions = QUIZ_QUESTIONS;
  const qualQuestions = [
    {
      id: 'modalidade',
      q: 'Você prefere atendimento:',
      options: ['1️⃣ Online', '2️⃣ Presencial']
    },
    {
      id: 'disponibilidade',
      q: 'Qual período costuma ser melhor para você?',
      options: ['1️⃣ Manhã', '2️⃣ Tarde', '3️⃣ Noite']
    },
    {
      id: 'intencao',
      q: 'Você pretende iniciar o atendimento:',
      options: ['1️⃣ Ainda esta semana', '2️⃣ Nas próximas semanas', '3️⃣ Apenas buscando informações']
    }
  ];

  const handleOption = (option: string) => {
    setAnswers({ ...answers, [questions[step].id]: option });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1); // Move to contact info
    }
  };

  const handleQualOption = (option: string) => {
    const newQualAnswers = { ...qualAnswers, [qualQuestions[qualStep].id]: option };
    setQualAnswers(newQualAnswers);
    if (qualStep < qualQuestions.length - 1) {
      setQualStep(qualStep + 1);
    } else {
      // Final step: Logic for hot vs cold leads
      if (option.includes('1️⃣') || option.includes('2️⃣')) {
        // Hot leads (Option 1 and 2) -> Automatic scheduling
        navigate('/agendar');
      } else {
        // Option 3 (Seeking info) -> WhatsApp
        const finalMsg = `Olá, meu nome é ${leadInfo.name}. Trabalho como ${leadInfo.profession} e tenho ${answers.idade}.
Acabei de fazer a triagem no site e recebi minha análise: "${result?.substring(0, 150)}..."

Minhas preferências para o agendamento:
📍 Modalidade: ${newQualAnswers.modalidade}
⏰ Período: ${newQualAnswers.disponibilidade}
🚀 Intenção: ${newQualAnswers.intencao}

Gostaria de falar com um especialista.`;

        const whatsappUrl = `https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(finalMsg)}`;
        window.open(whatsappUrl, '_blank');
      }
    }
  };

  const analyzeWithAI = async () => {
    setLoading(true);
    let analysisText = "";
    
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("Gemini API Key não encontrada no ambiente.");
        throw new Error("Gemini API Key não encontrada.");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `Você é o Dr. Reginaldo Ventola, psicanalista e especialista em ansiedade feminina. 
      Analise as respostas da triagem clínica abaixo de uma mulher que está buscando o Método Acalme-se:
      
      DADOS DO LEAD:
      Nome: ${leadInfo.name}
      Profissão: ${leadInfo.profession}
      Idade: ${answers.idade}
      
      RESPOSTAS DETALHADAS:
      ${Object.entries(answers).map(([id, ans]) => `- ${id}: ${ans}`).join('\n')}
      
      OBJETIVO:
      Forneça um "Relatório de Análise Emocional" profundo focado nas dores da mulher moderna (sobrecarga, perfeccionismo, carga mental, esgotamento).
      Use um tom acolhedor, clínico mas poético, e direto ao ponto.
      
      ESTRUTURA DO RELATÓRIO:
      1. [PANORAMA ATUAL]: Descreva o estado emocional dela com base no que ela relatou (ex: "Sua mente não para...", "O peso que você carrega...").
      2. [RAIZ DO CICLO]: Explique por que a ansiedade persistiu até aqui e como o sistema de alerta dela se desregulou.
      3. [CAMINHO DE RESGATE]: Como a união de Psicanálise, Hipnoterapia e Naturopatia vai atuar especificamente no caso dela.
      4. [RECOMENDAÇÃO]: Sugestão de nível de tratamento (Nível 1, 2 ou 3).
      
      RESTRIÇÕES:
      - Não faça diagnósticos médicos (CID).
      - Não prometa cura milagrosa.
      - Foco no acolhimento e na autoridade clínica do Dr. Reginaldo.`;

      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: prompt,
        config: {
          systemInstruction: "Você é o Dr. Reginaldo Ventola, um psicanalista experiente e criador do Método Acalme-se. Sua voz é acolhedora, poética e profissional. Você foca no resgate da essência e na leveza, evitando diagnósticos médicos.",
          temperature: 0.7,
        }
      });
      
      analysisText = response.text?.trim() || "Seu resultado indica que você está passando por um momento de sobrecarga emocional. O Método Acalme-se pode ser o caminho para recuperar sua paz interior e equilíbrio emocional.";
      setResult(analysisText);
      
    } catch (e) {
      console.error("Erro na análise da IA:", e);
      analysisText = "Seu resultado indica que você está passando por um momento de sobrecarga emocional. O Método Acalme-se pode ser o caminho para recuperar sua paz interior e equilíbrio emocional. Uma abordagem terapêutica personalizada pode ajudar a compreender o que está por trás desses sentimentos.";
      setResult(analysisText);
    }

    // Tentar salvar os dados de forma independente para não bloquear a experiência do usuário
    try {
      const leadRef = await addDoc(collection(db, 'leads'), {
        name: leadInfo.name,
        phone: leadInfo.phone,
        profession: leadInfo.profession,
        age: answers.idade,
        createdAt: new Date().toISOString(),
        status: 'novo',
        source: 'Quiz do Site'
      });

      await addDoc(collection(db, `leads/${leadRef.id}/quizResponses`), {
        leadId: leadRef.id,
        responses: answers,
        aiAnalysis: analysisText,
        createdAt: new Date().toISOString()
      });

      // Enviar Relatório para o Profissional (Dr. Reginaldo)
      const accessKey = WEB3FORMS_ACCESS_KEY;
      if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `NOVO LEAD: ${leadInfo.name} (${leadInfo.profession}, ${answers.idade})`,
            from_name: "Triagem Método Acalme-se",
            message: `
              Novo lead completou a triagem:
              Nome: ${leadInfo.name}
              WhatsApp: ${leadInfo.phone}
              Profissão: ${leadInfo.profession}
              Idade: ${answers.idade}
              
              Análise da IA:
              ${analysisText}
              
              Respostas do Quiz:
              ${Object.entries(answers).map(([id, ans]) => `${id}: ${ans}`).join('\n')}
            `
          })
        });
      }

      analytics.trackLead('triagem');
    } catch (e) {
      console.error("Erro ao salvar dados do lead ou enviar e-mail:", e);
      handleFirestoreError(e, OperationType.CREATE, 'leads');
    }

    setLoading(false);
  };

  return (
    <section className="py-20 lg:py-32 px-6 bg-brand-ink text-brand-paper min-h-[600px] flex items-center justify-center">
      <Helmet>
        <title>Teste de Ansiedade Gratuito | Triagem Emocional | Método Acalme se</title>
        <meta name="description" content="Faça nossa triagem gratuita para ansiedade e descubra seu nível de estresse emocional. Identifique sinais de aperto no peito, dores de cabeça, fome emocional e pensamentos acelerados." />
        <meta name="keywords" content="teste de ansiedade, triagem emocional, sintomas de ansiedade, aperto no peito, dores de cabeça, fome emocional, compulsão alimentar, insônia, pensamentos acelerados, medo constante, crise de pânico, falta de ar, tensão muscular" />
        <link rel="canonical" href={window.location.origin + "/triagem"} />
      </Helmet>
      <div className="max-w-2xl w-full">
        <JourneySteps currentStep={3} />
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  Triagem <span className="italic font-light text-brand-accent">Acalme se</span>
                </h2>
                <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full shadow-lg" />
              </div>
              
              <p className="opacity-100 mb-8 text-sm lg:text-base font-medium text-brand-paper/80">Descubra em poucos minutos como sua mente está lidando com a ansiedade.</p>
              <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-70 mb-4 block">Pergunta {step + 1} de {questions.length}</span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-8 lg:mb-12 leading-tight">{questions[step].q}</h2>
              <div className="grid gap-3 lg:gap-4">
                {questions[step].options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className="p-4 lg:p-5 border border-brand-paper/20 rounded-xl lg:rounded-2xl hover:bg-brand-paper hover:text-brand-ink transition-all text-left px-6 lg:px-8 text-sm lg:text-base"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : !result ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-serif mb-6 lg:mb-8">Quase lá...</h2>
              <p className="opacity-100 mb-8 text-sm lg:text-base font-medium">Deixe seu contato para receber a análise personalizada do Método Acalme-se.</p>
              <div className="grid gap-4 max-w-sm mx-auto">
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="bg-transparent border border-brand-paper/20 p-4 lg:p-5 rounded-xl lg:rounded-2xl focus:border-brand-paper outline-none text-sm lg:text-base"
                  value={leadInfo.name}
                  onChange={e => setLeadInfo({...leadInfo, name: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Sua Profissão" 
                  className="bg-transparent border border-brand-paper/20 p-4 lg:p-5 rounded-xl lg:rounded-2xl focus:border-brand-paper outline-none text-sm lg:text-base"
                  value={leadInfo.profession}
                  onChange={e => setLeadInfo({...leadInfo, profession: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="Seu WhatsApp" 
                  className="bg-transparent border border-brand-paper/20 p-4 lg:p-5 rounded-xl lg:rounded-2xl focus:border-brand-paper outline-none text-sm lg:text-base"
                  value={leadInfo.phone}
                  onChange={e => setLeadInfo({...leadInfo, phone: e.target.value})}
                />
                <button 
                  onClick={analyzeWithAI}
                  disabled={!leadInfo.name || !leadInfo.phone || !leadInfo.profession || loading}
                  className="bg-brand-paper text-brand-ink p-4 lg:p-5 rounded-xl lg:rounded-2xl font-bold hover:scale-105 transition-transform disabled:opacity-50 text-sm lg:text-base shadow-xl shadow-brand-ink/20 animate-cta-pulse"
                >
                  {loading ? "Processando Análise..." : "Ver Meu Resultado"}
                </button>
              </div>
            </motion.div>
          ) : !showQual ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-[3rem] p-8 md:p-12 text-brand-ink shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-accent via-brand-accent/50 to-brand-accent" />
                
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-brand-ink/10 pb-8">
                  <div>
                    <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-black mb-2">Relatório de Triagem Clínica</h2>
                    <p className="text-2xl font-serif italic">Paciente: {leadInfo.name}</p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">MÉTODO ACALME-SE</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Dr. Reginaldo Ventola</p>
                  </div>
                </header>

                <div className="prose prose-brand max-w-none">
                  <div className="text-brand-ink/90 leading-relaxed font-light italic text-base md:text-lg whitespace-pre-wrap font-serif">
                    {result}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-ink/10 flex flex-col items-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 mb-2">Responsável Técnico</p>
                  <p className="font-serif italic text-lg">Dr. Reginaldo Ventola</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowQual(true)}
                  className="bg-brand-paper text-brand-ink px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform text-sm text-center shadow-xl shadow-brand-ink/20 animate-cta-pulse"
                >
                  Agendar Minha Sessão com Dr. Reginaldo
                </button>
                <a 
                  href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá Dr. Reginaldo, meu nome é ${leadInfo.name}. Acabei de receber meu relatório de triagem no site e gostaria de conversar sobre meu tratamento.\n\nMEU RELATÓRIO:\n${result}`)}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border border-brand-paper/20 rounded-full font-bold hover:bg-brand-paper hover:text-brand-ink transition-all text-sm text-center shadow-xl shadow-brand-ink/10"
                >
                  Enviar Relatório no WhatsApp
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="qualification"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h2 className="text-xl lg:text-2xl font-serif mb-4 opacity-100">Finalizando Agendamento</h2>
              <p className="opacity-100 mb-8 text-sm lg:text-base font-medium">Pelo que você descreveu na triagem, acredito que uma conversa profissional pode ajudar bastante.</p>
              <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-70 mb-4 block">Passo {qualStep + 1} de {qualQuestions.length}</span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-8 lg:mb-12 leading-tight">{qualQuestions[qualStep].q}</h2>
              <div className="grid gap-3 lg:gap-4">
                {qualQuestions[qualStep].options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleQualOption(opt)}
                    className="p-4 lg:p-5 border border-brand-paper/20 rounded-xl lg:rounded-2xl hover:bg-brand-paper hover:text-brand-ink transition-all text-left px-6 lg:px-8 text-sm lg:text-base"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;
