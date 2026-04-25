import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Beatriz G.",
    role: "Paciente em Mococa",
    content: "Eu achava que viver com medo era o meu 'normal'. No Método Acalme-se, entendi que a minha ansiedade era um pedido de ajuda da minha história. Hoje, as crises pararam e eu finalmente voltei a dormir tranquila.",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    role: "Mococa/SP",
    content: "Dr. Reginaldo não olha apenas para o sintoma, ele olha para a gente. A fase de Regulação me salvou nos dias mais difíceis. Hoje me sinto segura para sair de casa e viver sem aquele peso no peito.",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    role: "Atendimento Online",
    content: "Dr. Reginaldo é um profissional excepcional. A abordagem integrada realmente faz a diferença. Senti melhoras logo nas primeiras semanas.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-brand-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-accent/30 rounded-full mb-6"
          >
            <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Vidas Transformadas em Mococa</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ink mb-6 leading-tight tracking-tighter">
            Vidas Transformadas em Mococa <br />
            <span className="italic font-light text-brand-accent text-2xl md:text-4xl">O que dizem as mulheres que decidiram redesenhar sua própria história:</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
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

        <div className="text-center">
          <Link 
            to="/depoimentos"
            className="inline-flex items-center gap-4 px-10 py-5 bg-brand-ink text-brand-paper rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl shadow-brand-ink/20 hover:shadow-brand-accent/30 text-[10px]"
          >
            Ver mais depoimentos reais
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
