
import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Plus, ShoppingBag } from 'lucide-react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  return (
    <section id="shop" className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-7xl md:text-9xl">THE <br /> <span className="text-stroke">SHOP</span></h2>
          <div className="hidden md:block flex-1 h-1 bg-white"></div>
          <ShoppingBag size={64} className="text-accent-red hidden md:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full group"
            >
              <div className="relative brutalist-border bg-secondary-bg aspect-[3/4] mb-6 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm italic">{product.description}</p>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-xs font-black uppercase tracking-widest opacity-50">{product.category}</span>
                <h3 className="text-2xl mt-1 mb-4 leading-tight">{product.title}</h3>
              </div>

              <div className="flex items-center justify-between mt-4 border-t-2 border-white/20 pt-4">
                <span className="text-3xl font-black">£{product.price}</span>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="bg-white text-primary-bg p-3 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <Plus size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
