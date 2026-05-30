import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton = () => {
  return (
    <a href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-8 left-8 sm:left-auto sm:right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-transform whatsapp-btn"
      aria-label="Falar no WhatsApp">
      <Phone className="w-8 h-8" />
    </a>
  );
};
