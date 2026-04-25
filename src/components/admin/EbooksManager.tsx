import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';

export const EbooksManager = () => {
  const [ebooks, setEbooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newEbook, setNewEbook] = useState({
    title: '',
    description: '',
    price: '',
    link: '',
    coverUrl: '',
    isActive: true
  });

  useEffect(() => {
    const q = query(collection(db, 'ebooks'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEbooks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }, (err) => {
      console.error("Erro ao carregar e-books:", err);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'ebooks'), {
        ...newEbook,
        createdAt: new Date().toISOString()
      });
      setIsAdding(false);
      setNewEbook({ title: '', description: '', price: '', link: '', coverUrl: '', isActive: true });
    } catch (err) {
      console.error("Erro ao adicionar e-book:", err);
    }
  };

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      await updateDoc(doc(db, 'ebooks', id), { isActive: !currentStatus });
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este e-book?")) {
      try {
        await deleteDoc(doc(db, 'ebooks', id));
      } catch (err) {
        console.error("Erro ao excluir e-book:", err);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif">Meus E-books</h2>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-2 bg-brand-accent text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2"
        >
          {isAdding ? 'Cancelar' : 'Novo E-book'}
        </button>
      </div>

      {isAdding && (
        <motion.form 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleAdd}
          className="bg-white p-8 rounded-[2rem] border border-brand-ink/5 shadow-sm space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">Título</label>
              <input 
                required
                type="text" 
                value={newEbook.title}
                onChange={e => setNewEbook({...newEbook, title: e.target.value})}
                className="w-full bg-brand-paper/50 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-accent"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">Preço (Ex: R$ 47,00)</label>
              <input 
                type="text" 
                value={newEbook.price}
                onChange={e => setNewEbook({...newEbook, price: e.target.value})}
                className="w-full bg-brand-paper/50 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">Descrição Curta</label>
            <textarea 
              value={newEbook.description}
              onChange={e => setNewEbook({...newEbook, description: e.target.value})}
              className="w-full bg-brand-paper/50 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-accent h-24"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">Link de Compra</label>
              <input 
                required
                type="url" 
                value={newEbook.link}
                onChange={e => setNewEbook({...newEbook, link: e.target.value})}
                className="w-full bg-brand-paper/50 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-accent"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">URL da Capa (Opcional)</label>
              <input 
                type="url" 
                value={newEbook.coverUrl}
                onChange={e => setNewEbook({...newEbook, coverUrl: e.target.value})}
                className="w-full bg-brand-paper/50 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-accent"
              />
            </div>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-ink text-brand-paper rounded-full font-bold hover:bg-brand-accent transition-all">
            Salvar E-book
          </button>
        </motion.form>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ebooks.map(ebook => (
          <div key={ebook.id} className="bg-white rounded-[2rem] border border-brand-ink/5 overflow-hidden shadow-sm flex flex-col">
            <div className="aspect-[3/4] bg-brand-paper relative overflow-hidden">
              {ebook.coverUrl ? (
                <img src={ebook.coverUrl} alt={ebook.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-20">
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest ${ebook.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {ebook.isActive ? 'Ativo' : 'Inativo'}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-serif mb-2">{ebook.title}</h3>
              <p className="text-xs opacity-60 mb-4 flex-1 line-clamp-3">{ebook.description}</p>
              <p className="text-lg font-bold text-brand-accent mb-6">{ebook.price}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleStatus(ebook.id, ebook.isActive)}
                  className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest border border-brand-ink/10 rounded-lg hover:bg-brand-ink hover:text-brand-paper transition-all"
                >
                  {ebook.isActive ? 'Desativar' : 'Ativar'}
                </button>
                <button 
                  onClick={() => handleDelete(ebook.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
        {ebooks.length === 0 && !loading && (
          <div className="col-span-full p-12 text-center opacity-40 italic border border-dashed border-brand-ink/10 rounded-3xl">
            Nenhum e-book cadastrado.
          </div>
        )}
      </div>
    </div>
  );
};
