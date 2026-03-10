import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';

const Content = () => {
  return (
    <div className="pt-32 min-h-screen pb-20 overflow-hidden">
      <div className="relative mb-20">
        <h1 className="text-8xl md:text-[15vw] leading-[0.7] tracking-tighter mb-4">CONTEÚDO</h1>
        <div className="absolute top-1/2 right-0 bg-accent-red text-white px-6 py-2 font-black text-3xl -rotate-12 brutalist-shadow">
          MANIFESTO
        </div>
      </div>

      {/* FEATURED */}
      <div className="mb-32">
        <Link to={`/content/${ARTICLES[0].id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-12 group relative">
          <div className="lg:col-span-7 border-8 border-white p-2 brutalist-shadow relative z-10">
            <img 
              src={ARTICLES[0].imageUrl} 
              alt={ARTICLES[0].title} 
              className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-4 -left-4 bg-accent-yellow text-black px-4 py-1 font-black text-xl rotate-[-5deg]">
              DESTAQUE
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center relative z-20 lg:-ml-20">
            <div className="bg-white text-black p-8 brutalist-shadow-red">
              <span className="text-accent-red font-black text-xl mb-4 block uppercase tracking-widest">{ARTICLES[0].category} • {ARTICLES[0].date}</span>
              <h2 className="text-5xl md:text-7xl mb-6 leading-[0.85] group-hover:text-accent-red transition-colors uppercase font-black">{ARTICLES[0].title}</h2>
              <p className="text-xl font-bold leading-tight mb-8 uppercase">
                {ARTICLES[0].excerpt}
              </p>
              <span className="text-2xl font-black border-b-4 border-black self-start inline-block hover:px-4 transition-all">LER AGORA</span>
            </div>
          </div>
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {ARTICLES.slice(1).map((article, idx) => (
          <Link key={article.id} to={`/content/${article.id}`} className={`group relative ${idx % 2 === 0 ? 'md:mt-12' : ''}`}>
            <div className="aspect-square overflow-hidden border-4 border-white mb-6 brutalist-shadow group-hover:shadow-none transition-all">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative">
              <span className="text-accent-yellow font-black mb-2 block uppercase tracking-tighter">{article.category}</span>
              <h3 className="text-4xl mb-4 group-hover:text-accent-red transition-colors leading-none uppercase font-black">{article.title}</h3>
              <p className="text-gray-400 font-bold uppercase text-sm leading-tight line-clamp-3">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
