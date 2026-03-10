
import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Video, Palette, Download } from 'lucide-react';

export const Learn: React.FC = () => {
  const resources = [
    {
      title: "Comic Page Layout",
      type: "PDF Guide",
      icon: <BookOpen size={32} />,
      desc: "Master the flow of visual storytelling and panel composition.",
      color: "bg-blue-600"
    },
    {
      title: "Digital Inking Process",
      type: "Video Workshop",
      icon: <Video size={32} />,
      desc: "Watch my full process from rough sketch to finished inks.",
      color: "bg-accent-red"
    },
    {
      title: "Color Theory for Noir",
      type: "Article",
      icon: <Palette size={32} />,
      desc: "How to use limited palettes to create intense atmosphere.",
      color: "bg-accent-yellow"
    }
  ];

  return (
    <section id="learn" className="py-24 bg-secondary-bg border-y-4 border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-7xl md:text-9xl mb-8">LEARN <br /> <span className="text-stroke">THE CRAFT</span></h2>
            <p className="text-xl opacity-80 mb-12">
              I believe in sharing knowledge. Here you'll find resources, 
              tutorials, and behind-the-scenes looks at my creative process. 
              Whether you're a beginner or a pro, there's always something new to explore.
            </p>
            <button className="brutalist-border px-10 py-5 text-xl font-black uppercase hover:bg-white hover:text-primary-bg transition-all flex items-center gap-4">
              <Download size={24} />
              Download Free Starter Kit
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <motion.div
                key={i}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 brutalist-border bg-primary-bg hover:brutalist-shadow transition-all group cursor-pointer"
              >
                <div className={`${res.color} w-16 h-16 flex items-center justify-center brutalist-border mb-6 group-hover:rotate-12 transition-transform`}>
                  {res.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest opacity-50">{res.type}</span>
                <h3 className="text-3xl mt-2 mb-4">{res.title}</h3>
                <p className="opacity-70">{res.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
