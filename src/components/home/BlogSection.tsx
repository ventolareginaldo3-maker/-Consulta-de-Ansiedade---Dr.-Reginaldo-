import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { BLOG_POSTS } from '../../blogData';

export const BlogSection = () => {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent/[0.01] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 lg:mb-32">
          <div className="text-center md:text-left max-w-3xl">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 lg:mb-8">
              <div className="h-px w-8 bg-brand-accent/40" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold">Educação Emocional</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1] lg:leading-[0.9] tracking-tighter text-brand-ink">
              Blogs & <br />
              <span className="italic font-light text-brand-accent">Artigos sobre Ansiedade em Mococa.</span>
            </h2>
            <p className="text-brand-accent text-xs uppercase tracking-widest font-bold mb-6">Onde a Ciência da Psicanálise encontra o seu dia a dia.</p>
            <p className="text-lg text-brand-ink/70 font-serif italic leading-relaxed mb-8">
              Entender o que acontece dentro de você é o primeiro passo para a cura. Como parte da nossa jornada de transformação, preparei este espaço de curadoria com conteúdos profundos sobre ansiedade, comportamento e o universo feminino.
              <br /><br />
              Explore os temas abaixo e comece a dar nome ao que você sente:
            </p>
          </div>
          <Link to="/blog" className="px-10 py-5 bg-brand-paper border border-brand-ink/10 rounded-full font-bold hover:bg-brand-ink hover:text-brand-paper transition-all uppercase tracking-widest text-[10px]">
            Ver Todos os Artigos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post, i) => (
            <Link 
              key={i}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer block"
            >
              <motion.div 
                initial={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl mb-8 border border-brand-ink/5 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[8px] uppercase tracking-widest font-black text-brand-accent">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{post.date}</p>
                  <h3 className="text-2xl font-serif leading-tight text-brand-ink group-hover:text-brand-accent transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-4 text-brand-accent font-bold uppercase tracking-widest text-[10px]">
                    Ler Artigo Completo
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
