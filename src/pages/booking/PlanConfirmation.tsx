import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { CONTACT_INFO } from '../../constants';

const PlanConfirmation = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const planType = queryParams.get('plan') || 'unknown';
    const transactionId = queryParams.get('transaction_id') || 'N/A';
    const status = queryParams.get('status') || 'confirmed';

    console.log('Plan Confirmed:', { planType, transactionId, status });
  }, [location.search]);

  return (
    <main className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <Helmet>
        <title>Confirmação de Plano | Método Acalme-se</title>
        <meta name="description" content="Seu plano foi confirmado com sucesso! Veja os próximos passos para iniciar sua jornada de bem-estar." />
        <link rel="canonical" href={window.location.origin + '/confirmacao-plano'} />
      </Helmet>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-brand-accent/20"
        >
          <CheckCircle2 className="w-20 h-20 text-brand-accent mx-auto mb-8" />
          <h1 className="text-4xl lg:text-5xl font-serif text-brand-ink mb-4">Plano Confirmado!</h1>
          <p className="text-lg lg:text-xl text-brand-ink/70 mb-12 leading-relaxed">
            Seu acesso foi liberado e você está a um passo de transformar sua vida. Em breve, você receberá um e-mail com todos os detalhes e os próximos passos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/" 
              className="px-8 py-4 bg-brand-ink text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-brand-ink/20"
            >
              Voltar para Home
            </Link>
            <a 
              href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-brand-accent/20"
            >
              Falar com Suporte
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PlanConfirmation;
