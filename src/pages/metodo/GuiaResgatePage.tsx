import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Shield, Wind, Brain, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuiaResgatePage = () => {
  return (
    <main className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <Helmet>
        <title>Guia de Resgate: Ansiedade | Método Acalme-se</title>
        <meta name="description" content="Aprenda técnicas imediatas para controlar crises de ansiedade e pânico." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
            Material Gratuito
          </span>
          <h1 className="text-4xl lg:text-6xl font-serif text-brand-ink mb-6">
            Guia de Resgate: Ansiedade
          </h1>
          <p className="text-xl text-brand-ink/70">
            Técnicas imediatas para momentos de crise e estratégias de longo prazo.
          </p>
        </motion.header>

        <div className="space-y-12 text-brand-ink/80 leading-relaxed">
          <section className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-brand-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                <Wind className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif text-brand-ink">1. Técnica de Respiração 4-7-8</h2>
            </div>
            <p className="mb-6">
              Esta é uma das ferramentas mais poderosas para acalmar o sistema nervoso simpático (luta ou fuga) e ativar o parassimpático (descanso e digestão).
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <span>Inspire pelo nariz por <strong>4 segundos</strong>.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <span>Segure a respiração por <strong>7 segundos</strong>.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <span>Expire ruidosamente pela boca por <strong>8 segundos</strong>.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-brand-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif text-brand-ink">2. Técnica de Aterramento 5-4-3-2-1</h2>
            </div>
            <p className="mb-6">
              Quando a mente viaja para o futuro catastrófico, o aterramento traz você de volta para o presente através dos sentidos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-brand-paper rounded-xl"><strong>5 Coisas</strong> que você pode ver</div>
              <div className="p-4 bg-brand-paper rounded-xl"><strong>4 Coisas</strong> que você pode tocar</div>
              <div className="p-4 bg-brand-paper rounded-xl"><strong>3 Coisas</strong> que você pode ouvir</div>
              <div className="p-4 bg-brand-paper rounded-xl"><strong>2 Coisas</strong> que você pode cheirar</div>
              <div className="p-4 bg-brand-paper rounded-xl"><strong>1 Coisa</strong> que você pode saborear</div>
            </div>
          </section>

          <section className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-brand-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                <Brain className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif text-brand-ink">3. O Método Acalme-se</h2>
            </div>
            <p className="mb-6">
              O Método Acalme-se não é apenas sobre parar a crise, é sobre reeducar o cérebro.
            </p>
            <div className="space-y-4">
              <p><strong>A - Aceite</strong> sua ansiedade. Não lute contra ela.</p>
              <p><strong>C - Contemple</strong> as coisas ao seu redor.</p>
              <p><strong>A - Agir</strong> com sua ansiedade. Continue o que estava fazendo, devagar.</p>
              <p><strong>L - Libere</strong> o ar dos seus pulmões.</p>
              <p><strong>M - Mantenha</strong> os passos anteriores.</p>
              <p><strong>E - Examine</strong> seus pensamentos.</p>
              <p><strong>S - Sorria</strong>, você conseguiu passar por isso.</p>
              <p><strong>E - Espere</strong> o melhor.</p>
            </div>
          </section>

          <div className="bg-brand-ink text-white p-12 rounded-[2rem] text-center">
            <Heart className="w-12 h-12 text-brand-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif mb-6">Precisa de ajuda profissional?</h2>
            <p className="mb-8 opacity-80">
              Este guia é uma ferramenta de apoio, mas a terapia é o caminho para a cura definitiva.
            </p>
            <Link 
              to="/agendar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-ink rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all"
            >
              Agendar Avaliação Inicial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuiaResgatePage;
