import React, { Suspense, lazy } from 'react';
import SEO from '../../components/SEO';
import { Hero } from '../../components/home/Hero';
import { HomeDialogueBridge } from '../../components/home/HomeDialogueBridge';

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
        title="Tratamento Ansiedade Mococa | Psicólogo e Psicanalista"
        description="Tratamento para ansiedade em Mococa com Dr. Reginaldo Vêntola. Atendimento psicanalítico integrativo. Triagem gratuita. Agende agora."
        keywords="psicanalista mococa, psicanalista em mococa, ansiedade mococa, psicanálise mococa, tratamento ansiedade mococa, saude mental mococa, método acalme-se, psiquiatra ou psicanalista"
        canonical="https://www.metodoacalmese.com.br/"
        ogImage="https://res.cloudinary.com/djl7c37my/image/upload/f_auto,q_auto/v1777041959/Psiquiatra_Mococa_j0pzl6.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Método Acalme-se - Dr. Reginaldo Vêntola",
          "description": "Tratamento para ansiedade em Mococa. Atendimento psicanalítico integrativo com hipnoterapia e naturopatia.",
          "url": "https://www.metodoacalmese.com.br",
          "telephone": "+55-19-99241-6095",
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
            "latitude": "-21.4678",
            "longitude": "-47.0042"
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$",
          "image": "https://res.cloudinary.com/djl7c37my/image/upload/f_auto,q_auto/v1777041959/Psiquiatra_Mococa_j0pzl6.png"
        }}
      />

      <Hero />
      <HomeDialogueBridge />
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
