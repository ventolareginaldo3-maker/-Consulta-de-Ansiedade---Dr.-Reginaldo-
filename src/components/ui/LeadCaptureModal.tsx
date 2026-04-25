import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2, Download } from 'lucide-react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  ebookTitle: string;
  onSuccess: () => void;
}

export const LeadCaptureModal = ({ isOpen, onClose, ebookTitle, onSuccess }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        source: `Ebook: ${ebookTitle}`,
        status: 'new',
        createdAt: serverTimestamp()
      });
      
      setStatus('success');
      setTimeout(() => {
        onSuccess();
        onClose();
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '' });
      }, 2000);
    } catch (error) {
      console.error('Error saving lead:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-brand-paper rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-brand-accent/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-brand-ink" />
            </button>

            <div className="p-8 lg:p-10">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-serif text-brand-ink mb-2">Quase lá!</h3>
                  <p className="text-brand-ink/70">Seu acesso está sendo liberado...</p>
                </div>
              ) : (
                <>
                    <div className="mb-8">
                      <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-4">
                        <Download className="w-6 h-6 text-brand-accent" />
                      </div>
                      <h3 className="text-2xl font-serif text-brand-ink mb-2">Baixar E-book Grátis</h3>
                      <p className="text-brand-ink/70 text-sm">
                        Preencha os dados abaixo para receber o acesso imediato ao material: <br/>
                        <span className="font-bold text-brand-accent">{ebookTitle}</span>
                      </p>
                    </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Nome Completo</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-white border border-brand-accent/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                        placeholder="Como podemos te chamar?"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">WhatsApp</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 bg-white border border-brand-accent/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">E-mail (Opcional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 bg-white border border-brand-accent/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <button
                      disabled={status === 'loading'}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-ink text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent transition-all disabled:opacity-50 mt-6 animate-cta-pulse"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Liberar Acesso Agora
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-brand-ink/40 mt-4">
                      🔒 Seus dados estão seguros. Não enviamos spam. <br/>
                      Ao clicar, você concorda em receber o material solicitado.
                    </p>
                    
                    {status === 'error' && (
                      <p className="text-red-500 text-xs text-center mt-4">
                        Ocorreu um erro. Por favor, tente novamente.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
