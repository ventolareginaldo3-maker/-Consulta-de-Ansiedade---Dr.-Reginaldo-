import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronDown, Heart, Sparkles, Brain, Moon, HelpCircle, Activity } from 'lucide-react';
import SEO from '../../components/SEO';

const SaudeEmocionalFemininaPage = () => {
  // State for interactive FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Saúde emocional pode influenciar sintomas físicos?",
      answer: "Sim. Estresse prolongado, ansiedade, sobrecarga emocional e traumas não elaborados podem intensificar tensão muscular, alterações no sono, fadiga, desconfortos digestivos e percepção de dor. A avaliação médica continua sendo importante para investigar causas físicas."
    },
    {
      question: "Climatério pode causar ansiedade?",
      answer: "O climatério pode estar associado a alterações hormonais que influenciam humor, sono, irritabilidade, sensação de instabilidade emocional e ansiedade. O acompanhamento emocional pode ser um apoio importante nessa fase."
    },
    {
      question: "Hipnoterapia pode ajudar em dor crônica e fibromialgia?",
      answer: "A hipnoterapia clínica pode ser utilizada como abordagem complementar para trabalhar tensão interna, gatilhos emocionais, estado de alerta e percepção de dor. Ela não substitui tratamento médico."
    },
    {
      question: "O Método Acalme-se substitui acompanhamento médico?",
      answer: "Não. O Método Acalme-se é um cuidado complementar. Ele não substitui avaliação médica, exames, diagnósticos ou tratamentos prescritos por profissionais da área médica."
    },
    {
      question: "Esse atendimento é indicado para mulheres em Mococa?",
      answer: "Sim. O atendimento é voltado para mulheres em Mococa-SP e região que buscam um cuidado emocional e integrativo para ansiedade, climatério, estresse crônico, dor emocional e sintomas físicos persistentes."
    }
  ];

  // Schema markup
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "ProfessionalService",
        "name": "Dr. Reginaldo Vêntola - Método Acalme-se",
        "image": "https://res.cloudinary.com/djl7c37my/image/upload/v1781977690/Psican%C3%A1lise_Mococa_ansiedade_cc6lbd.png",
        "url": "https://www.metodoacalmese.com.br/saude-emocional-feminina",
        "telephone": "+5519992416095",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua XV de Novembro, 268, Sala 10",
          "addressLocality": "Mococa",
          "addressRegion": "SP",
          "postalCode": "13730-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -21.4658,
          "longitude": -47.0047
        },
        "description": "Cuidado integrativo para mulheres em Mococa com ansiedade, climatério, estresse crônico, dor emocional, fibromialgia e sintomas físicos persistentes. Conheça o Método Acalme-se.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Mococa-SP"
        },
        "knowsAbout": [
          "Psicanálise",
          "Hipnoterapia clínica",
          "Naturopatia integrativa",
          "Saúde Integrativa da Mulher",
          "Tratamento de ansiedade feminina"
        ]
      }
    ]
  };

  return (
    <main className="bg-clinic-bg-primary text-clinic-text-primary min-h-screen font-sans selection:bg-clinic-brand-primary/20 selection:text-clinic-text-primary">
      <SEO
        title="Saúde Integrativa da Mulher em Mococa | Método Acalme-se"
        description="Cuidado integrativo para mulheres em Mococa com ansiedade, climatério, estresse crônico, dor emocional, fibromialgia e sintomas físicos persistentes. Conheça o Método Acalme-se."
        keywords="saúde integrativa da mulher em Mococa, saúde emocional feminina em Mococa, ansiedade no climatério, climatério e menopausa em Mococa, fibromialgia e saúde emocional, dor crônica emocional, estresse crônico feminino, psicanálise para mulheres em Mococa, hipnoterapia para mulheres em Mococa, Método Acalme-se"
        canonical="https://www.metodoacalmese.com.br/saude-emocional-feminina"
        structuredData={structuredData}
      />

      {/* HERO SECTION */}
      <section className="bg-clinic-bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 border-b border-clinic-brand-primary/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text panel */}
          <div className="space-y-6">
            <span className="heading-label">
              Fisiologia e Emoção
            </span>
            <h1 className="font-serif font-light text-4xl lg:text-5xl xl:text-6xl text-clinic-text-primary leading-[1.12]">
              Saúde Integrativa da <br />
              <span className="italic">Mulher em Mococa</span>
            </h1>
            <p className="text-xl font-medium text-clinic-brand-primary leading-relaxed">
              Quando o corpo expressa o que a mente não consegue mais sustentar
            </p>
            <p className="text-clinic-text-secondary font-light leading-relaxed text-base">
              Dores que não têm explicação médica clara. Cansaço que não passa. Mudanças no corpo que vêm acompanhadas de alterações no humor, no sono e na forma de se reconhecer. Nem sempre esses sinais estão separados. Muitas vezes, corpo e emoção estão contando a mesma história por caminhos diferentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/triagem"
                className="inline-block text-center px-8 py-4 bg-clinic-brand-primary text-clinic-text-light hover:bg-clinic-brand-dark font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Fazer Triagem Emocional Gratuita
              </Link>
              <Link
                to="/metodo-e-tratamento"
                className="inline-block text-center px-8 py-4 border-2 border-clinic-brand-primary text-clinic-text-primary hover:bg-clinic-brand-primary/10 font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Conhecer o Método Acalme-se
              </Link>
            </div>
          </div>

          {/* Image panel */}
          <div className="relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-md border-4 border-white">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781977684/Bunout_Psiquiatra_Mococa_zk6y1r.png"
                alt="Mulher em ambiente acolhedor representando saúde integrativa da mulher em Mococa"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
            {/* Soft decorative shadow circle underneath */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-clinic-brand-primary/10 rounded-full blur-xl -z-10" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: O CORPO DA MULHER TAMBÉM FALA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Column Image (order 2 on mobile, 1 on desktop) */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-md border-4 border-white max-w-[500px] mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781977690/Psican%C3%A1lise_Mococa_ansiedade_cc6lbd.png"
                alt="Cuidado integrativo para mulheres em Mococa com foco em corpo, mente e emoções"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary leading-tight">
              O corpo da mulher também fala
            </h2>
            <div className="text-clinic-text-secondary font-light text-base leading-relaxed space-y-6">
              <p className="font-medium text-clinic-brand-primary text-lg">
                Existe uma conexão profunda entre saúde emocional e manifestações físicas, especialmente em fases de transição hormonal, estresse prolongado e períodos de sobrecarga silenciosa.
              </p>
              <p>
                Quando a mulher passa tempo demais sustentando responsabilidades, expectativas, emoções não expressas e tensões acumuladas, o corpo pode começar a comunicar o que a mente já não consegue organizar sozinha.
              </p>
              <p>
                O Método Acalme-se olha para essa relação de forma integrativa, unindo psicanálise, hipnoterapia clínica e naturopatia para compreender o que pode estar por trás dos sintomas emocionais e físicos.
              </p>
              <div className="border-l-2 border-clinic-brand-primary/60 pl-6 my-6 italic text-clinic-text-primary">
                Esse cuidado é complementar e não substitui avaliação ou tratamento médico quando necessário.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: SENTINDO QUE ALGO MUDOU */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="heading-label">
              Mapeamento de Sensações
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary leading-tight">
              Essa página é para mulheres que sentem que algo mudou
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: 'I',
                title: 'Cansaço que não passa',
                desc: 'Mesmo depois de dormir, o corpo parece continuar pesado e a energia não volta como antes.',
              },
              {
                num: 'II',
                title: 'Mudanças no humor',
                desc: 'Irritabilidade, sensibilidade emocional ou vontade de se isolar podem surgir sem uma causa clara.',
              },
              {
                num: 'III',
                title: 'Sono fragmentado',
                desc: 'A noite deixa de ser reparadora e a mente parece permanecer em alerta.',
              },
              {
                num: 'IV',
                title: 'Corpo em tensão',
                desc: 'Dores, rigidez, aperto no peito, tension cervical ou desconfortos recorrentes podem acompanhar a sobrecarga emocional.',
              },
              {
                num: 'V',
                title: 'Sensação de não se reconhecer',
                desc: 'Em algumas fases, a mulher percebe que algo mudou no corpo, no humor e na forma de viver a própria rotina.',
              },
              {
                num: 'VI',
                title: 'Exigência constante',
                desc: 'Mesmo cansada, ela continua se cobrando, funcionando e sustentando tudo ao redor.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-clinic-bg-white p-8 rounded-2xl border border-clinic-brand-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
              >
                <span className="absolute top-4 right-6 font-serif text-clinic-brand-primary/30 text-3xl italic tracking-wider">
                  {card.num}
                </span>
                <span className="w-1.5 h-1.5 bg-clinic-brand-primary rounded-full inline-block mb-4" />
                <h3 className="font-serif text-lg font-medium text-clinic-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-clinic-text-secondary text-sm font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CLIMATÉRIO E MENOPAUSA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="heading-label">
              Transição Biológica e Psíquica
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary leading-tight">
              Climatério e menopausa: quando a ansiedade aparece sem pedir licença
            </h2>
            <div className="text-clinic-text-secondary font-light text-base leading-relaxed space-y-6">
              <p>
                O climatério pode trazer mudanças hormonais que afetam diretamente a vida emocional. Oscilações de humor, irritabilidade, ansiedade sem motivo aparente, insônia e sensação de perda de identidade podem surgir em uma fase em que muitas mulheres ainda se sentem obrigadas a continuar produtivas, disponíveis e fortes.
              </p>
              <p>
                Essa fase merece um cuidado emocional tão atento quanto o cuidado físico. Quando corpo e mente são olhados juntos, a mulher pode compreender melhor o que está vivendo e atravessar essa transição com mais consciência e acolhimento.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Oscilações bruscas de humor",
                  "Ansiedade sem causa aparente",
                  "Insônia e sono fragmentado",
                  "Irritabilidade não reconhecida antes",
                  "Sensação de perda de identidade",
                  "Fadiga emocional persistente"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-brand-primary" />
                    <span className="text-sm font-light text-clinic-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-md border-4 border-white max-w-[500px] mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781977697/Crises_de_ansiedade_Psiquiatra_Mococa_4_dlsult.png"
                alt="Mulher no climatério recebendo cuidado emocional integrativo em Mococa"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DOR CRÔNICA E FIBROMIALGIA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image (order 2 on mob, 1 on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-md border-4 border-white max-w-[500px] mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781977698/Psican%C3%A1lise_Mococa_ansiedade_2_txrgyj.png"
                alt="Mulher com sinais de dor crônica e sobrecarga emocional em cuidado integrativo"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text (order 1 on mob, 2 on desktop) */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="heading-label">
              Somatização Sistêmica
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary leading-tight">
              Dor crônica e fibromialgia: quando o emocional pesa no corpo
            </h2>
            <div className="text-clinic-text-secondary font-light text-base leading-relaxed space-y-6">
              <p>
                A fibromialgia e outras condições de dor crônica podem ser intensificadas por estresse acumulado, traumas não elaborados, noites mal dormidas e um estado constante de alerta interno.
              </p>
              <p className="font-medium text-clinic-brand-primary">
                Isso não significa que a dor seja imaginária. Significa que corpo e emoção podem estar profundamente conectados.
              </p>
              <p>
                A psicanálise e a hipnoterapia clínica podem atuar como cuidado complementar ao tratamento médico, ajudando a reduzir gatilhos emocionais, tension interna e padrões que mantêm o corpo em estado de defesa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: ESTRESSE CRÔNICO */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="heading-label">
              Sobrecarga Invisível
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary leading-tight">
              Estresse crônico: o desgaste que se acumula em silêncio
            </h2>
            <div className="text-clinic-text-secondary font-light text-base leading-relaxed space-y-6">
              <p>
                O estresse prolongado mantém o corpo em estado constante de vigilância. Com o tempo, essa tensão pode afetar sono, digestão, energia, humor, memória, foco e disposição.
              </p>
              <p>
                Muitas mulheres só percebem o nível da sobrecarga quando o corpo começa a falhar. Antes disso, continuam funcionando, sorrindo, respondendo, produzindo e cuidando de todos.
              </p>
              <p>
                A naturopatia e a iridologia, dentro do Método Acalme-se, ajudam a ampliar o olhar sobre o corpo e seus sinais, sempre como parte de um cuidado complementar, respeitando o acompanhamento médico necessário para cada caso.
              </p>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-md border-4 border-white max-w-[500px] mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781977696/Psiquiatra_Mococa_ansiedade_2_vfa0v7.png"
                alt="Mulher em rotina de trabalho representando estresse crônico feminino e saúde emocional"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: COMO ATUA O MÉTODO ACALME-SE */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image (order 2 on mob, 1 on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-md border-4 border-white max-w-[500px] mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781977690/Psican%C3%A1lise_Mococa_ansiedade_cc6lbd.png"
                alt="Cuidado integrativo para mulheres em Mococa com foco em corpo, mente e emoções"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text (order 1 on mob, 2 on desktop) */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="heading-label">
              Trilogia Terapêutica
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary leading-tight">
              Como o Método Acalme-se atua no cuidado integrativo da mulher
            </h2>
            <div className="text-clinic-text-secondary font-light text-base leading-relaxed space-y-6">
              <p>
                O Método Acalme-se não trata a mulher como um conjunto de sintomas isolados. Ele considera sua história, seus vínculos, suas fases hormonais, seus padrões emocionais, suas dores silenciosas e a forma como o corpo aprendeu a responder à sobrecarga.
              </p>
              <p>
                A proposta é integrar escuta emocional, psicanálise, hipnoterapia clínica e naturopatia para construir um cuidado mais profundo, personalizado e coerente com o que cada mulher vive.
              </p>
              <p className="italic border-l-2 border-clinic-brand-primary pl-4 text-sm">
                Não substitui acompanhamento médico, exames ou tratamentos prescritos. Atua como complemento, oferecendo um caminho de compreensão emocional e reorganização interna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: ANSIEDADE DO DIA A DIA */}
      <section className="py-20 bg-clinic-bg-secondary px-6 lg:px-12 text-center border-t border-b border-clinic-brand-primary/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="heading-label">
            Ansiedade Generalizada e Sobrecarga
          </span>
          <h2 className="font-serif font-light text-3xl text-clinic-text-primary">
            Quando o foco principal é ansiedade do dia a dia
          </h2>
          <p className="text-clinic-text-secondary font-light text-base leading-relaxed">
            Se o que você sente está mais ligado à mente acelerada, perfeicionismo, culpa ao descansar, medo de decepcionar e sensação de estar sempre no limite, conheça também nosso conteúdo dedicado à Ansiedade Feminina.
          </p>
          <div className="pt-4">
            <Link
              to="/ansiedade-feminina"
              className="inline-flex items-center text-clinic-brand-primary hover:text-clinic-brand-dark font-bold text-xs uppercase tracking-widest group transition-colors"
            >
              Ler sobre Ansiedade Feminina
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ: PERGUNTAS FREQUENTES */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-primary border-b border-clinic-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="heading-label">
              Esclarecimentos Especiais
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-clinic-text-primary">
              Perguntas frequentes sobre saúde integrativa da mulher
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className="bg-clinic-bg-white rounded-xl border border-clinic-brand-primary/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-clinic-bg-primary/40 transition-colors"
                  >
                    <span className="font-serif text-clinic-text-primary font-medium text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-clinic-brand-primary transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-96 border-t border-clinic-brand-primary/10' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 text-sm text-clinic-text-secondary font-light leading-relaxed bg-clinic-bg-white">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-clinic-bg-secondary text-center relative overflow-hidden">
        {/* Subtle dynamic decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-clinic-brand-primary/5 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-clinic-brand-primary/10 rounded-full blur-xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="w-12 h-px bg-clinic-brand-primary mx-auto mb-4" />
          <h2 className="font-serif font-light text-3xl lg:text-5xl text-clinic-text-primary leading-tight">
            Seu corpo não precisa continuar falando sozinho
          </h2>
          <p className="text-clinic-text-secondary font-light text-lg leading-relaxed max-w-2xl mx-auto">
            Quando sintomas físicos e emocionais começam a se misturar, o cuidado precisa olhar para a mulher inteira: corpo, mente, história e fase de vida.
            <br /><br />
            Faça uma triagem emocional gratuita e dê o primeiro passo para compreender o que está por trás do que você sente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              to="/triagem"
              className="inline-block text-center px-10 py-5 bg-clinic-brand-primary text-clinic-text-light hover:bg-clinic-brand-dark font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              Fazer Triagem Emocional Gratuita
            </Link>
            <a
              href="https://wa.me/5519992416095?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+cl%C3%ADnica+sobre+o+tratamento+de+sa%C3%BAde+integrativa+da+mulher."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-clinic-brand-primary text-clinic-text-primary hover:bg-clinic-brand-primary/10 font-bold text-xs uppercase tracking-widest rounded-full transition-all w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-clinic-brand-primary" />
              Falar com a clínica
            </a>
          </div>
          <div className="pt-8 text-[11px] uppercase tracking-widest text-clinic-brand-primary font-medium">
            Método Acalme-se: Cuidado com Alma e Ciência
          </div>
        </div>
      </section>
    </main>
  );
};

export default SaudeEmocionalFemininaPage;

