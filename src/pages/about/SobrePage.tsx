import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AboutProfessional from '../../components/home/AboutProfessional';

const SobrePage = () => {
  return (
    <section className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <SEO 
        title="Sobre o Dr. Reginaldo Ventola | Psicanalista e Hipnoterapeuta em Mococa"
        description="Conheça a trajetória do Dr. Reginaldo Ventola, especialista no tratamento de ansiedade em Mococa. Doutor em Psicanálise, Hipnoterapeuta e Naturopata em Mococa/SP."
        canonical="https://www.metodoacalmese.com.br/sobre"
        keywords="dr reginaldo ventola, psicanalista mococa, hipnoterapeuta mococa, especialista ansiedade mococa, psiquiatra mococa, psicologo mococa"
      />
      <AboutProfessional />
      
      <div className="max-w-4xl mx-auto mt-20 space-y-12 text-lg text-brand-ink/80 leading-relaxed font-light">
        <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-brand-ink/5">
          <h3 className="text-3xl font-serif text-brand-ink mb-6">Minha Abordagem</h3>
          <p>
            Acredito que a verdadeira cura não vem de fora para dentro, mas de um mergulho profundo nas águas do próprio ser. Em minha prática clínica em Mococa, busco integrar o rigor científico da psicanálise com a eficácia transformadora da hipnose e o suporte biológico da naturopatia. Entender se você precisa de um <Link to="/psiquiatra-ou-psicanalista" className="text-brand-accent underline">psiquiatra ou psicanalista</Link> é parte fundamental do meu acolhimento.
          </p>
          <p className="mt-4">
            Cada mulher que entra em meu consultório traz uma história única. Meu papel é ser o guia que ajuda a decifrar os códigos da ansiedade, transformando o medo em força e a confusão em clareza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-brand-ink text-brand-paper rounded-[2.5rem]">
            <h4 className="text-xl font-serif mb-4 text-brand-accent">Formação Acadêmica</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>• Doutorado em Psicanálise</li>
              <li>• Especialização em Hipnoterapia Clínica</li>
              <li>• Formação em Naturopatia e Iridologia</li>
              <li>• Membro da Sociedade Psicanalítica Mente Renovada (Registro: 0152021/SP)</li>
            </ul>
          </div>
          <div className="p-8 bg-brand-accent/10 rounded-[2.5rem] border border-brand-accent/20">
            <h4 className="text-xl font-serif mb-4 text-brand-ink">Valores Clínicos</h4>
            <ul className="space-y-3 text-sm text-brand-ink/70">
              <li>• Ética e Sigilo Absoluto</li>
              <li>• Acolhimento Humanizado</li>
              <li>• Foco na Autonomia da Paciente</li>
              <li>• Atualização Científica Constante</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-10">
          <Link to="/agendar" className="inline-flex items-center gap-4 bg-brand-accent text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/30">
            Agendar uma conversa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SobrePage;
