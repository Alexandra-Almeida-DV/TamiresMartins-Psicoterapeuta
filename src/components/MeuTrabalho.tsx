import { useEffect, useRef, useState } from 'react';
import tamires2 from '../assets/tamires2.jpg';

const WA = 'https://wa.me/5516997366306?text=' + encodeURIComponent('Olá Tamires, gostaria de te convidar para uma palestra sobre saúde emocional.');

export default function MeuTrabalho() {
  const tituloRef = useRef<HTMLDivElement>(null);
  const imgRef    = useRef<HTMLDivElement>(null);
  const textoRef  = useRef<HTMLDivElement>(null);
  const fraseRef  = useRef<HTMLDivElement>(null);

  const [tituloVisible, setTituloVisible] = useState(false);
  const [imgVisible,    setImgVisible]    = useState(false);
  const [textoVisible,  setTextoVisible]  = useState(false);
  const [fraseVisible,  setFraseVisible]  = useState(false);
  const [imgHovered,    setImgHovered]    = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === tituloRef.current && entry.isIntersecting) setTituloVisible(true);
          if (entry.target === imgRef.current    && entry.isIntersecting) setImgVisible(true);
          if (entry.target === textoRef.current  && entry.isIntersecting) setTextoVisible(true);
          if (entry.target === fraseRef.current  && entry.isIntersecting) setFraseVisible(true);
        });
      },
      { threshold: 0.12 }
    );
    if (tituloRef.current) observer.observe(tituloRef.current);
    if (imgRef.current)    observer.observe(imgRef.current);
    if (textoRef.current)  observer.observe(textoRef.current);
    if (fraseRef.current)  observer.observe(fraseRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trabalho" className="relative bg-brand-light py-12 sm:py-16 lg:pt-10 lg:pb-32 overflow-hidden">
      <div
        className="absolute -left-40 bottom-0 w-440px h-440px rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c5d8e0 0%, transparent 10%)', opacity: 0.0 }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">  
        <div
        ref={tituloRef}
        className="flex flex-col items-center text-center gap-4 mb-12 lg:hidden" 
        style={{
          opacity: tituloVisible ? 1 : 0,
          transform: tituloVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}
    >
      <span
      className="text-brand-primary italic text-[3.5rem]" 
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
    >
      meu trabalho
      </span>
      <h2
      className="text-brand-dark leading-tight text-[3.5rem]" 
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        Com propósito, <br />
        <span className="italic text-brand-primary">além do consultório.</span>
        </h2>
        <div className="w-16 h-px bg-brand-primary/40 mt-2" />
      </div>

        {/* ── GRID: foto esquerda / texto direita ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div
            ref={imgRef}
            className="relative w-[90%] mx-auto lg:w-full"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            {/* Moldura decorativa */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-brand-primary/20 pointer-events-none"
              style={{
                transform: imgHovered ? 'translate(6px, 6px)' : 'translate(0,0)',
                transition: 'transform 0.5s ease',
              }}
            />

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
              src={tamires2}
              alt="Tamires Martins realizando palestra sobre saúde emocional"
              className="w-[98%] mx-auto object-cover" 
              style={{
                height: window.innerWidth < 1024 ? 'auto' : '480px',
                objectPosition: window.innerWidth < 1024 ? 'center' : 'center top',
                filter: imgHovered
                ? 'brightness(1.05) contrast(1.04) saturate(1.05)'
                : 'brightness(0.97) contrast(1.01) saturate(0.9)',transform: imgHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'filter 0.6s ease, transform 0.6s ease',
  }}
/>
              {/* Overlay gradiente */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(57,84,97,0.55) 0%, transparent 50%)',
                  opacity: imgHovered ? 0.5 : 1,
                  transition: 'opacity 0.5s ease',
                }}
              />

              {/* Brilho de hover */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 60% 30%, rgba(179,135,156,0.18) 0%, transparent 65%)',
                  opacity: imgHovered ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              />

              {/* Label rodapé */}
              <div
                className="absolute bottom-5 left-5 right-5"
                style={{
                  opacity: imgVisible ? 1 : 0,
                  transform: imgVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
                }}
              >
                <span
                  className="inline-flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
                >
                  <span className="w-4 h-px bg-brand-primary inline-block" />
                  Palestra · Saúde Emocional
                </span>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div
            ref={textoRef}
            className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 mt-4"
            style={{
              opacity: textoVisible ? 1 : 0,
              transform: textoVisible ? 'translateX(0)' : 'translateX(48px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            {/* Label + título — só no desktop */}
            <div className="hidden lg:flex flex-col gap-2">
              <span
                className="text-brand-primary italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.9rem', fontWeight: 400 }}
              >
                meu trabalho
              </span>
              <h2
                className="text-brand-dark leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
              >
                Com propósito,{' '}
                <span className="italic text-brand-primary">além do consultório.</span>
              </h2>
              <div className="w-10 h-px bg-brand-primary/40 mt-1" />
            </div>

            {/* Parágrafos */}
            <div
              className="flex flex-col gap-6 text-brand-dark/70 leading-relaxed text-[2.2rem] lg:text-[1rem]"
              style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}
            >
              <p>
                Acredito que a psicologia não se limita ao consultório. Ela também acontece nos
                encontros, nas trocas e nos espaços onde a escuta se faz necessária.
              </p>
              <p>
                Ao longo da minha trajetória, compartilho conhecimento por meio de{' '}
                <strong className="font-semibold text-brand-dark">palestras e conversas</strong> sobre
                saúde emocional, especialmente sobre o impacto do cansaço, da sobrecarga e das
                exigências do dia a dia.
              </p>
              <p>
                Meu compromisso é com uma escuta{' '}
                <strong className="font-semibold text-brand-dark">ética, sensível e transformadora,</strong>{' '}
                seja no consultório ou em outros espaços de diálogo.
              </p>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-brand-primary/30 text-[2rem] lg:text-[1rem] lg:border-none lg:p-0"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'rgba(57,84,97,0.55)',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#b3879c'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(57,84,97,0.55)'}
            >
              Convidar para uma palestra
              <span 
              className="text-brand-primary inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* ── FRASE DESTAQUE ── */}
        <div
          ref={fraseRef}
          className="mt-16 sm:mt-20 lg:mt-24"
          style={{
            opacity: fraseVisible ? 1 : 0,
            transform: fraseVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div
            className="relative rounded-3xl p-10 sm:p-12 lg:p-14 overflow-hidden w-[95%] mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(57,84,97,0.92) 0%, rgba(57,84,97,0.82) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(179,135,156,0.2) 0%, transparent 70%)' }} />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />

            <span
              className="absolute top-4 left-6 text-brand-primary/20 pointer-events-none select-none hidden sm:block"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '7rem', lineHeight: 1, fontWeight: 300 }}
              aria-hidden="true"
            >"</span>

            <div className="relative z-10 flex flex-col items-center text-center gap-5 sm:gap-6">
              <p
                className="text-white leading-relaxed text-[2.2rem] lg:text-[2.4rem]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.25rem, 3.5vw, 2.4rem)',
                  lineHeight: 1.55,
                }}
              >
                Quantas mulheres aqui se sentem cansadas ou sobrecarregadas?
              </p>

              <div className="w-10 h-px bg-brand-primary/50" />

              <p
                className="text-white/50 text-[10px] sm:text-xs tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
              >
                Tamires Martins · Palestra sobre Saúde Emocional
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
