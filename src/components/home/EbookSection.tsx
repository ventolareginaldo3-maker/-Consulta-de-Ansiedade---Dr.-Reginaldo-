import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadCaptureModal } from '../ui/LeadCaptureModal';

export const EbookSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 lg:py-32 px-6 bg-brand-paper text-brand-ink relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border border-brand-ink/10 group">
              <img 
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042283/Guia_De_Resgate-Psiquiatra_Mococa_hhkd54.png" 
                alt="E-book Guia de Resgate" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="inline-block px-3 py-1 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                  Grátis
                </div>
                <h3 className="text-3xl font-serif italic mb-2 tracking-tight text-white">Guia de Resgate</h3>
                <p className="text-sm opacity-70 font-light text-white">5 Passos para Acalmar a Mente em Crises</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-brand-paper"
            >
              <Download className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Baixar</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 border border-brand-accent/30 rounded-full mb-6">
              <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Acesso Gratuito | Guia de Resgate Emocional</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight tracking-tighter text-brand-ink">
              Seu Primeiro Passo para o Alívio: <br />
              <span className="italic font-light text-brand-accent">Sem Custos, Com Entrega Real.</span>
            </h2>
            
            <div className="space-y-6 text-lg opacity-80 mb-12 font-serif italic leading-relaxed text-brand-ink">
              <p>
                Eu entendo que, às vezes, o peso da ansiedade parece grande demais para dar o passo do agendamento agora. Por isso, como seu Arquiteto de Transformação, desenhei um recurso de entrada: o Guia de Resgate: 5 Passos para Acalmar a Mente em Crises.
              </p>
              <p>
                Este não é apenas um e-book; é o seu kit de primeiros socorros emocional. Preparei um material prático, focado na realidade da mulher que vive sob pressão, para te ajudar a entender o ciclo da sua ansiedade e, mais importante, como começar a quebrá-lo hoje mesmo em Mococa.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest font-bold text-brand-ink mb-6">O que você vai encontrar no seu Guia:</p>
              <ul className="space-y-6">
                {[
                  { title: "Técnicas de Respiração Guiada", desc: "Recupere o fôlego e acalme o coração acelerado em segundos." },
                  { title: "Identificação de Gatilhos Ocultos", desc: "Aprenda a mapear o que 'dispara' sua mente para o pior cenário." },
                  { title: "O Ciclo da Autocrítica Feminina", desc: "Entenda por que você é tão dura consigo mesma e como silenciar essa voz." },
                  { title: "Exercícios Práticos de Aterramento", desc: "Ferramentas para sair do caos mental e voltar para o presente com segurança." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 mt-1 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors shrink-0">
                      <ChevronRight className="w-3 h-3 text-brand-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-brand-ink uppercase tracking-wider mb-1">{item.title}</span>
                      <span className="text-sm opacity-70 font-light leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleDownloadClick}
                className="px-12 py-6 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/30 flex items-center justify-center gap-3 text-[10px] animate-cta-pulse"
              >
                <Download className="w-5 h-5" />
                BAIXAR MEU GUIA DE RESGATE GRATUITO
              </button>
              <Link 
                to="/metodo-e-tratamento"
                className="px-12 py-6 border border-brand-accent/20 text-brand-accent rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all flex items-center justify-center gap-3 text-[10px] animate-cta-pulse"
              >
                Saiba Mais Sobre o Método Acalme-se
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ebookTitle="Guia de Resgate: Ansiedade"
        onSuccess={() => {
          window.open('https://sites.google.com/view/reginaldo-ebook/', '_blank');
        }}
      />
    </section>
  );
};
