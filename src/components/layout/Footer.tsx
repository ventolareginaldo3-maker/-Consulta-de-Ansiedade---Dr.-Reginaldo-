import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export const Footer = () => (
  <footer className="section--dark !py-16 lg:!py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
      <div className="col-span-1 lg:col-span-2 text-center md:text-left space-y-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-serif font-light">Método <span className="italic">Acalme-se</span></h3>
          <p className="heading-label !text-rose !mb-0">Psicanálise & Tratamento de Ansiedade em Mococa/SP</p>
        </div>
        
        <p className="max-w-sm font-light mx-auto md:mx-0 leading-relaxed text-sm">
          Dr. Reginaldo Vêntola - SPMR 0152021/SP. <br />
          Especialista em Ansiedade e Saúde Mental Integrativa. Atendimento presencial e online.
        </p>
        
        <div className="flex gap-4 justify-center md:justify-start">
          {[
            { icon: Instagram, href: CONTACT_INFO.instagram, label: "Instagram" },
            { icon: Facebook, href: CONTACT_INFO.facebook, label: "Facebook" },
            { icon: MapPin, href: CONTACT_INFO.googleBusiness, label: "Google Maps" }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-clinic-text-rose hover:border-clinic-text-rose hover:text-white transition-all duration-500"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center md:text-left">
        <h4 className="heading-label !text-rose !mb-8">Especialidades</h4>
        <ul className="space-y-4 text-sm font-light">
          <li><Link to="/psiquiatra-ou-psicanalista" className="hover:text-rose transition-all">Psiquiatra ou Psicanalista?</Link></li>
          <li><Link to="/metodo-e-tratamento" className="hover:text-rose transition-all">Hipnoterapia Clínica</Link></li>
          <li><Link to="/mente-ansiosa" className="hover:text-rose transition-all">Psicanálise Clínica</Link></li>
          <li><Link to="/sintomas-de-ansiedade" className="hover:text-rose transition-all">Tratamento de Ansiedade</Link></li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h4 className="heading-label !text-rose !mb-8">Navegação</h4>
        <nav className="grid grid-cols-1 gap-4 text-sm font-light">
          <Link to="/agendar" className="hover:text-rose transition-all italic animate-cta-pulse">Agendamento</Link>
          <Link to="/sobre" className="hover:text-rose transition-all">Sobre o Especialista</Link>
          <Link to="/depoimentos" className="hover:text-rose transition-all">Relatos de Pacientes</Link>
          <Link to="/blog" className="hover:text-rose transition-all">Blog & Notícias</Link>
          <Link to="/politica-de-privacidade" className="hover:text-rose transition-all">Privacidade</Link>
          <Link to="/admin" className="text-[9px] uppercase tracking-widest mt-4 hover:text-white">Professional Access</Link>
        </nav>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-[9px] uppercase tracking-[0.4em] font-bold flex flex-col md:flex-row justify-between items-center gap-6 text-center">
      <span>© 2024 Método Acalme-se • Todos os direitos reservados</span>
      <div className="flex gap-8">
        <span>Desenvolvido com IA Studio</span>
        <span className="text-rose">Mococa - SP</span>
      </div>
    </div>
  </footer>
);
