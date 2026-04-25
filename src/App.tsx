import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { AIAssistant } from './components/ui/AIAssistant';
import { BackButton } from './components/ui/BackButton';
import ScrollToTop from './components/ScrollToTop';

import { analytics } from './services/analytics';

// Main pages - loaded immediately for speed on initial entry
import Home from './pages/home/Home';

// Lazy load non-critical pages
const QuizPage = lazy(() => import('./pages/quiz/QuizPage'));
const BookingPage = lazy(() => import('./pages/booking/BookingPage'));
const AdminPage = lazy(() => import('./pages/admin/AdminPage'));
const BlogPage = lazy(() => import('./pages/blog/BlogPage'));
const EbookPage = lazy(() => import('./pages/ebook/EbookPage'));
const PlanConfirmation = lazy(() => import('./pages/booking/PlanConfirmation'));
const MetodoAcalmesePage = lazy(() => import('./pages/metodo/MetodoAcalmesePage'));
const GuiaResgatePage = lazy(() => import('./pages/metodo/GuiaResgatePage'));
const MenteAnsiosaPage = lazy(() => import('./pages/metodo/MenteAnsiosaPage'));
const AnsiedadeDepressaoPage = lazy(() => import('./pages/metodo/AnsiedadeDepressaoPage'));
const AnsiedadeSobControlePage = lazy(() => import('./pages/metodo/AnsiedadeSobControlePage'));
const SobrePage = lazy(() => import('./pages/about/SobrePage'));
const SintomasAnsiedadePage = lazy(() => import('./pages/metodo/SintomasAnsiedadePage'));
const DepoimentosPage = lazy(() => import('./pages/metodo/DepoimentosPage'));
const PoliticaPrivacidade = lazy(() => import('./pages/legal/PoliticaPrivacidade'));
const TermosDeUso = lazy(() => import('./pages/legal/TermosDeUso'));
const PsiquiatraOuPsicanalista = lazy(() => import('./pages/metodo/PsiquiatraOuPsicanalista'));
const IridologiaPage = lazy(() => import('./pages/metodo/IridologiaPage'));
const AnsiedadeMococaLP = lazy(() => import('./pages/metodo/AnsiedadeMococaLP'));
const AnsiedadeMococaSEO = lazy(() => import('./pages/metodo/AnsiedadeMococaSEOPage'));
const AdoecimentoSilenciosoPage = lazy(() => import('./pages/metodo/AdoecimentoSilenciosoPage'));
const NotFound = lazy(() => import('./pages/error/NotFound'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-clinic-bg-primary flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-clinic-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  React.useEffect(() => {
    console.log('[App] Version 5.0 Performance Optimized');
    
    // Initialize analytics after initial render to prioritize speed
    const timer = setTimeout(() => {
      analytics.init();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-clinic-bg-primary font-sans text-clinic-text-primary selection:bg-clinic-brand-primary/20 selection:text-clinic-text-primary">
            <Navbar />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/triagem" element={<QuizPage />} />
                <Route path="/agendar" element={<BookingPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path="/ebooks" element={<EbookPage />} />
                <Route path="/confirmacao-plano" element={<PlanConfirmation />} />
                <Route path="/metodo-e-tratamento" element={<MetodoAcalmesePage />} />
                <Route path="/guia-de-resgate" element={<GuiaResgatePage />} />
                <Route path="/mente-ansiosa" element={<MenteAnsiosaPage />} />
                <Route path="/ansiedade-e-depressao" element={<AnsiedadeDepressaoPage />} />
                <Route path="/ansiedade-sob-controle" element={<AnsiedadeSobControlePage />} />
                <Route path="/sobre" element={<SobrePage />} />
                <Route path="/sintomas-de-ansiedade" element={<SintomasAnsiedadePage />} />
                <Route path="/depoimentos" element={<DepoimentosPage />} />
                <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
                <Route path="/termos-de-uso" element={<TermosDeUso />} />
                <Route path="/psiquiatra-ou-psicanalista" element={<PsiquiatraOuPsicanalista />} />
                <Route path="/iridologia-e-naturopatia" element={<IridologiaPage />} />
                <Route path="/ansiedade-em-mococa" element={<AnsiedadeMococaLP />} />
                <Route path="/especialista-ansiedade-mococa" element={<AnsiedadeMococaSEO />} />
                <Route path="/adoecimento-silencioso" element={<AdoecimentoSilenciosoPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
            <WhatsAppButton />
            <AIAssistant />
            <BackButton />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
