import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

import { CONTACT_INFO } from '../../constants';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 sm:left-auto sm:right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-8 h-8" />
    </motion.a>
  );
};
