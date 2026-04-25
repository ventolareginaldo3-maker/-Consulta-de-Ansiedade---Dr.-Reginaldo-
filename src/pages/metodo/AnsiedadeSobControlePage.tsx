import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ListChecks, Brain, Sun, Moon, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import JourneySteps from '../../components/ui/JourneySteps';
import AboutProfessional from '../../components/home/AboutProfessional';

const AnsiedadeSobControlePage = () => {
  const checklistItems = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Rotina Matinal",
      items: [
        "Acordar sem o celular nos primeiros 15 minutos",
        "Praticar 5 minutos de respiração consciente",
        "Hidratação imediata (copo de água)",
        "Exposição à luz solar natural"
      ]
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Durante o Dia",
      items: [
        "Pausas de 5 minutos a cada 90 minutos de trabalho",
        "Redução de cafeína após as 14h",
        "Prática de 'Grounding' (pés no chão ou toque consciente)",
        "Observação de pensamentos intrusivos sem julgamento"
      ]
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Higiene do Sono",
      items: [
        "Desligar telas 1 hora antes de dormir",
        "Banho morno para relaxamento muscular",
        "Escrita terapêutica (esvaziar a mente no papel)",
        "Ambiente escuro e fresco"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <Helmet>
        <title>Checklist: Ansiedade Sob Controle | Método Acalme-se</title>
        <meta name="description" content="Siga este checklist diário para manter sua ansiedade sob controle e retomar o domínio da sua vida." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <JourneySteps currentStep={2} />
        </div>
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
            Material Gratuito
          </span>
          <h1 className="text-4xl lg:text-6xl font-serif text-brand-ink mb-6">
            Checklist: Ansiedade Sob Controle
          </h1>
          <p className="text-xl text-brand-ink/70">
            Pequenas ações diárias que geram grandes transformações emocionais.
          </p>
        </motion.header>

        <div className="space-y-8">
          {checklistItems.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-brand-accent/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif text-brand-ink">{section.title}</h2>
              </div>
              
              <div className="grid gap-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-brand-paper rounded-2xl border border-brand-accent/5 hover:border-brand-accent/20 transition-all cursor-pointer group">
                    <div className="w-6 h-6 rounded-full border-2 border-brand-accent/30 flex items-center justify-center group-hover:border-brand-accent transition-all">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <span className="text-brand-ink/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}

          <section className="bg-brand-ink text-white p-12 rounded-[2rem] text-center mb-16">
            <Brain className="w-12 h-12 text-brand-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif mb-6">A Ansiedade não precisa ser sua inimiga.</h2>
            <p className="mb-8 opacity-80">
              Assista ao vídeo abaixo para entender como retomar o controle.
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
               <YouTubeEmbed 
                videoId="R7Dk-i7vJYo" 
                title="Ansiedade Sob Controle - Dr. Reginaldo Ventola" 
              />
            </div>
            <Link 
              to="/agendar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-ink rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all"
            >
              Começar Tratamento Agora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>

        <div className="mt-24 pt-24 border-t border-brand-accent/20">
          <AboutProfessional />
        </div>
      </div>
    </main>
  );
};

export default AnsiedadeSobControlePage;
