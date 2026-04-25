import React from 'react';
import { YouTubeEmbed } from '../ui/YouTubeEmbed';
import { motion } from 'framer-motion';

export const DeepPsychologicalBlock = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-brand-paper/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 text-brand-ink leading-tight">
              Muitas pessoas com ansiedade vivem um <span className="italic text-brand-accent">ciclo silencioso:</span>
            </h2>
            
            <div className="space-y-4 mb-12">
              {[
                { step: "1", text: "antecipam problemas" },
                { step: "2", text: "imaginam o pior cenário" },
                { step: "3", text: "sentem medo ou tensão" },
                { step: "4", text: "evitam algumas situações" },
                { step: "5", text: "a mente interpreta isso como confirmação de perigo" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-brand-ink/5 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-3xl font-serif text-brand-accent font-bold opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                  <p className="text-xs lg:text-sm uppercase tracking-widest leading-tight font-black text-brand-ink">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg lg:text-xl font-serif italic opacity-100 text-brand-ink font-bold">
              E o ciclo se repete. O tratamento adequado ajuda a interromper esse padrão e reconstruir a sensação de segurança interna.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776954748/Esgotamento-_burnout-Ansiedade-Mococa-Psiquiatra_qbq7f6.png" 
                alt="Ciclo silencioso da ansiedade"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-ink/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* New Video Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-serif text-brand-ink mb-4">
              Assista e entenda como interromper <span className="italic text-brand-accent">esse ciclo.</span>
            </h3>
          </div>
          <div className="relative aspect-video bg-brand-ink rounded-[2.5rem] overflow-hidden shadow-2xl">
            <YouTubeEmbed 
              videoId="R7Dk-i7vJYo" 
              title="O Ciclo Silencioso - Método Acalme-se" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
