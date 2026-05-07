import { useEffect, useRef, useState } from 'react';
import { createWhats } from '../utils/whatsapp'

const areas = [
  {
    numero: '01',
    titulo: 'Psicoterapia Clínica',
    texto:
      'Para quem busca compreender emoções, reduzir a ansiedade e desenvolver uma relação mais saudável consigo mesmo(a) e com o outro. Um processo de autoconhecimento que respeita seu tempo e sua história.',
    whatsapp: createWhats(
      'Olá Tamires, gostaria de entender melhor como funciona a Psicoterapia Clínica.'
    ),
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Psicoterapia Oncológica',
    texto:
      'O diagnóstico de câncer impacta não só o corpo, mas toda a vida emocional. Este é um espaço de acolhimento para lidar com medos, incertezas e mudanças.',
    whatsapp: createWhats(
      'Olá Tamires, gostaria de conversar sobre apoio psicológico durante o tratamento oncológico.'
    ),
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Psicoterapia do Trabalho',
    texto:
      'Pressão constante, esgotamento, falta de sentido — o trabalho pode adoecer. Aqui, você encontra apoio para lidar com estresse e burnout.',
    whatsapp: createWhats(
      'Olá Tamires, estou enfrentando dificuldades no trabalho e gostaria de ajuda psicológica.'
    ),
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
];

function Card({ area, index }: { area: typeof areas[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-6 p-8 sm:p-9 rounded-3xl cursor-default overflow-hidden w-[78%] lg:w-full mx-auto"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, 
        background 0.4s ease, box-shadow 0.4s ease, border 0.4s ease`,
        background: hovered
          ? 'linear-gradient(135deg, rgba(57,84,97,0.92) 0%, rgba(57,84,97,0.85) 100%)'
          : 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: hovered ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(57,84,97,0.08)',
        boxShadow: hovered ? '0 20px 60px rgba(57,84,97,0.18)' : '0 4px 24px rgba(57,84,97,0.06)',
      }}
    >
      {/* Brilho interno no hover */}
      <div
        className="absolute -top-5 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(179,135,156,0.25) 0%, transparent 70%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Número + ícone */}
      <div className="flex items-center justify-between">
        <span
          className="text-[5rem] lg:text-[3.5rem]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            lineHeight: 1,
            color: hovered ? 'rgba(179,135,156,0.5)' : 'rgba(57,84,97,0.12)',
            transition: 'color 0.4s ease',
          }}
        >
          {area.numero}
        </span>
        <span style={{ color: hovered ? '#b3879c' : '#395461', opacity: hovered ? 1 : 0.4, transition: 'all 0.4s ease' }}>
          {area.icone}
        </span>
      </div>

      {/* Linha */}
      <div
        className="h-px"
        style={{
          background: hovered ? 'rgba(179,135,156,0.4)' : 'rgba(57,84,97,0.12)',
          width: hovered ? '100%' : '40px',
          transition: 'width 0.5s ease, background 0.4s ease',
        }}
      />

      {/* Título do Card */}
      <h3
        className="leading-snug text-[2.5rem] lg:text-[1.6rem]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          color: hovered ? '#ffffff' : '#395461',
          transition: 'color 0.4s ease',
        }}
      >
        {area.titulo}
      </h3>

      {/* Texto do Card */}
      <p
        className="leading-relaxed text-[2rem] lg:text-[0.95rem]"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 400,
          color: hovered ? 'rgba(255,255,255,0.75)' : 'rgba(57,84,97,0.65)',
          transition: 'color 0.4s ease',
        }}
      >
        {area.texto}
      </p>

      {/* CTA inline — WhatsApp */}
      <a
        href={area.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[2rem] lg:text-[1.2rem] font-semibold tracking-wide mt-auto pt-2"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: hovered ? '#b3879c' : 'rgba(57,84,97,0.35)',
          letterSpacing: '0.06em',
          transition: 'color 0.4s ease',
          textDecoration: 'none',
        }}
        onClick={e => e.stopPropagation()}
      >
        Saiba mais
        <span style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease', display: 'inline-block' }}>→</span>
      </a>
    </div>
  );
}

export default function Psicoterapias() {
  const tituloRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [tituloVisible, setTituloVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === tituloRef.current && entry.isIntersecting) setTituloVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    if (tituloRef.current) observer.observe(tituloRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="psicoterapias" className="relative bg-brand-bg pb-16 sm:pb-24 lg:pb-32 pt-0 lg:pt-0 -mt-10 lg:-mt-15 overflow-hidden">
      {/*BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
  
  {/* Gradiente de Profundidade */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,217,226,0.15),transparent_0%)]" />

  {/* Ornamento 01 - Esfera Suave Superior */}
  <div 
    className="absolute -left-24 -top-24 w-500px h-500px rounded-full blur-[0px]"
    style={{ 
      background: 'rgba(179,135,156,0.60)',
      animation: 'float-slow 15s ease-in-out infinite' 
    }}
  />

  {/* Ornamento 02 - Esfera Azulada Inferior */}
  <div 
    className="absolute -right-32 bottom-0 w-600px h-600px rounded-full blur-[0px]"
    style={{ 
      background: 'rgba(57,84,97,0.60)',
      animation: 'float-slow 20s ease-in-out infinite reverse' 
    }}
  />

  {/* Linhas de "Fluxo" (SVG Decorativo Dinâmico) */}
  <svg 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-1400px opacity-[0.80]"
    viewBox="0 0 1000 1000" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0,500 C200,400 400,600 600,500 C800,400 1000,600 1000,500" 
      fill="none" 
      stroke="#395461" 
      strokeWidth="1"
      className="animate-wave"
    />
    <path 
      d="M0,550 C200,450 400,650 600,550 C800,450 1000,650 1000,550" 
      fill="none" 
      stroke="#b3879c" 
      strokeWidth="1"
      className="animate-wave-delay"
    />
  </svg>

  {/* Partículas de Brilho Sutis */}
  <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-brand-primary/20 rounded-full blur- animate-pulse" />
  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-brand-dark/1 rounded-full blur- animate-pulse delay-1000" />
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
    {/* Cabeçalho */}
    <div
    ref={tituloRef}
    className="flex flex-col items-center text-center mb-12 sm:mb-20 gap-8 sm:gap-4"
    style={{
    opacity: tituloVisible ? 1 : 0,
    transform: tituloVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
  }}
>
  {/* Áreas de Atuação */}
  <span
    className="text-brand-primary italic text-[3rem] lg:text-[1.9rem]"
    style={{ 
      fontFamily: "'Cormorant Garamond', serif", 
      fontWeight: 400 
    }}
  >
    áreas de atuação
  </span>

  {/* Psicoterapias */}
  <h2
    className="text-brand-dark text-[5rem] lg:text-[3rem] leading-[1.1]"
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
    }}
  >
    Psicoterapias
  </h2>

  {/* Divisor */}
  <div className="w-16 h-px bg-brand-primary/40 my-2" /> 

  {/* Parágrafo de Apoio */}
  <p
    className="text-brand-dark/55 max-w-[90%] lg:max-w-lg text-[2.3rem] lg:text-[1.2rem] leading-relaxed"
    style={{
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 400,
    }}
  >
    Cada processo terapêutico é único. Conheça as áreas em que atuo e
    encontre o suporte que faz sentido para você.
  </p>
</div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mt-0">
          {areas.map((area, i) => (
            <Card key={area.titulo} area={area} index={i} />
          ))}
        </div>

      </div>

      {/* ══ ESTILOS DE ANIMAÇÃO ══ */}
      <style>{`
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -50px) rotate(2deg); }
    66% { transform: translate(-20px, 20px) rotate(-1deg); }
  }

  @keyframes wave-path {
    0% { stroke-dashoffset: 1000; }
    100% { stroke-dashoffset: 0; }
  }

  .line-wave {
    stroke-dasharray: 500;
    animation: wave-path 15s linear infinite;
    display: block !important;
  }

  .line-wave-delay {
    stroke-dasharray: 400;
    animation: wave-path 20s linear infinite reverse;
    display: block !important;
  }

  #psicoterapias .pointer-events-none {
    z-index: 1;
  }
`}</style>
    </section>
  );
}