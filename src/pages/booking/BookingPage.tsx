import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../firebase';
import { Zap, Calendar } from 'lucide-react';
import { CONTACT_INFO, THERAPY_METHODS, WEB3FORMS_ACCESS_KEY } from '../../constants';
import { analytics } from '../../services/analytics';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setBooked(true);
    }
  }, [searchParams]);

  const getTimeSlots = (dateString: string) => {
    if (!dateString) return [];
    const d = new Date(dateString + 'T12:00:00');
    const day = d.getDay();

    if (day === 3) { // Quarta
      return ["09:00", "10:30"];
    }
    if (day === 4) { // Quinta
      return ["17:00", "18:00"];
    }
    if (day === 6) { // Sábado
      return ["09:00", "10:00", "11:00"];
    }
    return [];
  };

  const timeSlots = getTimeSlots(date);

  const handleBooking = async (e: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    console.log("Iniciando processo de agendamento...", { name, phone, date, time });
    
    if (!name || !phone || !date || !time) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    
    try {
      // Salvar intenção de agendamento no Firestore
      const docRef = await addDoc(collection(db, 'appointments'), {
        name,
        phone,
        dateTime: `${date}T${time}:00`,
        status: 'pagamento_pendente',
        createdAt: new Date().toISOString(),
        service: THERAPY_METHODS[0].name,
        price: THERAPY_METHODS[0].price
      });
      
      console.log("Agendamento salvo com sucesso. ID:", docRef.id);

      // Enviar e-mail via Web3Forms
      try {
        const emailResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "Novo Agendamento - Método Resgate",
            from_name: "Site Método Resgate",
            message: `Novo agendamento recebido:
            Nome: ${name}
            WhatsApp: ${phone}
            Data: ${date}
            Horário: ${time}
            Serviço: ${THERAPY_METHODS[0].name}
            Preço: R$ ${THERAPY_METHODS[0].price}`,
          }),
        });
        console.log("Notificação de e-mail de agendamento enviada:", emailResponse.ok);
      } catch (emailErr) {
        console.error("Erro ao enviar notificação de e-mail de agendamento:", emailErr);
      }

      // Abrir o link do Asaas em uma nova aba
      console.log("Abrindo link de pagamento em nova aba...");
      window.open(CONTACT_INFO.asaasLink, '_blank');
      
      // Track Lead Event
      analytics.trackLead('agendamento');
      
      // Avançar para uma etapa de confirmação/sucesso
      setStep(4); 
    } catch (err) {
      console.error("Erro ao processar agendamento:", err);
      handleFirestoreError(err, OperationType.WRITE, 'appointments');
      alert("Erro ao processar agendamento. Por favor, tente novamente ou entre em contato via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section className="pt-24 lg:pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Agendar Consulta | Dr. Reginaldo Ventola</title>
        <meta name="description" content="Agende sua consulta com o Dr. Reginaldo Ventola e inicie sua jornada de resgate emocional com o Método Acalme-se." />
        <link rel="canonical" href={window.location.origin + "/agendar"} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 md:p-12 lg:p-16 rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-brand-ink/5"
      >
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-5xl font-serif mb-4">Agendar Avaliação</h2>
          <div className="flex justify-center gap-2 mb-6 lg:mb-8">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 w-8 lg:w-12 rounded-full transition-all duration-500 ${step >= s ? 'bg-brand-accent' : 'bg-brand-ink/5'}`}
              />
            ))}
          </div>
        </div>

        {!booked ? (
          <div className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 lg:space-y-8"
                >
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-4 block opacity-100 text-center">1. Escolha uma Data</label>
                    <p className="text-[10px] text-center opacity-60 mb-4">Disponível: Quartas (Manhã), Quintas (17h-19h) e Sábados (Manhã)</p>
                    <input 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full p-4 lg:p-6 bg-brand-paper/50 border border-brand-ink/10 rounded-xl lg:rounded-2xl focus:border-brand-accent outline-none text-center text-lg lg:text-xl font-serif text-brand-ink"
                      value={date}
                      onChange={e => {
                        setDate(e.target.value);
                        setTime('');
                      }}
                    />
                    {date && getTimeSlots(date).length === 0 && (
                      <p className="text-red-500 text-[10px] text-center mt-2 font-bold uppercase tracking-widest">Não há horários disponíveis para este dia.</p>
                    )}
                  </div>
                  <button 
                    disabled={!date}
                    onClick={nextStep}
                    className="w-full bg-brand-ink text-brand-paper p-4 lg:p-5 rounded-xl lg:rounded-2xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-30 text-sm lg:text-base shadow-xl shadow-brand-ink/20 animate-cta-pulse"
                  >
                    Próximo Passo
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 lg:space-y-8"
                >
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-6 block opacity-100 text-center">2. Escolha o Horário</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`p-3 lg:p-4 rounded-xl border text-sm lg:text-base font-medium transition-all ${
                            time === t 
                              ? 'bg-brand-accent text-white border-brand-accent shadow-lg scale-105' 
                              : 'bg-white border-brand-ink/10 hover:border-brand-accent/50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 lg:gap-4">
                    <button onClick={prevStep} className="flex-1 p-4 lg:p-5 border border-brand-ink/10 rounded-xl lg:rounded-2xl font-bold opacity-60 text-sm lg:text-base">Voltar</button>
                    <button 
                      disabled={!time}
                      onClick={nextStep}
                      className="flex-[2] bg-brand-ink text-brand-paper p-4 lg:p-5 rounded-xl lg:rounded-2xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-30 text-sm lg:text-base animate-cta-pulse"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 lg:space-y-8"
                >
                  <div className="space-y-3 lg:space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-100 text-center">3. Seus Dados de Contato</label>
                    <input 
                      type="text" 
                      placeholder="Nome Completo" 
                      required
                      className="w-full p-4 lg:p-5 bg-brand-paper/50 border border-brand-ink/10 rounded-xl lg:rounded-2xl focus:border-brand-accent outline-none text-brand-ink text-sm lg:text-base"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    <input 
                      type="tel" 
                      placeholder="WhatsApp (com DDD)" 
                      required
                      className="w-full p-4 lg:p-5 bg-brand-paper/50 border border-brand-ink/10 rounded-xl lg:rounded-2xl focus:border-brand-accent outline-none text-brand-ink text-sm lg:text-base"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  
                  <div className="p-4 lg:p-6 bg-brand-accent/5 rounded-xl lg:rounded-2xl border border-brand-accent/10 space-y-3">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-100 mb-2">Resumo do Agendamento</p>
                    <div className="flex justify-between items-center border-b border-brand-ink/5 pb-2">
                      <span className="text-xs opacity-60 uppercase tracking-wider">Serviço:</span>
                      <span className="text-sm font-bold text-brand-ink">{THERAPY_METHODS[0].name}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-brand-ink/5 pb-2">
                      <span className="text-xs opacity-60 uppercase tracking-wider">Data e Hora:</span>
                      <span className="text-sm font-bold text-brand-ink">
                        {new Date(date + 'T00:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })} às {time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs opacity-60 uppercase tracking-wider">Valor da Sessão:</span>
                      <div className="text-right">
                        <span className="text-xs line-through opacity-40 mr-2">{THERAPY_METHODS[0].originalPrice}</span>
                        <span className="text-lg font-serif font-bold text-brand-accent">{THERAPY_METHODS[0].price}</span>
                        <div className="text-[9px] text-brand-accent font-bold uppercase tracking-tighter">Condição Exclusiva Hoje</div>
                      </div>
                    </div>
                    <p className="text-[10px] opacity-50 italic text-center mt-4">
                      * Ao clicar em finalizar, você será redirecionada para o pagamento seguro via Asaas.
                    </p>
                  </div>

                  <div className="flex gap-3 lg:gap-4">
                    <button onClick={prevStep} className="flex-1 p-4 lg:p-5 border border-brand-ink/10 rounded-xl lg:rounded-2xl font-bold opacity-60 text-sm lg:text-base">Voltar</button>
                    <button 
                      onClick={handleBooking}
                      disabled={!name || !phone || loading}
                      className="flex-[2] bg-brand-accent text-white p-4 lg:p-5 rounded-xl lg:rounded-2xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-30 shadow-xl shadow-brand-accent/20 text-sm lg:text-base animate-cta-pulse"
                    >
                      {loading ? "Processando..." : "Finalizar Agendamento"}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 lg:space-y-8 py-4 lg:py-8"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={32} className="animate-pulse" />
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-serif text-brand-ink">Quase lá!</h3>
                    <p className="text-sm lg:text-base text-brand-ink/70 max-w-sm mx-auto">
                      Seu agendamento foi pré-registrado. Uma nova aba foi aberta para você realizar o pagamento seguro.
                    </p>
                  </div>

                  <div className="p-6 lg:p-8 bg-brand-accent/5 rounded-2xl lg:rounded-3xl border border-brand-accent/20 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2">
                      <span className="bg-brand-accent text-white text-[8px] font-bold px-2 py-1 rounded-full animate-bounce uppercase tracking-tighter">Oportunidade Única</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-brand-ink">Esta é a sua chance de transformar sua saúde emocional.</p>
                      <p className="text-xs text-brand-ink/60 italic">
                        Não deixe para amanhã. O valor normal de <span className="line-through opacity-60">{THERAPY_METHODS[0].originalPrice}</span> foi reduzido para apenas <span className="text-brand-accent font-bold">{THERAPY_METHODS[0].price}</span>. 
                        Esta condição é garantida apenas para a conclusão imediata deste agendamento.
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Se o pagamento não abriu:</p>
                      <a 
                        href={CONTACT_INFO.asaasLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-base lg:text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-accent/40 animate-cta-pulse"
                      >
                        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping pointer-events-none"></span>
                        <span className="absolute inset-0 rounded-full bg-brand-accent animate-pulse blur-md opacity-50 -z-10"></span>
                        
                        CONCLUIR AGENDAMENTO AGORA
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p className="text-[10px] lg:text-xs opacity-50 italic">
                      * Após o pagamento, sua vaga será confirmada automaticamente e o Dr. Reginaldo entrará em contato via WhatsApp.
                    </p>
                    <p className="text-[9px] uppercase tracking-tighter font-bold text-brand-accent/60">
                      Sua saúde não pode esperar. Garanta seu horário hoje.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-8 lg:py-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 lg:w-24 lg:h-24 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8"
            >
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-serif mb-4">Pagamento Confirmado!</h3>
            <p className="text-base lg:text-lg opacity-100 font-bold mb-8 lg:mb-10 max-w-md mx-auto text-brand-ink">
              Sua consulta foi agendada e o pagamento foi processado com sucesso. 
              Você receberá um e-mail de confirmação e o Dr. Reginaldo entrará em contato via WhatsApp em breve.
            </p>
            <Link to="/" className="inline-block px-8 py-4 lg:px-10 lg:py-4 bg-brand-ink text-brand-paper rounded-full font-bold hover:scale-105 transition-transform text-sm lg:text-base">
              Voltar ao Início
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Booking;
