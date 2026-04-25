import React from 'react';
import { YouTubeEmbed } from '../ui/YouTubeEmbed';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const IdentificationBlock = () => {
  const points = [
    {
      title: "Sua mente não desacelera, mesmo quando seu corpo está cansado",
      keyword: "(pensamentos acelerados e mente ansiosa)"
    },
    {
      title: "Sensação constante de perigo ou que algo ruim vai acontecer",
      keyword: "(ansiedade antecipatória)"
    },
    {
      title: "Pressão interna para dar conta de tudo e nunca falhar",
      keyword: "(ansiedade emocional e autocobrança)"
    },
    {
      title: "Pensamentos repetitivos e dificuldade de “desligar” a mente",
      keyword: "(ruminação mental)"
    },
    {
      title: "Cansaço extremo mesmo após dormir",
      keyword: "(esgotamento emocional causado pela ansiedade)"
    },
    {
      title: "Sintomas físicos como aperto no peito, falta de ar ou taquicardia",
      keyword: "(crise de ansiedade sintomas físicos)"
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-6 bg-brand-paper/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-ink/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-black">Sinais e Sintomas</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1] lg:leading-[0.9] tracking-tighter text-brand-ink">
              Sintomas de Ansiedade: <br />
              <span className="italic font-light text-brand-accent text-3xl md:text-5xl block mt-4">Como Identificar e Tratar em Mococa</span>
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-brand-ink leading-relaxed mb-10">
              <p className="font-bold">
                Se você está buscando entender os sintomas de ansiedade e como controlar isso no dia a dia, saiba que sua mente pode estar presa em um ciclo constante de alerta, algo muito mais comum do que parece.
              </p>
              <p>
                Aqui em Mococa, muitas mulheres convivem diariamente com sintomas físicos e emocionais da ansiedade sem perceber que existe tratamento eficaz.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-[2rem] border-2 border-brand-accent/10 shadow-lg mb-8">
              <p className="italic text-brand-ink text-lg leading-relaxed mb-4">
                "A ansiedade não é um defeito, é uma resposta do seu cérebro tentando te proteger."
              </p>
              <p className="text-sm text-brand-ink/70">
                Mas quando esse mecanismo se desregula, surgem os sintomas que afetam sua saúde, sua rotina e sua qualidade de vida.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-serif mb-8 text-brand-ink text-center lg:text-left">Principais sintomas de ansiedade:</h3>
            <div className="grid sm:grid-cols-1 gap-4 lg:gap-6">
              {points.map((point, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="p-8 lg:p-10 bg-white rounded-[2rem] border border-brand-ink/10 hover:shadow-[0_40px_80px_-20px_rgba(67,52,52,0.15)] hover:border-brand-accent transition-all duration-700 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-brand-accent group-hover:h-full transition-all duration-700" />
                  
                  <div className="flex gap-6 items-start">
                    <div>
                      <p className="text-xl lg:text-2xl text-brand-ink leading-tight font-serif italic font-bold mb-2">
                        {point.title}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-brand-accent font-bold opacity-60">
                        {point.keyword}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 max-w-4xl mx-auto">
          <div className="section--dark p-10 lg:p-16 rounded-[3rem] shadow-2xl text-center overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-8">
              Assista e entenda seu mecanismo
            </h3>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
               <YouTubeEmbed 
                videoId="R7Dk-i7vJYo" 
                title="Sintomas de Ansiedade - Dr. Reginaldo Ventola" 
              />
            </div>

            <p className="text-xl lg:text-2xl font-serif italic mb-8 leading-relaxed">
              Você não precisa continuar tentando apenas suportar o que sente. Quando a ansiedade passa a controlar seus pensamentos seu corpo e sua rotina o problema deixa de ser apenas emocional e passa a afetar toda a sua vida.
            </p>
            
            <div className="space-y-6 text-lg mb-12">
              <p>
                Existe um caminho para interromper esse ciclo com mais clareza segurança e profundidade.
              </p>
              <p className="font-bold text-rose">
                Na próxima etapa você vai entender como funciona um tratamento que não age apenas no alívio momentâneo mas na raiz do padrão que mantém sua mente em estado de alerta.
              </p>
            </div>

            <Link to="/triagem" className="w-full sm:w-auto inline-flex items-center justify-center gap-6 px-10 lg:px-14 py-5 lg:py-6 bg-brand-accent text-white rounded-full font-bold hover:scale-105 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-brand-accent/30 group animate-cta-pulse">
              INICIAR MINHA TRIAGEM GRATUITA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
