import React from 'react';
import { Mail, Instagram, Twitter, Download } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-container section-padding min-h-screen pb-20 overflow-hidden">
      <div className="relative mb-12 md:mb-20">
        <h1 className="text-6xl sm:text-8xl md:text-[15vw] leading-[0.7] tracking-tighter mb-4">CONTATO</h1>
        <div className="absolute top-1/2 right-0 bg-accent-red text-white px-4 md:px-6 py-1 md:py-2 font-black text-xl md:text-3xl -rotate-6 brutalist-shadow">
          DIGA OLÁ
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="space-y-10 md:space-y-16 mb-12 md:mb-20">
            <div className="group">
              <h2 className="text-xl md:text-3xl text-accent-yellow mb-2 md:mb-4 uppercase font-black tracking-tighter">GERAL</h2>
              <a href="mailto:hello@manoeltaylor.com" className="text-3xl md:text-6xl font-black hover:text-accent-red transition-colors break-all leading-none">
                HELLO@<br/>MANOELTAYLOR.COM
              </a>
            </div>
            <div className="group">
              <h2 className="text-xl md:text-3xl text-accent-yellow mb-2 md:mb-4 uppercase font-black tracking-tighter">IMPRENSA & PALESTRAS</h2>
              <a href="mailto:press@manoeltaylor.com" className="text-3xl md:text-6xl font-black hover:text-accent-red transition-colors break-all leading-none">
                PRESS@<br/>MANOELTAYLOR.COM
              </a>
            </div>
            <div>
              <h2 className="text-xl md:text-3xl text-accent-yellow mb-2 md:mb-4 uppercase font-black tracking-tighter">REDES SOCIAIS</h2>
              <div className="flex flex-wrap gap-4 md:gap-8 mt-2 md:mt-4">
                <a href="#" className="flex items-center gap-2 text-xl md:text-3xl font-black hover:text-accent-red transition-all hover:translate-x-2">
                  <Instagram size={32} /> INSTA
                </a>
                <a href="#" className="flex items-center gap-2 text-xl md:text-3xl font-black hover:text-accent-red transition-all hover:translate-x-2">
                  <Twitter size={32} /> TWITTER
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 border-4 md:border-8 border-white brutalist-shadow relative rotate-[-2deg] bg-white text-black">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-accent-red text-white p-1 md:p-2 text-xs md:text-base font-black rotate-[-12deg]">
              BAIXAR
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-none">PRESS KIT</h3>
            <p className="text-black font-bold mb-6 md:mb-8 max-w-xs uppercase leading-tight text-sm md:text-base">Fotos em alta resolução, bio e portfólio selecionado.</p>
            <button className="flex items-center gap-3 bg-black text-white px-6 md:px-10 py-4 md:py-5 font-black text-lg md:text-xl hover:bg-accent-red transition-all w-full justify-center">
              <Download size={20} /> BAIXAR .ZIP
            </button>
          </div>
        </div>

        <div className="bg-white text-black p-8 md:p-14 border-4 md:border-8 border-black brutalist-shadow-red relative">
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-accent-yellow text-black w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-black text-3xl md:text-5xl rotate-12 border-2 md:border-4 border-black">
            ?
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 md:mb-12 leading-[0.8] uppercase tracking-tighter italic">MANDA <br/>MENSAGEM</h2>
          <form className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest opacity-60">Nome *</label>
              <input type="text" className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-2 md:p-3 text-xl md:text-2xl font-black focus:border-accent-red outline-none transition-colors uppercase" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest opacity-60">E-mail *</label>
              <input type="email" className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-2 md:p-3 text-xl md:text-2xl font-black focus:border-accent-red outline-none transition-colors uppercase" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest opacity-60">Assunto</label>
              <select className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-2 md:p-3 text-xl md:text-2xl font-black focus:border-accent-red outline-none transition-colors uppercase appearance-none cursor-pointer">
                <option value="">Selecione um assunto</option>
                <option value="projeto">Projeto editorial (capa, quadrinho, ilustração)</option>
                <option value="palestra">Palestra ou mediação</option>
                <option value="parceria">Parceria ou patrocínio</option>
                <option value="imprensa">Imprensa</option>
                <option value="loja">Compra ou dúvida sobre a loja</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest opacity-60">Mensagem *</label>
              <textarea rows={3} className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-2 md:p-3 text-xl md:text-2xl font-black focus:border-accent-red outline-none transition-colors uppercase" required></textarea>
            </div>
            <button className="w-full py-4 md:py-6 bg-black text-white font-black text-xl md:text-3xl hover:bg-accent-red transition-all brutalist-shadow active:translate-y-2 active:shadow-none uppercase">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
