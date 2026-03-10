import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { ArrowLeft } from 'lucide-react';

const ArticlePage = () => {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) return <div className="pt-40 text-center text-4xl font-black">ARTIGO NÃO ENCONTRADO</div>;

  return (
    <div className="pt-32 min-h-screen pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <Link to="/content" className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 font-black hover:bg-accent-red hover:text-white transition-all mb-12 text-xl rotate-[-2deg] brutalist-shadow">
          <ArrowLeft size={24} /> VOLTAR
        </Link>

        <header className="mb-20 relative">
          <div className="absolute -top-10 -left-10 text-[20vw] opacity-5 font-black pointer-events-none select-none text-stroke">
            {article.category}
          </div>
          <span className="text-accent-red font-black text-2xl mb-4 block uppercase tracking-widest relative z-10">{article.category} • {article.date}</span>
          <h1 className="text-6xl md:text-[10vw] mb-12 leading-[0.8] uppercase font-black tracking-tighter relative z-10">{article.title}</h1>
          
          <div className="border-8 border-white p-2 brutalist-shadow mb-10 relative z-10 rotate-1">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full aspect-video object-cover grayscale brightness-75 contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-accent-yellow text-black p-6 font-black text-2xl rotate-[-5deg] border-4 border-black">
              LEIA ISSO
            </div>
          </div>
        </header>

        <article className="relative z-10">
          <div className="bg-white text-black p-10 md:p-20 brutalist-shadow-red mb-20 rotate-[-0.5deg]">
            <p className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight mb-12">
              {article.excerpt}
            </p>
            
            <div className="space-y-12 text-black font-bold text-xl leading-snug uppercase">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2 className="text-5xl md:text-7xl text-accent-red uppercase font-black leading-[0.8] my-16">
                A EVOLUÇÃO DA <br/><span className="text-stroke" style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>FORMA</span>
              </h2>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
                <div className="border-4 border-black p-2 rotate-2">
                  <img src="https://picsum.photos/seed/art1/800/800" alt="Art" className="w-full grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="border-4 border-black p-2 -rotate-2">
                  <img src="https://picsum.photos/seed/art2/800/800" alt="Art" className="w-full grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-32 pt-20 border-t-8 border-white">
          <h3 className="text-6xl md:text-8xl font-black mb-12 leading-none">COMPARTILHE O <br/><span className="text-accent-red">MANIFESTO</span></h3>
          <div className="flex flex-wrap gap-6">
            {['TWITTER', 'FACEBOOK', 'LINKEDIN', 'EMAIL'].map(s => (
              <button key={s} className="px-10 py-4 border-4 border-white hover:bg-white hover:text-black font-black text-2xl transition-all brutalist-shadow hover:shadow-none">
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
