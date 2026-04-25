import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
};

export const MainCTASection = () => {
  return (
    <section className="section--dark">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/[0.05] -z-0" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8 lg:mb-12">
          <div className="h-px w-12 bg-brand-accent" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-black">Próximo Passo</span>
        </div>
        
        <motion.h2 
          initial={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 lg:mb-16 leading-[1.1] lg:leading-[0.9] tracking-tighter"
        >
          O limite do seu cansaço <br />
          <span className="italic font-light text-brand-accent">termina onde sua decisão começa.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          className="space-y-8 text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-16 lg:mb-24"
        >
          <p>
            Não espere que a ansiedade se torne insuportável para buscar o seu resgate. O esgotamento emocional não é falta de força, é um sinal de que seu sistema está operando no limite há tempo demais.
          </p>
          <p>
            Quanto mais tempo você sobrevive nesse ciclo de alerta, mais profundas se tornam as raízes do medo. Mas a boa notícia é que você não precisa mais sair disso sozinha.
          </p>
          <p className="font-bold text-brand-accent italic">
            A transformação que você busca, aquela noite de sono tranquila, o fim do aperto no peito e a volta do seu brilho, começa com um único passo hoje.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          className="mb-20 lg:mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Sua Vida Merece um Novo Desenho</h3>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-light">
            Não permita que o "depois" se torne o seu "nunca". O Método Acalme-se está pronto para ser a estrutura de segurança que você perdeu pelo caminho.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
            <Link to="/agendar" className="w-full sm:w-auto px-10 lg:px-14 py-5 lg:py-6 bg-brand-accent text-white rounded-full font-bold hover:scale-105 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-brand-accent/30 animate-cta-pulse">
              Agendar Avaliação Agora
            </Link>
            <Link to="/metodo-e-tratamento" className="w-full sm:w-auto px-10 lg:px-14 py-5 lg:py-6 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-[10px] backdrop-blur-sm animate-cta-pulse">
              Ver Como Funciona
            </Link>
          </div>
        </motion.div>
        
        <div className="mt-16 lg:mt-24 flex flex-wrap justify-center gap-8 lg:gap-16">
          <div className="text-center">
            <p className="text-4xl lg:text-6xl font-serif mb-2 text-brand-accent">
              +<Counter value={500} />
            </p>
            <p className="text-[10px] uppercase tracking-widest font-black">Vidas Reescritas e Transformadas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-6xl font-serif mb-2 text-brand-accent">
              <Counter value={100} suffix="%" />
            </p>
            <p className="text-[10px] uppercase tracking-widest font-black">Acolhimento e Foco na Sua História</p>
          </div>
        </div>

        <div className="mt-12 text-center text-white/80">
          <p className="text-sm uppercase tracking-[0.3em] font-bold">Presencial em Mococa ou Atendimento Online Especializado</p>
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-xl lg:text-2xl font-serif italic leading-relaxed text-brand-paper/90 mb-12">
            Você passou tempo demais tentando carregar o mundo nas costas enquanto sua mente gritava por socorro. Chegou a hora de parar de apenas "sobreviver" aos seus dias e começar a gerenciar suas emoções.
          </p>
        </div>

        <div className="mt-20 pt-20 border-t border-white/10 w-full">
          <div className="max-w-6xl mx-auto mb-24 px-4 md:px-0">
            <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] border border-white/10 bg-brand-ink/40 items-stretch">
              {/* IMAGEM DO PROFISSIONAL */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block min-h-[600px]"
              >
                <div className="h-full w-full relative">
                  <img 
                    src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042123/31C6BAD6-F164-41A6-9A84-E30508C3A343_e9f1bh.jpg" 
                    alt="Dr. Reginaldo Ventola" 
                    className="absolute inset-0 w-full h-full object-cover object-[center_top] grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-ink/20" />
                </div>
              </motion.div>

              {/* CONTEÚDO DO RECADO */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center p-10 lg:p-20 relative"
              >
                <div className="absolute top-0 left-0 w-2 h-20 bg-brand-accent/30 hidden lg:block" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-8 bg-brand-accent" />
                    <span className="text-brand-accent text-[10px] uppercase tracking-[0.5em] font-black">Nota do Fundador</span>
                  </div>
                  
                  <div className="text-2xl lg:text-3xl font-serif italic leading-[1.6] text-white/95 space-y-10">
                    <p className="relative">
                      <span className="absolute -left-8 -top-4 text-6xl text-brand-accent/20 font-serif leading-none">"</span>
                      Se você chegou até aqui, sua mente já compreendeu que não é mais possível sustentar esse ciclo sozinha. Como seu Agente de Transformação, eu não olho apenas para os seus sintomas; eu analiso a estrutura profunda da sua dor.
                    </p>
                    <p>
                      O que você encontrará a seguir não é uma teoria reconfortante, mas uma prática clínica deliberada. Projetamos cada etapa para que a sua compreensão se transforme em mudança real. A estrutura para sua liberdade emocional está pronta. O próximo passo é o início do seu retorno para si mesma.
                      <span className="inline-block text-6xl text-brand-accent/20 font-serif leading-none translate-y-4 ml-2">"</span>
                    </p>
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-start gap-4">
                    <div className="text-brand-accent font-serif text-2xl italic">Dr. Reginaldo Ventola</div>
                    <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Psicanalista & Especialista em Ansiedade</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="text-center pb-10">
            <Link 
              to="/agendar" 
              className="inline-block w-full sm:w-auto px-10 lg:px-14 py-5 lg:py-6 bg-brand-accent text-white rounded-full font-bold hover:scale-105 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-brand-accent/30 mb-8 animate-cta-pulse"
            >
              SIM, QUERO INICIAR MINHA TRANSFORMAÇÃO AGORA
            </Link>
            <p className="text-[10px] uppercase tracking-widest opacity-40 font-medium max-w-xs mx-auto lg:max-w-none">
              Atendimento Ético, Sigiloso e Humanizado | Registro SPMR 0152021/SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
