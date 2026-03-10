import React from 'react';
import { LECTURES } from '../constants';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const Lectures = () => {
  return (
    <div className="pt-32 px-6 md:px-20 min-h-screen pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7">
          <div className="relative mb-20">
            <h1 className="text-8xl md:text-[15vw] leading-[0.7] tracking-tighter mb-8">PALESTRAS</h1>
            <div className="absolute -top-10 -left-10 text-[20vw] opacity-5 font-black pointer-events-none select-none text-stroke">
              VOZ
            </div>
          </div>
          
          <p className="text-3xl md:text-5xl font-black uppercase leading-[0.85] tracking-tighter mb-16 max-w-2xl">
            Manoel Taylor oferece <span className="text-accent-red">palestras e workshops</span> para universidades, instituições culturais e convenções de quadrinhos.
          </p>

          <div className="space-y-16">
            {LECTURES.map((lecture, idx) => (
              <div key={lecture.id} className="group relative border-l-8 border-accent-yellow pl-8 py-4 bg-secondary-bg p-8 brutalist-shadow-red hover:translate-x-4 transition-transform">
                <div className="absolute -top-4 -right-4 bg-white text-black w-12 h-12 flex items-center justify-center font-black text-2xl border-4 border-black">
                  {idx + 1}
                </div>
                <h2 className="text-4xl md:text-5xl mb-8 leading-none uppercase font-black">{lecture.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 text-white font-black uppercase">
                    <Users size={24} className="text-accent-red" />
                    <span>{lecture.audience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-black uppercase">
                    <Clock size={24} className="text-accent-red" />
                    <span>{lecture.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-black uppercase">
                    <MapPin size={24} className="text-accent-red" />
                    <span>{lecture.format}</span>
                  </div>
                </div>
                <p className="text-xl text-gray-400 font-bold uppercase leading-tight">
                  {lecture.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKING FORM */}
        <div className="lg:col-span-5">
          <div className="bg-white text-black p-10 md:p-16 brutalist-shadow-accent h-fit sticky top-32 rotate-1">
            <h2 className="text-6xl md:text-7xl font-black mb-12 leading-[0.8] uppercase">RESERVAR <br/><span className="text-accent-red">DATA</span></h2>
            <form className="space-y-8">
              <div>
                <label className="block font-black mb-2 uppercase text-xl">NOME DA INSTITUIÇÃO</label>
                <input type="text" className="w-full border-4 border-black p-4 focus:bg-accent-yellow transition-colors outline-none font-black text-xl uppercase" />
              </div>
              <div>
                <label className="block font-black mb-2 uppercase text-xl">TEMA DA PALESTRA</label>
                <select className="w-full border-4 border-black p-4 focus:bg-accent-yellow transition-colors outline-none appearance-none font-black text-xl uppercase">
                  {LECTURES.map(l => <option key={l.id}>{l.title}</option>)}
                  <option>TEMA PERSONALIZADO</option>
                </select>
              </div>
              <div>
                <label className="block font-black mb-2 uppercase text-xl">MENSAGEM</label>
                <textarea rows={4} className="w-full border-4 border-black p-4 focus:bg-accent-yellow transition-colors outline-none font-black text-xl uppercase"></textarea>
              </div>
              <button className="w-full py-8 bg-black text-white font-black text-3xl hover:bg-accent-red transition-all brutalist-shadow active:translate-y-2 active:shadow-none">
                ENVIAR PEDIDO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
