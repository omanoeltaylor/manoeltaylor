import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Twitter, Mail, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'início', path: '/' },
    { name: 'sobre', path: '/about' },
    { name: 'portfólio', path: '/portfolio' },
    { name: 'loja', path: '/shop' },
    { name: 'blog', path: '/content' },
    { name: 'contato', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 py-6 pointer-events-none">
      <div className="section-container flex justify-between items-start">
        <Link 
          to="/" 
          className="pointer-events-auto cursor-pointer text-4xl font-black tracking-tighter uppercase leading-none bg-white text-black p-2 hover:bg-accent-red hover:text-white transition-colors"
        >
          M. TAYLOR
        </Link>
        
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="hidden md:flex bg-black border-2 border-white p-2 space-x-6 font-black uppercase text-xs tracking-[0.2em]">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`hover:text-accent-red transition-colors ${location.pathname === link.path ? 'text-accent-red' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-white text-black p-2 brutalist-shadow hover:bg-accent-red hover:text-white transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-red text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden bg-white text-black p-2 brutalist-shadow"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-accent-red z-[60] flex flex-col justify-center items-center text-center pointer-events-auto"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
              <X size={48} />
            </button>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <Link to="/" className="text-4xl sm:text-6xl font-black uppercase text-white hover:italic" onClick={() => setIsOpen(false)}>INÍCIO</Link>
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-4xl sm:text-6xl font-black uppercase text-white hover:italic" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t-4 md:border-t-8 border-white bg-primary-bg">
      <div className="section-container section-padding flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="md:w-2/3">
          <h2 className="font-display font-black uppercase tracking-tighter text-title">TCHAU.</h2>
          <p className="text-lg md:text-xl font-black uppercase max-w-sm mt-4">CRIANDO PARA AS MARGENS, PENSADO PARA O CAOS.</p>
        </div>
        <div className="text-left md:text-right mt-12 md:mt-0 w-full md:w-auto">
          <p className="font-black uppercase text-lg md:text-xl mb-2 md:mb-4 hover:text-accent-red cursor-pointer">INSTAGRAM</p>
          <p className="font-black uppercase text-lg md:text-xl mb-4 md:mb-4 hover:text-accent-red cursor-pointer">TWITTER</p>
          <p className="text-[8px] md:text-[10px] opacity-50 font-bold uppercase tracking-widest">© 2024 MANOEL TAYLOR — TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </footer>
  );
};
