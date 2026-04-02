
import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  return (
    <section id="work" className="bg-secondary-bg border-y-4 border-white">
      <div className="section-container section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-title">SELECTED <br /> <span className="text-stroke">WORKS</span></h2>
          <div className="max-w-md text-right">
            <p className="text-lg opacity-70 mb-4">
              A collection of comic projects, editorial illustrations, and world-building concepts.
            </p>
            <div className="h-1 w-full bg-accent-red"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative brutalist-border overflow-hidden bg-primary-bg mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white text-primary-bg px-3 py-1 text-label">
                  {project.year}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-accent-red text-label">{project.category}</span>
                  <h3 className="text-4xl mt-2 tracking-tight group-hover:text-accent-red transition-colors">{project.title}</h3>
                  <p className="mt-4 text-lg opacity-90 max-w-md leading-relaxed">{project.description}</p>
                </div>
                <button className="p-4 brutalist-border hover:bg-white hover:text-primary-bg transition-all">
                  <ExternalLink size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
