export const THERAPY_METHODS = [
  {
    id: '1_sessao',
    name: 'Avaliação Inicial',
    description: 'Uma sessão única para diagnóstico e alinhamento terapêutico.',
    price: 'R$ 250,00',
    originalPrice: 'R$ 380,00',
    checkoutUrl: 'https://www.asaas.com/c/bsc8gc6f87kcfi0b',
    features: ['Anamnese Completa', 'Iridologia Clínica', 'Diagnóstico Emocional', 'Plano de Tratamento Personalizado']
  },
  {
    id: '8_sessoes',
    name: 'Método Acalme se (8 Sessões)',
    description: 'Foco em reequilíbrio emocional e superação de crises agudas.',
    price: 'R$ 2.000,00',
    originalPrice: 'R$ 2.800,00',
    checkoutUrl: 'https://www.asaas.com/c/kb6uup9lw9ponxlx',
    features: ['8 Sessões Individuais', 'Reprogramação Subconsciente', 'Protocolo de Naturopatia', 'Suporte via WhatsApp']
  },
  {
    id: '12_sessoes',
    name: 'Método Acalme se (12 Sessões)',
    description: 'Tratamento profundo para ansiedade, depressão e reestruturação cognitiva.',
    price: 'R$ 3.000,00',
    originalPrice: 'R$ 4.200,00',
    checkoutUrl: 'https://www.asaas.com/c/d7rt8qptm545hrtj',
    features: ['12 Sessões Individuais', 'Hipnoterapia Avançada', 'Acompanhamento de Evolução', 'Material de Apoio Exclusivo']
  },
  {
    id: '21_sessoes',
    name: 'Método Acalme se (21 Sessões)',
    description: 'Acompanhamento multidisciplinar completo para transformação de vida.',
    price: 'R$ 5.000,00',
    originalPrice: 'R$ 7.500,00',
    checkoutUrl: 'https://www.asaas.com/c/ggxtk665s0o1f8oc',
    features: ['21 Sessões Individuais', 'Mentoria de Vida', 'Equilíbrio Biopsicossocial', 'Prioridade em Agendamentos']
  }
];

export const CONTACT_INFO = {
  name: 'Método Acalme se',
  phone: '19 99241-6095',
  whatsapp: '19 99241-6095',
  address: 'Rua XV de Novembro, 268, Sala 10, Centro Mococa/SP',
  instagram: 'https://www.instagram.com/dr.reginaldoventola',
  facebook: 'https://www.facebook.com/dr.reginaldoventola',
  googleBusiness: 'https://share.google/VQJZrg9JtBuVHVJgJ',
  asaasLink: 'https://www.asaas.com/c/bsc8gc6f87kcfi0b'
};

export const FAQ_DATA = [
  {
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é uma avaliação diagnóstica onde ouvimos suas queixas principais, entendemos seu histórico e traçamos juntos o melhor plano terapêutico para o seu caso específico."
  },
  {
    question: "Atende convênios médicos?",
    answer: "Trabalhamos com o sistema de reembolso. Fornecemos toda a documentação necessária para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde."
  },
  {
    question: "As sessões podem ser online?",
    answer: "Sim, oferecemos atendimento online via plataformas seguras de vídeo, mantendo o mesmo nível de sigilo e eficácia do atendimento presencial."
  },
  {
    question: "Qual a duração de cada sessão?",
    answer: "As sessões individuais têm duração média de 50 minutos a 1 hora, dependendo da necessidade do momento terapêutico."
  }
];

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

export { QUIZ_QUESTIONS } from './quizData';
