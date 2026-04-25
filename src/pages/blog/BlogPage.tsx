import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown';

import { BLOG_POSTS } from '../../blogData';

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const navigate = useNavigate();
  const posts = BLOG_POSTS;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const post = posts.find(p => p.slug === slug);
      if (post) {
        setSelectedPost(post);
      } else {
        navigate('/blog');
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug, posts, navigate]);

  const handleClose = () => {
    setSelectedPost(null);
    navigate('/blog');
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <Helmet>
        <title>{selectedPost ? `${selectedPost.title} | Blog Método Acalme-se` : 'Blog & Orientações | Método Acalme-se'}</title>
        <meta name="description" content={selectedPost ? selectedPost.content.substring(0, 160) : 'Artigos e orientações sobre ansiedade, saúde mental e o Método Acalme-se.'} />
        {selectedPost && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": selectedPost.title,
              "description": selectedPost.content.substring(0, 160),
              "author": {
                "@type": "Person",
                "name": "Dr. Reginaldo Ventola"
              },
              "datePublished": "2024-03-15",
              "publisher": {
                "@type": "Organization",
                "name": "Método Acalme-se",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.metodoacalmese.com.br/logo.png"
                }
              }
            })}
          </script>
        )}
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-20 group">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600" 
            alt="Blog Hero" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-ink/40 backdrop-blur-[2px] flex flex-col justify-center px-12 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                Blog & <span className="italic font-light text-brand-accent">Orientações</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
                Artigos, técnicas e reflexões para ajudar você a conquistar uma mente mais calma e uma vida com mais propósito.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link 
              key={i} 
              to={`/blog/${post.slug}`}
              className="bg-brand-paper/30 rounded-[3rem] border border-brand-ink/5 hover:bg-white hover:shadow-2xl transition-all cursor-pointer group flex flex-col overflow-hidden h-full"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-serif leading-tight group-hover:text-brand-accent transition-colors mb-4">{post.title}</h3>
                  <p className="text-brand-ink/60 line-clamp-3 text-sm leading-relaxed">
                    {post.content.replace(/[#*`_]/g, '').substring(0, 150)}...
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4 text-brand-accent font-bold text-xs uppercase tracking-widest">
                  <span>Ler Artigo</span>
                  <div className="w-8 h-8 bg-brand-ink text-brand-paper rounded-full flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <AnimatePresence>
          {selectedPost && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center px-6 bg-brand-ink/40 backdrop-blur-sm"
              onClick={handleClose}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-brand-paper w-full max-w-3xl rounded-[3rem] overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-12 relative max-h-[90vh] overflow-y-auto">
                  <button 
                    onClick={handleClose}
                    className="absolute top-8 right-8 w-10 h-10 border border-brand-ink/10 rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-brand-paper transition-all z-10"
                  >
                  </button>

                  <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8">
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="text-4xl font-serif mb-8 leading-tight text-brand-ink pr-12">
                    {selectedPost.title}
                  </h3>
                  
                  <div className="markdown-body text-lg text-brand-ink font-normal leading-relaxed mb-10 prose prose-brand-ink max-w-none">
                    <Markdown
                      components={{
                        a: ({ node, ...props }) => {
                          const isInternal = props.href?.startsWith('/');
                          if (isInternal) {
                            return <Link to={props.href || ''} {...props} onClick={() => setSelectedPost(null)} />;
                          }
                          return <a {...props} target="_blank" rel="noopener noreferrer" />;
                        }
                      }}
                    >
                      {selectedPost.content
                        .replace(/ansiedade/gi, '[ansiedade](/blog/12-sinais-de-ansiedade)')
                        .replace(/Método Acalme-se/gi, '[Método Acalme-se](/metodo-e-tratamento)')
                        .replace(/Dr\. Reginaldo/gi, '[Dr. Reginaldo](/#autoridade)')
                        .replace(/psicanalista em Mococa/gi, '[psicanalista em Mococa](/psiquiatra-ou-psicanalista)')
                      }
                    </Markdown>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/metodo-e-tratamento" 
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('clear-ana-chat'));
                      }}
                      className="flex-1 bg-brand-ink text-brand-paper py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition-transform shadow-xl shadow-brand-ink/20"
                    >
                      Iniciar Jornada de Resgate
                    </Link>
                    <button 
                      onClick={handleClose}
                      className="flex-1 border border-brand-ink/20 py-4 rounded-xl font-bold text-center hover:bg-brand-ink/5 transition-colors shadow-sm"
                    >
                      Fechar Leitura
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
