import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '../../firebase';
import { collection, query, orderBy, limit, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const CONTACT_INFO = {
  asaasLink: "https://www.asaas.com/c/820464632110",
};

export const LeadsDashboard = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const { user } = useAuth();
  
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [leadDetails, setLeadDetails] = useState<any>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [calendarConnected, setCalendarConnected] = useState(false);

  const fetchLeadDetails = async (leadId: string) => {
    setLoadingDetails(true);
    try {
      const q = query(collection(db, `leads/${leadId}/quizResponses`), orderBy('createdAt', 'desc'), limit(1));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          setLeadDetails(snapshot.docs[0].data());
        } else {
          setLeadDetails(null);
        }
        setLoadingDetails(false);
      });
    } catch (e) {
      console.error("Erro ao buscar detalhes do lead:", e);
      setLoadingDetails(false);
    }
  };

  useEffect(() => {
    if (!user || user.email !== "terapvent46@gmail.com") return;

    // Check Calendar Status
    fetch('/api/auth/google/status')
      .then(res => res.json())
      .then(data => setCalendarConnected(data.connected))
      .catch(err => console.error("Erro ao verificar status da agenda:", err));

    // Fetch Leads
    const qLeads = query(collection(db, 'leads'), orderBy('createdAt', 'desc'), limit(50));
    const unsubLeads = onSnapshot(qLeads, (snapshot) => {
      setLeads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'leads'));

    // Fetch Appointments
    const qApps = query(collection(db, 'appointments'), orderBy('dateTime', 'desc'), limit(50));
    const unsubApps = onSnapshot(qApps, (snapshot) => {
      setAppointments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'appointments'));

    // Fetch Messages
    const qMsgs = query(collection(db, 'messages'), orderBy('createdAt', 'desc'), limit(50));
    const unsubMsgs = onSnapshot(qMsgs, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'messages'));

    return () => {
      unsubLeads();
      unsubApps();
      unsubMsgs();
    };
  }, [user]);

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, 'leads', id), { status });
    } catch (e) {
      handleFirestoreError(e, OperationType.UPDATE, `leads/${id}`);
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'messages', id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `messages/${id}`);
    }
  };

  return (
    <div className="space-y-16">
      <div className="flex justify-end">
        <button 
          onClick={async () => {
            const res = await fetch('/api/auth/google/url');
            const { url } = await res.json();
            window.open(url, '_blank', 'width=600,height=700');
          }}
          className={`px-6 py-3 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 ${
            calendarConnected ? 'bg-green-500 text-white' : 'bg-brand-accent text-white'
          }`}
        >
          {calendarConnected ? 'Agenda Conectada' : 'Conectar Google Agenda'}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5">
            <p className="text-[10px] uppercase tracking-widest opacity-100 font-bold mb-2">Total de Leads</p>
            <p className="text-4xl font-serif">{leads.length}</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5">
            <p className="text-[10px] uppercase tracking-widest opacity-100 font-bold mb-2">Agendamentos</p>
            <p className="text-4xl font-serif">{appointments.length}</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5">
            <p className="text-[10px] uppercase tracking-widest opacity-100 font-bold mb-2">Mensagens</p>
            <p className="text-4xl font-serif">{messages.length}</p>
          </div>
        </div>

      <div className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif">Guia de Atendimento (Script WhatsApp)</h2>
          <span className="bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Aumentar Conversão</span>
        </div>
        <div className="bg-white rounded-[2rem] border border-brand-ink/5 p-8 lg:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 opacity-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-[8px]">1</span>
                  Acolhimento Inicial
                </h4>
                <div className="p-4 bg-brand-paper/50 rounded-xl border border-brand-ink/5 text-sm italic relative group">
                  "Olá [Nome], seja bem-vindo. Recebemos o resultado da sua triagem. Obrigado por compartilhar essas informações. Vou fazer apenas algumas perguntas rápidas para organizar seu atendimento."
                  <button 
                    onClick={() => navigator.clipboard.writeText("Olá [Nome], seja bem-vindo. Recebemos o resultado da sua triagem. Obrigado por compartilhar essas informações. Vou fazer apenas algumas perguntas rápidas para organizar seu atendimento.")}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-white rounded shadow-sm text-[8px] font-bold uppercase"
                  >
                    Copiar
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 opacity-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-[8px]">2</span>
                  Validação e Oferta
                </h4>
                <div className="p-4 bg-brand-paper/50 rounded-xl border border-brand-ink/5 text-sm italic relative group">
                  "Pelo que você descreveu na triagem, acredito que uma conversa profissional pode ajudar bastante. Temos alguns horários disponíveis: • terça 19h • quarta 10h • sexta 15h. Qual seria melhor para você?"
                  <button 
                    onClick={() => navigator.clipboard.writeText("Pelo que você descreveu na triagem, acredito que uma conversa profissional pode ajudar bastante. Temos alguns horários disponíveis: • terça 19h • quarta 10h • sexta 15h. Qual seria melhor para você?")}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-white rounded shadow-sm text-[8px] font-bold uppercase"
                  >
                    Copiar
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 opacity-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-[8px]">3</span>
                  Link de Pagamento (Asaas)
                </h4>
                <div className="p-4 bg-brand-paper/50 rounded-xl border border-brand-ink/5 text-sm italic relative group">
                  "Para confirmar seu horário, você pode realizar o pagamento da sessão inicial por este link: {CONTACT_INFO.asaasLink}. Assim que concluir, me envie o comprovante por aqui."
                  <button 
                    onClick={() => navigator.clipboard.writeText(`Para confirmar seu horário, você pode realizar o pagamento da sessão inicial por este link: ${CONTACT_INFO.asaasLink}. Assim que concluir, me envie o comprovante por aqui.`)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-white rounded shadow-sm text-[8px] font-bold uppercase"
                  >
                    Copiar
                  </button>
                </div>
              </div>
              <div className="p-6 bg-brand-ink text-brand-paper rounded-2xl">
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-accent">Dica de Conversão</p>
                <p className="text-xs leading-relaxed opacity-80">
                  Este modelo respeita o estado emocional, filtra curiosos e leva rapidamente ao agendamento. Use os botões de copiar para agilizar o processo da secretária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-serif mb-6">Mensagens de Contato</h2>
        <div className="grid gap-6">
          {messages.length === 0 ? (
            <p className="text-center py-12 bg-white rounded-3xl border border-dashed border-brand-ink/20 opacity-50">Nenhuma mensagem recebida ainda.</p>
          ) : (
            messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-ink/5"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-serif">{msg.name}</h3>
                    <p className="text-sm opacity-60">{msg.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">
                      {new Date(msg.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                    <button 
                      onClick={() => deleteMessage(msg.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Excluir mensagem"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
                <p className="text-brand-ink/80 leading-relaxed bg-brand-paper/30 p-4 rounded-xl italic">
                  "{msg.message}"
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-serif mb-6">Leads Recentes</h2>
        <AnimatePresence>
          {selectedLead && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-brand-ink/40 backdrop-blur-sm"
              onClick={() => setSelectedLead(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-brand-paper w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-12 relative">
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="absolute top-8 right-8 w-10 h-10 border border-brand-ink/10 rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-brand-paper transition-all"
                  >
                    <X size={20} />
                  </button>

                  <h3 className="text-3xl font-serif mb-2">{selectedLead.name}</h3>
                  <p className="opacity-100 font-bold mb-8">{selectedLead.phone}</p>

                  <div className="space-y-8">
                    {loadingDetails ? (
                      <p className="text-center py-10 italic opacity-50">Carregando respostas do quiz...</p>
                    ) : leadDetails ? (
                      <>
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-100">Respostas do Quiz</h4>
                          <div className="grid gap-4">
                            {Object.entries(leadDetails.responses).map(([key, value]: [string, any]) => (
                              <div key={key} className="p-4 bg-white rounded-xl border border-brand-ink/5">
                                <p className="text-[10px] uppercase tracking-widest opacity-100 font-bold mb-1">{key}</p>
                                <p className="text-sm">{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-100">Análise da IA</h4>
                          <div className="p-6 bg-brand-accent/5 rounded-2xl border border-brand-accent/10 italic font-light leading-relaxed text-brand-ink">
                            {leadDetails.aiAnalysis}
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="text-center py-10 italic opacity-50">Nenhuma resposta de quiz encontrada para este lead.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white rounded-3xl shadow-sm overflow-x-auto border border-brand-ink/5">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-brand-paper/50 text-[10px] uppercase tracking-widest">
              <tr>
                <th className="p-6">Data</th>
                <th className="p-6">Nome</th>
                <th className="p-6">WhatsApp</th>
                <th className="p-6">Status</th>
                <th className="p-6">Detalhes</th>
                <th className="p-6">Ações</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {leads.map(lead => (
                <tr key={lead.id} className="border-t border-brand-ink/5 hover:bg-brand-paper/30 transition-colors">
                  <td className="p-6 opacity-100 font-bold">{new Date(lead.createdAt).toLocaleDateString('pt-BR')}</td>
                  <td className="p-6 font-medium">{lead.name}</td>
                  <td className="p-6 opacity-100 font-bold">{lead.phone}</td>
                  <td className="p-6">
                    <select 
                      value={lead.status} 
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="bg-brand-accent/10 text-brand-accent rounded-full text-[10px] font-bold tracking-wider px-3 py-1 outline-none border-none"
                    >
                      <option value="novo">NOVO</option>
                      <option value="contatado">CONTATADO</option>
                      <option value="qualificado">QUALIFICADO</option>
                      <option value="convertido">CONVERTIDO</option>
                    </select>
                  </td>
                  <td className="p-6">
                    <button 
                      onClick={() => {
                        setSelectedLead(lead);
                        fetchLeadDetails(lead.id);
                      }}
                      className="text-brand-accent hover:underline text-xs font-bold"
                    >
                      Ver Quiz
                    </button>
                  </td>
                  <td className="p-6">
                    <a href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`} target="_blank" className="text-brand-accent font-bold hover:underline">WhatsApp</a>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-12 text-center opacity-40 italic">Nenhum lead encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif mb-6">Agendamentos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map(app => (
              <div key={app.id} className="p-6 bg-white rounded-3xl border border-brand-ink/5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-brand-paper rounded-xl flex items-center justify-center text-brand-accent">
                  <Calendar size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  {app.status === 'pagamento_pendente' ? 'Pagamento Pendente' : app.status === 'cancelled' ? 'Cancelado' : app.status}
                </span>
              </div>
              <p className="text-lg font-serif mb-1">{app.name || 'Sem Nome'}</p>
              <p className="text-sm opacity-100 font-bold mb-2">{app.phone || 'Sem Telefone'}</p>
              <p className="text-sm font-medium mb-1">{new Date(app.dateTime).toLocaleString('pt-BR')}</p>
              <p className="text-[10px] opacity-100 font-bold mb-4 uppercase tracking-widest">ID: {app.id}</p>
              <div className="flex gap-2">
                <a 
                  href={`https://wa.me/55${(app.phone || '').replace(/\D/g, '')}`} 
                  target="_blank" 
                  className="flex-1 py-2 text-[10px] text-center font-bold uppercase tracking-widest bg-brand-accent text-white rounded-lg hover:opacity-90 transition-all"
                >
                  WhatsApp
                </a>
                <button 
                  onClick={() => updateDoc(doc(db, 'appointments', app.id), { status: 'cancelled' })}
                  className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest border border-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ))}
          {appointments.length === 0 && (
            <div className="col-span-full p-12 text-center opacity-40 italic border border-dashed border-brand-ink/10 rounded-3xl">
              Nenhum agendamento encontrado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
