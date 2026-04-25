import React from 'react';
import SEO from '../../components/SEO';
import { AdoecimentoSilencioso } from '../../components/metodo/AdoecimentoSilencioso';

const AdoecimentoSilenciosoPage = () => {
  return (
    <section className="min-h-screen bg-clinic-bg-white pt-20">
      <SEO 
        title="A Estrutura do Adoecimento Silencioso | Psicanalista Mococa"
        description="Entenda o mecanismo por trás da ansiedade e como sua mente entra em colapso para tentar te proteger. O Adoecimento Silencioso pode ser tratado."
        canonical="https://www.metodoacalmese.com.br/adoecimento-silencioso"
      />

      <AdoecimentoSilencioso />
    </section>
  );
};

export default AdoecimentoSilenciosoPage;
