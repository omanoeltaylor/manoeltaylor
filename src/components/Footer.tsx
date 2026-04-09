
import React from 'react';
import { Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';
import globalSettings from '../content/settings/global.json';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-bg pt-24 pb-12 border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-6xl md:text-8xl mb-8">
              {globalSettings.footerHeading.split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    <span className="text-stroke">{word}</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{word} </React.Fragment>
                )
              )}
            </h2>
            <p className="text-xl opacity-90 max-w-md mb-12">
              {globalSettings.footerText}
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="YOUR@EMAIL.COM" 
                className="flex-1 bg-secondary-bg brutalist-border p-4 font-black uppercase focus:outline-none focus:bg-white focus:text-primary-bg transition-colors"
              />
              <button className="bg-accent-red text-white px-8 py-4 font-black uppercase brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                Join
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-2xl mb-6">NAVIGATION</h4>
            <ul className="space-y-4 font-black uppercase tracking-normal text-xl">
              {globalSettings.navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-accent-red transition-colors block py-1">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-2xl mb-6">SOCIAL</h4>
            <div className="flex gap-4">
              {globalSettings.socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noreferrer" className="p-4 brutalist-border hover:bg-white hover:text-primary-bg transition-all">
                  {social.platform === 'Instagram' && <Instagram />}
                  {social.platform === 'Twitter' && <Twitter />}
                  {social.platform === 'Mail' && <Mail />}
                  {social.platform !== 'Instagram' && social.platform !== 'Twitter' && social.platform !== 'Mail' && social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t-2 border-white/10 gap-8">
          <p className="opacity-80 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
            {globalSettings.copyright}
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 font-black uppercase hover:text-accent-red transition-colors"
          >
            Back to Top <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
