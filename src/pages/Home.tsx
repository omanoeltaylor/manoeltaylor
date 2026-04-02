import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, ExternalLink } from 'lucide-react';
import { getArtworks, getProducts, getArticles } from '../lib/content';

const ARTWORKS = getArtworks();
const PRODUCTS = getProducts();
const ARTICLES = getArticles();

const Home = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center relative px-6 overflow-hidden mb-20 md:mb-40">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-display font-black uppercase leading-[0.8] tracking-tighter text-[15vw] sm:text-[18vw] md:text-[22vw]"
        >
          MANOEL
        </motion.h1>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row items-baseline gap-4 mt-[-4vw]"
        >
          <h1 className="font-display font-black uppercase leading-[0.8] tracking-tighter text-[15vw] sm:text-[18vw] md:text-[22vw] text-accent-red">TAYLOR</h1>
          <div className="bg-white text-black font-black uppercase text-lg sm:text-xl md:text-4xl p-2 rotate-[-2deg] brutalist-shadow">É O FIM</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <Link 
            to="/portfolio" 
            className="bg-accent-red text-white font-black uppercase py-3 px-6 md:py-4 md:px-10 transition-all hover:-rotate-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-x-1 text-sm md:text-base"
          >
            Portfólio
          </Link>
          <Link 
            to="/shop" 
            className="border-4 border-white text-white font-black uppercase py-3 px-6 md:py-4 md:px-10 hover:bg-white hover:text-black transition-all text-sm md:text-base"
          >
            Loja
          </Link>
        </motion.div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-12 md:py-20 bg-black border-b-4 border-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter">PORTFÓLIO</h2>
              <p className="text-accent-yellow font-bold uppercase tracking-widest mt-2 text-xs md:text-base">Trabalhos Selecionados</p>
            </div>
            <Link 
              to="/portfolio" 
              className="group flex items-center gap-3 bg-white text-black font-black uppercase py-3 px-6 md:py-4 md:px-8 hover:bg-accent-red hover:text-white transition-all brutalist-shadow text-sm md:text-base"
            >
              Ver Tudo <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTWORKS.slice(0, 4).map((artwork) => (
              <motion.div 
                key={artwork.id}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] overflow-hidden border-2 border-white/20"
              >
                <img 
                  src={artwork.imageUrl} 
                  alt={artwork.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-accent-red text-xs font-black uppercase tracking-widest mb-1">{artwork.category}</span>
                  <h3 className="text-2xl font-black uppercase leading-none">{artwork.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-white text-black py-20 md:py-40 relative">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-display font-black uppercase leading-[0.8] tracking-tighter text-6xl sm:text-8xl md:text-title mb-8 md:mb-12">QUEM?</h2>
              <p className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
                A representatividade na arte <span className="text-accent-red">não é uma tendência.</span> É uma urgência técnica e política.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-bold leading-snug mb-8">
                Taylor tem 27 anos e é ilustrador, quadrinista e capista de Caxias do Sul. Pesquisador autodidata de quadrinhos, ganhou reconhecimento por sempre representar personagens e personalidades negras em suas produções — não como escolha editorial, mas como convicção.
              </p>
              <div className="border-4 border-black brutalist-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800" 
                  className="w-full grayscale contrast-150" 
                  alt="Obra Destaque" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT CONTENT */}
      <section className="py-12 md:py-24">
        <div className="section-container">
          <h2 className="text-title mb-8 md:mb-12 uppercase">CONTEÚDO RECENTE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ARTICLES.map((article) => (
              <Link key={article.id} to={`/content/${article.id}`} className="group">
                <div className="aspect-video overflow-hidden mb-4 md:mb-6 border-2 border-white">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-accent-yellow mb-2 text-sm md:text-base">{article.category} • {article.date}</p>
                <h3 className="text-2xl md:text-3xl group-hover:text-accent-yellow transition-colors font-black uppercase leading-tight">{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 border-t-4 border-white">
        <div className="section-container">
          <h2 className="text-4xl mb-12 text-center">COLABORAÇÕES & INSTITUIÇÕES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 opacity-50">
            {['FEIRA DO LIVRO', 'COMIC CON', 'UNIV. DE ARTE', 'INST. CULTURAL'].map((partner) => (
              <div key={partner} className="h-32 border-2 border-white flex items-center justify-center text-2xl font-bold grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-center px-4">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
