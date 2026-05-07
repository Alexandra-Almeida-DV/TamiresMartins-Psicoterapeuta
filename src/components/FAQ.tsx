import { useEffect, useRef, useState } from 'react';
import { createWhats } from '../utils/whatsapp';

const faqs = [
  {
    pergunta: 'Quanto tempo dura cada sessão?',
    resposta:
      'A terapia individual tem duração média de 50 minutos contados a partir do horário agendado. Assim, é importante a pontualidade para usufruir todo o tempo da sessão.',
  },
  {
    pergunta: 'O que é necessário para fazer a terapia online?',
    resposta:
      'É recomendável que se organize em um local privativo, que se sinta confortável e seguro para falar. Se possível, para garantir a qualidade da sessão, utilize fone de ouvido e tenha uma boa conexão com a internet.',
  },
  {
    pergunta: 'Por quais aplicativos acontece a sessão?',
    resposta:
      'Principalmente Google Meet e WhatsApp, que são aplicativos criptografados — mantendo a segurança de dados e o sigilo. As sessões acontecem por videochamada e o link é enviado minutos antes do atendimento.',
  },
  {
    pergunta: 'Como é realizado o pagamento?',
    resposta:
      'Através de transferência bancária ou Pix. Em caso de transferência internacional, os dados específicos serão enviados para que a transação seja realizada corretamente. O pagamento deve ser feito de forma antecipada e pode ser por sessão ou mensalmente, conforme acordado.',
  },
  {
    pergunta: 'Como funcionam faltas e cancelamentos?',
    resposta:
      'O atendimento pode ser cancelado ou reagendado com até 24 horas de antecedência. Caso aconteça falta sem aviso prévio, o valor do atendimento será cobrado integralmente.',
  },
  {
    pergunta: 'Quanto tempo de terapia é necessário?',
    resposta:
      'Não é possível nem permitido, de acordo com o Código de Ética do Psicólogo, que a profissional faça qualquer tipo de estimativa de tempo, bem como prometer ou garantir resultados. Cada processo é único e respeita o tempo de cada pessoa.',
  },
];

function Item({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-8 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span
            className="shrink-0 mt-1.5 text-[36px] lg:text-[20px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              color: open ? '#b3879c' : 'rgba(57,84,97,0.3)',
              transition: 'color 0.3s ease',
              letterSpacing: '0.05em',
              minWidth: '2.5rem',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="leading-[1.2] text-[36px] lg:text-[32px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: open ? 400 : 300,
              color: open ? '#395461' : 'rgba(57,84,97,0.8)',
              transition: 'color 0.3s ease, font-weight 0.3s ease',
            }}
          >
            {faq.pergunta}
          </span>
        </div>
        <span
          className="shrink-0 w-16 h-16 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mt-1"
          style={{
            background: open ? '#395461' : 'transparent',
            border: open ? '1px solid #395461' : '1px solid rgba(57,84,97,0.2)',
            transition: 'all 0.35s ease',
          }}
        >
          <svg
            className="w-3 h-3 lg:w-4 lg:h-4"
            viewBox="0 0 12 12"
            style={{
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.35s ease',
            }}
          >
            <line x1="6" y1="0" x2="6" y2="12" stroke={open ? 'white' : '#395461'} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="6" x2="12" y2="6" stroke={open ? 'white' : '#395461'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? '600px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <p
          className="pb-10 pl-14 leading-relaxed text-[32px] lg:text-[20px]"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            color: 'rgba(57,84,97,0.7)',
            lineHeight: 1.8,
          }}
        >
          {faq.resposta}
        </p>
      </div>
      <div className="h-px bg-brand-dark/10" />
    </div>
  );
}

export default function FAQ() {
  const tituloRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [tituloVisible, setTituloVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === tituloRef.current && entry.isIntersecting) setTituloVisible(true);
          if (entry.target === ctaRef.current && entry.isIntersecting) setCtaVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    if (tituloRef.current) observer.observe(tituloRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      className="relative bg-brand-bg pt-20 sm:pt-24 lg:pt-2 pb-8 sm:pb-10 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
        const svg = e.currentTarget.querySelector('.deco-lines') as HTMLElement;
        if (svg) svg.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={(e) => {
        const svg = e.currentTarget.querySelector('.deco-lines') as HTMLElement;
        if (svg) svg.style.transform = 'translate(0px, 0px)';
      }}
    >
      <div
        className="absolute -right-40 top-1/3 w-400px h-400px rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f0d9e2 0%, transparent 0%)', opacity: 0.0 }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
        <div
          ref={tituloRef}
          className="flex flex-col items-center text-center text-[50px] lg:text-[30px] mb-14 sm:mb-16 gap-4"
          style={{
            opacity: tituloVisible ? 1 : 0,
            transform: tituloVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span
            className="text-brand-primary italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            dúvidas comuns
          </span>

          <h2
            className="text-brand-dark text-[68px] lg:text-[30px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Perguntas Frequentes
          </h2>

          <div className="w-10 h-px bg-brand-primary/40" />

          <p
            className="text-brand-dark/50 max-w-md text-[36px] lg:text-[22px]"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            Reuní aqui as perguntas que mais recebo antes de iniciar um processo terapêutico.
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <Item key={faq.pergunta} faq={faq} index={i} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-16 flex flex-col items-center gap-6 text-center"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          <p
            className="text-brand-dark/50 text-[36px] lg:text-[22px]"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}
          >
            Ainda tem dúvidas?
          </p>

          <a
            href={createWhats('Olá, gostaria de tirar algumas dúvidas sobre as sessões.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 lg:py-6 rounded-full text-white text-[30px] lg:text-[18px] cursor-pointer"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.05em',
              background: 'rgba(57,84,97,0.82)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 8px 28px rgba(57,84,97,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(57,84,97,0.96)';
              el.style.transform = 'translateY(-3px)'; 
              el.style.boxShadow = '0 14px 36px rgba(57,84,97,0.28)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(57,84,97,0.82)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 8px 28px rgba(57,84,97,0.2)';
            }}
          >
            <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}