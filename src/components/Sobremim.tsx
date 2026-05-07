import { useEffect, useRef, useState } from 'react';
import tamires from '../assets/tamires1.png';

export default function SobreMim() {
  const [fotoVisible, setFotoVisible] = useState(false);
  const [textoVisible, setTextoVisible] = useState(false);
  const fotoRef = useRef<HTMLDivElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === fotoRef.current && entry.isIntersecting) {
            setFotoVisible(true);
          }
          if (entry.target === textoRef.current && entry.isIntersecting) {
            setTextoVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (fotoRef.current) observer.observe(fotoRef.current);
    if (textoRef.current) observer.observe(textoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="relative bg-brand-bg py-16 sm:py-24 lg:py-32 overflow-hidden lg:-mt-20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none opacity-[0.06] hidden md:block" aria-hidden="true">
        <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 280 C100 280 10 200 10 120 C10 50 60 10 100 10 C140 10 190 50 190 120 C190 200 100 280 100 280Z" fill="#395461"/>
          <line x1="100" y1="10" x2="100" y2="280" stroke="#395461" strokeWidth="2"/>
          <path d="M100 80 C70 80 30 100 30 130" stroke="#395461" strokeWidth="1.5" fill="none"/>
          <path d="M100 120 C130 100 170 110 175 140" stroke="#395461" strokeWidth="1.5" fill="none"/>
          <path d="M100 160 C75 155 45 170 40 195" stroke="#395461" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div
            ref={fotoRef}
            className="flex justify-center lg:justify-end w-full"
            style={{
              opacity: fotoVisible ? 1 : 0,
              transform: fotoVisible 
                ? 'translate(0,0)' 
                : window.innerWidth < 1024 ? 'translateY(30px)' : 'translateX(-48px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="relative w-120 sm:w-180 lg:w-160 xl:w-160">
              <div
                className="absolute inset-0 rounded-t-full"
                style={{
                  background: 'linear-gradient(180deg, #f0d9e2 0%, #f5f0ed 100%)',
                  transform: 'scale(1.06) translateY(2%)',
                  zIndex: 0,
                }}
              />
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-brand-primary/20" style={{ zIndex: 0 }} />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-brand-dark/10" style={{ zIndex: 0 }} />
              <div className="relative overflow-hidden rounded-t-full rounded-b-2xl shadow-lg" style={{ zIndex: 1 }}>
                <img
                  src={tamires}
                  alt="Tamires Martins — Psicoterapeuta em Araraquara"
                  className="w-full h-auto object-cover"
                  style={{ filter: 'brightness(1.02) contrast(1.02) saturate(0.95)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 70%, rgba(255,242,239,0.2) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 sm:px-7 sm:py-2 rounded-full whitespace-nowrap"
                style={{
                  background: 'rgba(57,84,97,0.9)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 4px 15px rgba(57,84,97,0.15)',
                  zIndex: 2,
                  opacity: fotoVisible ? 1 : 0,
                  transform: fotoVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
                }}
              >
                <p
                  className="text-white text-[9px] sm:text-[11px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
                >
                  CRP 06/206142
                </p>
              </div>
            </div>
          </div>
          <div
          ref={textoRef}
          className="flex flex-col gap-2 lg:gap-6 text-center lg:text-left items-center lg:items-start"
          style={{
            opacity: textoVisible ? 1 : 0,
            transform: textoVisible 
            ? 'translate(0,0)' 
            : window.innerWidth < 1024 ? 'translateY(20px)' : 'translateX(48px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
            >
              <h2
              className="text-brand-dark leading-tight text-[3.5rem] lg:text-[2.6rem]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
              }}
              >
                A Psicoterapeuta
              </h2>
              <div className="w-10 h-px bg-brand-primary/40" />
              <div
              className="flex flex-col gap-4 text-brand-dark/70 leading-relaxed max-w-[85%] lg:max-w-xl text-[2.5rem] lg:text-[1.2rem]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
              }}
              >
                <p>
                  <strong className="font-semibold text-brand-dark">Sou Tamires Martins</strong>, psicoterapeuta 
                  em Araraquara, com atuação nas áreas{' '}
                  <strong className="font-semibold text-brand-dark">clínica, oncológica e do trabalho</strong>. 
                  Psicóloga formada pela UNIARA, atuo pela abordagem psicanalítica.
                </p>
                <p>
                  Realizo atendimentos <strong className="font-semibold text-brand-dark">online</strong> para 
                  brasileiros no Brasil e no exterior, acolhendo adultos e idosos.
                </p>
                <p>
                  Meu trabalho é guiado por uma <strong className="font-semibold text-brand-dark">escuta sensível,</strong> um 
                  espaço seguro onde cada pessoa possa se reconhecer e encontrar novos caminhos possíveis.
                </p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-5 lg:mt-0 max-w-md lg:max-w-none">
                  {['Psicologia Clínica', 'Oncologia', 'Saúde no Trabalho', 'Abordagem Psicanalítica', 'Atendimento Online'].map(tag => (
                    <span
                    key={tag}
                    className="px-4 py-2 lg:px-3 lg:py-1 rounded-full text-brand-dark/65 text-[25px] lg:text-xs border border-brand-dark/12 bg-brand-light/50"
                    style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500, letterSpacing: '0.03em' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                href="#contato"
                className="mt-4 lg:mt-0 inline-flex items-center gap-1 text-brand-dark/70 hover:text-brand-primary transition-all text-[2.4rem] lg:text-sm font-semibold group"
                style={{ fontFamily: "'Quicksand', sans-serif", letterSpacing: '0.05em' }}
                >
                  Agendar uma sessão
                  <span className="text-brand-primary group-hover:translate-x-1 transition-transform">→</span>
                </a>
          </div>
        </div>
      </div>
    </section>
  );
}