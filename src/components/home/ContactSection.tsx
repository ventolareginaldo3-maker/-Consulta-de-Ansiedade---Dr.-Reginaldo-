import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { CONTACT_INFO, WEB3FORMS_ACCESS_KEY } from '../../constants';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Save to Firestore (Database)
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: new Date().toISOString()
      });

      // 2. Send Email via Web3Forms (Simple Notification)
      const accessKey = WEB3FORMS_ACCESS_KEY;
      
      if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Nova mensagem de contato: ${formData.name}`,
            from_name: "Site Método Acalme-se"
          })
        });
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  return (
    <section id="contato" className="py-24 px-6 bg-brand-paper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/[0.02] -z-10" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-ink">Entre em Contato</h2>
          <p className="mt-4 text-brand-ink italic font-medium">Tem alguma dúvida ou quer saber mais? Fale conosco agora mesmo.</p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg animate-cta-pulse"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Direto
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-3 px-8 py-4 border-2 border-brand-ink text-brand-ink rounded-full font-bold hover:bg-brand-ink hover:text-brand-paper transition-all animate-cta-pulse"
            >
              Ligar Agora
            </a>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-brand-ink/5"
        >
          {success ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4 text-brand-ink">Mensagem Enviada!</h3>
              <p className="text-brand-ink/70 mb-8">Obrigado pelo seu contato. Responderemos o mais breve possível.</p>
              <button 
                onClick={() => setSuccess(false)}
                className="px-10 py-4 bg-brand-ink text-brand-paper rounded-full font-bold hover:scale-105 transition-transform"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-70 ml-2 text-brand-ink">Nome</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome completo"
                    className="w-full p-5 bg-brand-paper/50 border border-brand-ink/10 rounded-2xl focus:border-brand-accent outline-none transition-colors text-brand-ink"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-70 ml-2 text-brand-ink">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="seu@email.com"
                    className="w-full p-5 bg-brand-paper/50 border border-brand-ink/10 rounded-2xl focus:border-brand-accent outline-none transition-colors text-brand-ink"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-70 ml-2 text-brand-ink">Mensagem</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Como podemos te ajudar? Sinta-se à vontade para compartilhar suas dúvidas."
                  className="w-full p-5 bg-brand-paper/50 border border-brand-ink/10 rounded-2xl focus:border-brand-accent outline-none resize-none transition-colors text-brand-ink"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-brand-ink text-brand-paper p-5 lg:p-6 rounded-2xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 shadow-xl shadow-brand-ink/20 flex items-center justify-center gap-3 animate-cta-pulse"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-brand-paper/30 border-t-brand-paper rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
        <div className="mt-16 text-center">
          <p className="text-sm text-brand-ink/40 uppercase tracking-widest font-bold">
            Especialista em Ansiedade e Psiquiatra em Mococa - Dr. Reginaldo Ventola
          </p>
        </div>
      </div>
    </section>
  );
};
