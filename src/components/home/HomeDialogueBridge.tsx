import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HomeDialogueBridge = () => {
  return (
    <section className="py-20 lg:py-28 px-6 bg-clinic-bg-primary border-t border-clinic-border-subtle/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Parte superior da Ponte */}
        <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light leading-snug">
            Antes de escolher entre psiquiatra, psicólogo ou psicanalista em Mococa, é importante entender uma coisa: <span className="italic text-clinic-text-rose font-normal">a ansiedade não aparece do nada.</span>
          </h2>
          
          <div className="text-clinic-text-secondary leading-relaxed font-light text-base md:text-lg space-y-4">
            <p>
              Ela costuma nascer de um acúmulo silencioso de pressões, medos, cobranças internas, noites mal dormidas e emoções que foram sendo engolidas ao longo do tempo.
            </p>
            <p>
              Por isso, o primeiro passo não é apenas tentar se acalmar. É compreender por que sua mente continua em estado de alerta, mesmo quando aparentemente não há perigo.
            </p>
            <p className="font-medium text-clinic-text-primary">
              No Método Acalme-se, esse processo começa com escuta, acolhimento e investigação da raiz emocional da ansiedade, para que você deixe de apenas controlar sintomas e comece a entender o ciclo que mantém seu sofrimento ativo.
            </p>
          </div>
        </div>

        {/* Diálogo poético da experiência de vida */}
        <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-clinic-border-subtle shadow-sm mb-12">
          <p className="text-center font-serif text-lg md:text-xl italic text-clinic-text-secondary mb-10 block">
            E talvez você já tenha percebido isso na sua própria vida:
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bloco Poético */}
            <div className="space-y-4 border-l-2 border-clinic-text-rose/30 pl-6 md:pl-8">
              <p className="font-serif text-xl md:text-2xl text-clinic-text-rose italic font-light">Você tenta relaxar.</p>
              <p className="font-serif text-xl md:text-2xl text-clinic-text-rose italic font-light">Tenta ocupar a mente.</p>
              <p className="font-serif text-xl md:text-2xl text-clinic-text-rose italic font-light">Tenta ignorar os pensamentos.</p>
              <p className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-medium pt-4">Mas, em algum momento, tudo volta.</p>
            </div>

            {/* Bloco de Reflexão */}
            <div className="space-y-4 text-clinic-text-secondary font-light text-base md:text-lg">
              <p className="font-medium text-clinic-text-primary">
                Isso não acontece porque você é fraca.
              </p>
              <p>
                O que você está vivendo é um padrão automático da mente, um ciclo invisível que mantém sua ansiedade ativa todos os dias.
              </p>
              <p>
                A maioria das mulheres tenta apenas “se acalmar”, mas nunca entende o que realmente está por trás da ansiedade.
              </p>
            </div>
          </div>
        </div>

        {/* Conexão Otimizada com as outras páginas internas (SEO Interlinking) */}
        <div className="bg-white/40 p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle/60 shadow-sm max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-xl md:text-2xl text-clinic-text-primary mb-8 font-light italic">
            Como esse ciclo se manifesta no seu dia a dia?
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <Link 
              to="/mente-ansiosa" 
              className="group p-6 rounded-2xl bg-white hover:bg-clinic-text-rose/[0.02] border border-clinic-border-subtle transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 bg-clinic-text-rose rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform"></div>
              <h4 className="font-serif text-base text-clinic-text-primary font-medium mb-2 group-hover:text-clinic-text-rose transition-colors">
                A ansiedade continua voltando?
              </h4>
              <p className="text-xs text-clinic-text-muted leading-relaxed font-light">
                Compreenda o sinal de alerta que sua mente profunda está enviando.
              </p>
            </Link>

            <Link 
              to="/metodo-acalmese" 
              className="group p-6 rounded-2xl bg-white hover:bg-clinic-text-rose/[0.02] border border-clinic-border-subtle transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 bg-clinic-text-rose rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform"></div>
              <h4 className="font-serif text-base text-clinic-text-primary font-medium mb-2 group-hover:text-clinic-text-rose transition-colors">
                Os sintomas físicos persistem?
              </h4>
              <p className="text-xs text-clinic-text-muted leading-relaxed font-light">
                Veja como o Método Acalme-se atua na regulação do sistema nervoso.
              </p>
            </Link>

            <Link 
              to="/psiquiatra-ou-psicanalista" 
              className="group p-6 rounded-2xl bg-white hover:bg-clinic-text-rose/[0.02] border border-clinic-border-subtle transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 bg-clinic-text-rose rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform"></div>
              <h4 className="font-serif text-base text-clinic-text-primary font-medium mb-2 group-hover:text-clinic-text-rose transition-colors">
                A perda de controle aumenta?
              </h4>
              <p className="text-xs text-clinic-text-muted leading-relaxed font-light">
                Entenda a diferença entre cada profissional para tomar a melhor decisão.
              </p>
            </Link>
          </div>

          {/* E O Próximo Passo */}
          <div className="mt-12 pt-6 border-t border-clinic-border-subtle/50">
            <h4 className="font-serif text-lg text-clinic-text-primary mb-4 font-light">
              E o Próximo Passo?
            </h4>
            <p className="text-sm md:text-base text-clinic-text-secondary font-light mb-6 max-w-xl mx-auto">
              Você não precisa continuar enfrentando esse ciclo sozinha. Descubra qual abordagem faz mais sentido para o seu momento atual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/triagem" 
                className="px-8 py-4 bg-clinic-brand-primary text-white rounded-full font-bold uppercase tracking-widest hover:bg-clinic-brand-dark transition-all shadow-md text-xs inline-flex items-center gap-2 justify-center"
              >
                Quero Iniciar Triagem Grátis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/agendar" 
                className="px-8 py-4 border border-clinic-brand-primary text-clinic-brand-primary rounded-full font-bold uppercase tracking-widest hover:bg-clinic-brand-primary hover:text-white transition-all text-xs text-center"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
