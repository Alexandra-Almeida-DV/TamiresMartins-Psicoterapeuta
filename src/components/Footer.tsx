import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const [step, setStep] = useState(0);

  // Reutilizando a lógica de animação da Navbar para a logo no footer
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
    <footer className="py-5 bg-white border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* ── Logo Composta (Imagem + Texto Animado) ── */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={logo}
              alt="Logo Tamires Martins"
              className="h-30 lg:h-28 w-auto object-contain"
            />
            
            <div className="flex flex-col justify-center leading-none">
              <span
                className="text-brand-dark tracking-[0.22em] uppercase font-light block text-[30px] lg:text-[30px]"
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
                className="text-brand-dark block text-[50px] lg:text-[50px]"
                style={{
                  fontFamily: "'Rouge Script', cursive",
                  lineHeight: 1,
                  marginTop: "-0.05em",
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
                  className="text-brand-primary tracking-[0.22em] uppercase text-center block text-[16px] lg:text-[15px]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    opacity: step >= 4 ? 1 : 0,
                    transform: step >= 4 ? "translateY(0)" : "translateY(5px)",
                    transition: "opacity 1s ease, transform 1s ease",
                  }}
                >
                  Psicoterapeuta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Links Rápidos ── */}
        <div 
          className="flex gap-8 mb-12 text-11px uppercase tracking-[0.25em] text-brand-dark/60 font-semibold text-[15px] lg:text-[18px]"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
          <a href="#psicoterapias" className="hover:text-brand-primary transition-colors">Serviços</a>
          <a href="#trabalho" className="hover:text-brand-primary transition-colors">Trabalho</a>
          <a href="#contato" className="hover:text-brand-primary transition-colors">Contato</a>
        </div>

        {/* ── Informações Legais ── */}
        <div 
          className="text-center space-y-3"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          <div className="text-brand-dark/40 text-10px tracking-widest uppercase text-[15px] lg:text-[10px]">
            <p>Conselho Regional de Psicologia: CRP 06/206142</p>
            <p className="mt-1">© 2026 Tamires Martins • Todos os direitos reservados</p>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;