import React from 'react';
import { Link } from 'react-router-dom';
import { Grid3X3, Waves, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ClinicalContextSection = () => {
  return (
    <section className="bg-[#EDE7E0] py-24 lg:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block font-sans text-[0.68rem] tracking-[0.4em] uppercase text-[#B89890] mb-8 font-semibold"
          >
            Reconhecimento Clínico
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-[#3D3630] font-light leading-[1.1] mb-12"
          >
            Sinais do Modo de Sobrevivência
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-2xl text-[#5C534D]/90 line-height-[1.7] italic max-w-2xl mx-auto"
          >
            "Viver em alerta constante não é a sua natureza. É um mecanismo de defesa que começou a consumir a própria energia que deveria usar para viver."
          </motion.p>
        </div>

        {/* Arquitetura de Caixas (O design "equal as before" mas mais elegante) */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          
          {/* Caixa 1: Custo Oculto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/60 backdrop-blur-sm border border-[#B89890]/20 rounded-[2.5rem] shadow-[0_10px_40px_rgba(61,54,48,0.03)] hover:shadow-[0_20px_60px_rgba(61,54,48,0.06)] hover:bg-white transition-all duration-700 flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#B89890]/10 flex items-center justify-center mb-8 group-hover:bg-[#B89890]/20 transition-colors">
              <User className="w-5 h-5 text-[#B89890] stroke-[1.5px]" />
            </div>
            <h3 className="font-sans text-[0.85rem] font-bold tracking-[0.2em] uppercase text-[#3D3630] mb-6">O Custo Biológico</h3>
            <p className="font-sans text-[1.02rem] text-[#5C534D] leading-[1.9] font-light">
              A exaustão que você sente não é preguiça. É o custo emocional de carregar um peso invisível. A estrutura que sustenta esse ciclo pode ser redesenhada.
            </p>
          </motion.div>

          {/* Caixa 2: Recuo Silencioso */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-12 bg-white/60 backdrop-blur-sm border border-[#B89890]/20 rounded-[2.5rem] shadow-[0_10px_40px_rgba(61,54,48,0.03)] hover:shadow-[0_20px_60px_rgba(61,54,48,0.06)] hover:bg-white transition-all duration-700 flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#B89890]/10 flex items-center justify-center mb-8 group-hover:bg-[#B89890]/20 transition-colors">
              <Grid3X3 className="w-5 h-5 text-[#B89890] stroke-[1.5px]" />
            </div>
            <h3 className="font-sans text-[0.85rem] font-bold tracking-[0.2em] uppercase text-[#3D3630] mb-6">O Recuo Silencioso</h3>
            <p className="font-sans text-[1.02rem] text-[#5C534D] leading-[1.9] font-light">
              A ansiedade age por contração. Primeiro, você evita certos lugares. Depois, situações sociais. O medo te convence a aceitar um território cada vez menor.
            </p>
          </motion.div>

          {/* Caixa 3: Ruído Mental */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 bg-white/60 backdrop-blur-sm border border-[#B89890]/20 rounded-[2.5rem] shadow-[0_10px_40px_rgba(61,54,48,0.03)] hover:shadow-[0_20px_60px_rgba(61,54,48,0.06)] hover:bg-white transition-all duration-700 flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#B89890]/10 flex items-center justify-center mb-8 group-hover:bg-[#B89890]/20 transition-colors">
              <Waves className="w-5 h-5 text-[#B89890] stroke-[1.5px]" />
            </div>
            <h3 className="font-sans text-[0.85rem] font-bold tracking-[0.2em] uppercase text-[#3D3630] mb-6">O Ruído Constante</h3>
            <p className="font-sans text-[1.02rem] text-[#5C534D] leading-[1.9] font-light">
              Hipervigilância e cenários catastróficos em loop. Tentar se acalmar pela força de vontade não resolve porque o seu sistema foi programado para não desligar.
            </p>
          </motion.div>

        </div>

        {/* Rodapé da Seção */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 pt-12 border-t border-[#B89890]/20"
          >
            <p className="font-serif text-xl md:text-2xl text-[#3D3630] leading-[1.7] mb-0 mb-8 italic">
              Compreender esse padrão é o primeiro ato de liberdade. <br />
              O próximo passo é aprender a desligar o alarme que não para de tocar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B89890] mb-6">
              Buscando Psiquiatra em Mococa? Comece pela Triagem Clínica Gratuita.
            </p>
            <Link 
              to="/triagem"
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden shadow-2xl transition-all animate-cta-pulse hover:bg-clinic-brand-dark"
            >
              <span className="relative z-10">Iniciar Minha Triagem Gratuita</span>
              <ArrowRight className="relative z-10 ml-3 w-4 h-4 stroke-[2px]" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
