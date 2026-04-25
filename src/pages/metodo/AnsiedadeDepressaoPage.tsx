import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import { AdoecimentoSilencioso } from '../../components/metodo/AdoecimentoSilencioso';

const AnsiedadeDepressaoPage = () => {
  return (
    <section className="min-h-screen bg-brand-paper">
      <SEO 
        title="Ansiedade e Depressão em Mococa | Método Acalme-se"
        description="Recupere seu brilho. Tratamento para mulheres com ansiedade e depressão em Mococa/SP. Saia do ciclo de esgotamento emocional com ajuda especializada."
        canonical="https://www.metodoacalmese.com.br/ansiedade-e-depressao"
        keywords="ansiedade depressao mococa, psicanalista mococa, esgotamento emocional mococa, neurociência ansiedade"
      />
      
      {/* Hero Section */}
      <div className="section--dark !pt-32 !pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
             <div className="divider !w-8 !my-0" />
             <span className="heading-label !text-rose !mb-0">Transformação em Mococa</span>
             <div className="divider !w-8 !my-0" />
          </div>
          <h1 className="text-4xl md:text-7xl font-serif leading-tight">
            Ansiedade e Depressão <br />
            <span className="italic font-light text-rose">em Mococa</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8 text-2xl text-clinic-text-primary font-light leading-relaxed">
              <p>
                Se você busca por um <strong className="text-brand-accent font-bold">psicanalista em Mococa</strong>, já percebeu que não é "apenas ansiedade".
              </p>
              <div className="p-10 bg-brand-paper/50 rounded-[2.5rem] border-l-8 border-brand-accent italic text-3xl font-serif text-brand-ink shadow-sm">
                "Existe um <span className="text-brand-accent font-bold">desgaste emocional profundo</span> acontecendo."
              </div>
              <p>
                A ansiedade constante sobrecarrega sua mente e corpo. Com o tempo, isso leva ao esgotamento emocional e pode evoluir para quadros depressivos.
              </p>
              <div className="flex items-center gap-5 py-6">
                <span className="text-4xl">💜</span>
                <p className="font-bold text-brand-ink text-2xl">Você não precisa carregar esse peso sozinha.</p>
              </div>
              <p className="text-xl">
                O acompanhamento especializado com um psicanalista em Mococa é fundamental para recuperar sua qualidade de vida através do <strong className="text-brand-ink font-bold font-serif underline decoration-brand-accent/30 decoration-4 underline-offset-8">Método Acalme-se</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Atendimento humanizado e sem julgamentos",
                "Método clínico baseado em evidências",
                "Foco em causas emocionais, não apenas sintomas",
                "Suporte contínuo durante sua jornada"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-8 bg-white rounded-3xl border border-brand-ink/5 shadow-sm group hover:border-brand-accent/30 transition-all">
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-clinic-text-muted">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="section--dark rounded-[3rem] relative overflow-hidden">
               <div className="relative z-10 space-y-6">
                 <h3 className="heading-label !text-rose !mb-6">O Próximo Passo</h3>
                 <p className="text-2xl font-serif italic italic leading-snug">
                   "Viver em um estado de alerta constante gasta a mesma energia de uma maratona mental diária. Vamos aprender a descansar de verdade?"
                 </p>
                 <Link 
                   to="/sintomas-de-ansiedade" 
                   className="inline-flex items-center gap-4 text-rose font-black uppercase tracking-[0.3em] text-[10px] hover:translate-x-2 transition-transform group"
                 >
                   <span>Entenda como sair do modo de sobrevivência</span>
                   <div className="w-10 h-px bg-brand-accent group-hover:w-16 transition-all" />
                 </Link>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042123/31C6BAD6-F164-41A6-9A84-E30508C3A343_e9f1bh.jpg" 
                alt="Dr. Reginaldo Ventola - Psicanalista em Mococa"
                className="w-full h-full object-cover object-[center_top] transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
            </div>
            <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest font-black text-clinic-text-muted">
              <MapPin className="w-3 h-3" />
              Mococa/SP ou Online para todo o Brasil
            </div>
          </div>
        </div>
      </div>
      
      {/* VIDEO SECTION - ADDED AS REQUESTED */}
      <section className="bg-white py-24 px-6 border-t border-brand-ink/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink">
              Entenda o <span className="italic text-brand-accent">Mecanismo do Medo</span>
            </h2>
            <p className="text-xl text-brand-ink/70 font-light max-w-2xl mx-auto">
              Assista ao vídeo onde Dr. Reginaldo Ventola explica como sua mente entra em estado de alerta e como o Método Acalme-se pode te ajudar.
            </p>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-brand-ink">
            <YouTubeEmbed 
              videoId="R7Dk-i7vJYo" 
              title="Entenda a Ansiedade - Dr. Reginaldo Ventola" 
            />
          </div>
        </div>
      </section>

      <AdoecimentoSilencioso />
    </section>
  );
};

export default AnsiedadeDepressaoPage;
