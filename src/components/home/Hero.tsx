import { Link } from 'react-router-dom';
import { HelpCircle, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-clinic-bg-primary">
      <div className="absolute inset-0 magnetic-gradient -z-10" />
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 z-10 text-center lg:text-left hero-fade-in">
          {/* Tag de Orientação de Especialistas */}
          <div className="inline-flex items-center gap-2 bg-clinic-text-rose/10 px-4 py-2 rounded-full mb-6 border border-clinic-text-rose/25">
            <HelpCircle className="w-4 h-4 text-clinic-text-rose" />
            <span className="text-xs uppercase tracking-wider font-bold text-clinic-text-rose">
              Psiquiatra, Psicólogo ou Psicanalista em Mococa?
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.15] mb-6 lg:mb-8 text-clinic-text-primary font-light">
            Mulheres de Mococa: até quando a <br />
            <span className="italic text-clinic-text-rose font-light">ansiedade vai controlar sua vida?</span>
          </h1>

          <div className="max-w-2xl mx-auto lg:mx-0 space-y-6 text-clinic-text-secondary leading-relaxed font-light text-base md:text-lg">
            <p>
              Se você procura por um <strong>psiquiatra, psicólogo ou psicanalista em Mococa</strong>, provavelmente a ansiedade já começou a afetar seu sono, sua rotina, suas emoções ou sua qualidade de vida.
            </p>
            
            <p className="text-sm md:text-base text-clinic-text-secondary/95">
              Muitas mulheres vivem tentando parecer fortes, produtivas e no controle, mas por dentro enfrentam mente acelerada, cansaço emocional, culpa ao descansar, insônia, irritação e a sensação de estar sempre no limite.
            </p>

            <div className="grid md:grid-cols-3 gap-4 py-2 text-xs border-t border-b border-clinic-border-subtle/60 text-left">
              <div>
                <strong className="text-clinic-text-primary font-bold block mb-1">O Psiquiatra</strong>
                <span className="text-clinic-text-muted">Estabiliza sintomas físicos intensos com medicação, sob orientação médica.</span>
              </div>
              <div>
                <strong className="text-clinic-text-primary font-bold block mb-1">O Psicólogo</strong>
                <span className="text-clinic-text-muted">Trabalha com técnicas terapêuticas para pensamentos e comportamentos.</span>
              </div>
              <div>
                <strong className="text-clinic-text-primary font-bold block mb-1">O Psicanalista</strong>
                <span className="text-clinic-text-muted">Investiga a raiz inconsciente, desarmando repetições de sofrimento.</span>
              </div>
            </div>

            <p className="text-sm md:text-base bg-white/60 p-5 rounded-2xl border border-clinic-border-subtle/40 shadow-sm text-left">
              No Método Acalme-se, <strong>Dr. Reginaldo Vêntola</strong> oferece um atendimento psicanalítico integrativo em Mococa/SP, unindo escuta profunda, hipnoterapia clínica e naturopatia para mulheres que desejam compreender a origem da ansiedade e reconstruir uma vida com mais equilíbrio, presença e segurança emocional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
              <Link to="/triagem" className="px-10 py-5 bg-clinic-brand-primary text-clinic-text-light rounded-full font-bold uppercase tracking-widest hover:bg-clinic-brand-dark transition-all shadow-xl text-center animate-cta-pulse text-xs">
                Quero Iniciar Triagem Grátis
              </Link>
              <Link to="/agendar" className="px-10 py-5 border border-clinic-brand-primary text-clinic-brand-primary rounded-full font-bold uppercase tracking-widest hover:bg-clinic-brand-primary hover:text-white transition-all text-center text-xs">
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>

        {/* Imagem do lado direito com badge */}
        <div className="lg:col-span-5 relative hero-fade-in-delayed">
          <div className="relative aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://res.cloudinary.com/djl7c37my/image/upload/f_auto,q_auto,w_480/v1781979991/Ansiedade_sintomas_Psiquiatra_Mococa_gp3siy.png"
              alt="Mulher deitada refletindo - Tratamento de Ansiedade em Mococa"
              className="w-full h-full object-cover object-[center_top]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="480"
              height="600"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-6 lg:p-8 rounded-3xl shadow-2xl border border-clinic-border-subtle max-w-[200px] lg:max-w-[240px]">
            <p className="text-3xl lg:text-4xl font-serif text-clinic-text-rose mb-1">2.5k+</p>
            <p className="text-xs uppercase tracking-widest font-bold text-clinic-text-muted leading-tight">Mulheres que recuperaram a paz interior em Mococa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

