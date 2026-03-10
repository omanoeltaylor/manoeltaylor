
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Minus, Plus, CreditCard } from 'lucide-react';
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
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-primary-bg border-l-4 border-white z-[70] flex flex-col"
          >
            <div className="p-6 border-b-4 border-white flex items-center justify-between">
              <h2 className="text-4xl">SEU <span className="text-stroke">CARRINHO</span></h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white hover:text-primary-bg transition-colors brutalist-border">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-black uppercase opacity-30 mb-8">O carrinho está vazio</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="brutalist-border px-8 py-4 font-black uppercase hover:bg-white hover:text-primary-bg transition-all"
                  >
                    Começar a Comprar
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b-2 border-white/10 pb-6">
                    <div className="w-24 h-24 brutalist-border overflow-hidden flex-shrink-0">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl leading-none mb-1">{item.title}</h4>
                        <p className="text-accent-red font-black">£{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center brutalist-border">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-white hover:text-primary-bg transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 font-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-white hover:text-primary-bg transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/40 hover:text-accent-red transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t-4 border-white bg-secondary-bg">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-xl font-black uppercase opacity-50">Total</span>
                  <span className="text-5xl font-black">£{cartTotal}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-white text-primary-bg py-6 text-2xl font-black uppercase brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4"
                >
                  <CreditCard size={28} />
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
