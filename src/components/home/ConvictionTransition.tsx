import React from 'react';
import { motion } from 'framer-motion';

export const ConvictionTransition = () => {
  return (
    <section className="section--dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic mb-8 leading-tight">
            “A ansiedade não define quem você é, <br />
            <span className="text-rose">ela mostra que sua mente está presa em um padrão que pode ser mudado.”</span>
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-12" />
          
          <div className="space-y-8 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-12">
            <p>
              Você não precisa continuar vivendo refém desse ciclo silencioso que rouba sua paz, seu foco e sua segurança.
            </p>
            <p>
              Existe uma forma de reprogramar sua mente, regular seu corpo e finalmente sentir o que é viver com leveza, de verdade.
            </p>
          </div>

          <div className="recado-citacao bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-medium mb-6">Mas tudo começa com um passo simples:</p>
            <p className="text-2xl md:text-3xl font-serif italic text-rose mb-8 leading-tight">
              Reconhecer os sinais que mostram que sua mente ainda está presa nesse padrão.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] font-bold">Veja abaixo se você se identifica com algum deles:</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
