
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CreditCard, Truck, CheckCircle } from 'lucide-react';

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="pt-40 text-center px-6">
        <h2 className="text-4xl mb-8">SEU CARRINHO ESTÁ VAZIO</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="brutalist-border px-8 py-4 font-black uppercase hover:bg-white hover:text-black transition-all"
        >
          Ir para a Loja
        </button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Mock order processing
      clearCart();
      navigate('/success');
    }
  };

  return (
    <div className="pt-32 min-h-screen pb-20 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-5xl md:text-7xl">FINALIZAR <span className="text-stroke">COMPRA</span></h1>
        <div className="flex gap-2">
          <div className={`w-3 h-3 brutalist-border ${step >= 1 ? 'bg-accent-red' : 'bg-transparent'}`}></div>
          <div className={`w-3 h-3 brutalist-border ${step >= 2 ? 'bg-accent-red' : 'bg-transparent'}`}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <Truck size={32} className="text-accent-yellow" />
                  <h2 className="text-3xl uppercase font-black">Detalhes de Envio</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="ENDEREÇO DE EMAIL" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                  />
                  <input 
                    required
                    type="text" 
                    name="name"
                    placeholder="NOME COMPLETO" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                  />
                  <input 
                    required
                    type="text" 
                    name="address"
                    placeholder="ENDEREÇO DE ENTREGA" 
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      type="text" 
                      name="city"
                      placeholder="CIDADE" 
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                    />
                    <input 
                      required
                      type="text" 
                      name="zip"
                      placeholder="CEP" 
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <CreditCard size={32} className="text-accent-yellow" />
                  <h2 className="text-3xl uppercase font-black">Método de Pagamento</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <input 
                    required
                    type="text" 
                    name="cardNumber"
                    placeholder="NÚMERO DO CARTÃO" 
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      type="text" 
                      name="expiry"
                      placeholder="MM/AA" 
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                    />
                    <input 
                      required
                      type="text" 
                      name="cvv"
                      placeholder="CVV" 
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full bg-secondary-bg brutalist-border p-4 font-black uppercase focus:bg-white focus:text-black outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="p-4 bg-accent-yellow/10 border-2 border-accent-yellow text-accent-yellow font-bold text-sm">
                  Este é um pagamento simulado seguro. Nenhuma transação real ocorrerá.
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-8">
              {step === 2 && (
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="p-4 brutalist-border hover:bg-white hover:text-black transition-all"
                >
                  <ArrowLeft size={24} />
                </button>
              )}
              <button 
                type="submit"
                className="flex-1 bg-white text-black py-4 text-xl font-black uppercase brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                {step === 1 ? 'Continuar para Pagamento' : 'Finalizar Compra'}
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-secondary-bg brutalist-border p-6 sticky top-32">
            <h3 className="text-2xl font-black uppercase mb-6 border-b-2 border-white/20 pb-4">Resumo do Pedido</h3>
            <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex gap-3">
                    <span className="font-black opacity-50">{item.quantity}x</span>
                    <span className="font-bold uppercase">{item.title}</span>
                  </div>
                  <span className="font-black">£{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t-2 border-white/20 pt-4">
              <div className="flex justify-between opacity-70 uppercase text-xs font-black">
                <span>Subtotal</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between opacity-70 uppercase text-xs font-black">
                <span>Frete</span>
                <span>GRÁTIS</span>
              </div>
              <div className="flex justify-between text-2xl font-black mt-4 pt-4 border-t-2 border-white">
                <span>TOTAL</span>
                <span className="text-accent-red">£{cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
