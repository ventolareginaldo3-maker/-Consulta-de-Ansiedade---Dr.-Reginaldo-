import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, HelpCircle, ShieldCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export const HomeSEOSections = () => {
  return (
    <div className="bg-clinic-bg-primary text-clinic-text-primary">
      {/* SEÇÃO DE SINTOMAS */}
      <section className="py-20 lg:py-32 px-6 border-t border-clinic-border-subtle bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-text-rose block mb-4">Sintomas</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-clinic-text-primary leading-tight">
              Os sinais que a ansiedade deixa no seu corpo
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-clinic-text-secondary font-light leading-relaxed mb-12">
            <p className="text-lg md:text-xl text-center mb-10">
              A ansiedade não é apenas "nervosismo". Ela se manifesta de formas que muitas vezes não reconhecemos:
            </p>

            <div className="space-y-8">
              <div className="bg-clinic-bg-primary/40 p-8 rounded-3xl border border-clinic-border-subtle hover:bg-clinic-bg-primary/70 transition-colors">
                <h3 className="font-sans text-lg font-bold text-clinic-text-primary mb-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-clinic-text-rose rounded-full inline-block"></span>
                  Carga mental excessiva
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  A sensação de que sua cabeça nunca desliga, mesmo quando deveria descansar. Você carrega o peso do mundo nos ombros e não consegue soltar.
                </p>
              </div>

              <div className="bg-clinic-bg-primary/40 p-8 rounded-3xl border border-clinic-border-subtle hover:bg-clinic-bg-primary/70 transition-colors">
                <h3 className="font-sans text-lg font-bold text-clinic-text-primary mb-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-clinic-text-rose rounded-full inline-block"></span>
                  Perfeccionismo paralisante
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  O medo de não ser suficiente, de errar, de decepcionar. Cada decisão vira uma batalha interior.
                </p>
              </div>

              <div className="bg-clinic-bg-primary/40 p-8 rounded-3xl border border-clinic-border-subtle hover:bg-clinic-bg-primary/70 transition-colors">
                <h3 className="font-sans text-lg font-bold text-clinic-text-primary mb-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-clinic-text-rose rounded-full inline-block"></span>
                  Esgotamento emocional
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Vazio aparentemente sem causa. Você faz tudo certo, mas sente que algo essencial falta.
                </p>
              </div>

              <div className="bg-clinic-bg-primary/40 p-8 rounded-3xl border border-clinic-border-subtle hover:bg-clinic-bg-primary/70 transition-colors">
                <h3 className="font-sans text-lg font-bold text-clinic-text-primary mb-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-clinic-text-rose rounded-full inline-block"></span>
                  Insônia e pensamentos vãos
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Acordar às 3h da manhã sem conseguir voltar a dormir, com a mente acelerada em loop infinito.
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-center mt-12 italic font-serif text-clinic-text-rose">
              Se você se identificou com algum desses sintomas, saiba: a ansiedade tem cura. E ela começa com compreensão, não com controle.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO PSICÓLOGO, PSIQUIATRA OU PSICANALISTA */}
      <section className="py-20 lg:py-32 px-6 bg-clinic-bg-primary border-t border-clinic-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-brand-primary block mb-4">Escolha de Profissional</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-clinic-text-primary leading-tight">
              Psicólogo, Psiquiatra ou Psicanalista em Mococa?
            </h2>
          </div>

          <div className="text-clinic-text-secondary font-light leading-relaxed mb-12">
            <p className="text-lg md:text-xl text-center mb-12">
              Muitas pessoas chegam até nós na dúvida sobre qual profissional procurar. A verdade é que cada abordagem tem seu valor:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-clinic-border-subtle flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-clinic-text-primary mb-4">O Psiquiatra</h3>
                  <p className="text-sm leading-relaxed text-clinic-text-secondary">
                    O psiquiatra em Mococa é um médico que estabiliza sintomas físicos intensos com medicação, essencial em crises agudas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-clinic-border-subtle flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-clinic-text-primary mb-4">O Psicólogo</h3>
                  <p className="text-sm leading-relaxed text-clinic-text-secondary">
                    O psicólogo em Mococa utiliza técnicas científicas como a Terapia Cognitivo-Comportamental (TCC) para mudanças comportamentais rápidas e práticas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-clinic-border-subtle flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-clinic-text-primary mb-4">O Psicanalista</h3>
                  <p className="text-sm leading-relaxed text-clinic-text-secondary">
                    O psicanalista em Mococa investiga a raiz emocional do sofrimento, desmontando padrões inconscientes que mantêm a ansiedade em alerta constante.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-8 rounded-[2rem] border border-clinic-brand-primary/20 text-center max-w-3xl mx-auto shadow-md">
              <p className="text-base md:text-lg leading-relaxed text-clinic-text-primary">
                No Método Acalme-se, Dr. Reginaldo Vêntola, psicanalista, naturopata e hipnoterapeuta, une a profundidade da psicanálise clínica a técnicas integrativas modernas, oferecendo um resgate emocional completo em Mococa/SP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA */}
      <section className="py-20 lg:py-32 px-6 bg-white border-t border-clinic-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-text-rose block mb-4">Metodologia</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-clinic-text-primary leading-tight">
              Como funciona o Método Acalme-se
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4 items-start bg-clinic-bg-primary/30 p-8 rounded-3xl border border-clinic-border-subtle">
              <div className="w-10 h-10 rounded-full bg-clinic-brand-primary/10 flex items-center justify-center font-bold text-clinic-brand-primary text-base shrink-0">1</div>
              <div>
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-2">Triagem gratuita</h3>
                <p className="text-sm text-clinic-text-secondary leading-relaxed">
                  Uma conversa inicial sem compromisso para entender seu caso e suas necessidades.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-clinic-bg-primary/30 p-8 rounded-3xl border border-clinic-border-subtle">
              <div className="w-10 h-10 rounded-full bg-clinic-brand-primary/10 flex items-center justify-center font-bold text-clinic-brand-primary text-base shrink-0">2</div>
              <div>
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-2">Diagnóstico integrativo</h3>
                <p className="text-sm text-clinic-text-secondary leading-relaxed">
                  Compreensão da ansiedade além dos sintomas, olhando para o todo: emocional, físico e energético.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-clinic-bg-primary/30 p-8 rounded-3xl border border-clinic-border-subtle">
              <div className="w-10 h-10 rounded-full bg-clinic-brand-primary/10 flex items-center justify-center font-bold text-clinic-brand-primary text-base shrink-0">3</div>
              <div>
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-2">Tratamento personalizado</h3>
                <p className="text-sm text-clinic-text-secondary leading-relaxed">
                  Psicanálise clínica combinada com hipnoterapia e naturopatia, adaptado à sua história.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-clinic-bg-primary/30 p-8 rounded-3xl border border-clinic-border-subtle">
              <div className="w-10 h-10 rounded-full bg-clinic-brand-primary/10 flex items-center justify-center font-bold text-clinic-brand-primary text-base shrink-0">4</div>
              <div>
                <h3 className="font-sans font-bold text-base text-clinic-text-primary mb-2">Acompanhamento contínuo</h3>
                <p className="text-sm text-clinic-text-secondary leading-relaxed">
                  Até que você reconstrua sua relação com as próprias emoções e recupere o controle da sua vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ATENDIMENTO */}
      <section className="py-20 lg:py-32 px-6 bg-clinic-bg-primary border-t border-clinic-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-brand-primary block mb-4">Localização e Consultório</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-clinic-text-primary leading-tight mb-6">
              Atendimento em Mococa e Online
            </h2>
            <p className="text-lg text-clinic-text-secondary font-light max-w-2xl mx-auto leading-relaxed mb-8">
              O consultório fica em Mococa/SP, com atendimento presencial e online para toda a região. Horários flexíveis para quem concilia trabalho, família e autocuidado. Agende sua triagem gratuita e dê o primeiro passo para uma vida sem ansiedade.
            </p>
          </div>

          {/* CTA FINAL */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link 
              to="/triagem" 
              className="px-8 py-4 bg-clinic-brand-primary hover:bg-clinic-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg inline-flex items-center gap-2"
            >
              Quero Iniciar Triagem Grátis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/agendar" 
              className="px-8 py-4 border border-clinic-brand-primary hover:bg-clinic-brand-primary hover:text-white text-clinic-brand-primary rounded-full font-bold uppercase tracking-widest text-xs transition-all inline-flex items-center gap-2"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
