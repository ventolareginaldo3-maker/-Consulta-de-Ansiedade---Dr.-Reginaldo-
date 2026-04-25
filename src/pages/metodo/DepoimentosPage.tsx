import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, Quote } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

const testimonials = [
  {
    name: "Bianca",
    role: "Paciente em Mococa",
    content: "O Método Acalme-se foi um divisor de águas. Eu não conseguia mais lidar com a pressão do dia a dia e as crises eram constantes. Hoje me sinto outra pessoa, com controle e paz.",
    rating: 5,
    isVideo: true,
    youtubeId: "UXkFKjabHPk" // Bianca's testimonial video
  },
  {
    name: "Maria Silva",
    role: "Paciente em Mococa",
    content: "O Método Acalme-se mudou minha vida. Eu vivia em um estado constante de alerta e hoje consigo dormir tranquila e ter controle sobre meus pensamentos.",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    role: "Atendimento Online",
    content: "Dr. Reginaldo é um profissional excepcional. A abordagem integrada realmente faz a diferença. Senti melhoras logo nas primeiras semanas.",
    rating: 5
  },
  {
    name: "Juliana Santos",
    role: "Paciente em Mococa",
    content: "Eu tinha crises de pânico constantes. Com a hipnoterapia e a psicanálise, consegui entender a raiz do problema e hoje me sinto livre.",
    rating: 5
  },
  {
    name: "Carla Mendes",
    role: "Empresária",
    content: "A sobrecarga emocional estava acabando com minha saúde. O tratamento me devolveu a clareza mental e a energia para trabalhar e cuidar da minha família.",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    role: "Professora",
    content: "Excelente atendimento. O ambiente é acolhedor e o método é muito eficaz. Recomendo a todas as mulheres que sofrem com ansiedade.",
    rating: 5
  }
];

const DepoimentosPage = () => {
  return (
    <main className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <Helmet>
        <title>Depoimentos e Resultados | Método Acalme-se</title>
        <meta name="description" content="Veja os resultados e depoimentos de pacientes que transformaram suas vidas com o Método Acalme-se do Dr. Reginaldo Ventola em Mococa." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-accent/30 rounded-full mb-6"
          >
            <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Resultados Reais</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-ink mb-8 leading-tight tracking-tighter"
          >
            Vidas Transformadas <br />
            <span className="italic font-light text-brand-accent">pelo Método Acalme-se</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-ink/70 max-w-2xl mx-auto font-serif italic"
          >
            Histórias de superação e resgate da paz interior de quem decidiu dar o primeiro passo.
          </motion.p>
        </header>

        {/* Video Testimonial Section */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif italic text-brand-ink">Prova Social: Depoimento da Bianca</h2>
              <div className="h-1 w-20 bg-brand-accent mx-auto mt-4" />
            </div>
            <div className="relative aspect-video bg-brand-ink rounded-[3rem] overflow-hidden shadow-2xl border border-brand-ink/5">
              <YouTubeEmbed 
                videoId="UXkFKjabHPk" 
                title="Método Acalme-se - Depoimento Bianca" 
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.filter(t => !t.isVideo).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-brand-ink/5 relative group hover:shadow-2xl transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="text-brand-ink/80 leading-relaxed mb-8 italic font-serif text-lg">
                "{testimonial.content}"
              </p>

              <div className="mt-auto">
                <p className="font-bold text-brand-ink uppercase tracking-widest text-xs mb-1">{testimonial.name}</p>
                <p className="text-brand-accent text-[10px] uppercase tracking-widest font-bold">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="p-12 bg-brand-ink text-brand-paper rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -mr-32 -mt-32" />
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">Sua história pode ser a próxima.</h2>
            <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto font-light">
              Não deixe a ansiedade controlar sua vida. Agende uma avaliação e comece sua jornada de resgate hoje mesmo.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`, '_blank')}
              className="px-12 py-6 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/30"
            >
              Agendar minha avaliação agora
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DepoimentosPage;
