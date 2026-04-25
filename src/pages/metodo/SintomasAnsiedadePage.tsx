import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, MapPin, Globe } from 'lucide-react';
import SEO from '../../components/SEO';
import JourneySteps from '../../components/ui/JourneySteps';
import AboutProfessional from '../../components/home/AboutProfessional';

const SintomasAnsiedadePage = () => {
  return (
    <section className="min-h-screen bg-[#EDE7E0] selection:bg-[#B89890]/20 selection:text-[#3D3630]">
      <SEO 
        title="Viver com Ansiedade em Mococa | Método Acalme-se"
        description="A ansiedade não é o seu normal. Saiba como interromper o ciclo de exaustão e recuperar sua liberdade emocional em Mococa."
        canonical="https://www.metodoacalmese.com.br/sintomas-de-ansiedade"
        keywords="viver com ansiedade mococa, crise de ansiedade sintomas, psicanalista mococa"
      />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center">
            <JourneySteps currentStep={2} />
          </div>

          {/* Header focado e editorial */}
          <div className="max-w-3xl mx-auto text-center mb-24 lg:mb-32">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="block font-sans text-[0.7rem] tracking-[0.4em] uppercase text-[#B89890] mb-8 font-semibold"
            >
              Reconhecimento Clínico
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#3D3630] font-light leading-[1.1] mb-12 tracking-tight"
            >
              Sinais do Modo de <br className="hidden md:block" />
              <span className="italic text-[#B89890]">Sobrevivência</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-xl md:text-2xl text-[#5C534D] italic leading-relaxed border-l-2 border-[#B89890] pl-8 max-w-2xl mx-auto text-left"
            >
              "Viver em alerta constante não é a sua natureza. É um mecanismo de defesa que começou a consumir a própria energia que deveria usar para viver."
            </motion.p>
          </div>

          {/* Arquitetura de Caixas Elegant */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
            
            {/* Bloco 1: O Custo da Carga */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-white rounded-[3rem] border border-[#B89890]/20 shadow-[0_20px_50px_rgba(61,54,48,0.03)] flex flex-col justify-center space-y-8"
            >
              <h3 className="font-sans text-[0.9rem] font-bold tracking-[0.2em] uppercase text-[#B89890]">O Custo da Carga</h3>
              <div className="space-y-6">
                <p className="font-sans text-lg lg:text-xl text-[#5C534D] leading-[1.9] font-light">
                  A exaustão que você sente não é preguiça. É o <strong className="text-[#3D3630] font-medium">custo biológico</strong> de carregar um peso invisível por tempo demais.
                </p>
                <p className="font-sans text-lg lg:text-xl text-[#5C534D] leading-[1.9] font-light">
                  Quando o sistema nervoso opera no máximo sem interrupção, ele drena sua vitalidade. Mas a estrutura que sustenta esse ciclo pode ser redesenhada.
                </p>
              </div>
            </motion.div>

            {/* Bloco 2: Sintomas Invisíveis */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-[#FDFBF9] rounded-[3rem] border border-[#B89890]/10 shadow-[0_20px_50px_rgba(61,54,48,0.03)] flex flex-col justify-center space-y-8"
            >
              <h3 className="font-sans text-[0.9rem] font-bold tracking-[0.2em] uppercase text-[#B89890]">Sintomas Silenciosos</h3>
              <div className="space-y-6">
                <p className="font-sans text-lg lg:text-xl text-[#5C534D] leading-[1.9] font-light">
                  Muita gente não associa, mas a <strong className="text-[#3D3630] font-medium">fome emocional</strong>, o desejo incontrolável por doces e as dores de cabeça tensionais são gritos de socorro do seu sistema nervoso.
                </p>
                <p className="font-sans text-lg lg:text-xl text-[#5C534D] leading-[1.9] font-light">
                  Compulsão alimentar e irritabilidade súbita não são falhas de caráter, são mecanismos de regulação química que sua mente criou para tentar sobreviver ao caos.
                </p>
              </div>
            </motion.div>

            {/* Bloco 3: O Recuo Silencioso */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-white rounded-[3rem] border border-[#B89890]/20 shadow-[0_20px_50px_rgba(61,54,48,0.03)] flex flex-col justify-center space-y-8"
            >
              <h3 className="font-sans text-[0.9rem] font-bold tracking-[0.2em] uppercase text-[#B89890]">O Recuo Silencioso</h3>
              <div className="space-y-6">
                <p className="font-sans text-lg lg:text-xl text-[#5C534D] leading-[1.9] font-light">
                  A ansiedade age por <strong className="text-[#3D3630] font-medium">contração</strong>. Primeiro, você evita certos lugares. Depois, situações que exigem exposição. 
                </p>
                <p className="font-sans text-lg lg:text-xl text-[#5C534D] leading-[1.9] font-light">
                  O medo não te paralisa de uma vez. Ele te convence, devagar, a aceitar um território cada vez menor. Até que o espaço para respirar se torna mínimo.
                </p>
              </div>
            </motion.div>

            {/* Bloco 3: O Ruído que Não Descansa (Destaque Dark) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-[#3D3630] rounded-[4rem] shadow-2xl flex flex-col justify-center space-y-10 lg:col-span-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89890]/5 rounded-full -mr-32 -mt-32" />
              <h3 className="font-sans text-[0.9rem] font-bold tracking-[0.2em] uppercase text-[#B89890] relative z-10">O Ruído que Não Descansa</h3>
              <div className="grid md:grid-cols-2 gap-10 lg:gap-20 relative z-10">
                <p className="font-sans text-lg lg:text-xl text-white/80 leading-[1.9] font-light">
                  Sua mente treinou para antecipar o perigo, mesmo quando não há nenhum. Cenários catastróficos se repetem em loop, preenchendo o silêncio da madrugada com uma corrida de pensamentos exaustiva.
                </p>
                <p className="font-sans text-lg lg:text-xl text-white/80 leading-[1.9] font-light">
                  Tentar se acalmar pela força é inútil porque o sistema foi programado para não desligar. A mudança exige ensinar ao seu organismo um <span className="text-[#B89890] italic font-serif">novo caminho de segurança</span>.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Ponte Final e CTA */}
          <div className="text-center pt-16 border-t border-[#B89890]/20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-2xl lg:text-4xl text-[#3D3630] leading-relaxed italic mb-16"
            >
              Compreender esse padrão é o primeiro ato de liberdade. <br className="hidden md:block" />
              O próximo passo é desligar o alarme.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/triagem" 
                className="group relative inline-flex items-center justify-center px-20 py-8 bg-[#3D3630] text-white rounded-full font-bold uppercase tracking-[0.4em] text-[10px] overflow-hidden transition-all hover:bg-[#2A2420] shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Iniciar Triagem Gratuita</span>
              </Link>
            </motion.div>
          </div>

          <div className="mt-24 pt-24 border-t border-[#B89890]/20">
            <AboutProfessional />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SintomasAnsiedadePage;
