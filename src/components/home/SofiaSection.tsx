import React from 'react';
import { motion } from 'framer-motion';

export const SofiaSection = () => {
  return (
    <section style={{ backgroundColor: '#F5F1ED', padding: '6rem 2rem', fontFamily: "'Inter', -apple-system, sans-serif" }} id="viver-com-ansiedade">
      
      {/* Fontes */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        
        {/* COLUNA DE TEXTO */}
        <div>
          {/* Label Superior */}
          <span style={{ display:'block', fontFamily:"'Inter',sans-serif", fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.28em', textTransform:'uppercase', color:'#B89890', marginBottom:'1.5rem' }}>
            Reconhecimento Clínico
          </span>
          
          {/* Título Principal */}
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(2.4rem,4.5vw,3.2rem)', fontWeight:300, color:'#3D3630', lineHeight:1.15, marginBottom:'1.5rem' }}>
            O que você chama de ansiedade<br />
            <span style={{ display:'block', color:'#B89890', fontStyle:'italic', marginTop:'0.3rem' }}>
              é sua mente pedindo socorro.
            </span>
          </h2>
          
          {/* Divisor */}
          <span style={{ display:'block', width:'50px', height:'1px', background:'#B89890', margin:'2rem 0' }}></span>
          
          {/* Corpo do Texto */}
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'1.5rem' }}>
            Se o <strong>"Ciclo da Exaustão Invisível"</strong> ressoa com a sua rotina, saiba que o primeiro passo para a cura é o reconhecimento. Você passou anos normalizando a tensão no peito, a insônia e a sensação de que precisa estar sempre "pronta", mesmo por dentro sentindo que vai desmoronar.
          </p>
          
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'1.5rem' }}>
            A verdade clínica é simples: <strong>viver em estado de alerta máximo não é sua personalidade.</strong> É um mecanismo de defesa que, com o tempo, começou a consumir a própria energia que deveria usar para viver.
          </p>
          
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'2.5rem' }}>
            Viver com ansiedade não é uma sentença. É um convite para reencontrar quem você era antes de o medo ditar as regras. É a oportunidade de trocar a sobrevivência pela presença, e a culpa pela leveza que você merece sentir todos os dias.
          </p>
          
          {/* Botão Pulsante */}
          <a href="/agendar" style={{ display:'inline-block', padding:'1.1rem 3rem', backgroundColor:'#B89890', color:'#fff', fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:'0.72rem', letterSpacing:'0.2em', textTransform:'uppercase', textDecoration:'none', borderRadius:'25px', transition:'all 0.3s ease', animation:'pulse 3s infinite', border:'none', cursor:'pointer' }}>
            Quero Iniciar Minha Jornada de Alívio
          </a>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes pulse {
              0%, 100% { box-shadow: 0 0 0 0 rgba(184, 152, 144, 0.35); }
              50% { box-shadow: 0 0 0 12px rgba(184, 152, 144, 0); }
            }
          ` }} />
        </div>

        {/* COLUNA DE IMAGEM */}
        <div style={{ position:'relative', height:'100%', minHeight:'620px', display:'flex', alignItems:'center' }}>
          <img src='https://res.cloudinary.com/dx77zgslr/image/upload/v1776955133/Depress%C3%A3o-Ansiedade_MococaSP_gqfsoa.png' alt='A Realidade da Ansiedade' style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'2rem', boxShadow:'0 20px 60px rgba(74,63,63,0.15)' }} referrerPolicy="no-referrer" />
        </div>

      </div>

      {/* Responsividade Mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:900px) {
          #viver-com-ansiedade div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #viver-com-ansiedade div[style*="min-height:620px"] { min-height: 400px !important; }
        }
      ` }} />
    </section>
  );
};
