import React, { Suspense, lazy } from 'react';
import SEO from '../../components/SEO';
import { Hero } from '../../components/home/Hero';

const IntroVideoSection = lazy(() => import('../../components/home/IntroVideoSection').then(m => ({ default: m.IntroVideoSection })));
const ClinicalContextSection = lazy(() => import('../../components/home/ClinicalContextSection').then(m => ({ default: m.ClinicalContextSection })));

// Lazy-load below-the-fold sections for massive initial paint optimization
const AdoecimentoSilencioso = lazy(() => import('../../components/metodo/AdoecimentoSilencioso').then(m => ({ default: m.AdoecimentoSilencioso })));
const SofiaSection = lazy(() => import('../../components/home/SofiaSection').then(m => ({ default: m.SofiaSection })));
const MethodologySection = lazy(() => import('../../components/home/MethodologySection').then(m => ({ default: m.MethodologySection })));
const TestimonialsSection = lazy(() => import('../../components/home/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const MainCTASection = lazy(() => import('../../components/home/MainCTASection').then(m => ({ default: m.MainCTASection })));
const EbookSection = lazy(() => import('../../components/home/EbookSection').then(m => ({ default: m.EbookSection })));
const BlogSection = lazy(() => import('../../components/home/BlogSection').then(m => ({ default: m.BlogSection })));
const FAQSection = lazy(() => import('../../components/home/FAQSection').then(m => ({ default: m.FAQSection })));
const MapSection = lazy(() => import('../../components/home/MapSection').then(m => ({ default: m.MapSection })));
const ContactSection = lazy(() => import('../../components/home/ContactSection').then(m => ({ default: m.ContactSection })));

const LoadingSection = () => (
  <div className="w-full py-12 flex items-center justify-center min-h-[150px] bg-clinic-bg-primary/50">
    <div className="w-6 h-6 border-2 border-clinic-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <main>
      <SEO 
        title="Tratamento de Ansiedade em Mococa | Dr. Reginaldo Vêntola | Psicanalista"
        description="Dr. Reginaldo Vêntola é Psicanalista em Mococa/SP e criador do Método Acalme-se. Especialista no tratamento profundo e integrativo da ansiedade e esgotamento."
        keywords="psicanalista mococa, psicanalista em mococa, ansiedade mococa, psicanálise mococa, tratamento ansiedade mococa, saude mental mococa, método acalme-se, psiquiatra ou psicanalista"
        canonical={window.location.origin}
        ogImage="https://res.cloudinary.com/djl7c37my/image/upload/f_auto,q_auto/v1777041959/Psiquiatra_Mococa_j0pzl6.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Dr. Reginaldo Vêntola - Psicanálise e Método Acalme-se",
          "image": "https://res.cloudinary.com/djl7c37my/image/upload/f_auto,q_auto/v1777041959/Psiquiatra_Mococa_j0pzl6.png",
          "description": "Psicanálise e tratamento integrativo de ansiedade em Mococa/SP através do Método Acalme-se.",
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
      <Suspense fallback={<LoadingSection />}>
        <IntroVideoSection />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <ClinicalContextSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <AdoecimentoSilencioso />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <SofiaSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <MethodologySection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <MainCTASection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <EbookSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <BlogSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <MapSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default Home;
