import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Maximize2, ExternalLink } from 'lucide-react';
import { getArtworks } from '../lib/content';

const ARTWORKS = getArtworks();

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

  const mosaicItems = [
    { id: 'm1', type: 'image', size: 'col-span-2 row-span-4', img: "https://images.unsplash.com/photo-1544735038-0245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800", alt: "Nature" },
    { id: 't1', type: 'text', size: 'col-span-1 row-span-2', content: "Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal.", className: "text-sm font-black leading-[1.1] uppercase pt-4" },
    { id: 'm2', type: 'image', size: 'col-span-1 row-span-2', img: "https://images.unsplash.com/photo-1579621909332-ce35755b2763?auto=format&fit=crop&q=80&w=800", alt: "Salary" },
    { id: 'm3', type: 'image', size: 'col-span-1 row-span-2', img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800", alt: "Blue Nitrogen" },
    { id: 't2', type: 'text', size: 'col-span-1 row-span-2', content: "Lalala ideia frase de IMPACTO, e tals, coisa legal.", className: "text-2xl font-black leading-none uppercase text-right self-end" },
    { id: 't3', type: 'text', size: 'col-span-2 row-span-2', content: "Lalala ideia frase de IMPACTO, e tals.", className: "text-5xl md:text-6xl font-black leading-[0.85] uppercase tracking-tighter self-center" },
    { id: 'm4', type: 'image', size: 'col-span-2 row-span-3', img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", alt: "Green Box" },
    { id: 'm5', type: 'image', size: 'col-span-2 row-span-2', img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", alt: "Face" },
    { id: 'm6', type: 'image', size: 'col-span-1 row-span-2', img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", alt: "Fisheye" },
    { 
      id: 't4', type: 'text', size: 'col-span-1 row-span-2', 
      content: "Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal. Lalala ideia frase de IMPACTO, e tals, coisa legal.", 
      className: "text-[10px] font-black leading-[1.0] uppercase text-right pt-4" 
    },
    { id: 'm7', type: 'image', size: 'col-span-1 row-span-2', img: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80&w=800", alt: "Skyline" },
  ];

  return (
    <div className="section-container section-padding min-h-screen pb-40 overflow-hidden relative">
      {/* Background Splatter */}
      <div className="absolute left-[-150px] top-[30%] text-accent-red opacity-60 pointer-events-none select-none z-0">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="currentColor">
          <path d="M40,50 Q60,20 100,40 T150,60 Q180,90 140,130 T80,160 Q30,140 40,50" />
          <circle cx="20" cy="80" r="10" />
          <circle cx="30" cy="110" r="5" />
          <circle cx="170" cy="40" r="8" />
        </svg>
      </div>

      <header className="mb-20 relative z-10">
        <h1 className="text-8xl md:text-[14vw] font-black leading-[0.7] tracking-tighter uppercase">PROJETOS</h1>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-lg md:text-xl font-black uppercase tracking-widest italic">ARQUIVO 2020—2024</p>
          <div className="w-40 h-2 bg-accent-red"></div>
        </div>
      </header>

      {/* 1. MOSAIC HEADER - 4 COL BASE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10 items-start auto-rows-min mb-32">
        {mosaicItems.map((item) => (
          <div key={item.id} className={`${item.size} ${item.type === 'text' ? 'flex' : ''}`}>
             {item.type === 'image' ? (
              <div className="w-full h-full overflow-hidden grayscale brightness-75 contrast-125 border-2 border-transparent">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover" 
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className={`${item.className} text-white`}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 2. ARTWORKS GRID - 4 COL BASE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative z-10">
        {ARTWORKS.map((artwork, idx) => (
          <motion.div 
            key={artwork.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 4) * 0.1 }}
            onClick={() => setSelectedArtwork(artwork)}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden border-2 border-white/20 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title} 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-red/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={40} />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-[10px] font-black uppercase text-accent-red tracking-widest mb-1 block">#{idx + 1} {artwork.category}</span>
              <h3 className="text-lg font-black uppercase leading-none tracking-tight group-hover:text-accent-yellow transition-colors">{artwork.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. MODAL DETAIL */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 text-white hover:text-accent-red transition-colors z-[110]"
            >
              <X size={48} strokeWidth={3} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 max-w-5xl w-full h-auto max-h-[90vh] overflow-y-auto bg-white text-black brutalist-shadow-red p-6 md:p-10">
              {/* Image Section - Reduced to 4 cols */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="w-full aspect-[3/4] overflow-hidden border-4 border-black bg-gray-100">
                  <img 
                    src={selectedArtwork.imageUrl} 
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
                    alt={selectedArtwork.title} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Thumbnails - Also vertical */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-[3/4] border-2 border-black overflow-hidden grayscale brightness-75 hover:brightness-100 transition-all cursor-pointer bg-gray-100">
                      <img 
                        src={`https://picsum.photos/seed/detail-${selectedArtwork.id}-${i}/400/533`} 
                        className="w-full h-full object-cover" 
                        alt="Variation"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Section - Expanded to 6 cols */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <span className="bg-accent-red text-white px-3 py-1 font-black text-sm uppercase mb-4 inline-block">{selectedArtwork.category}</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8 italic">{selectedArtwork.title}</h2>
                  
                  <div className="prose prose-lg font-bold uppercase text-sm leading-snug space-y-4">
                    <p>Esta obra explora a relação entre a forma orgânica e o traço brutalista. Desenvolvida como parte do arquivo técnico de Taylor, reflete a maturidade visual alcançada na última década.</p>
                    <p>Foco total em contraste, textura e composição de impacto.</p>
                  </div>

                  <div className="mt-12 space-y-4 border-l-4 border-accent-yellow pl-6">
                    <div>
                      <span className="text-xs font-black uppercase opacity-50 block">Técnica</span>
                      <span className="font-black uppercase">Digital / Line Art Brutalista</span>
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase opacity-50 block">Ano</span>
                      <span className="font-black uppercase">2023</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12 md:mt-0">
                  <a href="/shop" className="flex-1 bg-black text-white py-4 font-black uppercase text-center hover:bg-accent-red transition-all brutalist-shadow">Ver na Loja</a>
                  <button className="p-4 border-4 border-black hover:bg-black hover:text-white transition-all"><ExternalLink size={24} /></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
