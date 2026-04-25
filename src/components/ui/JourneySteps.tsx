import React from 'react';

interface JourneyStepsProps {
  currentStep: number;
}

const JourneySteps = ({ currentStep }: JourneyStepsProps) => {
  const steps = [
    { id: 1, name: "O Método", path: "/metodo-e-tratamento" },
    { id: 2, name: "Ciclo do Medo", path: "/sintomas-de-ansiedade" },
    { id: 3, name: "Triagem", path: "/triagem" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 mb-12">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-ink/10 -translate-y-1/2 z-0"></div>
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step.id <= currentStep 
                  ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/30' 
                  : 'bg-brand-ink/5 text-brand-ink/30 border border-brand-ink/10 journey-step-inactive'
              }`}
            >
              <span>{step.id}</span>
            </div>
            <span className={`text-[10px] uppercase tracking-widest font-bold ${
              step.id <= currentStep ? 'text-brand-ink journey-label-active' : 'text-brand-ink/30 journey-label-inactive'
            }`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneySteps;
