import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Compass, Activity, Moon, Heart, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '../../components/SEO';

const AnsiedadeFemininaPage = () => {
  return (
    <main className="bg-white">
      <SEO
        title="Ansiedade Feminina em Mococa | Método Acalme-se"
        description="Entenda os sinais silenciosos da ansiedade feminina e conheça uma abordagem acolhedora com psicanálise e hipnoterapia em Mococa-SP pelo Método Acalme-se."
        keywords="ansiedade feminina, sinais de ansiedade em mulheres, esgotamento emocional feminino, sobrecarga mental feminina, tratamento ansiedade feminina, psicanalista ansiedade feminina Mococa"
        canonical="https://www.metodoacalmese.com.br/ansiedade-feminina"
      />

      {/* HERO */}
      <section className="bg-[#FAF6F2] py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-4">
              Para Mulheres
            </span>
            <h1 className="font-serif font-light text-4xl lg:text-5xl xl:text-6xl text-[#3D3630] leading-[1.15] mb-6">
              Ansiedade Feminina: por que ela se manifesta de <br />
              <span className="italic text-[#B89890]">formas tão silenciosas?</span>
            </h1>
            <div className="text-lg text-[#5C534D] font-light leading-relaxed space-y-4">
              <p>
                Você cuida de tudo. Do trabalho, da casa, da família, das expectativas e até do que ninguém percebe.
              </p>
              <p className="font-medium text-[#3D3630]">
                Por fora, parece controle.
                <br />
                Por dentro, pode existir um cansaço que vai se acumulando em silêncio.
              </p>
              <p>
                Muitas mulheres não percebem que estão ansiosas porque aprenderam a funcionar mesmo exaustas. Continuam presentes, produtivas, responsáveis e disponíveis. Mas o corpo começa a avisar. A mente perde o descanso. O coração acelera. O sono muda. A paciência diminui. E, aos poucos, algo dentro começa a pedir cuidado.
              </p>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(74,63,63,0.06)] border-4 border-white">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781976158/Sintomas_de_ansiedade_feminina_Mococa_qnweck.png"
                alt="Mulher serena em ambiente claro representando ansiedade feminina em Mococa"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO A ANSIEDADE SE ESCONDE ATRÁS DA FORÇA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Column containing the image (second on mobile, left on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-[480px] mx-auto rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(74,63,63,0.06)] border-4 border-white">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781978080/Ansiedade_Psiquiatra_Mococa_4_tii1yd.png"
                alt="Mulher em rotina de trabalho elegante representando carga mental feminina"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
          {/* Column containing the text (first on mobile, right on desktop) */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-[#3D3630] mb-8 leading-tight">
              Quando a ansiedade se esconde atrás da força
            </h2>
            <div className="text-[#5C534D] font-light text-[1.05rem] leading-relaxed space-y-6">
              <p>
                A ansiedade feminina nem sempre aparece como descontrole. Muitas vezes, ela se disfarça de responsabilidade, eficiência e capacidade de suportar tudo em silêncio.
              </p>
              <p>
                Ela pode estar presente na necessidade de dar conta de tudo, na dificuldade de relaxar, na culpa ao descansar, no medo de decepcionar, na autocobrança constante e naquela sensação íntima de que sempre falta alguma coisa, mesmo quando você já fez muito.
              </p>
              <p>
                Mulheres costumam carregar, ao mesmo tempo, exigências profissionais, familiares, emocionais, sociais e afetivas. Quando essa sobrecarga se repete por anos sem ser elaborada, o corpo e a mente podem entrar em um estado interno de alerta permanente.
              </p>
              <div className="border-l-2 border-[#C5A880] pl-6 py-1 italic font-normal text-lg space-y-2 text-[#4A554A]">
                <p>Não é fraqueza.</p>
                <p>Não é drama.</p>
                <p>Não é exagero.</p>
              </div>
              <p>
                É o resultado de uma vida emocional que precisou sustentar demais, por tempo demais, muitas vezes sem espaço para ser escutada.
              </p>
              <p>
                E quando uma mulher passa muito tempo sendo forte para todos, chega um momento em que o corpo começa a pedir cuidado por ela.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS SILENCIOSOS */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF6F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif font-light text-3xl lg:text-4xl text-[#3D3630] mb-12 text-center">
            Sinais que muitas mulheres ignoram
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side: Cards (60% width of the container -> col-span-7) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Carga mental excessiva',
                    desc: 'A mente permanece ativa mesmo quando o dia terminou. Há sempre algo para lembrar, prever, resolver ou controlar. O descanso acontece por fora, mas por dentro a sensação é de vigilância constante.',
                    icon: Brain,
                  },
                  {
                    title: 'Perfeccionismo paralisante',
                    desc: 'O medo de errar ou decepcionar faz com que até decisões simples pareçam pesadas. Mesmo quando tudo está sendo feito com dedicação, a sensação interna é de que poderia ter sido melhor.',
                    icon: Compass,
                  },
                  {
                    title: 'Esgotamento emocional',
                    desc: 'Não é apenas cansaço físico. É uma exaustão mais profunda, que pode aparecer como irritabilidade, vontade de chorar sem motivo claro, impaciência ou sensação de estar emocionalmente no limite.',
                    icon: Activity,
                  },
                  {
                    title: 'Insônia e pensamentos repetitivos',
                    desc: 'A noite chega, mas a mente continua trabalhando. Conversas são revisitadas, preocupações ganham força e problemas do dia seguinte parecem urgentes antes mesmo de acontecerem.',
                    icon: Moon,
                  },
                  {
                    title: 'Culpa por se priorizar',
                    desc: 'Cuidar de si parece egoísmo. Descansar parece abandono. Dizer "não" gera desconforto. A mulher se acostuma a estar disponível para todos, mesmo quando já não tem energia para si.',
                    icon: Heart,
                  },
                  {
                    title: 'Sintomas físicos',
                    desc: 'A ansiedade também fala pelo corpo. Aperto no peito, taquicardia, tension muscular, dores, desconfortos digestivos e sensação de peso podem ser sinais de uma sobrecarga emocional que precisa ser compreendida com profundidade.',
                    icon: Sparkles,
                  },
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl border border-[#C5A880]/15 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FAF6F2] flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5 text-[#C5A880]" />
                      </div>
                      <h3 className="font-serif text-[#3D3630] font-medium text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5C534D] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Image (40% width of the container -> col-span-5) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(74,63,63,0.06)] border-4 border-white max-w-[420px] mx-auto lg:max-w-none">
                <img
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1781976162/Psican%C3%A1lise_Mococa_wsgyvr.png"
                  alt="Mãos femininas em gesto de cuidado representando sintomas emocionais da ansiedade"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO VISUAL DE RESPIRO EMOCIONAL */}
      <section className="py-20 bg-white px-6 lg:px-12">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-[#FAF8F5] p-8 lg:p-12 border border-[#C5A880]/10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Column with beautiful large Quote */}
            <div className="md:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-bold block mb-4">
                Reflexão Silenciosa
              </span>
              <blockquote className="font-serif font-light text-2xl lg:text-3xl text-[#3D3630] leading-snug italic">
                "Nem toda mulher ansiosa parece ansiosa. Muitas apenas aprenderam a continuar funcionando em silêncio."
              </blockquote>
            </div>
            {/* Column with image */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-sm border-2 border-white">
                <img
                  src="https://res.cloudinary.com/djl7c37my/image/upload/v1781976147/Crise_de_ansiedade_Psiquiatra_Mococa_3_fq0mn4.png"
                  alt="Ambiente acolhedor e feminino para cuidado emocional e ansiedade"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO O MÉTODO TRATA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FDFBF9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-light text-3xl lg:text-4xl text-[#3D3630] mb-8 leading-tight">
            Como o Método Acalme-se olha para a causa, não apenas para o sintoma
          </h2>
          <div className="text-[#5C534D] font-light text-[1.05rem] leading-relaxed space-y-6">
            <p>
              O Método Acalme-se nasceu da compreensão de que aliviar sintomas sem investigar suas raízes pode trazer uma melhora temporária, mas não necessariamente uma transformação profunda.
            </p>
            <p>
              No acompanhamento, a ansiedade é compreendida como uma linguagem do mundo interno. Ela pode revelar padrões de exigência, experiências emocionais não elaboradas, medos antigos, crenças inconscientes e formas de funcionamento que mantêm o corpo em estado de alerta.
            </p>
            <p className="border-l-2 border-[#C5A880] pl-6 italic font-normal text-lg my-8 text-[#4A554A]">
              A proposta une psicanálise, hipnoterapia clínica e abordagens integrativas para ampliar a compreensão sobre o que sustenta a ansiedade e abrir caminho para uma mudança mais consistente.
            </p>
            <p>
              O objetivo não é apenas "controlar" a ansiedade.
            </p>
            <div className="font-medium text-[#3D3630] space-y-2 py-2">
              <p>É compreender o que ela está tentando comunicar.</p>
              <p>É desarmar o que mantém você em alerta.</p>
              <p>É recuperar uma forma mais leve, consciente e inteira de viver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK TO SAUDE INTEGRATIVA DA MULHER */}
      <section className="pb-20 bg-[#FDFBF9] px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto border-t border-[#C5A880]/15 pt-12">
          <p className="text-[#5C534D] font-light text-[1.05rem] leading-relaxed mb-4">
            Se você está no climatério, enfrenta dor crônica, alterações de humor, fadiga persistente ou sintomas físicos recorrentes, conheça também nosso conteúdo sobre Saúde Integrativa da Mulher.
          </p>
          <Link
            to="/saude-emocional-feminina"
            className="inline-flex items-center text-[#B89890] hover:text-[#3D3630] font-bold text-sm uppercase tracking-wider hover:underline transition-colors group"
          >
            Acessar Saúde Integrativa da Mulher
            <ArrowRight className="w-4 h-4 ml-2 max-h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* CTA FINAL (REVISED WITH DEEP BROWN BRAND COLORS & ADJUSTED OBJECT_POSITION OF PORTRAIT TO PREVENT HEAD CLIP) */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#F5F0E8] text-[#3A3A3A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-bold block mb-4">
              Um convite ao cuidado
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-4.5xl text-[#3D3630] mb-6 leading-tight">
              Você não precisa continuar sustentando tudo sozinha por dentro
            </h2>
            <p className="text-[#3A3A3A] font-light text-lg mb-8 leading-relaxed">
              Quando a ansiedade feminina é compreendida em profundidade, o cuidado deixa de ser genérico.
              <br /><br />
              Ele passa a considerar sua história, seu corpo, seus vínculos, seus padrões emocionais e o modo como você aprendeu a sobreviver mesmo quando já precisava parar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/metodo-e-tratamento"
                className="inline-block text-center px-8 py-4 bg-clinic-brand-primary hover:bg-clinic-brand-dark text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Conhecer o Método Acalme-se
              </Link>
              <a
                href="https://wa.me/5519992416095?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+cl%C3%ADnica+sobre+o+tratamento+de+ansiedade+feminina."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-clinic-brand-primary text-clinic-brand-primary hover:bg-clinic-brand-primary/10 font-bold text-xs uppercase tracking-widest rounded-full transition-all"
              >
                <MessageCircle className="w-4 h-4 text-clinic-brand-primary" />
                Falar com a clínica
              </a>
            </div>
          </div>
          <div>
            <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-sm border-4 border-white max-w-[540px] mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1781976159/Ansiedade_Psiquiatra_em_Mococa_sm60dg.png"
                alt="Ambiente acolhedor e de calma para cuidado emocional e ansiedade"
                className="w-full h-full object-cover object-[center_12%]" // custom position to pull the top of image down, preventing the cut head
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnsiedadeFemininaPage;
