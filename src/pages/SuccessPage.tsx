
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

const SuccessPage = () => {
  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div className="pt-40 min-h-screen flex flex-col items-center justify-center text-center pb-20">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <CheckCircle size={120} className="text-accent-red mb-8 mx-auto" />
      </motion.div>

      <h1 className="text-6xl md:text-9xl mb-4">OBRIGADO!</h1>
      <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8">
        Seu pedido <span className="text-accent-red">#{orderNumber}</span> foi recebido.
      </p>
      
      <div className="max-w-xl bg-secondary-bg brutalist-border p-8 mb-12 text-left">
        <p className="text-lg mb-6 opacity-80">
          Enviamos um e-mail de confirmação para o seu endereço. Suas impressões serão enviadas em 3 a 5 dias úteis. 
          Fique de olho na sua caixa de entrada para detalhes de rastreamento.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            to="/shop" 
            className="flex-1 bg-white text-black py-4 px-6 font-black uppercase text-center brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            Voltar para a Loja <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-black uppercase tracking-widest text-sm opacity-50">Siga o caos</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="p-4 brutalist-border hover:bg-white hover:text-black transition-all"><Instagram /></a>
          <a href="#" className="p-4 brutalist-border hover:bg-white hover:text-black transition-all"><Twitter /></a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
