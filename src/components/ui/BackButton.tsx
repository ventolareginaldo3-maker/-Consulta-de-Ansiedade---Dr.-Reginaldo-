import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/') return null;
  const handleBack = () => {
    const path = location.pathname;
    if (path.startsWith('/blog/') && path !== '/blog') navigate('/blog');
    else if (path === '/blog' || path === '/triagem' || path === '/agendar' || path !== '/') navigate('/');
    else navigate(-1);
  };
  return (
    <button onClick={handleBack} className="fixed bottom-24 left-6 z-40 p-4 bg-white/80 backdrop-blur-md border border-clinic-border-subtle rounded-full shadow-xl hover:bg-clinic-brand-primary hover:text-white transition-all group" aria-label="Voltar">
      <div className="flex items-center gap-2">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] uppercase tracking-widest font-bold pr-2">Voltar</span>
      </div>
    </button>
  );
};
