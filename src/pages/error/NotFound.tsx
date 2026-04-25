import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center bg-brand-paper p-6 text-center">
    <div className="max-w-md">
      <h1 className="text-6xl font-serif mb-4 text-brand-accent">404</h1>
      <h2 className="text-2xl font-serif mb-4 text-brand-ink">Página não encontrada</h2>
      <p className="text-brand-ink/70 mb-8">Desculpe, a página que você está procurando não existe ou foi movida.</p>
      <Link 
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3 bg-brand-ink text-brand-paper rounded-full font-bold hover:scale-105 transition-transform"
      >
        Voltar para o Início
      </Link>
    </div>
  </section>
);

export default NotFound;
