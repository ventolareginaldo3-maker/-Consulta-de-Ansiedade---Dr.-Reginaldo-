import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-clinic-bg-primary">
      <div className="absolute inset-0 magnetic-gradient -z-10" />
      
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-clinic-text-rose/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-clinic-brand-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 z-10 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7l font-serif leading-[1.15] mb-8 lg:mb-10 text-clinic-text-primary font-light">
            Mulheres de Mococa: até quando a <br />
            <span className="italic text-clinic-text-rose font-light">ansiedade vai controlar sua vida?</span>
          </h1>
          
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="text-xl md:text-2xl font-serif italic text-clinic-text-secondary mb-8 lg:mb-10 leading-relaxed font-light">
              Se você busca por um <strong className="text-clinic-text-rose font-medium">psicanalista em Mococa</strong> ou acompanhamento especializado para ansiedade, entenda: existe um motivo real por trás do que você sente, e não é falta de controle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-10 lg:mb-12">
              {[
                "Carga mental excessiva",
                "Perfeccionismo paralisante",
                "Esgotamento emocional",
                "Insônia e pensamentos vãos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-clinic-text-muted">
                  <div className="w-1 h-1 bg-clinic-text-rose rounded-full" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Link 
                to="/triagem" 
                className="px-10 py-5 bg-clinic-brand-primary text-clinic-text-light rounded-full font-bold uppercase tracking-widest hover:bg-clinic-brand-dark transition-all shadow-xl shadow-clinic-brand-primary/20 hover:shadow-clinic-brand-dark/30 text-center animate-cta-pulse shimmer-effect"
              >
                Quero Iniciar Triagem Grátis
              </Link>
              <Link 
                to="/agendar" 
                className="px-10 py-5 border border-clinic-brand-primary text-clinic-brand-primary rounded-full font-bold uppercase tracking-widest hover:bg-clinic-brand-primary hover:text-white transition-all text-center animate-cta-pulse"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://res.cloudinary.com/djl7c37my/image/upload/v1777041959/Psiquiatra_Mococa_j0pzl6.png" 
              alt="Dr. Reginaldo Ventola - Psicanalista em Mococa" 
              className="w-full h-full object-cover object-[center_top] hover:scale-105 transition-transform duration-[2000ms] ease-out"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinic-bg-dark/10 via-transparent to-transparent" />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-6 lg:p-8 rounded-3xl shadow-2xl border border-clinic-border-subtle max-w-[200px] lg:max-w-[240px]"
          >
            <p className="text-3xl lg:text-4xl font-serif text-clinic-text-rose mb-1">2.5k+</p>
            <p className="text-xs uppercase tracking-widest font-bold text-clinic-text-muted leading-tight">Mulheres que recuperaram a paz interior</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
