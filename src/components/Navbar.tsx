import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const links = [
  { label: 'Sobre Mim',    href: '#sobre' },
  { label: 'Psicoterapias', href: '#psicoterapias' },
  { label: 'Meu Trabalho', href: '#trabalho' },
  { label: 'FAQ',          href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 900),
      setTimeout(() => setStep(3), 1500),
      setTimeout(() => setStep(4), 1900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-bg/3 backdrop-blur-md border-b border-brand-dark/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-40 lg:h-20">

          {/* ── Logo ── */}
          <div className="shrink-0 flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="Logo Tamires Martins"
              className="h-35 lg:h-16 w-auto object-contain hover:opacity-80 transition-opacity"
            />

            <div className="flex flex-col justify-center leading-none">
              <span
    className="text-brand-dark tracking-[0.22em] uppercase font-light block text-[1.4rem] lg:text-[1.2rem] sm:text-[2rem]" 
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: 1,
      opacity: step >= 1 ? 1 : 0,
      transform: step >= 1 ? "translateY(0)" : "translateY(-8px)",
      transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)",
    }}
  >
    Tamires
  </span>

           <span
    className="text-brand-dark block text-[2.2rem] lg:text-[1.8rem] sm:text-[3rem]"
    style={{
      fontFamily: "'Rouge Script', cursive",
      lineHeight: 0.8, 
      marginTop: "0.1em",
      alignSelf: "flex-end",
      opacity: step >= 2 ? 1 : 0,
      transform: step >= 2 ? "translateX(0)" : "translateX(10px)",
      transition: "all 1.3s cubic-bezier(0.16,1,0.3,1)",
    }}
  >
    Martins
  </span>

              <div
                className="flex flex-col items-center mt-1 gap-0.5"
                style={{
                  opacity: step >= 3 ? 1 : 0,
                  transition: "opacity 0.8s ease 0.2s",
                }}
              >
                <div
                  className="h-px bg-brand-primary/40"
                  style={{
                    width: step >= 3 ? "100%" : "0%",
                    transition: "width 0.9s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
                <span
      className="text-brand-primary tracking-[0.22em] uppercase text-center block text-[0.75rem] lg:text-[0.58rem] sm:text-[1rem]"
      style={{
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: 500,
        opacity: step >= 4 ? 1 : 0,
        transform: step >= 4 ? "translateY(0)" : "translateY(5px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      Psicóloga Clínica
    </span>
              </div>
            </div>
          </div>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-dark/75 hover:text-brand-primary transition-all relative group text-sm"
                style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </a>
            ))}

            <a
              href="#contato"
              className="bg-brand-dark text-brand-bg px-6 py-2.5 rounded-full text-sm hover:bg-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 transition-all active:scale-95"
              style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
            >
              Contato
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="lg:hidden fixed top-10 right-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2 hover:bg-brand-dark/5 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="w-18 h-18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

{/* ── Mobile Menu (Drawer Elegante) ── */}
{isOpen && (
  <div 
    className="lg:hidden fixed top-24 right-6 w-[90vw] max-w-125 rounded-[3rem] shadow-[0_20px_50px_rgba(57,84,97,0.15)] border border-white/40 z-60 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-right-10 duration-500 ease-out"
    style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 243, 245, 0.98) 100%)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}
  >
    {/* Ornamento Interno - Flor Sutil */}
    <div className="absolute -top-6 -right-6 opacity-[0.08] pointer-events-none">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <g transform="translate(60,60)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <ellipse key={i} cx="0" cy="-20" rx="6" ry="14" fill="#b3879c" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="6" fill="#b3879c" />
        </g>
      </svg>
    </div>

    <div className="px-20 py-30 flex flex-col gap-10">
      {/* Título do Menu */}
      <div className="flex flex-col gap-1">
        <span className="text-brand-primary/60 text-[10px] tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
        </span>
        <div className="h-px w-8 bg-brand-primary/30" />
      </div>

      {/* Lista de Links */}
      <nav className="flex flex-col gap-7">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 text-brand-dark/80 hover:text-brand-primary transition-all"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: '50px',
              fontWeight: 400,
              fontStyle: 'italic',
              animationDelay: `${index * 80}ms` 
            }}
            onClick={() => setIsOpen(false)}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary text-xl">/</span>
            {link.label}
          </a>
        ))}
      </nav>
      
      {/* Rodapé do Menu com Botão */}
      <div className="mt-4 flex flex-col gap-6">
        <div className="h-px w-full bg-linear-to-r from-transparent via-brand-primary/10 to-transparent" />

        <a
          href="#contato"
          className="relative overflow-hidden group w-full bg-brand-dark text-white text-center py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-dark/10"
          style={{ 
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 600,
            fontSize: '30px',
            letterSpacing: '0.05em'
          }}
          onClick={() => setIsOpen(false)}
        >
          <span className="relative z-10 text-white">Agendar Consulta</span>
          <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* Info Extra Sutil */}
        <p className="text-center text-[50px] text-brand-dark/40 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Atendimento presencial e online
        </p>
      </div>
    </div>
  </div>
)}

{/* Backdrop (Fundo Escurecido) */}
{isOpen && (
  <div 
    className="fixed inset-0 bg-brand-dark/10 backdrop-blur-[3px] z-50 lg:hidden transition-all duration-500"
    onClick={() => setIsOpen(false)}
  />
)}

{isOpen && (
  <div 
    className="fixed inset-0 bg-brand-dark/5 backdrop-blur-[2px] z-50 lg:hidden"
    onClick={() => setIsOpen(false)}
  />
)}
    </nav>
  );
};

export default Navbar;
