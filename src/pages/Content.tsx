import React from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../lib/content';
import { ArrowRight, Plus } from 'lucide-react';

const ARTICLES = getArticles();

const Content = () => {
  return (
    <div className="section-container section-padding min-h-screen pb-40 overflow-hidden relative">
      <header className="mb-24 relative z-10">
        <h1 className="text-8xl md:text-[12vw] font-black leading-[0.7] tracking-tighter uppercase italic">BLOG</h1>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-lg md:text-xl font-black uppercase tracking-widest text-accent-red">Pensamento & Teoria</p>
          <div className="w-24 h-2 bg-white"></div>
        </div>
      </header>

      {/* FEATURED - Smaller image, cleaner info */}
      <div className="mb-40">
        <Link to={`/content/${ARTICLES[0].id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-12 group items-center">
          <div className="lg:col-span-5 bg-black border-4 border-white overflow-hidden aspect-video">
            <img 
              src={ARTICLES[0].imageUrl} 
              alt={ARTICLES[0].title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col pt-4">
            <span className="text-accent-red font-black text-xs md:text-sm mb-4 block uppercase tracking-widest">{ARTICLES[0].category} • {ARTICLES[0].date}</span>
            <h2 className="text-4xl md:text-6xl mb-6 leading-[0.9] group-hover:text-accent-yellow transition-colors uppercase font-black tracking-tight">{ARTICLES[0].title}</h2>
            <p className="text-lg md:text-xl font-medium text-gray-400 leading-snug mb-8 max-w-2xl">
              {ARTICLES[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-white font-black uppercase group-hover:translate-x-2 transition-transform">
              LER O ARTIGO COMPLETO <ArrowRight size={24} className="text-accent-red" />
            </div>
          </div>
        </Link>
      </div>

      {/* GRID - Cleaner items, smaller images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {ARTICLES.slice(1).map((article, idx) => (
          <Link key={article.id} to={`/content/${article.id}`} className="group flex flex-col">
            <div className="aspect-[16/10] overflow-hidden border-2 border-white/20 mb-8 bg-black">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-accent-red font-black text-[10px] mb-3 block uppercase tracking-widest">{article.category}</span>
              <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-accent-yellow transition-colors leading-tight uppercase font-black tracking-tight">{article.title}</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed line-clamp-3 mb-6">{article.excerpt}</p>
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest opacity-40">{article.date}</span>
                <Plus size={16} className="text-accent-red group-hover:rotate-90 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
