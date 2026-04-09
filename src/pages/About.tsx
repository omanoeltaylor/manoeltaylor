import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getAboutPage } from '../lib/content';

const About = () => {
  const data = getAboutPage();

  return (
    <div className="section-container section-padding min-h-screen pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
        {/* Background Large Text */}
        <div className="absolute -top-20 -left-20 opacity-5 pointer-events-none select-none">
          <h1 className="text-[30vw] leading-none text-stroke">{data.manifesto}</h1>
        </div>

        <div>
          <div className="relative">
            <h1 className="text-8xl md:text-[12vw] leading-[0.75] mb-4 flex flex-col">
              <span className="relative z-20">{data.title.split(' ')[0]}</span>
              <span className="text-accent-red mt-[-2vw] relative z-10">{data.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="absolute top-0 right-0 bg-accent-yellow text-black px-4 py-2 font-black text-2xl rotate-12 brutalist-shadow">
              ARTE É GUERRA
            </div>
          </div>
          
          <div className="border-8 border-white p-2 brutalist-shadow mt-12 relative lg:mb-12">
            <img 
              src={data.imageUrl} 
              alt={data.title} 
              className="w-full grayscale contrast-125 brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 font-black text-xl rotate-[-5deg] border-4 border-black">
              {data.badge}
            </div>
          </div>

          <div className="prose prose-invert prose-2xl max-w-none text-white leading-snug font-bold mt-12 tracking-tight">
            <ReactMarkdown>{data.body}</ReactMarkdown>
          </div>
        </div>

        <div className="h-full flex flex-col justify-end">
          <section className="bg-white text-black p-6 md:p-8 rotate-1 brutalist-shadow-red relative w-full lg:max-w-md ml-auto">
            <div className="absolute -top-4 -right-4 bg-accent-red text-white w-10 h-10 flex items-center justify-center font-black text-xl rotate-12">
              !
            </div>
            <h2 className="text-4xl md:text-5xl mb-8 leading-none uppercase font-black tracking-tighter">TRAJETÓRIA</h2>
            <ul className="space-y-6">
              {data.trajectory.map((item, idx) => (
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
