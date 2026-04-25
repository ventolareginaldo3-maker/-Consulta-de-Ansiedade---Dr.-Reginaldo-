import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MethodologySection = () => {
  const steps = [
    {
      title: "Descoberta Profunda",
      desc: "Identificamos os gatilhos e padrões que mantêm sua ansiedade ativa.",
      icon: "01",
      color: "bg-brand-accent/10"
    },
    {
      title: "Regulação Imediata",
      desc: "Técnicas práticas para acalmar o sistema nervoso em momentos de crise.",
      icon: "02",
      color: "bg-brand-accent/20"
    },
    {
      title: "Reprogramação Mental",
      desc: "Mudança profunda na forma como sua mente interpreta o medo e a insegurança.",
      icon: "03",
      color: "bg-brand-accent/30"
    },
    {
      title: "Consolidação da Paz",
      desc: "Ferramentas para manter o equilíbrio e a paz a longo prazo.",
      icon: "04",
      color: "bg-brand-accent/40"
    }
  ];

  return (
    <section id="metodo" className="py-20 lg:py-32 px-6 bg-brand-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent/[0.05] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8">
            <div className="h-px w-8 bg-brand-accent/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold">Metodologia</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1] lg:leading-[0.9] tracking-tighter text-brand-ink">
            Um caminho estruturado <br />
            <span className="italic font-light text-brand-accent text-3xl md:text-5xl lg:text-6xl">para sua liberdade emocional.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-brand-ink/70 font-serif italic leading-relaxed">
            O Método Acalme-se não é uma solução genérica. É um processo desenhado com carinho e técnica para quem busca resultados reais e duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all border border-brand-ink/5"
            >
              <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-brand-accent font-bold mb-6 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-brand-ink group-hover:text-brand-accent transition-colors">{step.title}</h3>
              <p className="text-brand-ink/70 leading-relaxed font-medium text-sm">{step.desc}</p>
              <div className="absolute bottom-6 left-8 w-12 h-1 bg-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 lg:mt-32 text-center">
          <Link to="/metodo-e-tratamento" className="inline-flex items-center gap-4 px-10 py-5 bg-brand-ink text-brand-paper rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest text-[10px] animate-cta-pulse">
            Conhecer o Método em Detalhes
          </Link>
        </div>
      </div>
    </section>
  );
};
