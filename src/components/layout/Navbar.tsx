import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[110] bg-clinic-bg-primary/80 backdrop-blur-md border-b border-clinic-border-subtle">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-tight text-clinic-text-primary">
          Método <span className="italic">Acalme se</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-clinic-text-muted">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-clinic-brand-primary transition-colors">Início</Link>
            <Link to="/metodo-e-tratamento" className="hover:text-clinic-brand-primary transition-colors">Método</Link>
            <Link to="/triagem" className="hover:text-clinic-brand-primary transition-colors">Avaliação</Link>
            <Link to="/blog" className="hover:text-clinic-brand-primary transition-colors">Conteúdos</Link>
            <Link to="/iridologia-e-naturopatia" className="px-4 py-1.5 border border-clinic-text-rose rounded-full text-clinic-text-rose hover:bg-clinic-text-rose hover:text-white transition-all">Iridologia</Link>
            <Link to="/sobre" className="hover:text-clinic-brand-primary transition-colors">Sobre</Link>
            <Link to="/depoimentos" className="hover:text-clinic-brand-primary transition-colors">Depoimentos</Link>
            <Link to="/#contato" onClick={(e) => handleScroll(e as any, 'contato')} className="hover:text-clinic-brand-primary transition-colors">Contato</Link>
          </div>
          
          <div className="h-6 w-px bg-clinic-border-medium mx-2" />

          <div className="flex items-center gap-4">
            <Link to="/agendar" className="px-6 py-2.5 bg-clinic-brand-primary text-white rounded-full font-bold shadow-lg shadow-clinic-brand-primary/20 hover:bg-clinic-brand-dark transition-all animate-cta-pulse">
              Agendar Atendimento
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-xs font-bold uppercase tracking-widest text-clinic-text-primary" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
          {isOpen ? "Fechar" : "Menu"}
        </button>
      </div>

        {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-clinic-bg-primary border-b border-clinic-border-subtle p-8 flex flex-col gap-6 text-center uppercase tracking-widest text-[10px] z-40 shadow-2xl"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Início</Link>
            <Link to="/metodo-e-tratamento" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Método</Link>
            <Link to="/triagem" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Avaliação</Link>
            <Link to="/iridologia-e-naturopatia" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle text-clinic-text-rose font-black">Iridologia</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Conteúdos</Link>
            <Link to="/sobre" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Sobre</Link>
            <Link to="/depoimentos" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Depoimentos</Link>
            <Link to="/#contato" onClick={(e) => { handleScroll(e as any, 'contato'); setIsOpen(false); }} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Contato</Link>
            <Link to="/agendar" onClick={() => setIsOpen(false)} className="py-4 bg-clinic-brand-primary text-white rounded-full font-black shadow-xl shadow-clinic-brand-primary/30 text-xs animate-cta-pulse">
              Agendar Atendimento
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
