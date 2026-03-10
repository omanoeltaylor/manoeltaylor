import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-24 md:pt-40 min-h-screen pb-20">
      <h1 className="font-display font-black uppercase leading-[0.8] tracking-tighter text-[10vw] sm:text-[12vw] md:text-[15vw] mb-12 md:mb-20">LOJA</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="border-2 md:border-4 border-white p-3 md:p-4 group flex flex-col bg-secondary-bg brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <Link to={`/shop/${product.id}`} className="overflow-hidden mb-3 md:mb-4 relative">
              <img 
                src={product.imageUrl} 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                alt={product.title} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-[10px] font-black uppercase">
                {product.category}
              </div>
            </Link>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-black uppercase leading-none">{product.title}</h3>
                <p className="text-xl md:text-2xl font-black text-accent-red whitespace-nowrap ml-2">£{product.price.toFixed(2)}</p>
              </div>
              <div className="flex gap-2">
                <Link 
                  to={`/shop/${product.id}`}
                  className="flex-1 py-3 md:py-4 border-2 border-white font-black uppercase text-xs md:text-sm text-center hover:bg-white hover:text-black transition-all"
                >
                  Detalhes
                </Link>
                <button 
                  onClick={() => addToCart(product)}
                  className="p-3 md:p-4 bg-accent-red text-white hover:bg-white hover:text-black transition-all border-2 border-accent-red hover:border-white"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
