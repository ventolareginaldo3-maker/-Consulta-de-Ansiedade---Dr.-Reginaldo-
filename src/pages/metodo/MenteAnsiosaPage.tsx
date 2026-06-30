import React from 'react';
import SEO from '../../components/SEO';

const MenteAnsiosaPage = () => {
  return (
    <section style={{ backgroundColor: '#F5F1ED', padding: '10rem 2rem 6rem', fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <SEO 
        title="Mente Ansiosa: Psicanalista em Mococa"
        description="Entenda os mecanismos de uma mente ansiosa e como o psicanalista Dr. Reginaldo Vêntola trata a raiz do sofrimento em Mococa."
        canonical="https://www.metodoacalmese.com.br/mente-ansiosa"
      />
      
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
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(2.4rem,4.5vw,3.2rem)', fontWeight:300, color:'#3D3630', lineHeight:1.15, marginBottom:'1.5rem' }}>
            O que você chama de ansiedade<br />
            <span style={{ display:'block', color:'#B89890', fontStyle:'italic', marginTop:'0.3rem' }}>
              pode ser sua mente tentando ser ouvida
            </span>
          </h1>
          
          {/* Divisor */}
          <span style={{ display:'block', width:'50px', height:'1px', background:'#B89890', margin:'2rem 0' }}></span>
          
          {/* Corpo do Texto */}
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'1.5rem' }}>
            Quando o ciclo da exaustão invisível começa a fazer parte da rotina, o primeiro passo não é se culpar. É reconhecer.
          </p>
          
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'1.5rem' }}>
            Talvez você tenha passado anos normalizando a tensão no peito, as noites mal dormidas, a mente sempre antecipando problemas e a sensação de precisar estar pronta para tudo, mesmo quando por dentro já se sente no limite.
          </p>
          
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'1.5rem' }}>
            Viver em estado de alerta não é personalidade.<br />
            É um mecanismo de defesa que, com o tempo, começa a consumir a energia que deveria sustentar sua vida.
          </p>

          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'1.5rem' }}>
            A ansiedade não precisa ser uma sentença.<br />
            Ela pode ser o começo de um reencontro com partes suas que ficaram esquecidas enquanto você tentava dar conta de tudo.
          </p>
          
          <p style={{ fontSize:'1.05rem', lineHeight:2.1, color:'#5C534D', marginBottom:'2.5rem' }}>
            Existe um caminho para trocar a sobrevivência pela presença, a culpa pelo cuidado e o medo por uma vida com mais leveza.
          </p>
          
          {/* Botão Pulsante */}
          <a href="/agendar" style={{ display:'inline-block', padding:'1.1rem 3rem', backgroundColor:'#B89890', color:'#fff', fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:'0.72rem', letterSpacing:'0.2em', textTransform:'uppercase', textDecoration:'none', borderRadius:'25px', transition:'all 0.3s ease', animation:'pulse 3s infinite', border:'none', cursor:'pointer' }}>
            Quero dar o primeiro passo
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
          <img 
            src='https://res.cloudinary.com/djl7c37my/image/upload/v1781982545/Ansiedade_sintomas_Mococa_uqwfcf.png' 
            alt='Mente Ansiosa' 
            style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'2px', boxShadow:'0 20px 60px rgba(74,63,63,0.15)' }} 
            referrerPolicy="no-referrer" 
          />
        </div>

      </div>

      {/* Responsividade Mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:900px) {
          section div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
          section div[style*="min-height:620px"] { min-height: 400px !important; }
        }
      ` }} />
    </section>
  );
};

export default MenteAnsiosaPage;
