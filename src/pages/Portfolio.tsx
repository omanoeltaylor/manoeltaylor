import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const PORTFOLIO_BENTO = [
  { id: 1, type: 'image', size: 'md:col-span-8 md:row-span-2', title: "Rebelião Neon", category: "Quadrinhos", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, type: 'text', size: 'md:col-span-4 md:row-span-1', content: "A ARTE NÃO É ESPELHO. É UM MARTELO.", author: "Bertolt Brecht", color: "bg-white text-black" },
  { id: 3, type: 'image', size: 'md:col-span-4 md:row-span-2', title: "O Peso do Ouro", category: "Capa de Livro", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800" },
  { id: 4, type: 'text', size: 'md:col-span-4 md:row-span-1', content: "O ERRO É A ÚNICA PROVA DE VIDA.", color: "bg-[#FF2B2B] text-white" },
  { id: 5, type: 'image', size: 'md:col-span-4 md:row-span-2', title: "Afrofuturismo 2099", category: "Ilustração", img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=800" },
  { id: 6, type: 'image', size: 'md:col-span-8 md:row-span-1', title: "Ronin Redux", category: "Fan Art", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1200" },
  { id: 7, type: 'text', size: 'md:col-span-4 md:row-span-1', content: "DESIGN É RESISTÊNCIA.", color: "bg-black border-2 border-white text-white" },
];

const Portfolio = () => {
  return (
    <div className="pt-24 md:pt-40 min-h-screen pb-20">
       <header className="mb-12 md:mb-20">
          <h1 className="font-display font-black uppercase leading-[0.8] tracking-tighter text-[10vw] sm:text-[12vw] md:text-[15vw]">PROJETOS</h1>
          <p className="text-lg md:text-2xl font-black uppercase border-b-4 md:border-b-8 border-accent-red inline-block mt-4">Arquivo 2020—2024</p>
       </header>

       {/* Bento Grid */}
       <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[400px]">
          {PORTFOLIO_BENTO.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${item.size} border-2 border-white/10 relative overflow-hidden group`}
            >
               {item.type === 'image' ? (
                  <>
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 md:p-8">
                      <span className="text-accent-red font-black text-[10px] md:text-xs tracking-widest uppercase mb-1 md:mb-2">{item.category}</span>
                      <h3 className="text-2xl md:text-4xl font-black uppercase">{item.title}</h3>
                    </div>
                  </>
               ) : (
                  <div className={`${item.color} h-full p-6 md:p-10 flex flex-col justify-center items-start relative`}>
                    <Plus className="absolute top-4 right-4" size={24} />
                    <p className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-none italic">{item.content}</p>
                    {item.author && <p className="mt-3 md:mt-4 font-bold uppercase text-[10px] md:text-sm tracking-widest">— {item.author}</p>}
                  </div>
               )}
            </motion.div>
          ))}
       </div>
    </div>
  );
};

export default Portfolio;
