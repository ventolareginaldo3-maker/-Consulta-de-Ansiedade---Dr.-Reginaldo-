import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';

const PsiquiatraOuPsicanalista = () => {
  return (
    <section className="min-h-screen bg-clinic-bg-primary pt-24 pb-20">
      <SEO 
        title="Psiquiatra, Psicólogo ou Psicanalista em Mococa? | Diferenças"
        description="Entenda as diferenças entre psiquiatra, psicólogo e psicanalista em Mococa. Descubra qual tratamento é ideal para ansiedade. Atendimento com Dr. Reginaldo Vêntola."
        keywords="psiquiatra mococa, psicanalista mococa, psicologo mococa, tratamento ansiedade mococa, psiquiatra ou psicanalista, saude mental mococa"
        canonical="https://www.metodoacalmese.com.br/psiquiatra-ou-psicanalista"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual a diferença entre psiquiatra, psicólogo e psicanalista?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O psiquiatra é médico e pode prescrever medicamentos. O psicólogo utiliza técnicas comportamentais e cognitivas baseadas em evidências. O psicanalista investiga o inconsciente, traumas e padrões emocionais profundos para compreender a raiz do sofrimento."
              }
            },
            {
              "@type": "Question",
              "name": "Psiquiatra ou psicólogo: qual é melhor para ansiedade?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para ansiedade severa com sintomas físicos intensos, o psiquiatra pode ser necessário para estabilização medicamentosa. Para ansiedade leve a moderada, psicólogo ou psicanalista são eficazes. Em muitos casos, a combinação dos dois é o tratamento ideal."
              }
            },
            {
              "@type": "Question",
              "name": "Psicólogo e psicanalista são a mesma coisa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. O psicólogo é formado em Psicologia e pode usar diversas abordagens como TCC. O psicanalista se especializa na teoria freudiana e foca na investigação do inconsciente. Todo psicanalista pode ser psicólogo, mas nem todo psicólogo é psicanalista."
              }
            },
            {
              "@type": "Question",
              "name": "Preciso de receita para consultar psiquiatra em Mococa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. A consulta com psiquiatra, psicólogo ou psicanalista em Mococa pode ser agendada diretamente, sem necessidade de encaminhamento médico ou receita."
              }
            },
            {
              "@type": "Question",
              "name": "O psicanalista pode substituir o psiquiatra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende do caso. Para transtornos que exigem medicação, o acompanhamento psiquiátrico é indispensável. O psicanalista atua na dimensão emocional e pode complementar o tratamento medicamentoso, oferecendo compreensão profunda da causa do sofrimento."
              }
            }
          ]
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* H1 */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-text-rose block mb-4">Guia de Orientação</span>
          <h1 className="font-serif text-3xl md:text-5xl text-clinic-text-primary font-light leading-tight mb-6">
            Psiquiatra, Psicólogo ou Psicanalista em Mococa? Entenda as Diferenças e Escolha o Melhor Tratamento
          </h1>
          <p className="text-lg md:text-xl text-clinic-text-secondary font-light max-w-3xl mx-auto leading-relaxed italic font-serif">
            Quando os sintomas de ansiedade se tornam insuportáveis, muitas pessoas em Mococa buscam ajuda profissional, mas ficam na dúvida: preciso de um psiquiatra, de um psicólogo ou de um psicanalista? Cada profissional tem uma formação e uma abordagem diferente. Entender essas diferenças é o primeiro passo para escolher o tratamento mais adequado ao seu caso.
          </p>
        </div>

        {/* CONTEÚDO */}
        <div className="space-y-12 text-clinic-text-secondary leading-relaxed font-light text-base md:text-lg">
          
          {/* Psiquiatra */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              O que faz um Psiquiatra em Mococa?
            </h2>
            <div className="space-y-4">
              <p>
                O psiquiatra é um médico formado em Medicina com especialização em Psiquiatria. Ele é o único dos três profissionais que pode prescrever medicamentos. Quando a ansiedade se manifesta com sintomas físicos intensos, como taquicardia, falta de ar, insônia severa ou crises de pânico, o psiquiatra pode indicar ansiolíticos ou antidepressivos para estabilizar o organismo.
              </p>
              <p>
                A medicação atua diretamente na química cerebral, regulando neurotransmissores como a serotonina. Isso proporciona alívio imediato, mas não resolve a causa emocional profunda que gerou o desequilíbrio. Por isso, muitos pacientes que iniciam o tratamento com um psiquiatra em Mococa acabam buscando também uma terapia para compreender a origem do sofrimento.
              </p>
            </div>
          </section>

          {/* Psicólogo */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              O que faz um Psicólogo em Mococa?
            </h2>
            <div className="space-y-4">
              <p>
                O psicólogo é formado em Psicologia e utiliza abordagens científicas baseadas em evidências. A Terapia Cognitivo-Comportamental (TCC), por exemplo, é uma das técnicas mais utilizadas: ela identifica pensamentos automáticos negativos e os substitui por padrões mais saudáveis.
              </p>
              <p>
                Se você busca um psicólogo em Mococa, encontrará um profissional focado em desenvolver estratégias práticas de enfrentamento. A TCC é estruturada, possui metas definidas e geralmente dura de 12 a 20 sessões. É uma excelente escolha para ansiedade generalizada, fobias e transtornos de pânico, especialmente quando o objetivo é obter resultados em prazo relativamente curto.
              </p>
              <p>
                No entanto, quando a ansiedade tem raízes profundas em traumas de infância, perdas não elaboradas ou padrões emocionais repetitivos que o próprio paciente não consegue identificar, a abordagem psicanalítica pode oferecer uma compreensão mais abrangente.
              </p>
            </div>
          </section>

          {/* Psicanalista */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              O que faz um Psicanalista em Mococa?
            </h2>
            <div className="space-y-4">
              <p>
                O psicanalista investiga os processos inconscientes que comandam comportamentos, emoções e pensamentos sem que a pessoa perceba. Diferente do psicólogo, que trabalha principalmente com o consciente e o comportamento, o psicanalista mergulha na história pessoal, nos sonhos, nas repetições e nos sintomas para desmontar ciclos automáticos de sofrimento.
              </p>
              <p>
                La ansiedade crônica, muitas vezes, é um sinal de que algo na estrutura emocional da pessoa precisa ser compreendido e reorganizado, não apenas controlado. O psicanalista não dá receitas prontas: ele acompanha o paciente em um processo de autoconhecimento que leva à transformação estrutural da personalidade.
              </p>
              <p>
                Dr. Reginaldo Vêntola, psicanalista em Mococa, utiliza o Método Acalme-se, que une a profundidade da psicanálise clínica a técnicas integrativas modernas como hipnoterapia e naturopatia, oferecendo um resgate emocional completo.
              </p>
            </div>
          </section>

          {/* Qual Escolher */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Psiquiatra, Psicólogo ou Psicanalista: Qual Escolher?
            </h2>
            <p className="mb-6">
              A escolha depende do seu momento e da natureza do seu sofrimento:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-clinic-bg-primary/55 p-6 rounded-2xl border border-clinic-border-subtle">
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-3">Escolha o psiquiatra se:</h3>
                <ul className="space-y-2 text-sm text-clinic-text-secondary">
                  <li>• Os sintomas físicos são intensos e incapacitantes</li>
                  <li>• Você precisa de estabilização química imediata</li>
                  <li>• Há pensamentos suicidas ou autolesão</li>
                </ul>
              </div>

              <div className="bg-clinic-bg-primary/55 p-6 rounded-2xl border border-clinic-border-subtle">
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-3">Escolha o psicólogo se:</h3>
                <ul className="space-y-2 text-sm text-clinic-text-secondary">
                  <li>• Você prefere uma abordagem direta e orientada a objetivos</li>
                  <li>• Quer técnicas práticas para crises de ansiedade</li>
                  <li>• Busca resultados em prazo definido</li>
                </ul>
              </div>

              <div className="bg-clinic-bg-primary/55 p-6 rounded-2xl border border-clinic-border-subtle">
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-3">Escolha o psicanalista se:</h3>
                <ul className="space-y-2 text-sm text-clinic-text-secondary">
                  <li>• A ansiedade é recorrente e você sente que não sabe a causa</li>
                  <li>• Já tentou outras abordagens e os sintomas voltam</li>
                  <li>• Quer uma transformação profunda e duradoura, não apenas controle</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm italic">
              Muitas vezes, a melhor solução é a combinação: o psiquiatra estabiliza, o psicólogo ou psicanalista trabalha a causa. O importante é não permanecer sozinho com o sofrimento.
            </p>
          </section>

          {/* Tabela Comparativa */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm overflow-hidden">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Tabela Comparativa
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-clinic-border-subtle bg-clinic-bg-primary/50">
                    <th className="py-4 px-4 font-bold text-clinic-text-primary">Critério</th>
                    <th className="py-4 px-4 font-bold text-clinic-text-primary">Psiquiatra</th>
                    <th className="py-4 px-4 font-bold text-clinic-text-primary">Psicólogo</th>
                    <th className="py-4 px-4 font-bold text-clinic-text-primary">Psicanalista</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-clinic-border-subtle/50">
                  <tr>
                    <td className="py-4 px-4 font-bold text-clinic-text-primary">Formação</td>
                    <td className="py-4 px-4">Medicina e Psiquiatria</td>
                    <td className="py-4 px-4">Psicologia</td>
                    <td className="py-4 px-4">Psicologia e Psicanálise</td>
                  </tr>
                  <tr className="bg-clinic-bg-primary/10">
                    <td className="py-4 px-4 font-bold text-clinic-text-primary">Medicamentos</td>
                    <td className="py-4 px-4">Sim</td>
                    <td className="py-4 px-4">Não</td>
                    <td className="py-4 px-4">Não</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-clinic-text-primary">Foco</td>
                    <td className="py-4 px-4">Química cerebral</td>
                    <td className="py-4 px-4">Comportamento</td>
                    <td className="py-4 px-4">Inconsciente</td>
                  </tr>
                  <tr className="bg-clinic-bg-primary/10">
                    <td className="py-4 px-4 font-bold text-clinic-text-primary">Duração</td>
                    <td className="py-4 px-4">Consultas periódicas</td>
                    <td className="py-4 px-4">12-20 sessões</td>
                    <td className="py-4 px-4">Médio a longo prazo</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-clinic-text-primary">Ideal para</td>
                    <td className="py-4 px-4">Crise aguda</td>
                    <td className="py-4 px-4">Mudança rápida</td>
                    <td className="py-4 px-4">Transformação profunda</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dr. Reginaldo Section */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm text-center">
            {/* Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-clinic-brand-primary/40 bg-[#161413]">
              <img 
                src="https://res.cloudinary.com/djl7c37my/image/upload/v1780252691/Gemini_Generated_Image_h03i37h03i37h03i_grkrmy.png" 
                alt="Dr. Reginaldo Vêntola" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                loading="lazy" 
              />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-4">
              Tratamento de Ansiedade em Mococa com Dr. Reginaldo Vêntola
            </h2>
            <p className="max-w-2xl mx-auto text-base text-clinic-text-secondary leading-relaxed mb-8">
              Se você está em Mococa ou região e busca um atendimento que vá além do controle dos sintomas, Dr. Reginaldo Vêntola oferece um acompanhamento psicanalítico integrativo. O Método Acalme-se foi desenvolvido para quem quer compreender a raiz da ansiedade e construir uma relação mais saudável com as próprias emoções.
            </p>

            <div className="relative aspect-video max-w-2xl mx-auto bg-brand-ink rounded-[2rem] overflow-hidden shadow-2xl border border-brand-ink/5 mb-10">
              <YouTubeEmbed 
                videoId="MWNWB8HT3fY" 
                title="Diferença entre Psiquiatra e Psicanalista - Dr. Reginaldo Vêntola" 
              />
            </div>

            <div className="flex justify-center mt-6">
              <Link 
                to="/agendar" 
                className="px-10 py-5 bg-clinic-brand-primary hover:bg-clinic-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-xl inline-flex items-center gap-2 animate-cta-pulse"
              >
                Agende sua Consulta em Mococa
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};

export default PsiquiatraOuPsicanalista;
