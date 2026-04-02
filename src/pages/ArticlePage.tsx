import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticles } from '../lib/content';
import { ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ARTICLES = getArticles();

const ArticlePage = () => {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) return <div className="pt-40 text-center text-4xl font-black">ARTIGO NÃO ENCONTRADO</div>;

  return (
    <div className="section-container section-padding min-h-screen pb-40 overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative content-area">
        <Link to="/content" className="inline-flex items-center gap-2 text-white font-black hover:text-accent-red transition-all mb-16 text-lg uppercase tracking-widest border-b-2 border-white/20 pb-2">
          <ArrowLeft size={18} /> VOLTAR AO BLOG
        </Link>

        {/* HEADER - Clean and Focused */}
        <header className="mb-20 text-center lg:text-left">
          <span className="text-accent-red font-black text-sm md:text-base mb-6 block uppercase tracking-widest">{article.category} • {article.date}</span>
          <h1 className="text-5xl md:text-7xl mb-12 leading-[1.0] uppercase font-black tracking-tight">{article.title}</h1>
          
          <div className="bg-black border-2 border-white/10 overflow-hidden mb-16 max-w-3xl mx-auto lg:mx-0">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto grayscale brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        {/* CONTENT - Rendered from markdown */}
        <article className="max-w-2xl mx-auto lg:mx-0">
          {article.excerpt && (
            <p className="text-2xl md:text-3xl font-bold leading-snug mb-16 text-accent-yellow">
              {article.excerpt}
            </p>
          )}
          
          {article.content ? (
            <div className="prose prose-invert prose-lg max-w-none 
              [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:text-white [&_h1]:uppercase [&_h1]:font-black [&_h1]:leading-tight [&_h1]:my-16 [&_h1]:tracking-tight
              [&_h2]:text-4xl [&_h2]:md:text-5xl [&_h2]:text-white [&_h2]:uppercase [&_h2]:font-black [&_h2]:leading-tight [&_h2]:my-16 [&_h2]:tracking-tight
              [&_p]:text-gray-300 [&_p]:font-medium [&_p]:text-lg [&_p]:md:text-xl [&_p]:leading-relaxed [&_p]:mb-10
              [&_blockquote]:border-l-8 [&_blockquote]:border-accent-red [&_blockquote]:pl-8 [&_blockquote]:py-4 [&_blockquote]:my-20
              [&_blockquote_p]:text-2xl [&_blockquote_p]:md:text-3xl [&_blockquote_p]:text-white [&_blockquote_p]:font-black [&_blockquote_p]:italic [&_blockquote_p]:uppercase [&_blockquote_p]:leading-tight
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          ) : (
            <div className="space-y-10 text-gray-300 font-medium text-lg md:text-xl leading-relaxed">
              <p>Conteúdo em breve.</p>
            </div>
          )}
        </article>

        {/* SHARE SECTION */}
        <div className="mt-32 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h3 className="text-2xl font-black uppercase tracking-widest flex items-center gap-4">
              <Share2 className="text-accent-red" /> COMPARTILHE O ARTIGO
            </h3>
            <div className="flex flex-wrap gap-4">
              {['TW', 'FB', 'LI', 'MAIL'].map(s => (
                <button key={s} className="w-12 h-12 flex items-center justify-center border-2 border-white/20 hover:border-accent-red hover:bg-accent-red transition-all font-black text-xs">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
