import React from 'react';
import { motion } from 'framer-motion';

const AboutProfessional = () => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-5"
      >
        <div className="relative aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042123/31C6BAD6-F164-41A6-9A84-E30508C3A343_e9f1bh.jpg" 
            alt="Dr. Reginaldo Ventola" 
            className="w-full h-full object-cover object-[center_top] hover:scale-105 transition-transform duration-[2000ms] ease-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7"
      >
        <div className="flex items-center gap-4 mb-6 lg:mb-8">
          <div className="h-px w-12 bg-brand-accent" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-black">O Especialista</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1] lg:leading-[0.9] tracking-tighter text-brand-ink">
          Dr. Reginaldo Ventola <br />
          <span className="italic font-light text-brand-accent">Doutor em Psicanálise</span>
        </h2>
        
        <div className="space-y-6 text-lg lg:text-xl text-brand-ink/80 leading-relaxed mb-10">
          <p className="font-bold text-brand-ink">
            Especialista no tratamento de ansiedade feminina, com mais de 15 anos de experiência clínica ajudando mulheres a recuperarem sua paz e equilíbrio.
          </p>
          <p>
            Minha missão é oferecer um suporte profundo e humanizado, utilizando o Método Acalme-se para reprogramar padrões mentais e promover uma vida com mais leveza e propósito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-brand-ink/5 shadow-sm">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2">Experiência</h4>
            <p className="text-brand-ink font-serif italic">+15 anos de prática clínica</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-brand-ink/5 shadow-sm">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2">Foco</h4>
            <p className="text-brand-ink font-serif italic">Ansiedade e Saúde Feminina</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutProfessional;
