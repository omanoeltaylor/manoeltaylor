
import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'shop', label: 'Shop' },
    { id: 'learn', label: 'Learn' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary-bg border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="cursor-pointer group"
          onClick={() => onSectionChange('hero')}
        >
          <h1 className="text-2xl md:text-4xl group-hover:text-accent-red transition-colors">
            Manoel <span className="text-stroke group-hover:text-white">Taylor</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`text-base lg:text-lg font-black uppercase tracking-normal transition-all hover:text-accent-red ${
                activeSection === item.id ? 'text-accent-red underline underline-offset-8' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-white hover:text-primary-bg transition-colors brutalist-border"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-accent-red text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative p-2 brutalist-border"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-red text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-primary-bg border-b-4 border-white md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-4xl font-black uppercase tracking-tighter text-left hover:text-accent-red"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
