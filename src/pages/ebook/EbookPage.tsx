import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';
import { LeadCaptureModal } from '../../components/ui/LeadCaptureModal';
import { useNavigate } from 'react-router-dom';

const EbookPage = () => {
  const navigate = useNavigate();
  const [selectedEbook, setSelectedEbook] = useState<{ title: string; link: string } | null>(null);

  const ebooks = [
    {
      title: "Mente Ansiosa: O Guia Definitivo",
      description: "Um guia completo para entender e dominar sua ansiedade no dia a dia. Pronto para transformar sua vida.",
      image: "https://res.cloudinary.com/djl7c37my/image/upload/v1777042283/Guia_De_Resgate-Psiquiatra_Mococa_hhkd54.png",
      link: "https://sites.google.com/view/reginaldo-ebook/",
      isPaid: true,
      price: "R$ 47,00"
    },
    {
      title: "Guia de Resgate: Ansiedade",
      description: "Um guia prático para momentos de crisis e estratégias de longo prazo.",
      image: "https://res.cloudinary.com/djl7c37my/image/upload/v1777042283/Guia_De_Resgate-Psiquiatra_Mococa_hhkd54.png",
      link: "/guia-de-resgate",
      isPaid: false
    },
    {
      title: "Checklist: Ansiedade Sob Controle",
      description: "Descubra como sua mente funciona e como retomar o controle com este checklist diário.",
      image: "https://images.unsplash.com/photo-1512130632511-965306616086?q=80&w=2000&auto=format&fit=crop",
      link: "/ansiedade-sob-controle",
      isPaid: false
    }
  ];

  const handleDownloadClick = (ebook: { title: string; link: string }) => {
    setSelectedEbook(ebook);
  };

  return (
    <main className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <Helmet>
        <title>E-books e Recursos | Método Acalme-se</title>
        <meta name="description" content="Baixe nossos e-books e comece sua jornada de autoconhecimento e alívio da ansiedade." />
        <link rel="canonical" href={window.location.origin + '/ebooks'} />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-serif text-brand-ink mb-6"
          >
            Nossos E-books
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-ink/70 max-w-2xl mx-auto"
          >
            Recursos exclusivos preparados para ajudar você a entender e superar a ansiedade.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-brand-accent/10 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 h-64 lg:h-auto">
                <img 
                  src={ebook.image} 
                  alt={ebook.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-brand-accent" />
                  {ebook.isPaid && (
                    <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {ebook.price}
                    </span >
                  )}
                </div>
                <h2 className="text-2xl font-serif text-brand-ink mb-4">{ebook.title}</h2>
                <p className="text-brand-ink/70 mb-8">{ebook.description}</p>
                
                {ebook.isPaid ? (
                  <a 
                    href={ebook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-ink text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors text-center"
                  >
                    Comprar Agora
                  </a>
                ) : (
                  <button 
                    onClick={() => handleDownloadClick(ebook)}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-ink text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors text-center"
                  >
                    <Download className="w-5 h-5" />
                    Baixar Agora
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LeadCaptureModal 
        isOpen={!!selectedEbook}
        onClose={() => setSelectedEbook(null)}
        ebookTitle={selectedEbook?.title || ''}
        onSuccess={() => {
          if (selectedEbook) {
            if (selectedEbook.link.startsWith('http')) {
              window.open(selectedEbook.link, '_blank');
            } else {
              navigate(selectedEbook.link);
            }
          }
        }}
      />
    </main>
  );
};

export default EbookPage;
