import { useEffect, useRef, useState } from 'react';
import { createWhats } from '../utils/whatsapp';

const canais = [
  {
    icone: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    valor: '(16) 99736-6306',
    href: createWhats('Olá Tamires, gostaria de agendar uma sessão.'),
    destaque: true,
  },
  {
    icone: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'E-mail',
    valor: 'contato@tamiresmartinspsi.com.br',
    href: 'mailto:contato@tamiresmartinspsi.com.br',
    destaque: false,
  },
  {
    icone: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: 'Instagram',
    valor: '@tamiresmartins.psi',
    href: 'https://instagram.com/tamiresmartins.psi',
    destaque: false,
  },
];

function Canal({ canal, index, visible }: { canal: typeof canais[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={canal.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s, background 0.35s ease, box-shadow 0.35s ease`,
        background: hovered
          ? canal.destaque ? 'rgba(57,84,97,0.92)' : 'rgba(255,255,255,0.9)'
          : canal.destaque ? 'rgba(57,84,97,0.82)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: canal.destaque ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(57,84,97,0.1)',
        boxShadow: hovered
          ? canal.destaque ? '0 16px 40px rgba(57,84,97,0.25)' : '0 12px 32px rgba(57,84,97,0.10)'
          : canal.destaque ? '0 8px 24px rgba(57,84,97,0.18)' : '0 4px 16px rgba(57,84,97,0.06)',
      }}
    >
      <div
        className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
        style={{
          background: canal.destaque
            ? hovered ? 'rgba(179,135,156,0.3)' : 'rgba(179,135,156,0.2)'
            : hovered ? 'rgba(57,84,97,0.1)' : 'rgba(57,84,97,0.06)',
          color: canal.destaque ? '#e8c8d5' : '#395461',
        }}
      >
        <div className="scale-90 sm:scale-100">{canal.icone}</div>
      </div>

      <div className="flex flex-col gap-0.5 min-w-0">
        <span
          className="text-80 lg:text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500, color: canal.destaque ? 'rgba(255,255,255,0.5)' : 'rgba(57,84,97,0.45)' }}
        >
          {canal.label}
        </span>
        <span
          className="truncate text-80 lg:text-30"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, color: canal.destaque ? '#ffffff' : '#395461' }}
        >
          {canal.valor}
        </span>
      </div>

      <span
        className="ml-auto shrink-0 text--0 lg:text-xl"
        style={{
          color: canal.destaque ? 'rgba(255,255,255,0.4)' : 'rgba(57,84,97,0.25)',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
        }}
      >→</span>
    </a>
  );
}

export default function Contato() {
  const tituloRef = useRef<HTMLDivElement>(null);
  const canaisRef = useRef<HTMLDivElement>(null);
  const agradRef  = useRef<HTMLDivElement>(null);

  const [tituloVisible, setTituloVisible] = useState(false);
  const [canaisVisible, setCanaisVisible] = useState(false);
  const [agradVisible,  setAgradVisible]  = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === tituloRef.current && entry.isIntersecting) setTituloVisible(true);
          if (entry.target === canaisRef.current && entry.isIntersecting) setCanaisVisible(true);
          if (entry.target === agradRef.current  && entry.isIntersecting) setAgradVisible(true);
        });
      },
      { threshold: 0.12 }
    );
    if (tituloRef.current) observer.observe(tituloRef.current);
    if (canaisRef.current) observer.observe(canaisRef.current);
    if (agradRef.current)  observer.observe(agradRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="relative bg-brand-bg pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
      
      {/* Elementos de Fundo (mantidos) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full" style={{ background: 'radial-gradient(circle, #f0d9e2 0%, transparent 100%)', opacity: 0.4 }} />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full" style={{ background: 'radial-gradient(circle, #c5d8e0 0%, transparent 100%)', opacity: 0.25 }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* CABEÇALHO */}
        <div
          ref={tituloRef}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-4"
          style={{
            opacity: tituloVisible ? 1 : 0,
            transform: tituloVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span
            className="text-brand-primary italic text-[50px] lg:text-[28px]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            vamos conversar
          </span>

          <h2
            className="text-brand-dark text-[38px] md:text-[54px] lg:text-[62px]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.1 }}
          >
            O primeiro passo <span className="italic text-brand-primary">começa aqui.</span>
          </h2>

          <div className="w-10 h-px bg-brand-primary/40" />

          <p
            className="text-brand-dark/55 max-w-lg text-[40px] lg:text-[20px] w-3/4 lg:w-200"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400, lineHeight: 1.7 }}
          >
            Entre em contato pelo canal de sua preferência. Responderei com atenção e cuidado.
          </p>
        </div>

        {/* CANAIS */}
        <div ref={canaisRef} className="flex flex-col gap-3 sm:gap-4 mb-14 sm:mb-20">
          {canais.map((canal, i) => (
            <Canal key={canal.label} canal={canal} index={i} visible={canaisVisible} />
          ))}
        </div>

        {/* CARD AGRADECIMENTO */}
        <div
          ref={agradRef}
          style={{
            opacity: agradVisible ? 1 : 0,
            transform: agradVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
          }}
        >
          <div
            className="relative rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden flex flex-col items-center text-center gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(57,84,97,0.88) 0%, rgba(57,84,97,0.78) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 16px 40px rgba(57,84,97,0.14)',
            }}
          >
            <p
              className="text-white/90 text-[40px] lg:text-[32px]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.4,
                maxWidth: '32rem',
              }}
            >
              "Obrigada por confiar. Cuidar da sua saúde emocional é um ato de coragem."
            </p>

            <div className="w-12 h-px bg-brand-primary/40" />

            <div className="flex flex-col items-center gap-4">
               <span
                className="text-white/40 text-[20px] lg:text-[11px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
              >
                Tamires Martins · Psicoterapeuta
              </span>

              <a
                href={createWhats('Olá Tamires, gostaria de agendar minha primeira sessão.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-white text-[25px] lg:text-[14px] transition-all hover:scale-105"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                  background: 'rgba(179,135,156,0.3)',
                  border: '1px solid rgba(179,135,156,0.4)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar minha primeira sessão
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}