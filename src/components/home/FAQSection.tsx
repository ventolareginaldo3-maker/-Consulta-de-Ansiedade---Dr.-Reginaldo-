import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { CONTACT_INFO } from '../../constants';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "O método é exclusivo para mulheres?",
      a: "Sim. O Método Acalme se foi desenvolvido especificamente para atender às particularidades do universo feminino, considerando as flutuações hormonais, pressões sociais e o acúmulo de funções que geram ansiedade na mulher moderna."
    },
    {
      q: "Como a hipnoterapia ajuda na ansiedade?",
      a: "A hipnoterapia permite acessar o subconsciente para identificar e ressignificar gatilhos emocionais profundos, promovendo um alívio mais rápido e duradouro do que as terapias convencionais."
    },
    {
      q: "Posso fazer o tratamento mesmo se estiver grávida?",
      a: "Sim, o tratamento é seguro e altamente recomendado durante a gestação, ajudando a futura mãe a manter o equilíbrio emocional e reduzir o estresse, o que beneficia diretamente o bebê."
    },
    {
      q: "Como funciona a primeira sessão?",
      a: "A primeira sessão é um momento de acolhimento e diagnóstico. Realizamos a Iridologia e uma anamnese profunda para entender suas queixas e traçar o plano terapêutico personalizado do Método Acalme-se."
    },
    {
      q: "O atendimento é presencial ou online?",
      a: "Oferecemos ambas as modalidades. O atendimento online é realizado via plataforma segura de vídeo, mantendo a mesma eficácia e sigilo do presencial."
    },
    {
      q: "Em quanto tempo verei resultados?",
      a: "Cada processo é único, mas muitas pacientes relatam alívio significativo nos sintomas físicos de ansiedade já nas primeiras 4 sessões, graças à integração da Hipnoterapia e Naturopatia."
    },
    {
      q: "Qual a diferença entre Psiquiatra e Psicanalista?",
      a: "O psiquiatra é um médico que foca na regulação química através de medicamentos. O psicanalista foca nas causas emocionais e inconscientes. Em Mococa, o Método Acalme-se é procurado tanto por quem quer uma alternativa à medicação quanto por quem deseja potencializar o tratamento psiquiátrico tratando a raiz do trauma."
    },
    {
      q: "O método substitui o tratamento médico?",
      a: "Não. O Método Acalme-se é uma abordagem integrativa que atua em conjunto com a medicina tradicional. Nunca recomendamos a interrupção de medicamentos sem orientação do seu médico assistente."
    },
    {
      q: "Qual a duração de cada sessão?",
      a: "As sessões têm duração média de 50 a 60 minutos, garantindo tempo de qualidade para o aprofundamento terapêutico necessário."
    }
  ];

  // FAQ Structured Data for Google Search Console
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-20 lg:py-32 px-6 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-ink">Perguntas Comuns</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl lg:rounded-3xl transition-all duration-500 ${openIndex === i ? 'border-brand-accent bg-brand-accent/[0.02]' : 'border-brand-ink/5 bg-brand-paper/30'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 lg:p-8 flex items-center justify-between text-left"
              >
                <span className="text-lg lg:text-xl font-serif text-brand-ink pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${openIndex === i ? 'bg-brand-accent text-white' : 'bg-brand-ink/5 text-brand-ink'}`}>
                  <svg className={`w-4 h-4 transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-sm lg:text-base text-brand-ink/70 leading-relaxed font-light">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="section--dark mt-12 lg:mt-20 !p-8 lg:!p-12 rounded-[2rem] lg:rounded-[3rem] text-center overflow-hidden">
          <h3 className="text-2xl lg:text-3xl font-serif mb-4 lg:mb-6">Ainda tem dúvidas?</h3>
          <p className="mb-8 lg:mb-10 font-light text-sm lg:text-base">Estou à disposição para conversar e entender como posso te ajudar.</p>
          <a 
            href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest text-[10px] lg:text-xs hover:scale-105 transition-transform animate-cta-pulse"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
