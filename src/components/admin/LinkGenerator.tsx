import React, { useState } from 'react';

const THERAPY_METHODS = [
  {
    id: '1_sessao',
    name: 'Sessão de Avaliação',
    price: 'R$ 250,00',
    description: 'Sessão inicial para diagnóstico e plano de tratamento.'
  },
  {
    id: 'metodo_acalmese',
    name: 'Método Acalme-se',
    price: 'R$ 1.200,00',
    description: 'Tratamento completo com 10 sessões e suporte.'
  },
  {
    id: 'guia_resgate',
    name: 'Guia de Resgate',
    price: 'R$ 47,00',
    description: 'Material digital para controle imediato da ansiedade.'
  }
];

export const LinkGenerator = () => {
  const [patientName, setPatientName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(THERAPY_METHODS.filter(p => p.id !== '1_sessao')[0].id);
  const [copied, setCopied] = useState(false);

  // Get base URL without hash
  const baseUrl = window.location.origin + window.location.pathname;
  const generatedUrl = `${baseUrl}#/confirmacao-plano?plano=${selectedPlan}${patientName ? `&nome=${encodeURIComponent(patientName)}` : ''}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-brand-ink/5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-brand-ink">Gerador de Links Personalizados</h2>
        <p className="text-brand-ink/60 mb-10 italic">
          Use esta ferramenta para criar links exclusivos para suas pacientes após a avaliação. O link levará a uma página profissional com o plano escolhido e o nome da paciente.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-3 opacity-40">Nome da Paciente (Opcional)</label>
            <input 
              type="text" 
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Ex: Maria Silva"
              className="w-full bg-brand-paper/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-3 opacity-40">Plano Recomendado</label>
            <div className="grid gap-4">
              {THERAPY_METHODS.filter(p => p.id !== '1_sessao').map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-6 rounded-2xl border text-left transition-all ${selectedPlan === plan.id ? 'bg-brand-accent/5 border-brand-accent' : 'bg-brand-paper/30 border-brand-ink/5 hover:bg-brand-paper/50'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-serif text-lg">{plan.name}</p>
                      <p className="text-xs opacity-60">{plan.price}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-brand-ink/5">
            <div className="bg-brand-paper p-6 rounded-2xl mb-6 break-all font-mono text-xs opacity-60">
              {generatedUrl}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={copyToClipboard}
                className={`flex-1 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${copied ? 'bg-green-500 text-white' : 'bg-brand-ink text-brand-paper hover:bg-brand-accent'}`}
              >
                {copied ? 'Link Copiado!' : 'Copiar Link Personalizado'}
              </button>
              <a 
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-brand-ink/20 text-brand-ink rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-ink/5 transition-all"
              >
                Testar Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
