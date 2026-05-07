import { useEffect, useRef, useState } from 'react';
import imagemHero from '../assets/imagemHero.jpg';

export default function Hero() {
  const [step, setStep] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [, setStatsVisible] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 600),
      setTimeout(() => setStep(3), 900),
      setTimeout(() => setStep(4), 1200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
  const obs = new IntersectionObserver(
    ([entry]) => { 
      if (entry.isIntersecting) setStatsVisible(true); 
    },
    { threshold: 0.15 }
  );

  if (statsRef.current) obs.observe(statsRef.current);

  return () => obs.disconnect();
}, [setStatsVisible]); 

  const reveal = (s: number, delay = 0): React.CSSProperties => ({
    opacity: step >= s ? 1 : 0,
    transform: step >= s ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(${imagemHero})` }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 lg:hidden bg-linear-to-b from-brand-light/50 to-brand-light/90" />
        <div className="absolute inset-0 hidden lg:block bg-linear-to-l from-brand-light/97 via-brand-light/82 to-transparent" />

        <div className="relative z-10 min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-start lg:items-center">
            <div className="w-full max-w-3xl mx-auto lg:ml-auto lg:mr-0 flex flex-col items-center lg:items-end text-center lg:text-right pt-40 lg:pt-0 gap-14 lg:gap-8">
              
              <div style={reveal(1)}>
                <span
                  className="inline-flex items-center gap-2 text-[1.2rem] lg:text-[11px] tracking-[0.24em] uppercase text-brand-primary"
                  style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
                >
                  Psicoterapia em Araraquara
                  <span className="w-5 h-px bg-brand-primary inline-block" />
                </span>
              </div>

              <h1 className="w-full flex flex-col items-center lg:items-end group">
                <div className="flex flex-col lg:flex-row items-center lg:justify-end relative">
                  <span
                    className="text-brand-dark uppercase tracking-[0.22em] font-light text-[8rem] lg:text-[3.2rem]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      lineHeight: 1,
                      opacity: step >= 1 ? 1 : 0,
                      transform: step >= 1 ? "translateY(0)" : "translateY(-10px)",
                      transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    Tamires
                  </span>
                  <span
                    className="text-brand-primary text-[12rem] lg:text-[5rem] -mt-4 lg:-mt-2 lg:ml-4"
                    style={{
                      fontFamily: "'Rouge Script', cursive",
                      lineHeight: 0.8,
                      opacity: step >= 2 ? 1 : 0,
                      transform: step >= 2 ? "translateX(0)" : "translateX(15px)",
                      transition: "all 1.3s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    Martins
                  </span>
                </div>
                
                <div
                  className="w-full max-w-280px lg:max-w-none flex flex-col items-center lg:items-end mt-4 gap-2"
                  style={{
                    opacity: step >= 3 ? 1 : 0,
                    transition: "opacity 0.8s ease 0.2s",
                  }}
                >
                  <div
                    className="h-px bg-brand-primary/40"
                    style={{
                      width: step >= 3 ? "100%" : "0%",
                      transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  />
                  <span
                    className="text-brand-primary tracking-[0.22em] uppercase text-[2.5rem] lg:text-[0.8rem]"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 500,
                      opacity: step >= 4 ? 1 : 0,
                      transform: step >= 4 ? "translateY(0)" : "translateY(8px)",
                      transition: "all 1s ease",
                    }}
                  >
                    Psicoterapeuta
                  </span>
                </div>
              </h1>

              <p
                className="text-brand-primary text-[3.9rem] lg:text-[2.2rem] leading-tight max-w-[90%] lg:max-w-xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  ...reveal(3, 0.4)
                }}
              >
                Cuidado emocional na clínica,<br />
                oncologia e no trabalho.
              </p>

              <p
                className="text-brand-dark/65 max-w-[85%] lg:max-w-lg text-[2.8rem] lg:text-[1.2rem] leading-relaxed"
                style={{ fontFamily: "'Quicksand', sans-serif", ...reveal(3, 0.5) }}
              >
                Um espaço seguro para você atravessar momentos difíceis com mais clareza, acolhimento e força. Atendimento para <strong>ansiedade</strong>, <strong>autoestima</strong> e <strong>saúde emocional</strong>.
              </p>

              <div className="flex flex-col items-center lg:items-end gap-6" style={reveal(4)}>
                <a
                  href="#contato"
                  className="px-12 py-8 lg:px-8 lg:py-4 rounded-full text-white text-[1.8rem] lg:text-[0.9rem] font-bold shadow-xl"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    background: 'rgba(57,84,97,0.95)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Agendar primeira sessão
                </a>
                <p className="text-brand-dark/50 text-[1.9rem] lg:text-[1rem]">
                  Você não precisa passar por isso sozinho(a).
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light relative overflow-hidden" id="conexao">
        <div
          ref={statsRef}
          className="relative z-10 border-y border-brand-dark/8 py-10 lg:py-4"
          style={{ background: 'linear-gradient(135deg, rgba(57,84,97,0.96) 0%, rgba(57,84,97,0.90) 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-12 lg:gap-10">
            <p
              className="text-white/95 leading-relaxed italic text-[2.5rem] lg:text-[1.9rem]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              "Há fases em que tudo parece pesado demais — o corpo, os pensamentos,
              as relações, o trabalho. Em outras, é o silêncio que incomoda."
            </p>

            <p
              className="text-white/80 text-[2rem] lg:text-[1.08rem] leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}
            >
              A psicoterapia é um espaço de escuta verdadeira, onde sua história importa. Aqui, cada encontro é construído com
              <span className="text-brand-primary font-semibold"> respeito </span>
              e
              <span className="text-brand-primary font-semibold"> sensibilidade</span>.
            </p>

            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 text-white/90 hover:text-brand-primary transition-all text-[1.5rem] lg:text-[0.9rem] font-semibold tracking-wider"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Conhecer mais sobre Tamires
              <span className="text-brand-primary group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
