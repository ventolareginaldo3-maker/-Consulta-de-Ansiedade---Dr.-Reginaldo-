import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Award, Target, BookOpen, Heart, MapPin, Calendar, Check } from 'lucide-react';

const SobrePage = () => {
  return (
    <section className="min-h-screen bg-clinic-bg-primary pt-24 pb-20">
      <SEO 
        title="Sobre Dr. Reginaldo Vêntola | Psicanalista Ansiedade Mococa"
        description="Conheça Dr. Reginaldo Vêntola, psicanalista em Mococa. 15+ anos tratando ansiedade com o Método Acalme-se. Doutor Honoris Causa em Psicanálise. Atendimento presencial e online."
        keywords="dr reginaldo ventola, psicanalista mococa, hipnoterapeuta mococa, especialista ansiedade mococa, psiquiatra mococa, psicologo mococa"
        canonical="https://www.metodoacalmese.com.br/sobre"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Reginaldo Vêntola",
          "jobTitle": "Psicanalista, Hipnoterapeuta e Naturopata",
          "description": "Doutor Honoris Causa em Psicanálise pela AFCL. Especialista no tratamento de ansiedade em Mococa/SP with mais de 15 anos de experiência clínica.",
          "url": "https://www.metodoacalmese.com.br/sobre",
          "image": "https://www.metodoacalmese.com.br/foto-dr-ventola.jpg",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "AFCL: Academia de Filosofia e Ciências Lucentina do Rio de Janeiro",
            "award": "Doutor Honoris Causa em Psicanálise (Novembro de 2024)"
          },
          "worksFor": {
            "@type": "MedicalBusiness",
            "name": "Método Acalme-se",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mococa",
              "addressRegion": "SP",
              "addressCountry": "BR"
            }
          },
          "knowsAbout": ["Psicanálise", "Hipnoterapia Clínica", "Naturopatia", "Tratamento de Ansiedade", "Saúde Mental"],
          "sameAs": ["https://www.metodoacalmese.com.br"]
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* H1 */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-text-rose block mb-4">Sobre Mim</span>
          <h1 className="font-serif text-3xl md:text-5xl text-clinic-text-primary font-light leading-tight mb-6">
            Sobre Dr. Reginaldo Vêntola | Psicanalista em Mococa
          </h1>
        </div>

        {/* Professional Image / Photo */}
        <div className="mb-16 text-center">
          <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-[#161413]">
            <img 
              src="https://res.cloudinary.com/djl7c37my/image/upload/v1780252620/Gemini_Generated_Image_qyxq5fqyxq5fqyxq_vhjiww.png" 
              alt="Dr. Reginaldo Vêntola" 
              className="w-full h-full object-cover object-[center_top]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-12 text-clinic-text-secondary leading-relaxed font-light text-base md:text-lg">
          
          {/* Quem é */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Quem é Dr. Reginaldo Vêntola?
            </h2>
            <div className="space-y-6">
              <p>
                Dr. Reginaldo Vêntola é psicanalista, hipnoterapeuta e naturopata em Mococa/SP, com mais de 15 anos de experiência clínica ajudando pacientes a superarem a ansiedade e recuperarem sua paz interior.
              </p>
              <div className="bg-clinic-bg-primary/50 p-6 rounded-2xl border-l-4 border-clinic-brand-primary">
                <p className="text-sm md:text-base font-medium text-clinic-text-primary">
                  Doutor Honoris Causa em Psicanálise pela AFCL: Academia de Filosofia e Ciências Lucentina do Rio de Janeiro, em Novembro de 2024, sob assinatura do Dr. hc.mult. Cláudio Magnus Augustus de Saxe Altenburg Bragança de Lucena.
                </p>
              </div>
              <p>
                Sua missão é oferecer um suporte profundo e humanizado, utilizando o Método Acalme-se para reprogramar padrões mentais e promover uma vida com mais leveza e propósito.
              </p>
            </div>
          </section>

          {/* Experiência Clínica */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Experiência Clínica
            </h2>
            <ul className="grid sm:grid-cols-2 gap-6">
              <li className="flex gap-3 items-start bg-clinic-bg-primary/30 p-6 rounded-2xl border border-clinic-border-subtle">
                <Check className="w-5 h-5 text-clinic-text-rose shrink-0 mt-1" />
                <span className="text-sm md:text-base text-clinic-text-primary">Mais de 15 anos de prática clínica</span>
              </li>
              <li className="flex gap-3 items-start bg-clinic-bg-primary/30 p-6 rounded-2xl border border-clinic-border-subtle">
                <Check className="w-5 h-5 text-clinic-text-rose shrink-0 mt-1" />
                <span className="text-sm md:text-base text-clinic-text-primary">Foco em Ansiedade e Saúde Mental</span>
              </li>
              <li className="flex gap-3 items-start bg-clinic-bg-primary/30 p-6 rounded-2xl border border-clinic-border-subtle">
                <Check className="w-5 h-5 text-clinic-text-rose shrink-0 mt-1" />
                <span className="text-sm md:text-base text-clinic-text-primary">Atendimento presencial em Mococa/SP e online</span>
              </li>
              <li className="flex gap-3 items-start bg-clinic-bg-primary/30 p-6 rounded-2xl border border-clinic-border-subtle">
                <Check className="w-5 h-5 text-clinic-text-rose shrink-0 mt-1" />
                <span className="text-sm md:text-base text-clinic-text-primary">Centenas de pacientes acompanhados</span>
              </li>
            </ul>
          </section>

          {/* Psicólogo, Psiquiatra ou Psicanalista */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Psicólogo, Psiquiatra ou Psicanalista em Mococa?
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Muitas pessoas chegam ao consultório na dúvida sobre qual profissional precisam. Dr. Reginaldo Vêntola, como psicanalista, entende as diferenças entre cada abordagem e pode orientar sobre o caminho mais indicado.
              </p>
              <p>
                O psiquiatra em Mococa estabiliza sintomas físicos intensos com medicação. O psicólogo em Mococa oferece técnicas práticas como TCC. O psicanalista em Mococa investiga a raiz emocional do sofrimento, propondo transformação estrutural duradoura.
              </p>
              <p className="font-medium text-clinic-text-primary bg-clinic-bg-primary/40 p-6 rounded-2xl">
                No Método Acalme-se, a abordagem integra a profundidade da psicanálise com hipnoterapia e naturopatia: algo que nenhum dos três profissionais isoladamente oferece.
              </p>
            </div>
          </section>

          {/* Minha Abordagem */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Minha Abordagem: O Método Acalme-se
            </h2>
            <div className="space-y-4">
              <p>
                Acredito que a verdadeira cura não vem de fora para dentro, mas de um mergulho profundo nas águas do próprio ser. Em minha prática clínica em Mococa, busco integrar o rigor científico da psicanálise com a eficácia transformadora da hipnose e o suporte biológico da naturopatia.
              </p>
              <p>
                Cada pessoa que entra em meu consultório traz uma história única. Meu papel é ser o guia que ajuda a decifrar os códigos da ansiedade, transformando o medo em força e a confusão em clareza.
              </p>
            </div>
          </section>

          {/* Formação Acadêmica */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Formação Acadêmica
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-clinic-text-rose font-bold text-lg shrink-0">•</span>
                <div>
                  <strong className="text-clinic-text-primary font-medium block">Doutor Honoris Causa em Psicanálise</strong>
                  <span className="text-sm">AFCL, Academia de Filosofia e Ciências Lucentina do Rio de Janeiro (Novembro de 2024). Assinado pelo Dr. hc.mult. Cláudio Magnus Augustus de Saxe Altenburg Bragança de Lucena.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-clinic-text-rose font-bold text-lg shrink-0">•</span>
                <div>
                  <strong className="text-clinic-text-primary font-medium block">Especialização em Hipnoterapia Clínica</strong>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-clinic-text-rose font-bold text-lg shrink-0">•</span>
                <div>
                  <strong className="text-clinic-text-primary font-medium block">Formação em Naturopatia e Iridologia</strong>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-clinic-text-rose font-bold text-lg shrink-0">•</span>
                <div>
                  <strong className="text-clinic-text-primary font-medium block">Membro da Sociedade Psicanalítica Mente Renovada</strong>
                  <span className="text-sm">(Registro: 0152021/SP)</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Valores Clínicos */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Valores Clínicos
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-clinic-bg-primary/20 rounded-2xl border border-clinic-border-subtle">
                <strong className="text-clinic-text-primary block mb-1">Ética e Sigilo Absoluto</strong>
                <span className="text-sm">Total privacidade e segurança em todas as sessões.</span>
              </div>
              <div className="p-5 bg-clinic-bg-primary/20 rounded-2xl border border-clinic-border-subtle">
                <strong className="text-clinic-text-primary block mb-1">Acolhimento Humanizado</strong>
                <span className="text-sm">Suporte individualizado focado na sua história.</span>
              </div>
              <div className="p-5 bg-clinic-bg-primary/20 rounded-2xl border border-clinic-border-subtle">
                <strong className="text-clinic-text-primary block mb-1">Foco na Autonomia da Paciente</strong>
                <span className="text-sm">Desenvolvimento de força interna para cura contínua.</span>
              </div>
              <div className="p-5 bg-clinic-bg-primary/20 rounded-2xl border border-clinic-border-subtle">
                <strong className="text-clinic-text-primary block mb-1">Atualização Científica Constante</strong>
                <span className="text-sm">Métodos modernos e eficientes integrados com seriedade.</span>
              </div>
            </div>
          </section>

          {/* Atendimento */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-6">
              Atendimento em Mococa e Online
            </h2>
            <div className="space-y-4">
              <p>
                O consultório está localizado em Mococa/SP, com atendimento presencial e online para toda a região. Horários flexíveis para quem concilia trabalho, família e autocuidado.
              </p>
              <p>
                Em Mococa e região, Dr. Reginaldo Vêntola é referência no tratamento de ansiedade, oferecendo uma abordagem única que integra psicanálise, hipnoterapia e naturopatia: algo que nem psicólogo nem psiquiatra tradicional oferecem isoladamente.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-clinic-border-subtle shadow-sm text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-clinic-text-primary font-light mb-4">
              Agende uma Conversa
            </h2>
            <p className="max-w-xl mx-auto text-base leading-relaxed mb-8">
              Se você busca um psicanalista em Mococa que vá além do tratamento convencional, agende uma conversa inicial sem compromisso. Vamos juntos descobrir o caminho mais adequado para sua cura.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/agendar" 
                className="px-10 py-5 bg-clinic-brand-primary hover:bg-clinic-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-xl inline-flex items-center gap-2 animate-cta-pulse"
              >
                Agendar uma conversa
              </Link>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};

export default SobrePage;
