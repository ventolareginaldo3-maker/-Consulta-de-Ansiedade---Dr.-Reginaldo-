import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { Hero } from '../../components/home/Hero';
import { IntroVideoSection } from '../../components/home/IntroVideoSection';
import { ConvictionTransition } from '../../components/home/ConvictionTransition';
import { IdentificationBlock } from '../../components/home/IdentificationBlock';
import { AnxietyExplanation } from '../../components/home/AnxietyExplanation';
import { DeepPsychologicalBlock } from '../../components/home/DeepPsychologicalBlock';
import { ClinicalContextSection } from '../../components/home/ClinicalContextSection';
import { SofiaSection } from '../../components/home/SofiaSection';
import { MethodologySection } from '../../components/home/MethodologySection';
import { TestimonialsSection } from '../../components/home/TestimonialsSection';
import { MainCTASection } from '../../components/home/MainCTASection';
import { MapSection } from '../../components/home/MapSection';
import { EbookSection } from '../../components/home/EbookSection';
import { BlogSection } from '../../components/home/BlogSection';
import { FAQSection } from '../../components/home/FAQSection';
import { ContactSection } from '../../components/home/ContactSection';
import AboutProfessional from '../../components/home/AboutProfessional';
import { AdoecimentoSilencioso } from '../../components/metodo/AdoecimentoSilencioso';
import { CONTACT_INFO } from '../../constants';
import { SPECIALTIES } from '../../specialtiesData';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Ansiedade Mococa | Dr. Reginaldo Ventola: Método Acalme-se"
        description="Especialista em ansiedade em Mococa/SP. Tratamento especializado para ansiedade, pânico e depressão através da Psicanálise e Hipnoterapia. Se você busca por um psicanalista em Mococa, conheça o Método Acalme-se."
        keywords="ansiedade mococa, psicanalista mococa, psicanálise mococa, psiquiatra mococa, hipnoterapia mococa, tratamento ansiedade mococa, psicologo mococa, saude mental mococa, crise de panico mococa, depressao mococa, metodo acalme-se"
        canonical={window.location.origin}
        ogImage="https://res.cloudinary.com/djl7c37my/image/upload/v1777041959/Psiquiatra_Mococa_j0pzl6.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": "Dr. Reginaldo Ventola",
          "image": "https://res.cloudinary.com/djl7c37my/image/upload/v1777041959/Psiquiatra_Mococa_j0pzl6.png",
          "description": "Especialista em tratamento de ansiedade em Mococa/SP através do Método Acalme-se.",
          "telephone": "+5519992416095",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua XV de Novembro, 268, Sala 10",
            "addressLocality": "Mococa",
            "addressRegion": "SP",
            "postalCode": "13730-000",
            "addressCountry": "BR"
          }
        }}
      />

      <Hero />
      <IntroVideoSection />
      <ClinicalContextSection />
      <AdoecimentoSilencioso />
      <SofiaSection />
      <MethodologySection />
      <TestimonialsSection />
      <MainCTASection />
      <EbookSection />
      <BlogSection />
      <FAQSection />
      <MapSection />
      <ContactSection />
    </main>
  );
};

export default Home;
