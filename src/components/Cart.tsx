import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { X, Trash2, Minus, Plus, CreditCard, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence mode="wait">
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-full max-w-lg h-full bg-primary-bg border-l-8 border-white z-[70] flex flex-col shadow-[-20px_0px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-8 border-b-8 border-white bg-accent-red flex items-center justify-between text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-2 opacity-10 scale-150 rotate-12">
                <ShoppingBag size={120} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none relative z-10">
                MEU <span className="block text-stroke-white text-transparent" style={{ WebkitTextStroke: '2px white' }}>CARRINHO</span>
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="p-3 bg-black text-white hover:bg-white hover:text-black transition-all border-4 border-black group-hover:rotate-90 transition-transform duration-300 relative z-10"
              >
                <X size={24} />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
              <AnimatePresence mode="popLayout" initial={false}>
                {cartItems.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 mb-6 border-4 border-white/20 flex items-center justify-center opacity-20">
                      <ShoppingBag size={48} />
                    </div>
                    <p className="text-2xl font-black uppercase opacity-20 tracking-widest max-w-[200px]">Nenhuma obra selecionada ainda</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-10 brutalist-border px-8 py-4 font-black uppercase hover:bg-accent-yellow hover:text-black transition-all rotate-[-2deg]"
                    >
                      Explorar a Loja
                    </button>
                  </motion.div>
                ) : (
                  <LayoutGroup>
                    {cartItems.map((item) => (
                      <motion.div 
                        layout
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="bg-secondary-bg border-4 border-white p-4 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300"
                      >
                        <div className="flex gap-6">
                          {/* Image Container */}
                          <div className="w-24 h-32 border-2 border-white overflow-hidden flex-shrink-0 relative group">
                            <img 
                              src={item.imageUrl} 
                              alt={item.title} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                            />
                            <div className="absolute inset-0 bg-accent-red/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          {/* Info Container */}
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="text-xl md:text-2xl font-black leading-none uppercase mb-2 line-clamp-2">{item.title}</h4>
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="p-1 text-white/30 hover:text-accent-red transition-colors"
                                  title="Remover"
                                >
                                  <Trash2 size={20} />
                                </button>
                              </div>
                              <p className="text-2xl font-black text-accent-yellow">£{item.price}</p>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center border-2 border-white bg-black">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="w-8 text-center font-black text-lg">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              <div className="text-xs font-black uppercase tracking-tighter opacity-50">Subtotal: £{(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </LayoutGroup>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Summary */}
            {cartItems.length > 0 && (
              <div className="p-8 border-t-8 border-white bg-white text-black relative">
                <div className="flex justify-between items-baseline mb-8">
                  <span className="text-2xl font-black uppercase tracking-tighter opacity-50 italic">Total do Pedido</span>
                  <div className="text-right">
                    <span className="text-6xl font-black leading-none tracking-tighter">£{cartTotal}</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-50">Taxas e frete calculados no check-out</p>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-6 text-2xl font-black uppercase brutalist-shadow-red hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4 relative overflow-hidden group"
                >
                  <CreditCard size={28} className="group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Finalizar Compra</span>
                  <div className="absolute inset-0 bg-accent-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                </button>
                
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-4 py-2 text-sm font-black uppercase tracking-widest hover:text-accent-red transition-colors"
                >
                  Continuar Escolhendo
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
