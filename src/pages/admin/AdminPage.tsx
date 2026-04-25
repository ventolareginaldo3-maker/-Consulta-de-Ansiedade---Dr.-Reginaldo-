import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LeadsDashboard } from '../../components/admin/LeadsDashboard';
import { PaymentImages } from '../../components/admin/PaymentImages';
import { LinkGenerator } from '../../components/admin/LinkGenerator';
import { EbooksManager } from '../../components/admin/EbooksManager';

const AdminPage = () => {
  const { user, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'leads' | 'banners' | 'links' | 'ebooks'>('leads');

  if (!user || user.email !== "terapvent46@gmail.com") {
    return (
      <div className="min-h-screen bg-brand-paper flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-serif mb-8 text-brand-ink">Acesso Restrito</h1>
          <button 
            onClick={login}
            className="w-full py-4 bg-brand-ink text-brand-paper rounded-full font-bold hover:bg-brand-accent transition-all"
          >
            Fazer Login com Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h1 className="text-4xl font-serif text-brand-ink">Painel do Profissional</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('leads')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'leads' ? 'bg-brand-ink text-brand-paper' : 'bg-white text-brand-ink border border-brand-ink/10'}`}
            >
              Leads & Agendamentos
            </button>
            <button 
              onClick={() => setActiveTab('links')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'links' ? 'bg-brand-ink text-brand-paper' : 'bg-white text-brand-ink border border-brand-ink/10'}`}
            >
              Gerador de Links
            </button>
            <button 
              onClick={() => setActiveTab('ebooks')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'ebooks' ? 'bg-brand-ink text-brand-paper' : 'bg-white text-brand-ink border border-brand-ink/10'}`}
            >
              E-books
            </button>
            <button 
              onClick={() => setActiveTab('banners')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'banners' ? 'bg-brand-ink text-brand-paper' : 'bg-white text-brand-ink border border-brand-ink/10'}`}
            >
              Banners Asaas
            </button>
            <button 
              onClick={logout}
              className="px-6 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-100 transition-all"
            >
              Sair
            </button>
          </div>
        </div>

        {activeTab === 'leads' && <LeadsDashboard />}
        {activeTab === 'banners' && <PaymentImages />}
        {activeTab === 'links' && <LinkGenerator />}
        {activeTab === 'ebooks' && <EbooksManager />}
      </div>
    </div>
  );
};

export default AdminPage;
