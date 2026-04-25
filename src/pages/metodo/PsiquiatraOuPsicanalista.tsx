import React from 'react';
import { YouTubeEmbed } from '../../components/ui/YouTubeEmbed';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const PsiquiatraOuPsicanalista = () => {
  return (
    <section className="min-h-screen bg-brand-paper">
      <SEO 
        title="Psiquiatra ou Psicanalista em Mococa: Qual procurar para Ansiedade?"
        description="Entenda a diferença entre psiquiatra e psicanalista no tratamento da ansiedade em Mococa. Saiba qual profissional é o mais indicado para o seu caso."
        keywords="psiquiatra mococa, psicanalista mococa, tratamento ansiedade mococa, psiquiatra ou psicanalista, saude mental mococa, psicologo mococa"
        canonical={window.location.origin + "/psiquiatra-ou-psicanalista"}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual a diferença entre psiquiatra e psicanalista?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O psiquiatra foca no aspecto biológico e medicamentoso, enquanto o psicanalista foca nos processos inconscientes e na raiz emocional do sofrimento."
              }
            },
            {
              "@type": "Question",
              "name": "Qual profissional procurar para ansiedade?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende do caso. Se busca alívio de sintomas biológicos, o psiquiatra. Se busca compreender as causas profundas e mudança estrutural, o psicanalista."
              }
            }
          ]
        }}
      />

      {/* Novo Bloco Editorial */}
      <section style={{ backgroundColor: '#F5F1ED', padding: '5.5rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          
          {/* H2: Captura intenção de busca + tom premium */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 2.6rem)', fontWeight: 300, color: '#3D3630', lineHeight: 1.2, marginBottom: '2.5rem', textAlign: 'center' }}>
            Procurando Psiquiatra em Mococa?<br />
            <span style={{ color: '#B89890', fontStyle: 'italic' }}>Entenda quando a Psicanálise é o caminho para sua cura.</span>
          </h2>

          {/* Bloco 1: Psiquiatra */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B89890', marginBottom: '1rem' }}>
              Psiquiatra em Mococa: O Papel da Medicação
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: 2, color: '#5C534D', margin: 0 }}>
              Muitas pessoas buscam por um **psiquiatra em Mococa** quando os sintomas de ansiedade se tornam fisicamente insuportáveis. O psiquiatra é um médico essencial para regular desequilíbrios químicos imediatos. No entanto, a medicação trata o sintoma biológico, mas raramente alcança a causa emocional profunda que gerou o problema.
            </p>
          </div>

          {/* Bloco 2: Psicanalista */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B89890', marginBottom: '1rem' }}>
              O Papel do Psicanalista
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: 2, color: '#5C534D', margin: 0 }}>
              O psicanalista foca na compreensão profunda dos processos inconscientes, traumas e padrões emocionais que geram a ansiedade. No Método Acalme-se, trabalhamos para que você não apenas controle os sintomas, mas compreenda a raiz do seu sofrimento, desmontando os ciclos automáticos que mantêm a mente em alerta constante.
            </p>
          </div>

          {/* Bloco 3: Qual escolher? */}
          <div style={{ backgroundColor: '#EDE7E0', padding: '2.5rem', borderRadius: '2px', margin: '3rem 0', borderLeft: '3px solid #B89890' }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B89890', marginBottom: '1rem' }}>
              Qual Escolher?
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: 2, color: '#5C534D', margin: 0 }}>
              Muitas vezes, o tratamento ideal é combinado. No entanto, se você busca uma mudança estrutural na forma como lida com suas emoções e quer evitar a dependência exclusiva de medicamentos, a psicanálise clínica e a terapia integrativa oferecem caminhos profundos e duradouros de cura.
            </p>
          </div>

          {/* Bloco 4: Contexto Local + CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            {/* Dr. Reginaldo image */}
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 2rem', border: '3px solid #B89890' }}>
              <img src="https://res.cloudinary.com/djl7c37my/image/upload/v1777042123/31C6BAD6-F164-41A6-9A84-E30508C3A343_e9f1bh.jpg" alt="Dr. Reginaldo Ventola" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 400, color: '#3D3630', marginBottom: '1.2rem', lineHeight: 1.4 }}>
              Tratamento de Ansiedade em Mococa
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: 2, color: '#5C534D', maxWidth: '860px', margin: '0 auto 2.5rem' }}>
              Dr. Reginaldo Ventola oferece em Mococa/SP um atendimento que une a profundidade da psicanálise com técnicas integrativas modernas, proporcionando um resgate emocional completo. Assista ao vídeo abaixo para entender como funciona.
            </p>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', marginBottom: '3rem' }}>
              <YouTubeEmbed 
                videoId="R7Dk-i7vJYo" 
                title="Psiquiatra ou Psicanalista? - Dr. Reginaldo Ventola" 
              />
            </div>
            
            <Link 
              to="/metodo-e-tratamento" 
              style={{ 
                display: 'inline-block', 
                padding: '1.1rem 2.8rem', 
                backgroundColor: '#B89890', 
                color: '#fff', 
                fontFamily: "'Inter', sans-serif", 
                fontWeight: 500, 
                fontSize: '0.75rem', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase', 
                textDecoration: 'none', 
                borderRadius: '25px', 
                transition: 'all 0.3s ease', 
                animation: 'pulse 3s infinite', 
                border: 'none', 
                cursor: 'pointer' 
              }}
            >
              Conhecer o Método Acalme-se
            </Link>
          </div>

        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,152,144,0.35); }
          50% { box-shadow: 0 0 0 10px rgba(184,152,144,0); }
        }
      ` }} />

    </section>
  );
};

export default PsiquiatraOuPsicanalista;
