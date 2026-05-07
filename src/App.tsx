import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobremim from './components/Sobremim';
import Psicoterapias from './components/Psicoterapias';
import MeuTrabalho from './components/MeuTrabalho';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer'
import imgPost1 from './assets/id1.png';
import imgPost2 from './assets/id2.png';
import imgPost3 from './assets/id3.png';

const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DTd1m_cDqrN/", 
    imagem: imgPost1, 
    legenda: "Janeiro branco."
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DEnkf4ERqTK/",
    imagem: imgPost2,
    legenda: "Saúde mental."
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DLi47XtOyR0/?img_index=1",
    imagem: imgPost3, 
    legenda: "Acolhimento."
  }
];

const App: React.FC = () => {
  const [feedVisible, setFeedVisible] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFeedVisible(true); },
      { threshold: 0.1 }
    );
    if (feedRef.current) observer.observe(feedRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/20">
      
      <Navbar />

      <main>
        <Hero />
        <Sobremim />
        <Psicoterapias />
        <MeuTrabalho />

        {/* SEÇÃO INSTAGRAM */}
        <section ref={feedRef} className="py-24 bg-brand-light/30">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            
            {/* Cabeçalho do Feed */}
            <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 transition-all duration-1000 ${feedVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center md:text-left">
                <span className="text-brand-primary tracking-[0.25em] uppercase text-[22px] lg:text-[18px] font-bold block mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Acompanhe no Instagram
                </span>
                <h2 className="text-brand-dark text-[50px] lg:text-[30px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                  Conteúdos e Reflexões
                </h2>
              </div>
              
              <a 
                href="https://www.instagram.com/tamiresmartins.psi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-brand-primary/20 text-brand-primary text-[25px] lg:text-[18px] font-semibold hover:bg-brand-primary hover:text-white transition-all duration-500"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                @tamiresmartinspsi
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Grid de Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {instagramPosts.map((post, index) => (
                <a 
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2rem overflow-hidden bg-brand-dark shadow-xl shadow-brand-dark/5"
                  style={{ 
                    opacity: feedVisible ? 1 : 0,
                    transform: feedVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`
                  }}
                >
                  {/* Imagem do Post */}
                  <img 
                    src={post.imagem} 
                    alt={post.legenda}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-40"
                  />

                  {/* Overlay ao passar o mouse */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/90 text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      {post.legenda}
                    </p>
                    <span className="text-brand-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                      Ver no Instagram <span>→</span>
                    </span>
                  </div>

                  {/* Ícone sutil do Insta no topo */}
                  <div className="absolute top-6 right-6 text-white/30 group-hover:text-white transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <Contato />
        <Footer />
      </main>
    </div>
  );
};

export default App;