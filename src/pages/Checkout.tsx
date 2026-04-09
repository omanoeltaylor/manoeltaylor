import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Copy, ShoppingBag, Send } from 'lucide-react';
import storeConfig from '../content/settings/store.json';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    state: ''
  });

  const totalComFrete = cartTotal + storeConfig.shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(storeConfig.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const itemsText = cartItems.map(i => `${i.quantity}x - ${i.title} (R$ ${(i.price * i.quantity).toFixed(2)})`).join('\n');
    
    const message = `Olá! Gostaria de finalizar um pedido da loja online:

*ITENS:*
${itemsText}

Subtotal: R$ ${cartTotal.toFixed(2)}
Frete (Fixo): R$ ${storeConfig.shippingCost.toFixed(2)}
*TOTAL A PAGAR: R$ ${totalComFrete.toFixed(2)}*

*ENDEREÇO DE ENTREGA:*
Nome: ${formData.name}
Email: ${formData.email}
CPF: ${formData.cpf}
CEP: ${formData.cep}
Endereço: ${formData.address}, ${formData.number} ${formData.complement ? `- ${formData.complement}` : ''}
CIdade/UF: ${formData.city} / ${formData.state}

*Vou realizar o Pix agora e Enviar o comprovante!*`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodedMessage}`;
    
    // Clear cart since they are checking out
    clearCart();
    
    // Redirect to WP
    window.open(waUrl, '_blank');
    navigate('/shop');
  };

  if (cartItems.length === 0) {
    return (
      <div className="section-container section-padding min-h-[60vh] flex flex-col items-center justify-center pt-32">
        <ShoppingBag size={64} className="mb-6 opacity-30" />
        <h1 className="text-4xl font-black uppercase mb-8">Seu carrinho está vazio</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="brutalist-border px-8 py-4 font-black uppercase hover:bg-white hover:text-black transition-colors"
        >
          Voltar para a Loja
        </button>
      </div>
    );
  }

  return (
    <div className="section-container section-padding pt-32 pb-20 min-h-screen">
      <h1 className="text-title mb-12">CHECKOUT</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Formulário de Endereço */}
        <div className="lg:col-span-7 bg-secondary-bg p-6 md:p-10 border-4 border-white brutalist-shadow">
          <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
            <span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full text-xl">1</span>
            Seus Dados & Entrega
          </h2>
          
          <form id="checkout-form" onSubmit={handleWhatsAppCheckout} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2 opacity-80">Nome Completo</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2 opacity-80">E-mail</label>
                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2 opacity-80">CPF</label>
                <input required name="cpf" value={formData.cpf} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2 opacity-80">CEP</label>
                <input required name="cep" value={formData.cep} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
            </div>

            <div>
              <label className="block font-black uppercase text-sm mb-2 opacity-80">Endereço (Rua/Avenida)</label>
              <input required name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1">
                <label className="block font-black uppercase text-sm mb-2 opacity-80">Número</label>
                <input required name="number" value={formData.number} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
              <div className="col-span-2">
                <label className="block font-black uppercase text-sm mb-2 opacity-80">Complemento / Bairro</label>
                <input required name="complement" value={formData.complement} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2 opacity-80">Cidade</label>
                <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2 opacity-80">Estado (UF)</label>
                <input required name="state" value={formData.state} onChange={handleInputChange} type="text" maxLength={2} className="w-full bg-primary-bg brutalist-border p-3 text-white focus:outline-none focus:border-accent-red uppercase" />
              </div>
            </div>
          </form>
        </div>

        {/* Resumo do Pedido */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-white text-black p-6 md:p-8 brutalist-shadow-red relative z-10">
            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-xl">2</span>
              Resumo
            </h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b-4 border-black">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center font-bold">
                  <span>{item.quantity}x {item.title}</span>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6 font-bold text-lg opacity-80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete (Fixo Nacional)</span>
                <span>R$ {storeConfig.shippingCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8 pt-4 border-t-8 border-black">
              <span className="text-2xl font-black uppercase">Total</span>
              <span className="text-5xl md:text-6xl font-black text-accent-red leading-none">R$ {totalComFrete.toFixed(2)}</span>
            </div>

            <div className="bg-black text-white p-4 mb-8">
              <p className="font-bold uppercase text-sm mb-2 opacity-80">Chave Pix para pagamento:</p>
              <div className="flex items-center gap-2">
                <code className="bg-white/10 px-3 py-2 flex-1 break-all font-mono text-accent-yellow">{storeConfig.pixKey}</code>
                <button 
                  onClick={copyPixKey}
                  type="button" 
                  className="bg-accent-red p-2 hover:bg-white hover:text-black transition-colors"
                  title="Copiar Pix"
                >
                  <Copy size={20} />
                </button>
              </div>
              {copied && <p className="text-xs text-green-400 mt-2 font-bold uppercase">Copiado!</p>}
            </div>

            <button 
              type="submit"
              form="checkout-form"
              className="w-full bg-accent-red text-white py-5 text-xl lg:text-2xl font-black uppercase hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 brutalist-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
            >
              <Send size={24} />
              Enviar pelo WhatsApp
            </button>
            <p className="text-xs font-bold uppercase tracking-widest text-center mt-4 opacity-50">
              Você enviará o comprovante e endereço direto para o artista
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
