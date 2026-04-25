import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { motion } from 'motion/react';

const IridologiaPage = () => {
  return (
    <section className="min-h-screen bg-brand-paper">
      <SEO 
        title="Iridologia e Naturopatia em Mococa | Método Acalme-se"
        description="Descubra como a Iridologia Clínica e a Naturopatia revelam sinais de ansiedade, SPA e perfil comportamental através da leitura da íris."
        canonical="https://www.metodoacalmese.com.br/iridologia-e-naturopatia"
        keywords="iridologia mococa, naturopatia mococa, sinais de ansiedade na iris, síndrome do pensamento acelerado, tratamento natural ansiedade"
      />
      
      {/* Hero Section - Boutique Clinical Style (Landscape) */}
      <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_#FDFBF7_0%,_#F7EFEC_50%,_#F2E5E1_100%)]">
        {/* Landscape Image Container */}
        <div className="w-full max-w-[1440px] px-6 md:px-16 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] group"
          >
            <img 
              src="https://res.cloudinary.com/djl7c37my/image/upload/v1777071544/Gemini_Generated_Image_8kp3gh8kp3gh8kp3_ts7blm.png" 
              alt="Bioindicadores da Íris - Clínica Boutique" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-paper/20 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Text Overlay / Content Section */}
        <div className="w-full max-w-7xl px-6 md:px-16 pb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-10 max-w-4xl"
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter">
                <span className="text-[#3D3D3D] block">Bioindicadores</span>
                <span className="text-[#B69E9E] italic ml-12">da Íris</span>
              </h1>
              <p className="text-brand-accent font-serif text-xl md:text-2xl italic tracking-wide pt-4">
                "Um olhar profundo sobre os sinais do seu sistema nervoso."
              </p>
            </div>

            <p className="text-xl md:text-2xl text-[#6D6262] font-light leading-relaxed max-w-3xl mx-auto">
              Através da análise integrativa da íris, identificamos padrões de tensão, vitalidade e esgotamento que podem revelar como o corpo vem respondendo ao estresse mental e emocional.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Link 
                to="/triagem" 
                className="px-12 py-5 bg-brand-ink text-brand-paper rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#B69E9E] transition-all duration-500 shadow-xl"
              >
                Agendar Triagem Grátis
              </Link>
              <Link 
                to="/agendar" 
                className="px-12 py-5 border border-brand-ink/10 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:border-[#B69E9E] hover:text-[#B69E9E] transition-all duration-500"
              >
                Agendar Avaliação
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#B69E9E]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <section id="entenda" className="bg-[#F5F1ED] py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          
          {/* COLUNA DE TEXTO - NOW CENTERED/FULL WIDTH WITHOUT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Label Superior */}
            <span className="block font-sans text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-brand-accent mb-6">
              Iridologia Clínica em Mococa
            </span>
            
            {/* Título Principal */}
            <h2 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-light text-brand-ink leading-[1.1] mb-8">
              A Íris como<br />
              <span className="block text-brand-accent italic mt-2">
                Extensão do Cérebro
              </span>
            </h2>
            
            {/* Subtítulo Técnico */}
            <p className="font-sans text-[0.85rem] font-semibold tracking-[0.3em] uppercase text-[#8A7F75] mb-12">
              Análise de Terreno Biológico
            </p>
            
            {/* Divisor Minimalista */}
            <div className="flex items-center gap-4 mb-16">
              <span className="w-12 h-px bg-brand-accent/30"></span>
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              <span className="w-12 h-px bg-brand-accent/30"></span>
            </div>
            
            {/* Citação de Abertura */}
            <div className="relative mb-20 max-w-3xl">
              <span className="absolute -top-10 -left-10 text-[8rem] font-serif text-brand-accent/10 pointer-events-none">"</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-brand-ink/90 leading-relaxed italic text-center px-4">
                A íris é o único tecido interno do corpo humano visível do exterior, conectada diretamente ao encéfalo por milhares de fibras nervosas.
              </blockquote>
            </div>
            
            {/* Corpo do Texto - Diagramado em 2 Colunas no Desktop */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-[1.05rem] leading-[2] text-[#5C534D] font-light text-left max-w-5xl">
              <div className="space-y-8">
                <p>
                  A ciência moderna confirma o que a <strong>Iridologia Clínica</strong> pratica com maestria: a íris funciona como um mapa neuro-óptico. Ela registra a história do seu organismo em tempo real, revelando predisposições genéticas, sobrecargas atuais e padrões emocionais cristalizados que sustentam sua ansiedade.
                </p>
                <p>
                  Diferente de um relato verbal, a íris é o painel onde o seu <strong>Terreno Biológico</strong> confessa as sobrecargas, os picos de estresse e o esgotamento que você vem tentando administrar. É a biologia revelando o que a mente já não consegue mais esconder. Cada marca, cor e textura conta uma história.
                </p>
              </div>
              <div className="space-y-8">
                <p>
                  No <strong>Método Acalme-se</strong>, utilizamos a iridologia como ferramenta diagnóstica complementar para identificar a origem constitucional da ansiedade. Mapeamos como seu organismo reage fisiologicamente ao estresse, permitindo um tratamento verdadeiramente integrativo e personalizado.
                </p>
                <p>
                  Essa abordagem revela se sua ansiedade tem raiz em desequilíbrios do sistema nervoso autônomo, sobrecarga hepática ou fragilidade adrenal. Com essas informações, podemos direcionar técnicas de regulação específicas como naturopatia, respiração e suplementação natural, que potencializam os resultados da psicoterapia.
                </p>
              </div>
            </div>
            
            {/* Box de Destaque */}
            <div className="bg-[#EDE7E0] p-10 md:p-14 rounded-[2px] border-l-[4px] border-brand-accent my-14 text-left max-w-4xl">
              <p className="font-serif text-[1.25rem] text-brand-ink leading-[1.8] italic m-0">
                "A íris não mente. Ela mostra onde sua energia vital está sendo drenada e quais sistemas precisam de atenção prioritária para que você recupere o equilíbrio."
              </p>
            </div>
            
            {/* Botão Pulsante */}
            <div className="pt-8">
              <Link 
                to="/agendar" 
                className="inline-block px-14 py-6 bg-brand-accent text-white font-sans font-medium text-[0.75rem] tracking-[0.2em] uppercase rounded-full transition-all duration-500 hover:scale-105 shadow-2xl shadow-brand-accent/30 animate-cta-pulse"
              >
                Agendar Avaliação com Iridologia
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-40">
        {/* SPA Section - Technical Dashboard Style (Recipe 1/3) */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-[#B69E9E] text-white rounded-full text-[0.65rem] font-bold tracking-[0.2em] uppercase shadow-lg shadow-[#B69E9E]/20">
                  SPA
                </span>
                <span className="text-brand-ink/40 font-mono text-[0.65rem] uppercase tracking-[0.3em]">Protocolo Clínico</span>
              </div>
              <h2 className="font-serif text-[clamp(2.4rem,5vw,3.5rem)] font-light text-[#3D3630] leading-[1.1] mb-6">
                O Que a Íris Revela<br />
                <span className="block text-[#B69E9E] italic mt-1">
                  Sobre a Mente que Não Para
                </span>
              </h2>
              <h3 className="font-sans text-[0.95rem] font-medium tracking-[0.1em] uppercase text-[#8A7F75] leading-relaxed">
                Síndrome do Pensamento Acelerado<br />
                <span className="text-[0.8rem] tracking-normal font-normal normal-case italic">Diagnóstico Iridológico em Mococa</span>
              </h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 space-y-6 group hover:bg-[#B69E9E] transition-all duration-700 rounded-[2.5rem] border border-[#B69E9E]/10 hover:border-transparent shadow-[0_10px_40px_-15px_rgba(182,158,158,0.15)] hover:shadow-[#B69E9E]/40 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B69E9E]/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
                <span className="inline-flex items-center justify-center w-10 h-10 border border-[#B69E9E] text-[#B69E9E] group-hover:text-white group-hover:border-white font-mono text-xs font-bold rounded-full transition-colors">01</span>
                <h3 className="text-2xl font-serif group-hover:text-white">Anéis de Tensão</h3>
                <p className="text-[#6D6262] group-hover:text-white/80 leading-relaxed font-light text-sm">
                  Círculos concêntricos que revelam um sistema nervoso em estado de alerta máximo. Indicam a dificuldade profunda do organismo em cessar o estado de vigilância e entrar em repouso reparador.
                </p>
              </div>
              
              <div className="bg-white p-10 space-y-6 group hover:bg-[#B69E9E] transition-all duration-700 rounded-[2.5rem] border border-[#B69E9E]/10 hover:border-transparent shadow-[0_10px_40px_-15px_rgba(182,158,158,0.15)] hover:shadow-[#B69E9E]/40 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B69E9E]/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
                <span className="inline-flex items-center justify-center w-10 h-10 border border-[#B69E9E] text-[#B69E9E] group-hover:text-white group-hover:border-white font-mono text-xs font-bold rounded-full transition-colors">02</span>
                <h3 className="text-2xl font-serif group-hover:text-white">Raios Solares</h3>
                <p className="text-[#6D6262] group-hover:text-white/80 leading-relaxed font-light text-sm">
                  Sulcos radiais que apontam para a somatização do estresse mental. Revelam como a sobrecarga psíquica está drenando a energia vital de sistemas orgânicos específicos.
                </p>
              </div>
              
              <div className="bg-white p-10 space-y-6 group hover:bg-[#B69E9E] transition-all duration-700 md:col-span-2 rounded-[2.5rem] border border-[#B69E9E]/10 hover:border-transparent shadow-[0_10px_40px_-15px_rgba(182,158,158,0.15)] hover:shadow-[#B69E9E]/40 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#B69E9E]/5 rounded-full -mr-24 -mt-24 group-hover:bg-white/10 transition-colors" />
                <span className="inline-flex items-center justify-center w-10 h-10 border border-[#B69E9E] text-[#B69E9E] group-hover:text-white group-hover:border-white font-mono text-xs font-bold rounded-full transition-colors">03</span>
                <h3 className="text-2xl font-serif group-hover:text-white">Densidade da Trama</h3>
                <p className="text-[#6D6262] group-hover:text-white/80 leading-relaxed font-light text-sm">
                  A qualidade das fibras revela a resiliência do terreno biológico. Identificamos a capacidade inata de recuperação e os limites de tolerância ao estresse crônico.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 h-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[450px] rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] group"
              >
                <img 
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1777048361/ChatGPT_Image_24_de_abr._de_2026_13_29_12_nikzqu.png" 
                  alt="Sinais de ansiedade na íris" 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                  <p className="text-white text-[0.65rem] font-sans font-semibold uppercase tracking-[0.3em] text-center">Registro de Bioindicadores SPA</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Naturopathy Section - Split Layout (Recipe 11) */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <span className="text-[#B69E9E] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Intervenção Clínica</span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-ink leading-tight">
                Naturopatia <br />
                <span className="italic text-[#B69E9E]">Integrativa</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-ink/80 font-light leading-relaxed text-lg">
              <p>
                O diagnóstico iridológico é o mapa; a <strong>Naturopatia Integrativa</strong> é a engenharia de reparo. Não tratamos sintomas isolados, mas a ecologia do seu corpo para restaurar o Equilíbrio Neurovegetativo.
              </p>
              <p>
                Através da <strong>Fitoterapia Clínica</strong> e da modulação por <strong>Oligoelementos</strong>, nutrimos o terreno biológico exausto. O objetivo é devolver ao seu organismo os recursos bioquímicos necessários para a autorregulação e a homeostase.
              </p>
            </div>

            <div className="pt-8 border-t border-brand-ink/5">
              <p className="text-brand-ink font-medium italic font-serif text-2xl text-[#6D6262]">
                "Transformamos o olhar de exaustão em um despertar de presença e paz."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group border border-white">
                <img 
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1777048362/ChatGPT_Image_24_de_abr._de_2026_13_31_56_jp91nk.png" 
                  alt="Naturopatia e Fitoterapia" 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group border border-white">
                <img 
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1777048360/ChatGPT_Image_24_de_abr._de_2026_13_32_08_egacn1.png" 
                  alt="Fitoterápicos naturais" 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#B69E9E]/5 rounded-full blur-[120px]" />
          </motion.div>
        </div>

        {/* FAQ Section - Minimal & Spaced */}
        <div className="max-w-6xl mx-auto mb-40">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-[#B69E9E] font-mono text-[0.65rem] uppercase tracking-[0.4em] mb-6 block font-bold">Esclarecimentos</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-tight">Perguntas <br className="md:hidden" /><span className="italic text-[#B69E9E]">Frequentes</span></h2>
            <div className="w-12 h-px bg-[#B69E9E]/30 mt-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                q: "O que a Iridologia revela sobre a ansiedade?",
                a: "A íris funciona como um mapa do sistema nervoso. Identificamos sinais de hiperexcitabilidade (anéis de tensão), esgotamento de minerais e o seu perfil comportamental inato."
              },
              {
                q: "A avaliação iridológica é invasiva?",
                a: "De forma alguma. É um procedimento indolor e não invasivo, realizado com um iridoscópio de alta resolução que captura os detalhes da sua íris em segundos."
              },
              {
                q: "Substitui exames médicos tradicionais?",
                a: "Não. A Iridologia Clínica é uma ferramenta complementar de análise do terreno biológico. Ela revela a 'raiz' do desequilíbrio funcional que precede o adoecimento."
              },
              {
                q: "Como a Naturopatia ajuda no tratamento?",
                a: "Utilizamos fitoterapia e oligoelementos para nutrir o sistema nervoso exausto, devolvendo ao corpo a capacidade de se autorregular naturalmente."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group cursor-default"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#B69E9E]/20 flex items-center justify-center group-hover:bg-[#B69E9E] transition-all duration-500">
                    <span className="text-[0.6rem] font-bold text-[#B69E9E] group-hover:text-white transition-colors">?</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-serif text-brand-ink group-hover:text-[#B69E9E] transition-colors duration-500 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-[#6D6262] font-light leading-[1.8] text-base md:text-lg">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section - Sophisticated & Direct */}
        <div className="section--dark rounded-[3rem] text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Pronta para decifrar o que sua <span className="italic text-rose">biologia confessa?</span>
            </h2>
            <p className="text-lg font-light">
              Agende sua Avaliação Iridológica e Naturopática em Mococa e inicie seu resgate.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link 
                to="/triagem" 
                className="px-12 py-6 bg-brand-accent text-white rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-brand-accent/40 animate-cta-pulse"
              >
                Iniciar Minha Triagem Gratuita
              </Link>
              <Link 
                to="/agendar"
                className="text-white/60 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest border-b border-white/10 pb-1"
              >
                Agendar Avaliação Completa
              </Link>
              <span className="opacity-40 text-[10px] font-mono uppercase tracking-widest pt-4">Vagas limitadas para atendimento presencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IridologiaPage;
