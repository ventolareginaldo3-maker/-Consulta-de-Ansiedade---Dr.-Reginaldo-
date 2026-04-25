import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { AdoecimentoSilencioso } from '../../components/metodo/AdoecimentoSilencioso';
import AboutProfessional from '../../components/home/AboutProfessional';

import JourneySteps from '../../components/ui/JourneySteps';

const AnsiedadeMococaSEOPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Dr. Reginaldo Ventola - Psicanalista em Mococa",
    "description": "Atendimento psicanalítico especializado em ansiedade e depressão para mulheres em Mococa/SP",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua XV de Novembro, 268, Sala 10",
      "addressLocality": "Mococa",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "telephone": "+5519992416095",
    "areaServed": "Mococa",
    "medicalSpecialty": "Psychoanalysis"
  };

  return (
    <main className="min-h-screen bg-clinic-bg-primary selection:bg-clinic-brand-primary/20 selection:text-clinic-text-primary">
      <Helmet>
        <title>Atendimento com Psicanalista para Ansiedade em Mococa | Dr. Reginaldo</title>
        <meta name="description" content="Psicanalista em Mococa especializado em ansiedade e suporte à redução de medicação (com orientação médica). Recupere sua paz interior." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

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
                  "Você acorda cansada. Trabalha no automático. Sorri por fora. Mas por dentro, sente que está desmoronando."
                </p>
                <div className="space-y-4">
                  <p>
                    Se você vive em Mococa e sente que <strong>nunca é o suficiente</strong> nem para os outros, nem para si mesma, preste atenção aos sinais que seu corpo está enviando:
                  </p>
                  <p className="text-clinic-text-primary font-bold italic border-l-2 border-clinic-text-rose pl-6">
                    Isso não é drama. Isso é esgotamento emocional.
                  </p>
                </div>
              </div>

              <div className="pt-12">
                <button 
                  onClick={() => document.getElementById('realidade')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center px-12 py-6 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-clinic-brand-dark transition-all scale-105 animate-cta-pulse shimmer-effect"
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
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] border border-clinic-border-subtle hidden md:block z-50">
                <p className="text-clinic-text-primary font-serif italic text-lg leading-snug">
                  "Você não precisa carregar o mundo sozinha."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
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
                  alt="A Realidade da Ansiedade" 
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
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <a href="https://wa.me/5519992416095" className="inline-flex items-center gap-4 bg-clinic-brand-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-clinic-brand-dark transition-all animate-cta-pulse">
              Falar com Especialista em Mococa
            </a>
          </div>
        </div>
      </div>

      {/* METODOLOGIA - PREMIUM STYLED */}
      <section id="metodo" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black mb-6 block">Metodologia Exclusiva</span>
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-text-primary leading-tight">Um caminho estruturado para sua liberdade emocional em Mococa</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Descoberta Profunda", desc: "Identificamos os gatilhos e padrões que mantêm sua ansiedade ativa." },
              { num: "02", title: "Regulação Imediata", desc: "Técnicas práticas para acalmar o sistema nervoso em momentos de crise." },
              { num: "03", title: "Reprogramação Mental", desc: "Mudança profunda na forma como sua mente interpreta o medo." },
              { num: "04", title: "Consolidação da Paz", desc: "Ferramentas para manter o equilíbrio a longo prazo." }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-clinic-bg-secondary rounded-3xl border border-clinic-border-subtle shadow-sm hover:shadow-xl transition-all group">
                <span className="text-3xl font-serif italic text-clinic-brand-primary/40 group-hover:text-clinic-brand-primary block mb-6 transition-colors">{step.num}</span>
                <h4 className="text-xl font-serif text-clinic-text-primary mb-4">{step.title}</h4>
                <p className="text-sm font-light text-clinic-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/metodo-e-tratamento" className="inline-flex px-10 py-5 border-2 border-clinic-brand-primary text-clinic-brand-primary rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-clinic-brand-primary hover:text-white transition-all animate-cta-pulse">
              Conhecer o Método em Detalhes
            </Link>
          </div>
        </div>
      </section>

      {/* PONTE 11 */}
      <div className="bridge">Essa estrutura já transformou a rotina de centenas de mulheres em Mococa.</div>

      {/* DEPOIMENTOS - PREMIUM STYLED */}
      <section id="depoimentos" className="py-24 bg-clinic-bg-primary px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-text-primary italic">Vidas Transformadas em Mococa</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { text: "Eu achava que viver com medo era o meu 'normal'. No Método Acalme-se, entendi que a minha ansiedade era um pedido de ajuda da minha história. Hoje, as crises pararam.", author: "Beatriz G., Paciente em Mococa" },
              { text: "Dr. Reginaldo não olha apenas para o sintoma, ele olha para a gente. Hoje me sinto segura para sair de casa.", author: "Fernanda L., Mococa/SP" }
            ].map((dep, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-clinic-brand-primary/5 border border-clinic-border-subtle italic relative">
                <span className="absolute top-6 left-6 text-6xl text-clinic-brand-primary/10 font-serif">"</span>
                <p className="text-lg text-clinic-text-secondary leading-relaxed mb-6 relative z-10">{dep.text}</p>
                <cite className="block font-bold text-clinic-text-primary not-italic text-sm uppercase tracking-widest">— {dep.author}</cite>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/depoimentos" className="text-clinic-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] hover:tracking-[0.4em] transition-all">Ver mais depoimentos reais</Link>
          </div>
        </div>
      </section>

      {/* PONTE 12 */}
      <div className="bg-white py-12 px-6 text-center border-y border-clinic-border-subtle">
        <p className="text-clinic-text-primary text-lg md:text-xl font-serif italic font-light">Essas histórias poderiam ser a sua. <span className="text-rose font-bold">E podem ser:</span> a partir de uma decisão.</p>
      </div>

      {/* CTA FINAL - PREMIUM STYLED */}
      <section id="cta-final" className="py-24 bg-clinic-bg-dark text-white px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-clinic-brand-primary/5 opacity-50 -z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-clinic-brand-primary font-black">Próximo Passo</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">O limite do seu cansaço termina onde sua <span className="italic text-clinic-brand-primary">decisão começa.</span></h2>
          <p className="text-xl font-light opacity-80 leading-relaxed">A transformação que você busca começa com um único passo hoje. Não espere o colapso para buscar seu resgate.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="https://wa.me/5519992416095?text=Quero%20agendar%20avaliação" className="px-12 py-6 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:scale-105 transition-all animate-cta-pulse">Agendar Avaliação Agora</a>
            <a href="#metodo" className="px-12 py-6 border border-white/20 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all">Ver Como Funciona</a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-12 opacity-60">
            <span className="text-[9px] uppercase tracking-widest font-black">+500 Vidas Transformadas</span>
            <span className="text-[9px] uppercase tracking-widest font-black">100% Acolhimento</span>
            <span className="text-[9px] uppercase tracking-widest font-black">Presencial em Mococa ou Online</span>
          </div>
        </div>
      </section>

      {/* LINKS RELACIONADOS - STYLED */}
      <section className="py-16 bg-clinic-bg-secondary px-6 border-t border-clinic-border-subtle">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-black text-clinic-text-muted mb-8">Conteúdos Complementares:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/ansiedade-e-depressao" className="p-6 bg-white rounded-2xl border border-clinic-border-subtle hover:border-clinic-brand-primary transition-colors flex items-center gap-4 group">
              <span className="w-2 h-2 rounded-full bg-clinic-brand-primary" />
              <span className="text-sm font-bold text-clinic-text-primary group-hover:text-clinic-brand-primary transition-colors">Conexão entre ansiedade e depressão</span>
            </Link>
            <Link to="/sinais-depressao-mulheres" className="p-6 bg-white rounded-2xl border border-clinic-border-subtle hover:border-clinic-brand-primary transition-colors flex items-center gap-4 group">
              <span className="w-2 h-2 rounded-full bg-clinic-brand-primary" />
              <span className="text-sm font-bold text-clinic-text-primary group-hover:text-clinic-brand-primary transition-colors">Sinais silenciosos da depressão feminina</span>
            </Link>
          </div>
        </div>
      </section>

      {/* E-BOOK LEAD MAGNET - PREMIUM STYLED */}
      <section id="ebook" className="py-24 bg-clinic-bg-primary px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black">Material Gratuito</span>
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-text-primary leading-tight">E-book Guia de Resgate <br /><span className="italic">5 Passos para Crises</span></h2>
            <ul className="space-y-6">
              {[
                "Técnicas de Respiração Guiada",
                "Identificação de Gatilhos Ocultos",
                "O Ciclo da Autocrítica Feminina",
                "Exercícios Práticos de Aterramento"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-clinic-text-secondary font-light">
                  <span className="w-5 h-5 bg-clinic-brand-primary/10 text-clinic-brand-primary rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-12 py-6 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl animate-cta-pulse">BAIXAR MEU GUIA GRATUITO</button>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[3rem] bg-white shadow-2xl border border-clinic-border-subtle relative overflow-hidden group">
                <img 
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042283/Guia_De_Resgate-Psiquiatra_Mococa_hhkd54.png" 
                  alt="E-book Guia de Resgate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </section>

      {/* FAQ - PREMIUM STYLED */}
      <section id="faq" className="py-32 bg-white px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-clinic-text-primary">Perguntas Comuns</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "O método substitui o tratamento médico?", a: "Não. A psicanálise atua de forma complementar ao tratamento psiquiátrico. Qualquer ajuste medicamentoso deve ser feito exclusivamente pelo seu médico." },
              { q: "O atendimento é presencial ou online?", a: "Ofereço ambas as modalidades: presencial em nosso consultório em Mococa/SP e atendimento online especializado para todo o Brasil e exterior." }
            ].map((faq, i) => (
              <details key={i} className="group bg-clinic-bg-secondary rounded-2xl border border-clinic-border-subtle overflow-hidden">
                <summary className="p-8 cursor-pointer list-none font-bold text-clinic-text-primary flex justify-between items-center bg-white transition-colors hover:bg-clinic-bg-secondary">
                  {faq.q}
                  <span className="text-clinic-brand-primary transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="p-8 pt-0 text-clinic-text-secondary leading-relaxed font-light">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO + LOCALIZAÇÃO - PREMIUM STYLED */}
      <section id="contato" className="py-32 bg-clinic-bg-primary px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-clinic-text-primary leading-tight">Agende seu horário em <br /><span className="italic text-clinic-brand-primary">Mococa</span></h2>
                <p className="text-lg text-clinic-text-secondary font-light">Atendimento psicanalítico especializado em ansiedade e suporte à redução de medicação.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-clinic-border-subtle flex items-center justify-center text-clinic-brand-primary">📍</div>
                  <div>
                    <p className="font-bold text-clinic-text-primary mb-1">Consultório Físico</p>
                    <p className="text-sm font-light text-clinic-text-secondary text-left">Rua XV de Novembro, 268, Sala 10 – Centro<br />Mococa/SP</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-clinic-border-subtle flex items-center justify-center text-clinic-brand-primary">📞</div>
                  <div>
                    <p className="font-bold text-clinic-text-primary mb-1">Telefone / WhatsApp</p>
                    <p className="text-sm font-light text-clinic-text-secondary text-left"><a href="tel:+5519992416095" className="hover:text-clinic-brand-primary transition-colors text-clinic-text-primary">(19) 99241-6095</a></p>
                  </div>
                </div>
              </div>

              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.25368545!2d-47.0047!3d-21.4658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI3JzU2LjkiUyA0N8KwMDAnMTYuOSJX!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Consultório Dr. Reginaldo em Mococa"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-clinic-border-subtle">
              <h3 className="text-2xl font-serif text-clinic-text-primary mb-8 text-center lg:text-left">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Seu nome" className="w-full p-5 bg-clinic-bg-secondary rounded-2xl border border-clinic-border-subtle focus:border-clinic-brand-primary outline-none transition-all placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" required />
                </div>
                <div>
                  <input type="email" placeholder="seu@email.com" className="w-full p-5 bg-clinic-bg-secondary rounded-2xl border border-clinic-border-subtle focus:border-clinic-brand-primary outline-none transition-all placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" required />
                </div>
                <div>
                  <textarea rows={4} placeholder="Como podemos te ajudar?" className="w-full p-5 bg-clinic-bg-secondary rounded-2xl border border-clinic-border-subtle focus:border-clinic-brand-primary outline-none transition-all resize-none placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" required></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-clinic-brand-primary text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl hover:scale-[1.02] transition-transform animate-cta-pulse">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-clinic-bg-dark text-white text-center px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6 opacity-60">
          <p className="text-sm font-serif italic text-clinic-brand-primary">Método Acalme-se por Dr. Reginaldo Ventola</p>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black space-y-2">
            <p>Dr. Reginaldo Ventola - Psicanalista em Mococa</p>
            <p>Registro SPMR 0152021/SP | Todos os direitos reservados © 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default AnsiedadeMococaSEOPage;
