import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="pt-40 text-center text-4xl">PRODUTO NÃO ENCONTRADO</div>;

  return (
    <div className="pt-32 min-h-screen pb-20">
      <Link to="/shop" className="flex items-center gap-2 text-accent-yellow hover:underline mb-12 text-xl font-black uppercase tracking-tighter">
        <ArrowLeft size={24} /> VOLTAR PARA A LOJA
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* GALLERY */}
        <div className="space-y-6">
          <div className="border-4 border-white p-2 brutalist-shadow">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border-2 border-white aspect-square opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                <img 
                  src={`https://picsum.photos/seed/product-${id}-${i}/400/400`} 
                  alt="Detail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-8xl mb-4">{product.title}</h1>
          <p className="text-4xl font-black text-accent-red mb-10">£{product.price.toFixed(2)}</p>
          
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-xl font-black text-accent-yellow mb-4 uppercase tracking-widest">ESPECIFICAÇÕES</h3>
              <ul className="grid grid-cols-2 gap-2 font-bold uppercase text-sm">
                {product.specs.map(spec => (
                  <li key={spec} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-yellow"></span> {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-accent-yellow mb-4 uppercase tracking-widest">TAMANHOS DISPONÍVEIS</h3>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map(size => (
                  <button key={size} className="px-6 py-2 border-2 border-white hover:bg-white hover:text-black font-black uppercase transition-all">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full py-6 bg-accent-red text-white font-black uppercase text-2xl brutalist-shadow flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all"
          >
            <ShoppingCart size={32} /> ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>

      {/* MORE BY ARTIST */}
      <div className="mt-40">
        <h2 className="text-5xl md:text-7xl mb-12 uppercase font-black tracking-tighter">MAIS <span className="text-stroke">OBRAS</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.id !== id).map(p => (
            <Link key={p.id} to={`/shop/${p.id}`} className="group">
              <div className="aspect-square overflow-hidden border-2 border-white mb-4 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <img 
                  src={p.imageUrl} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-accent-red transition-colors">{p.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
