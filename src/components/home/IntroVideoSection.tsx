import React from 'react';
import { YouTubeEmbed } from '../ui/YouTubeEmbed';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const IntroVideoSection = () => {
  // ATENÇÃO: Altere o ID do vídeo abaixo quando tiver o novo link
  // O ID é o código que aparece após "v=" no link do YouTube
  const YOUTUBE_VIDEO_ID = "3zHS8wm95sE"; 

  return (
    <section className="py-24 md:py-48 px-6 bg-clinic-bg-primary relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(184,152,144,0.05)_0%,transparent_50%)] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-clinic-brand-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-text-rose font-black">Consciência</span>
              <div className="space-y-4 text-3xl md:text-5xl text-clinic-text-primary font-serif italic leading-tight">
                <p>Você tenta relaxar.</p>
                <p>Tenta ocupar a mente.</p>
                <p>Tenta ignorar os pensamentos.</p>
              </div>
              <h2 className="text-5xl md:text-8xl text-clinic-text-primary font-serif leading-[1.1] tracking-tighter pt-6 font-light">
                Mas, em algum momento, <br /><span className="text-clinic-text-rose italic font-light">tudo volta.</span>
              </h2>
            </div>

            <div className="space-y-10 text-xl md:text-2xl text-clinic-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
              <div className="p-10 border border-clinic-border-subtle bg-white rounded-[3rem] shadow-sm">
                <p className="text-3xl font-serif text-clinic-text-primary mb-6 italic">Isso não acontece porque você é fraca.</p>
                <p>
                  O que você está vivendo é um padrão automático da mente, um ciclo invisível que mantém sua ansiedade ativa todos os dias.
                </p>
              </div>
              <p className="text-lg">
                A maioria das mulheres tenta apenas “se acalmar”, mas nunca entende o que realmente está por trás da ansiedade.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-4">
              {[
                "a ansiedade continua voltando",
                "os sintomas físicos persistem",
                "a perda de controle aumenta"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-clinic-text-rose" />
                  <p className="text-[11px] uppercase tracking-widest text-clinic-text-primary font-bold leading-tight">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-48 max-w-6xl mx-auto">
          <div className="text-center space-y-16 mb-24">
            <h2 className="text-5xl md:text-8xl font-serif text-clinic-text-primary leading-tight tracking-tighter font-light">
              O Próximo Passo <br />
              <span className="italic text-clinic-text-rose font-light">é a sua Liberdade.</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-12 text-xl text-clinic-text-secondary font-light leading-relaxed">
              <p>
                Existe um mecanismo chamado <strong className="text-clinic-text-primary font-bold">Ciclo do Medo</strong>, responsável por manter sua mente em estado constante de alerta.
              </p>
              
              <div className="space-y-6 text-lg">
                <p>Você já percebeu que, mesmo quando "está tudo bem", seu corpo continua tenso? Sua mente acelera sem motivo? Você antecipa problemas que nem aconteceu?</p>
                <p className="font-medium text-clinic-text-primary italic">Isso não é "frescura". É seu sistema de proteção funcionando em excesso.</p>
              </div>

              <div className="w-full relative aspect-video rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl group border-8 border-white bg-clinic-bg-dark mt-16 scale-110 md:scale-100">
                 <div className="absolute inset-0 bg-clinic-bg-dark/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
                 <YouTubeEmbed 
                  videoId={YOUTUBE_VIDEO_ID} 
                  title="O Próximo Passo é a Sua Liberdade - Método Acalme-se" 
                />
              </div>

              <div className="p-10 md:p-16 bg-clinic-bg-white rounded-[4rem] border border-clinic-border-subtle shadow-sm space-y-10 text-left mt-24">
                <p className="font-bold text-clinic-text-primary text-2xl font-serif italic">
                  O que acontece no Ciclo do Medo:
                </p>
                <ul className="space-y-6">
                  {[
                    "Um pensamento ameaçador surge (\"E se...?\")",
                    "Seu corpo reage como se o perigo fosse real (coração acelerado, respiração curta)",
                    "Você interpreta essa reação como \"algo está errado\"",
                    "A ansiedade aumenta, confirmando a ameaça",
                    "O ciclo se repete e se fortalece"
                  ].map((step, i) => (
                    <li key={i} className="flex gap-6 items-start text-lg">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-clinic-text-rose/10 text-clinic-text-rose flex items-center justify-center font-bold text-sm tracking-tighter">{i + 1}</span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-10 pt-16">
                <p className="italic text-clinic-text-primary text-3xl md:text-4xl font-serif">
                  Na próxima etapa, você vai <strong className="font-bold not-italic text-clinic-text-rose">enxergar esse processo com clareza</strong> e entender por que a ansiedade parece nunca ir embora.
                </p>
                <p className="text-xl">
                  Mais importante: você vai descobrir como <strong className="text-clinic-text-rose font-bold">interromper esse ciclo</strong> de forma natural, sem medicação, sem julgamentos.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 pt-20">
            <Link 
              to="/metodo-e-tratamento" 
              className="group relative inline-flex items-center justify-center px-16 py-8 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.4em] text-[10px] overflow-hidden animate-cta-pulse shimmer-effect"
            >
              <span className="relative z-10">Iniciar Minha Jornada de Alívio</span>
            </Link>
            <p className="text-[10px] uppercase tracking-widest opacity-40 font-medium text-clinic-text-muted">
              "Sem compromisso • Atendimento humanizado • Mococa/SP"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
