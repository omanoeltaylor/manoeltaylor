import React from 'react';

const About = () => {
  return (
    <div className="pt-32 px-6 md:px-20 min-h-screen pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
        {/* Background Large Text */}
        <div className="absolute -top-20 -left-20 opacity-5 pointer-events-none select-none">
          <h1 className="text-[30vw] leading-none text-stroke">MANIFESTO</h1>
        </div>

        <div className="sticky top-32 z-10">
          <div className="relative">
            <h1 className="text-8xl md:text-[12vw] leading-[0.75] mb-4 flex flex-col">
              <span className="relative z-20">MANOEL</span>
              <span className="text-accent-red mt-[-2vw] relative z-10">TAYLOR</span>
            </h1>
            <div className="absolute top-0 right-0 bg-accent-yellow text-black px-4 py-2 font-black text-2xl rotate-12 brutalist-shadow">
              ARTE É GUERRA
            </div>
          </div>
          
          <div className="border-8 border-white p-2 brutalist-shadow mt-12 relative">
            <img 
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800" 
              alt="Manoel Taylor" 
              className="w-full grayscale contrast-125 brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 font-black text-xl rotate-[-5deg] border-4 border-black">
              DESDE 1994
            </div>
          </div>
        </div>

        <div className="space-y-24 relative z-10">
          <section className="relative">
            <h2 className="text-6xl md:text-8xl mb-12 flex items-center gap-4">
              <span className="red-paint-stroke">BIO</span>
              <span className="text-2xl font-mono opacity-50">/01</span>
            </h2>
            <div className="prose prose-invert prose-2xl max-w-none text-white leading-[1.1] tracking-tight uppercase font-black">
              <p className="mb-8">
                Manoel Taylor não é apenas um ilustrador. É um <span className="text-accent-yellow">terrorista visual</span> operando nas fronteiras da cultura pop e do comentário social.
              </p>
              <p>
                Nascido do asfalto quente e da cultura de fanzines xerocados, Taylor destila a urgência das ruas em composições brutais que desafiam o olhar corporativo.
              </p>
            </div>
          </section>

          <section className="bg-white text-black p-8 md:p-16 rotate-1 brutalist-shadow-red relative">
            <div className="absolute -top-10 -right-10 bg-accent-red text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-4xl rotate-12">
              !
            </div>
            <h2 className="text-6xl md:text-7xl mb-12 leading-none">TRAJETÓRIA & <br/>CICATRIZES</h2>
            <ul className="space-y-8">
              {[
                { year: '2023', event: 'Melhor HQ Indie - CCXP Awards' },
                { year: '2022', event: 'Exposição Individual: "Linhas Brutais" - SP Art Gallery' },
                { year: '2021', event: 'Bienal Internacional de Ilustração - Finalista' },
                { year: '2020', event: 'Medalha de Mérito Cultural' }
              ].map(item => (
                <li key={item.event} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b-4 border-black pb-4 group cursor-default">
                  <span className="text-4xl font-black text-accent-red group-hover:scale-110 transition-transform inline-block">{item.year}</span>
                  <span className="text-2xl font-black uppercase leading-none">{item.event}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="relative py-20">
            <div className="absolute inset-0 bg-accent-red opacity-10 -rotate-2 scale-110"></div>
            <h2 className="text-5xl md:text-6xl mb-8 relative z-10">MISSÃO</h2>
            <p className="text-4xl md:text-7xl leading-[0.85] font-black uppercase tracking-tighter relative z-10">
              "A ARTE QUE NÃO <span className="text-stroke">INCOMODA</span> É APENAS DECORAÇÃO. MEU TRABALHO É <span className="text-accent-red">INCÊNDIO</span>."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
