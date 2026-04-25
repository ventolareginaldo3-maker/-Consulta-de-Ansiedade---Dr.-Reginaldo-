import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BatteryLow, PowerOff, Brain, Heart, ArrowRight, Activity, ShieldAlert, Sparkles, Wind, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import AboutProfessional from '../home/AboutProfessional';

export const AdoecimentoSilencioso = () => {
  return (
    <div className="space-y-32 pb-20 font-sans">
      {/* CABEÇALHO E ESTRUTURA - DESIGN COMPREENSÃO CLÍNICA */}
      <section className="bg-[#4A3F3F] py-24 md:py-32 px-6 text-center">
        <div className="max-w-[780px] mx-auto">
          {/* Label Superior */}
          <span className="block font-sans text-[0.68rem] tracking-[0.28em] uppercase text-[#B89890] mb-7 font-medium">
            Compreensão Clínica
          </span>
          
          {/* Título Principal */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-4 tracking-tight">
            A Estrutura do<br />
            <span className="text-[#D4B8AE]">Adoecimento Silencioso</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="font-sans text-base md:text-lg text-[#E8E0D8] leading-relaxed mb-14 font-light">
            Como sua mente entra em colapso tentando te proteger.
          </p>
          
          {/* Blocos de Citação */}
          <div className="flex flex-col gap-10 text-left mx-auto max-w-[700px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#B89890] pl-7"
            >
              <p className="font-serif text-2xl md:text-3xl text-white italic font-light leading-snug">
                "Se você chegou até aqui, sua mente já compreendeu que não é mais possível sustentar esse ciclo sozinha. Como seu Agente de Transformação, eu não olho apenas para os seus sintomas; eu analiso a estrutura profunda da sua dor."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-2 border-[#B89890] pl-7"
            >
              <p className="font-sans text-base md:text-lg text-[#D4B8AE] leading-relaxed font-light">
                "O que você encontrará a seguir não é uma teoria reconfortante, mas uma prática clínica deliberada. Projetamos cada etapa para que a sua compreensão se transforme em mudança real. A estrutura para sua liberdade emocional está pronta. O próximo passo é o início do seu retorno para si mesma."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEFINIÇÃO SECTION - NOVO: Destaque de Convicção e Leveza */}
      <section className="bg-clinic-bg-secondary py-24 px-6 md:px-12 my-24 overflow-hidden">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <blockquote className="font-serif text-3xl md:text-5xl italic text-clinic-text-primary leading-tight m-0 text-center lg:text-left">
              "A ansiedade não define quem você é, ela mostra que sua mente está presa em um padrão que pode ser mudado."
            </blockquote>
            <div className="mt-8 space-y-6 text-lg text-clinic-text-secondary font-light leading-relaxed text-center lg:text-left">
              <p>
                Você não precisa continuar vivendo refém desse ciclo silencioso que rouba sua paz, seu foco e sua segurança.
              </p>
              <p className="font-medium text-clinic-text-primary">
                Mas tudo começa com um passo simples: Reconhecer os sinais que mostram que sua mente ainda está presa nesse padrão.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776954021/criativo-acalme-se-aspiration-feed_17_pxavwq.png" 
              alt="Método Acalme-se - Compreensão" 
              className="w-full rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
      {/* SEÇÃO: RECONHECIMENTO DE SINAIS (ALTO CONTRASTE) */}
      <section className="bg-[#4A3F3F] py-24 md:py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-[1000px] mx-auto">
          {/* Título da Seção */}
          <span className="block font-sans text-[0.7rem] tracking-[0.25em] uppercase text-[#B89890] mb-5 font-semibold">
            Resumo Clínico
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-4 tracking-tight">
            O Retrato da Exaustão
          </h2>
          
          {/* Subtítulo / Intro */}
          <p className="font-sans text-base md:text-lg text-[#E8E0D8] leading-relaxed mb-14 font-light max-w-[700px] mx-auto">
            A ansiedade se disfarça de rotina. Pare um momento e pergunte-se: 
            quantos destes sinais já fazem parte do seu dia a dia?
          </p>

          {/* Grid de Sintomas (Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { t: "Mente Acelerada", d: "Pensamentos que não param e a sensação de que o cérebro nunca desliga." },
              { t: "Aperto no Peito", d: "O peso físico da angústia que aperta e dificulta a respiração profunda." },
              { t: "Insônia", d: "Acordar no meio da noite ou a incapacidade de ter um sono reparador." },
              { t: "Medo Constante", d: "A sensação de perigo iminente, mesmo quando tudo parece estar bem." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  {item.t}
                </h4>
                <p className="text-sm text-[#D4B8AE] leading-relaxed font-light">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Final da Seção */}
          <div className="mt-16">
            <Link 
              to="/agendar" 
              className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#4A3F3F] rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-brand-paper transition-all shadow-xl animate-cta-pulse"
            >
              Sim, eu me identifico
            </Link>
          </div>
        </div>
      </section>

      {/* SINAIS E SINTOMAS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-3xl md:text-5xl font-serif text-clinic-text-primary font-light">Sinais e Sintomas</h3>
          <p className="text-clinic-text-rose uppercase tracking-widest text-[10px] font-bold">Identificação e Caminhos de Tratamento</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-8 h-8" />, t: "Esgotamento", d: "Cansaço profundo que não passa com o sono." },
            { icon: <Heart className="w-8 h-8" />, t: "Sintomas Físicos", d: "O peito aperta e o ar parece sumir sem motivo aparente." },
            { icon: <ShieldAlert className="w-8 h-8" />, t: "Estado de Alerta", d: "Uma sensação constante de que algo vai dar errado." },
            { icon: <Brain className="w-8 h-8" />, t: "Ruminação", d: "Pensamentos em looping que roubam seu foco e energia." },
            { icon: <Activity className="w-8 h-8" />, t: "Tensão Corporal", d: "Músculos sempre rígidos, pescoço e ombros pesados." },
            { icon: <Sparkles className="w-8 h-8" />, t: "Reatividade", d: "Baixa tolerância para situações simples do cotidiano." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-clinic-bg-white rounded-[3rem] border border-clinic-border-subtle shadow-sm hover:shadow-xl transition-all text-center space-y-6">
              <div className="text-clinic-text-rose flex justify-center opacity-80">{item.icon}</div>
              <h4 className="text-xl font-serif text-clinic-text-primary font-bold italic">{item.t}</h4>
              <p className="text-sm text-clinic-text-secondary font-light leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CICLO SILENCIOSO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="section--dark rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center h-full">
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
               <Eye className="w-32 h-32 text-white" />
             </div>
             <div className="space-y-4 lg:space-y-6 relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight">O Ciclo <br/><span className="italic font-light text-rose">Silencioso</span></h3>
              <div className="space-y-4 text-base lg:text-lg font-light leading-relaxed">
                <p>Muitas pessoas com ansiedade vivem um loop que se retroalimenta diariamente:</p>
                <ul className="space-y-2 italic font-serif opacity-90">
                  <li className="flex gap-2"><span>•</span> <span>Antecipam problemas que nunca acontecem</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Imaginam sempre o pior cenário possível</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Sentem medo e tensão física constante</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Evitam situações por insegurança</span></li>
                  <li className="flex gap-2"><span>•</span> <span>A mente interpreta o alívio temporário como confirmação de perigo</span></li>
                </ul>
                <p className="text-xl font-serif text-rose not-italic underline underline-offset-8 decoration-white/30">Vive o tempo todo sob ameaça.</p>
              </div>
             </div>
          </div>
          <div className="relative h-full min-h-[400px] lg:min-h-0">
            <div className="h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dx77zgslr/image/upload/v1776954748/Esgotamento-_burnout-Ansiedade-Mococa-Psiquiatra_qbq7f6.png" 
                alt="O Ciclo Silencioso do Medo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A ESTRUTURA */}
      <section className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif text-clinic-text-primary leading-tight font-light">Fases do Adoecimento</h2>
          <div className="w-24 h-px bg-clinic-text-rose/30 mx-auto" />
          <p className="text-xl text-clinic-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            O desgaste emocional segue uma lógica que consome sua saúde mental em três fases críticas:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              step: "01", 
              title: "Sobrecarga", 
              subtitle: "Estado de Alerta",
              icon: <Zap className="w-8 h-8" />,
              desc: "A mente acelera, tentando antecipar perigos e encontrar saídas para problemas que ainda nem existem." 
            },
            { 
              step: "02", 
              title: "Desgaste", 
              subtitle: "Esforço Invisível",
              icon: <BatteryLow className="w-8 h-8" />,
              desc: "Manter esse estado consome sua energia vital. Você vive no esforço para parecer 'bem' enquanto sua estrutura se desfaz." 
            },
            { 
              step: "03", 
              title: "Desligamento", 
              subtitle: "Vazio Emocional",
              icon: <PowerOff className="w-8 h-8" />,
              desc: "Para evitar o colapso total, a mente começa a 'desligar'. O desânimo e o vazio são sinais de esgotamento profundo." 
            }
          ].map((item, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-12 bg-clinic-bg-white rounded-[3rem] border border-clinic-border-subtle shadow-sm hover:shadow-xl transition-all text-center space-y-8"
            >
              <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-clinic-text-rose">{item.step}</span>
              <div className="flex justify-center text-clinic-text-primary opacity-20">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-serif text-clinic-text-primary font-bold italic">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-clinic-text-rose">{item.subtitle}</p>
                <p className="text-clinic-text-secondary font-light leading-relaxed pt-4 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link to="/agendar" className="inline-flex items-center justify-center px-16 py-8 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-clinic-brand-dark transition-all shadow-xl animate-cta-pulse shimmer-effect">
            Sair do Ciclo de Adoecimento
          </Link>
        </div>
      </section>
    </div>
  );
};
