import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const FALLBACK_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=1200&h=300",
    title: "Consultório Minimalista"
  },
  {
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200&h=300",
    title: "Equilíbrio Zen"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200&h=300",
    title: "Natureza Relaxante"
  }
];

export const PaymentImages = () => {
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        setHasKey(true);
      }
    };
    checkKey();
  }, []);

  const openKeyDialog = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  const generateImages = async () => {
    if (!hasKey && window.aistudio) return;
    
    setIsGenerating(true);
    setError(null);
    setUseFallback(false);
    try {
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Chave de API não encontrada.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompts = [
        "Banner panorâmico ultra-wide (4:1) de um consultório de psicologia moderno e minimalista, tons pastéis, iluminação suave, foco em poltronas confortáveis nas laterais para deixar o centro livre. Estilo fotografia profissional.",
        "Banner panorâmico ultra-wide (4:1) representando equilíbrio emocional: pedras zen equilibradas sobre água calma em um dos cantos, luz do pôr do sol suave, atmosfera de paz e serenidade. Alta resolução.",
        "Banner panorâmico ultra-wide (4:1) de uma paisagem natural relaxante: montanhas ao longe com névoa suave, floresta de pinheiros, cores suaves e relaxantes. Composição limpa e profissional.",
        "Banner panorâmico ultra-wide (4:1) abstrato de cores suaves (azul claro, bege, branco) que transmitem calma e clareza mental. Texturas suaves de aquarela, estilo fundo de site profissional.",
        "Banner panorâmico ultra-wide (4:1) de mãos segurando uma xícara de chá quente em um ambiente acolhedor, transmitindo a sensação de autocuidado e pausa. Foco suave e iluminação quente."
      ];

      const imgs: string[] = [];
      for (const prompt of prompts) {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-3.1-flash-image-preview',
            contents: { parts: [{ text: prompt }] },
            config: { 
              imageConfig: { 
                aspectRatio: "4:1",
                imageSize: "1K"
              } 
            }
          });

          if (response.candidates && response.candidates[0].content.parts) {
            for (const part of response.candidates[0].content.parts) {
              if (part.inlineData) {
                const newImg = `data:image/png;base64,${part.inlineData.data}`;
                imgs.push(newImg);
                setGeneratedImages([...imgs]);
              }
            }
          }
        } catch (imgErr) {
          console.error("Erro em imagem individual:", imgErr);
        }
      }
      
      if (imgs.length === 0) {
        throw new Error("Não foi possível gerar as imagens automaticamente.");
      }
    } catch (err: any) {
      console.error("Error generating images:", err);
      setError("Não conseguimos gerar as imagens personalizadas no momento.");
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (hasKey) {
      generateImages();
    }
  }, [hasKey]);

  const displayImages = useFallback ? FALLBACK_IMAGES.map(img => img.url) : generatedImages;

  return (
    <div className="min-h-screen bg-brand-paper pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif mb-4 text-brand-ink">Banners para o Link de Pagamento (Asaas)</h1>
        <p className="mb-8 text-brand-ink/70">Dr. Reginaldo, estas imagens foram geradas no formato 4:1 (panorâmico), ideal para o topo do seu link de pagamento no Asaas sem sofrer cortes.</p>
        
        {!hasKey && (
          <div className="bg-brand-accent/10 border border-brand-accent/20 p-8 rounded-2xl mb-8 text-center">
            <h2 className="text-xl font-serif mb-4 text-brand-ink">Configuração Necessária</h2>
            <p className="mb-6 text-brand-ink/70 text-sm">Para gerar banners de alta qualidade em formato panorâmico, é necessário selecionar sua chave de API do Google Cloud.</p>
            <button 
              onClick={openKeyDialog}
              className="px-8 py-3 bg-brand-accent text-white rounded-full font-bold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
            >
              Selecionar Chave de API
            </button>
            <p className="mt-4 text-xs text-brand-ink/50 italic">
              * Certifique-se de usar uma chave de um projeto com faturamento ativo. 
              <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline ml-1">Saiba mais</a>
            </p>
          </div>
        )}

        {(error || (generatedImages.length === 0 && !isGenerating && hasKey)) && !useFallback && (
          <div className="bg-red-50 border border-red-200 p-8 rounded-2xl mb-8 text-center">
            <p className="text-red-700 mb-6 font-medium">Tivemos um problema técnico ao gerar imagens exclusivas agora.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setUseFallback(true)}
                className="px-8 py-3 bg-brand-ink text-white rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Usar Galeria Profissional (Recomendado)
              </button>
              <button 
                onClick={generateImages}
                className="px-8 py-3 border border-brand-ink/20 text-brand-ink rounded-full font-bold hover:bg-brand-ink/5 transition-colors"
              >
                Tentar Gerar Novamente
              </button>
            </div>
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mb-4"></div>
            <p className="text-brand-ink italic">Gerando banners panorâmicos... (isso pode levar um minuto)</p>
          </div>
        )}

        {displayImages.length > 0 && !isGenerating && (
          <div className="flex justify-end mb-6">
            <button 
              onClick={generateImages}
              className="flex items-center gap-2 px-6 py-2 bg-brand-ink text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Gerar Novas Opções
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8">
          {displayImages.map((img, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-lg border border-brand-ink/5">
              <div className="w-full overflow-hidden rounded-xl mb-4 bg-gray-100" style={{ aspectRatio: '4/1' }}>
                <img src={img} alt={`Banner ${i+1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-brand-ink">
                  {useFallback ? FALLBACK_IMAGES[i].title : `Imagem Gerada ${i+1}`}
                </span>
                <a 
                  href={img} 
                  download={`pagamento-dr-reginaldo-${i+1}.jpg`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-accent hover:underline text-sm font-semibold"
                >
                  Baixar
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <Link 
          to="/"
          className="mt-12 inline-block text-brand-ink/50 hover:text-brand-ink underline"
        >
          Voltar para o site
        </Link>
      </div>
    </div>
  );
};
