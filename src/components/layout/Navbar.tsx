import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ChevronDown } from 'lucide-react';

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
    <nav className="fixed top-0 w-full z-[110] bg-clinic-bg-primary/95 backdrop-blur-md border-b border-clinic-border-subtle shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Agrupamento do Logo + Links de navegação para aproximar o botão Início */}
        <div className="flex items-center gap-8 xl:gap-12">
          <Link to="/" className="text-xl md:text-2xl font-serif tracking-tight text-clinic-text-primary whitespace-nowrap shrink-0">
            Método <span className="italic">Acalme se</span>
          </Link>

          {/* Links Principais do Desktop (Todos visíveis de forma fácil e profissional para captação de leads) */}
          <div className="hidden lg:flex items-center gap-x-3 xl:gap-x-5 text-[10px] uppercase tracking-[0.15em] font-bold text-clinic-text-muted">
            <Link to="/" className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              Início
            </Link>
            <Link to="/metodo-e-tratamento" className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              O Método
            </Link>
            <Link to="/triagem" className="px-3 py-1.5 bg-clinic-brand-primary/10 text-clinic-brand-primary hover:bg-clinic-brand-primary hover:text-white rounded-full transition-all whitespace-nowrap">
              Avaliação Gratuita
            </Link>
            <Link to="/ansiedade-feminina" className="text-clinic-text-rose hover:text-clinic-brand-dark transition-colors py-2 whitespace-nowrap">
              Ansiedade Feminina
            </Link>
            <Link to="/saude-emocional-feminina" className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              Saúde Emocional
            </Link>
            <Link to="/iridologia-e-naturopatia" className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              Iridologia
            </Link>
            <Link to="/blog" className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              Blog
            </Link>
            <Link to="/sobre" className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              Sobre
            </Link>
            <Link to="/#contato" onClick={(e) => handleScroll(e as any, 'contato')} className="hover:text-clinic-brand-primary transition-colors py-2 whitespace-nowrap">
              Contato
            </Link>
          </div>
        </div>

        {/* Botão de Agendamento (Lado Direito) */}
        <div className="hidden lg:flex items-center pl-6 border-l border-clinic-border-subtle">
          <Link to="/agendar" className="px-5 py-2.5 bg-clinic-brand-primary text-white rounded-full font-bold text-[10px] uppercase tracking-[0.15em] shadow-lg shadow-clinic-brand-primary/20 hover:bg-clinic-brand-dark transition-all animate-cta-pulse whitespace-nowrap">
            Agendar Atendimento
          </Link>
        </div>

        {/* Botão de Menu para versão Mobile */}
        <button className="lg:hidden p-2 text-xs font-bold uppercase tracking-widest text-clinic-text-primary" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
          {isOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div 
          className="lg:hidden absolute top-20 left-0 w-full bg-clinic-bg-primary border-b border-clinic-border-subtle p-8 flex flex-col gap-6 text-center uppercase tracking-widest text-[10px] z-40 shadow-2xl mobile-menu-enter"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Início</Link>
          <Link to="/metodo-e-tratamento" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Método</Link>
          <Link to="/triagem" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Avaliação</Link>
          <Link to="/ansiedade-feminina" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle text-clinic-text-rose font-bold">Ansiedade Feminina</Link>
          <Link to="/saude-emocional-feminina" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle text-clinic-text-primary font-bold">Saúde Emocional</Link>
          <Link to="/iridologia-e-naturopatia" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle text-clinic-text-primary font-bold">Iridologia</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Conteúdos</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Sobre</Link>
          <Link to="/depoimentos" onClick={() => setIsOpen(false)} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Depoimentos</Link>
          <Link to="/#contato" onClick={(e) => { handleScroll(e as any, 'contato'); setIsOpen(false); }} className="py-2 border-b border-clinic-border-subtle font-bold text-clinic-text-primary">Contato</Link>
          <Link to="/agendar" onClick={() => setIsOpen(false)} className="py-4 bg-clinic-brand-primary text-white rounded-full font-black shadow-xl shadow-clinic-brand-primary/30 text-xs animate-cta-pulse">
            Agendar Atendimento
          </Link>
        </div>
      )}
    </nav>
  );
};
