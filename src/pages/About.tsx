import React from 'react';

const About = () => {
  return (
    <div className="section-container section-padding min-h-screen pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
        {/* Background Large Text */}
        <div className="absolute -top-20 -left-20 opacity-5 pointer-events-none select-none">
          <h1 className="text-[30vw] leading-none text-stroke">MANIFESTO</h1>
        </div>

        <div>
          <div className="relative">
            <h1 className="text-8xl md:text-[12vw] leading-[0.75] mb-4 flex flex-col">
              <span className="relative z-20">MANOEL</span>
              <span className="text-accent-red mt-[-2vw] relative z-10">TAYLOR</span>
            </h1>
            <div className="absolute top-0 right-0 bg-accent-yellow text-black px-4 py-2 font-black text-2xl rotate-12 brutalist-shadow">
              ARTE É GUERRA
            </div>
          </div>
          
          <div className="border-8 border-white p-2 brutalist-shadow mt-12 relative lg:mb-12">
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

          <div className="prose prose-invert prose-2xl max-w-none text-white leading-snug font-bold mt-12 tracking-tight">
            <p className="mb-6">
              Taylor tem 27 anos e é ilustrador, quadrinista e capista de Caxias do Sul. Pesquisador autodidata de quadrinhos, ganhou reconhecimento por sempre representar personagens e personalidades negras em suas produções — não como escolha editorial, mas como convicção.
            </p>
            <p className="mb-6">
              O trabalho cobre capas, quadrinhos autorais, ilustrações e fan arts com foco na cultura negra. Entre os projetos: Noite sem Luar, Sonhos Distantes, Banho Digital, Enquanto Sonho, Gibi X e Desumanos. A colorização é desenvolvida com equipe; a direção de cores é inteiramente do artista.
            </p>
            <p>
              Além do traço, Taylor é criador de conteúdo. Desenvolve artigos e vídeos que conectam entretenimento pop a teoria crítica, história e política — traduzindo pensadores como Frantz Fanon, W.E.B. Du Bois, Ângela Davis, Sueli Carneiro, Luiz Gama e Malcolm X para dentro da linguagem dos quadrinhos.
            </p>
          </div>
        </div>

        <div className="h-full flex flex-col justify-end">
          <section className="bg-white text-black p-6 md:p-8 rotate-1 brutalist-shadow-red relative w-full lg:max-w-md ml-auto">
            <div className="absolute -top-4 -right-4 bg-accent-red text-white w-10 h-10 flex items-center justify-center font-black text-xl rotate-12">
              !
            </div>
            <h2 className="text-4xl md:text-5xl mb-8 leading-none uppercase font-black tracking-tighter">TRAJETÓRIA</h2>
            <ul className="space-y-6">
              {[
                { year: '2018', title: 'Primeiras ilustrações assinadas como Manoel Taylor.', desc: 'Início do repertório de personagens negros em contextos de super-heróis.' },
                { year: '2022', title: 'Mediação · 36ª Feira do Livro de Bento Gonçalves', desc: 'Papo sobre quadrinhos para um dos maiores eventos literários do Sul.' },
                { year: '2022', title: '"Quadrinhos para Abrir a Consciência" · Biblioteca Pública do Estado — Porto Alegre', desc: 'Mediação sobre representatividade e leitura crítica.' },
                { year: '2023', title: 'Perifacon 2023 · Expositor', desc: 'Selecionado entre mais de 500 inscritos. Releitura de personagens clássicos com exaltação à cultura negra.' },
                { year: '2023', title: 'SENAC RS · Palestra', desc: '"Protagonismo negro nos quadrinhos" — para estudantes de design e artes.' },
                { year: '2023', title: 'UNIFTEC · Palestra', desc: 'Aula sobre expressão gráfica para o Centro Universitário.' },
                { year: '2023', title: 'Semana da Arte e Estética · FSG', desc: 'Palestra sobre processo criativo e representatividade.' },
                { year: '2024', title: 'Perifacon 2024 · Arte Exclusiva', desc: 'Criação da arte oficial do evento — Super Choque reinterpretado.' },
              ].map((item, idx) => (
                <li key={idx} className="flex flex-col gap-1 border-b-2 border-black pb-4 last:border-0 group cursor-default">
                  <span className="text-xl font-black text-accent-red">{item.year}</span>
                  <div className="space-y-1">
                    <span className="text-base md:text-lg font-black uppercase leading-none tracking-tight block">{item.title}</span>
                    <span className="text-xs font-bold uppercase leading-tight opacity-70 block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
