import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, ShieldAlert, Zap, Activity, Heart, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { AdoecimentoSilencioso } from '../../components/metodo/AdoecimentoSilencioso';
import AboutProfessional from '../../components/home/AboutProfessional';

import JourneySteps from '../../components/ui/JourneySteps';

const AnsiedadeMococaLP = () => {
  return (
    <article className="min-h-screen bg-clinic-bg-primary selection:bg-clinic-brand-primary/20 selection:text-clinic-text-primary">
      <SEO 
        title="Psicanalista em Mococa | Tratamento Especializado para Ansiedade e Depressão"
        description="Especialista em ansiedade em Mococa/SP. Tratamento profundo para ansiedade, pânico e depressão. Psicanálise humanizada para acolher o sofrimento na origem."
        keywords="psicanalista mococa, ansiedade mococa, depressão mococa, tratamento ansiedade mococa, saúde mental mococa, psicanálise mococa"
        canonical="https://www.metodoacalmese.com.br/ansiedade-mococa"
      />

      {/* HERO SECTION */}
      <div className="bg-clinic-bg-primary relative !pt-32 !pb-20 overflow-hidden">
        {/* No decorative backgrounds to avoid postimage UI artifacts */}
        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="mb-16 text-center px-6">
            <JourneySteps currentStep={1} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 text-left">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black mb-8 block">Psicanalista em Mococa</span>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-light leading-tight mb-8 text-clinic-text-primary">
                Até quando você vai carregar o mundo nas costas<br />
                <span className="italic font-light text-rose">enquanto sua mente grita por socorro?</span>
              </h1>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed font-light text-clinic-text-secondary">
                <p className="text-xl italic font-serif text-clinic-text-primary/80">
                  "Viver em Mococa com a mente acelerada e o corpo em alerta constante não é vida. É sobrevivência."
                </p>
                <div className="space-y-4">
                  <p>
                    Se você busca por um <strong>psicanalista especializado em ansiedade</strong>, preste atenção aos sinais que seu corpo está enviando:
                  </p>
                  <p className="text-clinic-text-primary font-bold italic border-l-2 border-clinic-text-rose pl-6 mt-6">
                    Isso não é drama. Isso é esgotamento emocional.
                  </p>
                </div>
              </div>

              <div className="pt-12">
                <button 
                  onClick={() => document.getElementById('realidade')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center px-12 py-6 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-clinic-brand-dark transition-all scale-105 animate-cta-pulse"
                >
                  Quero Entender Minha Ansiedade
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="relative z-30"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-clinic-brand-primary/20 border-4 border-white group bg-white relative">
                <img 
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042123/31C6BAD6-F164-41A6-9A84-E30508C3A343_e9f1bh.jpg" 
                  alt="Psicanalista em Mococa - Dr. Reginaldo Ventola" 
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-1000 group-hover:scale-110 relative z-40"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] border border-clinic-border-subtle hidden md:block z-50">
                <p className="text-clinic-text-primary font-serif italic text-lg leading-snug">
                  "A sua saúde mental é o alicerce de todas as suas conquistas."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <AboutProfessional />
      </div>

      {/* REALIDADE SECTION */}
      <div id="realidade" className="py-32 bg-clinic-bg-secondary border-t border-clinic-border-subtle relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(184,152,144,0.05)_0%,transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black">A Verdade Invisível</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-clinic-text-primary leading-tight">
                O Peso Silencioso de<br />
                <span className="italic text-rose">Quem Sempre Dá Conta</span>
              </h2>
              <p className="text-lg font-light text-clinic-text-secondary leading-relaxed">
                Você diz "está tudo bem" tantas vezes que começa a acreditar na própria mentira. Mas o peito aperta, a mente não para, e o cansaço só aumenta.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-clinic-text-rose/10 italic font-serif text-xl text-clinic-text-primary shadow-sm">
                "O Método Acalme-se ajuda a desligar esse alarme falso que não para de tocar no seu corpo."
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group bg-white">
                <img 
                  src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776953791/criativo-acalme-se-aspiration-feed_12_wefybf.png" 
                  alt="A Realidade da Ansiedade em Mococa" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Ciclo Invisível */}
          <div className="pt-12 space-y-16">
            <h3 className="text-3xl font-serif text-clinic-text-primary font-light">O Ciclo Invisível que Te Aprisiona</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  num: "01", 
                  title: "Mente Acelerada", 
                  desc: "Você tenta desligar, mas os pensamentos vêm em cascata: 'E se eu não der conta?' 'E se eu decepcionar?' 'E se tudo der errado?' São 3h da manhã e você está acordada, revirando problemas que nem existem." 
                },
                { 
                  num: "02", 
                  title: "Corpo em Alerta", 
                  desc: "Seu coração dispara sem motivo. Sua respiração fica curta. Você sente um nó na garganta que não passa. Seu corpo está gritando o que sua boca cala." 
                },
                { 
                  num: "03", 
                  title: "Perda de Controle", 
                  desc: "Você já não reconhece suas próprias reações: irrita-se com quem ama. Chora por coisas pequenas. Sente que está enlouquecendo e não conta para ninguém." 
                }
              ].map((card, i) => (
                <div key={i} className="p-10 bg-white border border-clinic-border-subtle rounded-2xl text-left shadow-xl shadow-clinic-brand-primary/5 transition-all group hover:-translate-y-2 duration-500">
                  <span className="text-4xl font-serif italic text-clinic-text-rose/40 group-hover:text-clinic-text-rose transition-colors duration-500 block mb-6">{card.num}</span>
                  <h4 className="text-xl font-serif text-clinic-text-primary mb-4">{card.title}</h4>
                  <p className="text-sm font-light text-clinic-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NOVO: Destaque de Convicção e Leveza */}
          {/* NOVO: Destaque de Convicção e Leveza */}
          <section className="bg-clinic-bg-secondary py-24 px-6 md:px-12 my-24 overflow-hidden rounded-[3rem]">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* TEXTO */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <blockquote className="font-serif text-3xl md:text-5xl italic text-clinic-text-primary leading-tight m-0">
                  "A ansiedade não define quem você é, ela mostra que sua mente está presa em um padrão que pode ser mudado."
                </blockquote>
              </motion.div>
              
              {/* IMAGEM */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776954021/criativo-acalme-se-aspiration-feed_17_pxavwq.png" 
                  alt="A ansiedade não define quem você é" 
                  className="w-full rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </section>
          
          {/* VIDEO SECTION - RESTORING VIDEO */}
          <section className="py-24 bg-white rounded-[3rem] my-24">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-ink leading-tight">
                  Tratamento de Ansiedade em Mococa
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-brand-ink/70 font-light leading-relaxed">
                  Dr. Reginaldo Ventola oferece em Mococa/SP um atendimento que une a profundidade da psicanálise com técnicas integrativas modernas, proporcionando um resgate emocional completo. Assista ao vídeo abaixo para entender como funciona.
                </p>
              </div>
              
              <div className="relative aspect-video bg-brand-ink rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-brand-ink/5">
                <YouTubeEmbed 
                  videoId="R7Dk-i7vJYo" 
                  title="Apresentação Dr. Reginaldo Ventola - Método Acalme-se" 
                />
              </div>
            </div>
          </section>


          {/* NOVO: Ponto de Virada */}
          <div className="pt-24 space-y-16">
            <h3 className="text-4xl md:text-5xl font-serif text-clinic-text-primary text-center font-light">O Ponto de Virada</h3>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center text-left">
              <div className="space-y-8 text-lg font-light text-clinic-text-secondary leading-relaxed">
                <p>
                  O Método Acalme-se não é sobre "controlar" sua ansiedade. É sobre <strong>entender de onde ela vem</strong> e desligar esse alarme falso que não para de tocar.
                </p>
                <p>É sobre você voltar a:</p>
                <ul className="space-y-4">
                  {[
                    "Dormir a noite inteira sem acordar sobressaltada",
                    "Respirar fundo sem sentir o peito apertar",
                    "Olhar no espelho e se reconhecer",
                    "Viver com esse peso constante no peito"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinic-text-rose" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-serif italic text-clinic-text-primary pt-8">
                  "Você não precisa continuar assim."
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group bg-white relative z-10">
                  <img 
                    src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776940212/criativo-acalme-se-curiosity-feed_2_ki0sqh.png" 
                    alt="O Ponto de Virada - Método Acalme-se" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-20"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <a href="https://wa.me/5519992416095" className="inline-flex items-center gap-4 bg-clinic-brand-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-clinic-brand-dark transition-all shadow-xl shadow-clinic-brand-primary/30 animate-cta-pulse">
              Agendar com Psicanalista em Mococa
            </a>
          </div>
        </div>
      </div>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif text-brand-ink">Por que buscar um psicanalista em Mococa?</h2>
          <div className="prose prose-brand-ink lg:prose-xl">
            <p>
              Muitas pessoas tentam resolver a ansiedade de forma superficial, tratando apenas os sintomas. Um psicanalista ajuda a entender as causas profundas do seu sofrimento, proporcionando uma mudança real e duradoura.
            </p>
            <p>
              O Método Acalme-se, desenvolvido pelo Dr. Reginaldo Ventola, une a psicanálise clinical com outras técnicas integrativas para oferecer um cuidado completo para a sua saúde mental.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-6 bg-brand-paper relative">
        <div className="max-w-7xl mx-auto">
          {/* Action Call */}
          <div className="mt-32 p-12 lg:p-20 bg-brand-ink text-brand-paper rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-accent/5 -z-0" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto leading-tight">Chegou o momento de interromper <br/><span className="italic font-light text-brand-accent">este ciclo em Mococa.</span></h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Link to="/agendar" className="px-12 py-6 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-accent/40 animate-cta-pulse">
                    Agendar minha Sessão
                  </Link>
                  <a href={`https://wa.me/5519992416095`} className="px-12 py-6 border-2 border-brand-paper/20 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-paper hover:text-brand-ink transition-all animate-cta-pulse">
                    Falar via WhatsApp
                  </a>
                </div>
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">Resgate sua Essência com o Método Acalme-se</p>
             </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AnsiedadeMococaLP;
