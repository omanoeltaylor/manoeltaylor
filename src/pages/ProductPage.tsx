import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../lib/content';
import { ShoppingCart, ArrowLeft, Plus, ChevronRight, ShieldCheck, Truck, Clock, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = getProducts();

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 border-white/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center group"
      >
        <span className="text-lg font-black uppercase tracking-widest group-hover:text-accent-red transition-colors">{title}</span>
        <Plus className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 font-bold uppercase text-xs leading-relaxed max-w-md">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('A3');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="pt-40 text-center text-4xl font-black uppercase">PRODUTO NÃO ENCONTRADO</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  return (
    <div className="section-container section-padding min-h-screen">
      <Link to="/shop" className="inline-flex items-center gap-2 text-accent-yellow hover:translate-x-[-4px] transition-transform mb-12 text-sm font-black uppercase tracking-widest">
        <ArrowLeft size={18} /> VOLTAR PARA A LOJA
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
        {/* GALLERY - 7 COLUMNS */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-black border-4 border-white p-2 brutalist-shadow relative group overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full aspect-[4/5] object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 bg-accent-red text-white py-2 px-4 font-black text-xl rotate-[-2deg] brutalist-shadow">
              ARTISTA ORIGINAL
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="border-4 border-white p-2 grayscale contrast-125 brutalist-shadow">
               <img 
                 src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" 
                 alt="Mockup Frame" 
                 className="w-full aspect-square object-cover"
                 referrerPolicy="no-referrer"
               />
               <p className="mt-2 text-[10px] font-black uppercase tracking-widest opacity-50">Mockup em ambiente</p>
            </div>
            <div className="border-4 border-white p-2 grayscale contrast-150 brutalist-shadow">
               <img 
                 src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800" 
                 alt="Texture detail" 
                 className="w-full aspect-square object-cover"
                 referrerPolicy="no-referrer"
               />
               <p className="mt-2 text-[10px] font-black uppercase tracking-widest opacity-50">Detalhe de textura</p>
            </div>
          </div>
        </div>

        {/* INFO - 5 COLUMNS */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          <h1 className="text-5xl md:text-7xl mb-6 leading-none tracking-tighter uppercase font-black">{product.title}</h1>
          <p className="text-5xl font-black text-accent-red mb-12">£{product.price.toFixed(2)}</p>
          
          <div className="mb-12">
            <h2 className="text-xl font-black uppercase mb-4 tracking-tight border-l-4 border-accent-yellow pl-4">Sobre esta obra</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-bold uppercase leading-tight text-sm tracking-tight">
              <p className="mb-4">
                {product.title} é, sem dúvida, uma obra que carrega o peso da cultura urbana e do protagonismo negro no centro da narrativa. Resgata a essência técnica do traço brutalista de Taylor, reimaginando ícones e cenários com a força de quem viveu a história.
              </p>
              <p>Uma obra para quem conhece a história. E para quem ainda vai conhecer.</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-black uppercase mb-8 tracking-tight border-l-4 border-accent-yellow pl-4">Detalhes do print</h2>
            
            <div className="space-y-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest opacity-50 block mb-4">Tamanho</span>
                <div className="flex flex-wrap gap-3">
                  {['A4 (21×29,7 cm)', 'A3 (29,7×42 cm)', '30×40 cm'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 transition-all font-black uppercase text-[10px] tracking-widest ${selectedSize === size ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-50 block mb-2">Material</span>
                  <p className="font-black uppercase text-sm">Papel fotográfico fosco 230g</p>
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-50 block mb-2">Impressão</span>
                  <p className="font-black uppercase text-sm">Digital de alta resolução</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-y-2 border-white/10 py-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-50 block mb-1">Assinatura</span>
                  <p className="font-black uppercase text-sm">Sim, assinada pelo artista</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-widest opacity-50">Qtd</span>
                  <div className="flex items-center border-2 border-white bg-black">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-white hover:text-black transition-colors"><Plus className="rotate-45" size={14} /></button>
                    <span className="px-4 font-black">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-white hover:text-black transition-colors"><Plus size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-accent-red text-white py-6 text-2xl font-black uppercase brutalist-shadow-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4"
          >
            <ShoppingCart size={28} /> Comprar Agora
          </button>

          <div className="mt-16 bg-secondary-bg p-6 border-4 border-white brutalist-shadow">
            <h2 className="text-xl font-black uppercase mb-4 tracking-tighter">Como funciona</h2>
            <div className="space-y-1">
              <Accordion title="Pedido e pagamento">
                Após a confirmação do pagamento no sistema, seu pedido entra imediatamente na fila de impressão personalizada.
              </Accordion>
              <Accordion title="Impressão e envio">
                O prazo de impressão e secagem é de 3 a 5 dias úteis. O envio é feito via Correios com embalagem rígida protetora.
              </Accordion>
              <Accordion title="Prazo de entrega">
                De 7 a 12 dias úteis após o envio, dependendo da sua localização e modalidade escolhida.
              </Accordion>
              <Accordion title="Trocas e problemas">
                Se o seu print chegar com qualquer dano físico, entre em contato em até 7 dias com uma foto da embalagem e do produto. Resolvemos rápido.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* MORE BY ARTIST */}
      <div className="pt-20 border-t-8 border-white">
        <h2 className="text-4xl md:text-6xl mb-12 uppercase font-black tracking-tighter">Mais obras <span className="text-stroke-white text-transparent" style={{ WebkitTextStroke: '2px white' }}>do artista</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {relatedProducts.map(p => (
            <Link key={p.id} to={`/shop/${p.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden border-2 border-white mb-6 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
                <img 
                  src={p.imageUrl} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-accent-red mb-1">{p.category}</p>
              <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-accent-yellow transition-colors leading-none">{p.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
