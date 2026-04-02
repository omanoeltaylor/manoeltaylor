import React from 'react';
import { getProjects } from '../lib/content';

const PROJECTS = getProjects();

const Projects = () => {
  return (
    <div className="section-container section-padding min-h-screen pb-20 overflow-hidden">
      <div className="relative mb-20">
        <h1 className="text-8xl md:text-[15vw] leading-[0.7] tracking-tighter mb-4">PROJETOS</h1>
        <div className="absolute top-1/2 right-0 bg-accent-yellow text-black px-6 py-2 font-black text-3xl rotate-6 brutalist-shadow">
          INSTITUCIONAL
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className={`group relative ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
            <div className="relative mb-8 border-8 border-white brutalist-shadow overflow-hidden rotate-[-1deg] group-hover:rotate-0 transition-transform duration-500">
              <img src={project.imageUrl} alt={project.title} className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-accent-red text-white px-6 py-2 font-black text-2xl brutalist-shadow">{project.year}</div>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl mb-2 group-hover:text-accent-red transition-colors leading-[0.8] uppercase font-black">{project.title}</h2>
              <h3 className="text-3xl text-accent-yellow mb-6 uppercase font-black tracking-tighter">{project.institution}</h3>
              <p className="text-xl text-white font-bold leading-tight uppercase max-w-xl">{project.description}</p>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[15vw] opacity-5 font-black pointer-events-none select-none text-stroke">0{idx + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
