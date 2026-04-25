import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SEO from '../../components/SEO';
import JourneySteps from '../../components/ui/JourneySteps';
import { CONTACT_INFO } from '../../constants';
import { AdoecimentoSilencioso } from '../../components/metodo/AdoecimentoSilencioso';

import AboutProfessional from '../../components/home/AboutProfessional';

const MetodoAcalmesePage = () => {
  return (
    <section className="min-h-screen bg-white">
      <SEO 
        title="Método Acalme-se Mococa | Psicanálise, Hipnoterapia e Naturopatia"
        description="Tratamento para ansiedade em Mococa com Psicanálise e Hipnoterapia. Uma abordagem profunda que complementa e potencializa resultados de quem busca psiquiatra em Mococa."
        canonical="https://www.metodoacalmese.com.br/metodo-e-tratamento"
        keywords="psiquiatra mococa, psiquiatria mococa, psicólogo mococa, psicanálise mococa, tratamento ansiedade mococa, hipnoterapia mococa, método acalme-se"
      />

      {/* NOVO: SEO CAPTURE SECTION FOR PSIQUIATRA SEARCHERS */}
      <div className="bg-clinic-brand-primary/5 py-4 px-6 text-center border-b border-clinic-brand-primary/10">
        <p className="text-[11px] md:text-xs uppercase tracking-widest text-clinic-brand-primary font-bold">
          Buscando por Psiquiatra em Mococa? <span className="font-normal opacity-70 ml-2">Conheça a abordagem que trata a causa profunda onde a medicação sozinha não alcança.</span>
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="bg-clinic-bg-primary relative !pt-32 !pb-20 overflow-hidden">
        {/* No decorative backgrounds to avoid postimage UI artifacts */}
        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="mb-16 text-center px-6">
            <JourneySteps currentStep={1} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black mb-8 block">Para Mulheres de Mococa</span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8 text-clinic-text-primary">
                Até quando você vai carregar o mundo nas costas<br />
                <span className="italic font-light text-rose">enquanto sua mente grita por socorro?</span>
              </h1>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed font-light text-clinic-text-secondary">
                <p className="text-xl italic font-serif text-clinic-text-primary/80">
                  "Você acorda cansada. Trabalha no automático. Sorri por fora. Mas por dentro, sente que está desmoronando."
                </p>
                <div className="space-y-4">
                  <p>
                    Se você vive em Mococa e sente que <strong>nunca é o suficiente</strong> nem para os outros, nem para si mesma, preste atenção aos sinais que seu corpo está enviando.
                  </p>
                  <p className="text-clinic-text-primary font-bold italic border-l-2 border-clinic-text-rose pl-6 mt-6">
                    Isso não é drama. Isso é esgotamento emocional.
                  </p>
                  <p>
                    O Dr. Reginaldo Ventola entende isso. Ele vai te mostrar <strong>como reprogramar sua mente</strong> para que você volte a se sentir segura, leve e no controle.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-12">
                <Link 
                  to="/triagem"
                  className="group relative inline-flex items-center justify-center px-12 py-6 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-clinic-brand-dark transition-all scale-105 animate-cta-pulse shimmer-effect"
                >
                  Quero Iniciar Minha Triagem Gratuita
                </Link>
                <button 
                  onClick={() => document.getElementById('realidade')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-12 py-6 border border-clinic-brand-primary/20 text-clinic-brand-primary rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-clinic-brand-primary/5 transition-all"
                >
                  Conhecer o Método
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="relative z-30"
            >
              <div className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-clinic-brand-primary/20 border-4 border-white group bg-white relative">
                <img 
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1777074754/Psiquiatra_Mococa_2_coeood.png" 
                  alt="Tratamento de Ansiedade em Mococa - Dr. Reginaldo Ventola - Para Mulheres" 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] border border-clinic-border-subtle hidden md:block z-50">
                <p className="text-clinic-text-primary font-serif italic text-lg leading-snug">
                  "O resgate da sua paz interior começa pela decisão de se ouvir."
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black block">A Verdade Invisível</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-clinic-text-primary leading-tight">
                O Peso Silencioso de<br />
                <span className="italic text-rose">Quem Sempre Dá Conta</span>
              </h2>
              <div className="space-y-4 text-lg font-light text-clinic-text-secondary leading-relaxed">
                <p>Você diz "está tudo bem" tantas vezes que começa a acreditar na própria mentira. Mas o peito aperta e a mente não para.</p>
                <div className="bg-white p-8 rounded-2xl border border-clinic-text-rose/10 italic font-serif text-xl text-clinic-text-primary shadow-sm">
                  "O Método Acalme-se ajuda a desligar esse alarme falso que não para de tocar no seu corpo."
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group bg-white">
                <img 
                  src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776953791/criativo-acalme-se-aspiration-feed_12_wefybf.png" 
                  alt="Realidade da Ansiedade" 
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
                  desc: "Você tenta desligar, mas os pensamentos vêm em cascata: \"E se eu não der conta?\" \"E se eu decepcionar?\" \"E se tudo der errado?\" São 3h da manhã e você está acordada, revirando problemas que nem existem." 
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

          {/* Verdade Box */}
          <div className="section--dark !py-16 !px-10 my-24 rounded-[2rem] text-center space-y-8">
            <h3 className="text-2xl md:text-3xl text-rose font-serif italic">A Verdade que Ninguém Te Conta</h3>
            <div className="space-y-4 text-lg font-light">
              <p>
                Isso não é fraqueza.<br />
                Isso não é falta de fé.<br />
                Isso não é frescura ou drama.
              </p>
              <p className="font-bold text-xl">É um padrão emocional desregulado.</p>
              <p className="max-w-2xl mx-auto text-base text-white/80 leading-relaxed">
                Sua mente aprendeu a viver em estado de alerta máximo, como se sua vida dependesse disso. E agora, mesmo quando está "tudo bem", seu corpo continua em modo de guerra.
              </p>
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
        </div>

        {/* NOVO: Ponto de Virada (Fora do container limitado) */}
        <div className="py-24 bg-white/30">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-6xl font-serif text-clinic-text-primary font-light">O Ponto de Virada</h3>
              <div className="w-24 h-px bg-clinic-text-rose/30 mx-auto" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8 text-xl font-light text-clinic-text-secondary leading-relaxed text-left">
                <p>
                  O Método Acalme-se não é sobre "controlar" sua ansiedade. É sobre <strong>entender de onde ela vem</strong> e desligar esse alarme falso que não para de tocar.
                </p>
                <div className="space-y-6">
                  <p className="font-medium text-clinic-text-primary">É sobre você voltar a:</p>
                  <ul className="space-y-4">
                    {[
                      "Dormir a noite inteira sem acordar sobressaltada",
                      "Respirar fundo sem sentir o peito apertar",
                      "Olhar no espelho e se reconhecer",
                      "Viver sem esse peso constante no peito"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-clinic-text-rose" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-3xl font-serif italic text-clinic-text-primary pt-8">
                  "Você não precisa continuar assim."
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group bg-white shadow-clinic-brand-primary/10">
                  <img 
                    src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776940212/criativo-acalme-se-curiosity-feed_2_ki0sqh.png" 
                    alt="O Ponto de Virada - Método Acalme-se" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="text-center pt-10 space-y-8">
              <Link 
                to="/agendar"
                className="group relative inline-flex items-center justify-center px-16 py-7 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-clinic-brand-dark transition-all scale-105 animate-cta-pulse shimmer-effect"
              >
                Quero Entender Minha Ansiedade Agora
              </Link>
              <p className="text-[10px] text-clinic-text-muted uppercase tracking-[0.3em] font-bold">
                Em Mococa e online. Atendimento sigiloso, humano e sem julgamentos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO SECTION: O PRÓXIMO PASSO É A SUA LIBERDADE */}
      <div className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-brand-ink leading-tight">
              O Próximo Passo é a <br />
              <span className="italic text-brand-accent font-light">Sua Liberdade Emocional.</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-brand-ink/70 font-light">
              <p>
                Existe um mecanismo chamado <strong>ciclo do medo</strong>, responsável por manter sua mente em estado constante de alerta.
              </p>
              <p>
                Assista ao vídeo abaixo para entender como o Método Acalme-se interrompe esse ciclo e devolve o controle da sua vida.
              </p>
            </div>
          </motion.div>
          
          <div className="relative aspect-video bg-brand-ink rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-brand-ink/5">
            <YouTubeEmbed 
              videoId="3zHS8wm95sE" 
              title="O Próximo Passo é a Sua Liberdade - Método Acalme-se" 
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/sintomas-de-ansiedade" className="inline-flex items-center gap-4 bg-brand-accent text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/30 animate-cta-pulse">
              Continuar para Próxima Etapa
            </Link>
          </div>
        </div>
      </div>

      {/* PILARES SECTION */}
      <div id="pilares" className="py-32 px-6 bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 border border-brand-accent/30 rounded-full mb-6">
              <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Pioneirismo Regional</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-ink leading-[1.1] tracking-tight mb-8">
              Pioneirismo Regional em Saúde Mental Integrativa <br />
              <span className="italic text-brand-accent font-light">
                O método Acalme-se é a união de Quatro pilares terapêuticos que tratam a causa, não apenas o sintoma, sendo referência em Mococa e toda região.
              </span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-xl text-brand-ink/70 font-light leading-relaxed">
              <p>
                O Método Acalme-se nasceu da compreensão de que a ansiedade não é um problema isolado. É um sinal de que corpo, mente e emoções perderam o equilíbrio.
              </p>
              <p>
                Por isso, unimos quatro abordagens complementares que atuam na raiz do sofrimento emocional:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Psicanálise",
                desc: "Identifica as raízes inconscientes e os traumas que mantêm sua ansiedade ativa, trazendo à tona o que precisa ser tratado.",
                link: "/psiquiatra-ou-psicanalista"
              },
              {
                title: "Hipnoterapia Clínica",
                desc: "Reprograma padrões profundos de medo e insegurança, criando novos caminhos neurais para que você viva com mais leveza.",
                link: "/ansiedade-sob-controle"
              },
              {
                title: "Naturopatia",
                desc: "Restaura o equilíbrio do seu sistema nervoso através de recursos naturais, permitindo que seu corpo encontre sua própria capacidade de cura.",
                link: "/iridologia-e-naturopatia"
              },
              {
                title: "Iridologia",
                desc: "Revela predisposições orgânicas e emocionais, permitindo um tratamento 100% personalizado para sua história única.",
                link: "/iridologia-e-naturopatia"
              }
            ].map((pilar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-brand-ink/5 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="flex gap-4 items-start mb-6">
                  <h3 className="text-3xl font-serif text-brand-ink group-hover:text-brand-accent transition-colors">{pilar.title}</h3>
                </div>
                <p className="text-brand-ink/70 leading-relaxed text-lg font-light mb-8 flex-grow">
                  {pilar.desc}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={pilar.link} 
                    className="inline-flex items-center justify-center px-8 py-3 bg-brand-paper hover:bg-brand-accent hover:text-white text-brand-accent rounded-full font-bold uppercase tracking-widest text-[9px] transition-all border border-brand-accent/20 animate-cta-pulse"
                  >
                    Saiba mais sobre {pilar.title} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* RESPOSTA DO CORPO SECTION - Premium Layout with 2 Cards and Image */}
      <div className="py-32 bg-clinic-bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] text-clinic-brand-primary font-black mb-6 block"
            >
              Resultados Reais
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-clinic-text-primary leading-tight mb-8"
            >
              Quando a Causa é Tratada, <br />
              <span className="italic text-rose">Todo o Seu Ser Responde</span>
            </motion.h2>
            <div className="w-24 h-px bg-clinic-text-rose/20" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-clinic-brand-primary/5 flex flex-col justify-center border border-clinic-border-subtle"
            >
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-clinic-text-rose/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-clinic-text-rose" />
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-clinic-text-primary leading-relaxed">A taquicardia dá lugar a um ritmo tranquilo.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-clinic-text-rose/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-clinic-text-rose" />
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-clinic-text-primary leading-relaxed">O peito finalmente relaxa.</p>
                </div>
              </div>
            </motion.div>

            {/* Image Center (Poltrona Woman) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group"
            >
              <img 
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1777074754/Psiquiatra_Mococa_2_coeood.png" 
                alt="Transformação e Paz Interior - Método Acalme-se" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-clinic-brand-primary/5 flex flex-col justify-center border border-clinic-border-subtle"
            >
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-clinic-text-rose/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-clinic-text-rose" />
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-clinic-text-primary leading-relaxed">O sono volta a ser profundo e restaurador.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-clinic-text-rose/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-clinic-text-rose" />
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-clinic-text-primary leading-relaxed">Sua mente recupera a clareza e o controle.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-2xl md:text-4xl font-serif italic text-rose">
              "Isso não é apenas alívio temporário. <br className="md:hidden" /> É a libertação profunda."
            </p>
          </motion.div>
        </div>
      </div>

      {/* REFERENCIA SECTION */}
      <div className="py-32 px-6 bg-brand-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ink leading-[1.1] tracking-tight mb-8">
            Referência em Saúde Mental Integrativa <br />
            <span className="italic text-brand-accent font-light text-3xl md:text-5xl">em Mococa e Região</span>
          </h2>
          <div className="space-y-8 text-xl text-brand-ink/70 leading-relaxed font-light">
            <p className="text-2xl font-serif italic text-brand-ink uppercase tracking-tight">
              Nosso compromisso não é com o alívio temporário. <br />
              <span className="text-brand-accent not-italic font-bold">É com a sua liberdade emocional definitiva.</span>
            </p>
            <p className="max-w-2xl mx-auto">
              Recupere sua paz interior com quem é autoridade no tratamento da ansiedade feminina. Um método que trata a causa, não apenas o sintoma.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION: URGÊNCIA ÉTICA */}
      <div className="section--dark !py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-7xl font-serif mb-16 leading-tight tracking-tighter">
              Dê o Primeiro Passo <br />
              <span className="italic font-light text-rose">Hoje</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-10">
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
                Você não precisa continuar vivendo sob o peso da ansiedade. O tratamento certo existe, está em Mococa e tem resultado comprovado. <br />
                <span className="not-italic text-white">Agende sua avaliação agora e descubra como o Método Acalme-se pode transformar a sua vida.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <Link 
                  to="/triagem"
                  className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-brand-accent text-white rounded-full text-base font-bold uppercase tracking-widest hover:scale-105 transition-all group shadow-xl shadow-brand-accent/20 animate-cta-pulse"
                >
                  [ Iniciar Minha Triagem Gratuita ]
                </Link>
                <Link 
                  to="/agendar"
                  className="inline-flex items-center justify-center gap-4 px-16 py-8 border border-white/20 text-white rounded-full text-base font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  Agendar Consulta
                </Link>
              </div>
              <p className="text-sm uppercase tracking-[0.3em] font-bold text-rose/80">
                "Sua paz interior começa com uma decisão."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* REFORÇO FINAL: FOOTER CTA */}
      <div className="py-32 px-6 bg-brand-paper">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink leading-tight">
              Recupere sua paz interior <br />
              <span className="italic text-brand-accent font-light">com quem é autoridade no assunto</span>
            </h2>
            <div className="flex flex-col items-center gap-10">
              <Link 
                to="/agendar"
                className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-brand-accent text-white rounded-full text-base font-bold uppercase tracking-widest hover:scale-105 transition-all group shadow-xl shadow-brand-accent/20 animate-cta-pulse"
              >
                [ Agendar Avaliação com Dr. Reginaldo Ventola ]
              </Link>
              
              <div className="space-y-2 pt-8 border-t border-brand-ink/10 w-full max-w-md mx-auto">
                <p className="text-xl font-serif italic text-brand-ink font-bold">Dr. Reginaldo Ventola | Psicanalista</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-ink/60 font-black">Registro SPMR 0152021/SP</p>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-bold pt-4 mb-8">Atendimento Ético, Sigiloso e Humanizado</p>
                
                {/* SEO & Autoridade Section */}
                <div className="pt-8 border-t border-brand-ink/5 mt-8">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">
                    +500 mulheres já transformaram suas vidas em Mococa e região
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-ink/30 mt-3">
                    Atendimento presencial e online
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetodoAcalmesePage;
