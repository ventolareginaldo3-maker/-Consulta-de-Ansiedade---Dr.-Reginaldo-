import React from 'react';
import { motion } from 'framer-motion';

export const AnxietyExplanation = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-brand-paper/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/[0.06] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[3rem] lg:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(67,52,52,0.25)] border-2 border-brand-ink/10 bg-white group">
              <img 
                src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776954021/criativo-acalme-se-aspiration-feed_17_pxavwq.png" 
                alt="A ansiedade não define quem você é"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Box below image */}
            <div className="space-y-6">
              <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="mt-8 p-8 bg-white rounded-[2rem] border-2 border-brand-accent/10 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-accent/20" />
                <p className="text-lg lg:text-xl font-serif italic text-brand-accent leading-relaxed font-bold">
                  A coragem de olhar para dentro transforma sua busca em silêncio.
                </p>
              </motion.div>

              <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="p-8 bg-brand-accent/10 rounded-[2rem] border-2 border-brand-accent/20 text-center lg:text-left"
              >
                <p className="text-lg font-serif italic text-brand-ink font-bold leading-relaxed">
                  Você sabia que a Ansiedade  não tratada pode, com o tempo, evoluir para a depressão?
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-black">A Mente Ansiosa</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 lg:mb-12 leading-[1.1] lg:leading-[0.9] tracking-tighter text-brand-ink">
              Como funciona a <br />
              <span className="italic font-bold text-brand-accent drop-shadow-sm">mente ansiosa</span>
            </h2>
            
            <div className="space-y-8 lg:space-y-10 mb-12 lg:mb-16">
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-brand-ink font-serif italic leading-relaxed font-bold">
                  A ansiedade não define quem você é. Ela mostra que sua mente está presa em um padrão que pode ser mudado.
                </p>
                <p className="text-lg text-brand-ink/80 font-serif italic leading-relaxed">
                  E para sair desse ciclo, você precisa primeiro entender como ele funciona dentro da sua mente.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 text-left">
                {[
                  { title: "Antecipação", desc: "Prever problemas antes que eles aconteçam" },
                  { title: "Cenários", desc: "Imaginar cenários negativos repetidamente" },
                  { title: "Interpretação", desc: "Ver situações neutras como ameaça" },
                  { title: "Hipervigilância", desc: "Sentir que precisa estar sempre alerta" },
                  { title: "Esgotamento", desc: "Cansaço profundo que não passa com o sono" },
                  { title: "Ameaça", desc: "Vive o tempo todo sobre ameaça" }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-xs uppercase tracking-widest font-black text-brand-accent mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                    <p className="text-base font-bold opacity-100 leading-relaxed text-brand-ink">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3">
              {["aperto no peito", "respiração curta", "coração acelerado", "mente acelerada"].map((sintoma, i) => (
                <span key={i} className="px-4 py-2 lg:px-6 lg:py-3 bg-white rounded-full border-2 border-brand-ink/10 text-[8px] lg:text-[9px] uppercase tracking-[0.2em] font-black shadow-md opacity-100 transition-opacity text-brand-ink">
                  {sintoma}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto space-y-12">
          <div className="p-10 bg-brand-accent/10 rounded-[3rem] border-2 border-brand-accent/20 text-center">
            <p className="text-xl md:text-3xl font-serif italic text-brand-ink font-bold leading-relaxed mb-6">
              Você sabia que a Ansiedade  não tratada pode, com o tempo, evoluir para a depressão?
            </p>
            <p className="text-lg text-brand-accent uppercase tracking-widest font-black">
              E é exatamente por estes motivos que:
            </p>
          </div>

          <div className="text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-serif text-brand-ink leading-tight">
              A maioria das pessoas que sofrem de ansiedade vivem um <span className="italic text-brand-accent">ciclo silencioso</span> e:
            </h3>
            
            <p className="text-xl text-brand-ink/80 font-serif italic leading-relaxed max-w-3xl mx-auto">
              E o ciclo se repete. Mas ele não precisa definir sua história. 
              O acompanhamento adequado interrompe esse padrão e reconstrói, 
              aos poucos, a sensação de segurança interna.
            </p>

            <p className="text-2xl text-brand-ink font-serif font-bold italic">
              É dessa reconstrução que nasce o verdadeiro bem-estar.
            </p>

            <div className="p-8 bg-white rounded-[2.5rem] border border-brand-ink/5 shadow-xl">
              <p className="text-lg text-brand-ink/80 leading-relaxed">
                Em Mococa, ofereço um espaço seguro de saúde mental, 
                com escuta psicanalítica humanizada para acolher ansiedade 
                e depressão na origem.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-xl text-brand-accent font-black uppercase tracking-[0.2em] animate-pulse">
                Mas antes de tudo, você precisa entender como a relação da ansiedade com a depressão acontece, veja abaixo:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
