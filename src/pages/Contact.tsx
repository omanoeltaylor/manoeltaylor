import React from 'react';
import { Mail, Instagram, Twitter, Download } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 md:pt-32 min-h-screen pb-20 overflow-hidden">
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

        <div className="bg-white text-black p-8 md:p-16 border-4 md:border-8 border-black brutalist-shadow-red relative">
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-accent-yellow text-black w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center font-black text-3xl md:text-5xl rotate-12 border-2 md:border-4 border-black">
            ?
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-12 leading-[0.8] uppercase">ENVIAR <br/>MENSAGEM</h2>
          <form className="space-y-6 md:space-y-10">
            <div className="relative">
              <input type="text" placeholder="NOME" className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-3 md:p-4 text-xl md:text-3xl font-black focus:border-accent-red outline-none transition-colors placeholder:text-gray-400 uppercase" />
            </div>
            <div className="relative">
              <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-3 md:p-4 text-xl md:text-3xl font-black focus:border-accent-red outline-none transition-colors placeholder:text-gray-400 uppercase" />
            </div>
            <div className="relative">
              <textarea rows={4} placeholder="MENSAGEM" className="w-full bg-transparent border-b-4 md:border-b-8 border-black p-3 md:p-4 text-xl md:text-3xl font-black focus:border-accent-red outline-none transition-colors placeholder:text-gray-400 uppercase"></textarea>
            </div>
            <button className="w-full py-4 md:py-8 bg-black text-white font-black text-xl md:text-3xl hover:bg-accent-red transition-all brutalist-shadow active:translate-y-2 active:shadow-none">
              ENVIAR AGORA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
