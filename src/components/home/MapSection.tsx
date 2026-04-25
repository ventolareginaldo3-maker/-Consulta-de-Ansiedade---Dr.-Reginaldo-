import React from 'react';
import { CONTACT_INFO } from '../../constants';

export const MapSection = () => {
  const position = { lat: -21.4658, lng: -47.0047 }; // Mococa center
  const apiKey = ''; // Using iframe instead of Google Maps API for better performance and reliability without key issues

  return (
    <section className="py-20 lg:py-32 px-6 bg-brand-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <div className="h-px w-8 bg-brand-accent/40" />
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold">Localização</h2>
            </div>
            
            <p className="text-3xl lg:text-5xl text-brand-ink/70 font-serif italic leading-[1.1] mb-8">
              <span className="block mb-2 text-brand-ink font-bold not-italic">Busca por psicanalista em Mococa?</span>
              Atendimento com <span className="text-brand-accent font-bold">psicanalista especializado em ansiedade</span> e suporte à redução de medicação (com orientação médica).
            </p>

            <div className="space-y-8 text-brand-ink/90 font-medium">
              <div className="flex items-start justify-center lg:justify-start gap-4 group">
                <span className="text-2xl mt-1">📍</span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-brand-accent mb-1 font-bold">Endereço</p>
                  <a 
                    href="https://www.google.com/maps?q=Rua+XV+de+Novembro+268+Mococa+SP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg lg:text-xl hover:text-brand-accent transition-colors underline decoration-brand-accent/30 leading-tight block"
                  >
                    Rua XV de Novembro, 268, Sala 10 – Centro
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4 group">
                <span className="text-2xl mt-1">📞</span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-brand-accent mb-1 font-bold">WhatsApp / Telefone</p>
                  <a 
                    href="https://wa.me/5519992416095?text=Olá,%20vi%20a%20busca%20por%20atendimento%20em%20Mococa%20e%20gostaria%20de%20saber%20mais."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl lg:text-3xl font-serif text-brand-ink hover:text-brand-accent transition-colors"
                  >
                    (19) 99241-6095
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-[400px] lg:h-[600px] w-full rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-brand-ink/5">
              <iframe
                title="Localização Método Acalme-se"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=Rua+XV+de+Novembro+268+Mococa+SP&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
