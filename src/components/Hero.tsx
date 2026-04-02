
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container section-padding grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        <div className="md:col-span-8 z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-title mb-4">
              VISUAL <br />
              <span className="text-stroke">NARRATIVE</span> <br />
              <span className="red-paint-stroke">ANARCHY</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl max-w-xl font-medium mt-8 border-l-4 border-accent-red pl-6"
          >
            Manoel Taylor is an illustrator and comics artist based in London, 
            specializing in gritty sci-fi, architectural decay, and the 
            intersection of humanity and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-4"
          >
            <button className="bg-white text-primary-bg px-8 py-4 text-xl font-black uppercase brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              View Portfolio
            </button>
            <button className="border-4 border-white px-8 py-4 text-xl font-black uppercase hover:bg-white hover:text-primary-bg transition-all">
              Shop Prints
            </button>
          </motion.div>
        </div>

        <div className="md:col-span-4 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
            animate={{ scale: 1, opacity: 1, rotate: -5 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="brutalist-border brutalist-shadow-red overflow-hidden aspect-[3/4] bg-secondary-bg"
          >
            <img 
              src="https://picsum.photos/seed/manoel/800/1200" 
              alt="Manoel Taylor Artwork" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="absolute -bottom-10 -left-10 hidden md:block">
            <div className="bg-accent-red p-6 brutalist-border rotate-12">
              <ArrowDownRight size={48} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-white text-primary-bg py-4 overflow-hidden border-t-4 border-white">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-2xl font-black uppercase mx-8">
              Comics • Illustration • Concept Art • Education • Comics • Illustration • Concept Art • Education •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
