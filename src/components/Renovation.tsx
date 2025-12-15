'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, RefreshCcw } from 'lucide-react';

// DATA: Renovation Services (Updated based on your Green Design specialization)
const services = [
  {
    title: "Green Renovation",
    desc: "We specialize in eco-friendly design, prioritizing energy efficiency and sustainable building practices in every remodel.",
  },
  {
    title: "Material Reuse & Rebuilds",
    desc: "Our signature approach involves rebuilding homes by reclaiming and reusing materials from their previous form.",
  },
  {
    title: "Complete Transformation",
    desc: "From structural reinforcements to aesthetic overhauls, we breathe new life into existing properties while reducing waste.",
  },
];

export default function Renovation() {
  const [view, setView] = useState<'before' | 'after'>('before');

  // IMAGES: Ensure these are set in your public folder
  const beforeImage = "/before.png"; 
  const afterImage = "/after.png";

  return (
    <section id="renovation" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-900/30 to-transparent" />

      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            {/* UPDATED TITLE: Matches your Eco-Friendly Brand */}
            <h4 className="text-teal-400 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
              Sustainable Revitalization
            </h4>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Rebuild. Reuse. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-cyan-500">
                Reimagine.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed text-right md:text-left">
            We don't just renovate; we practice responsible architecture. By reusing materials from the original structure, we preserve the soul of the home while delivering a modern, eco-friendly living space.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Transformation Engine */}
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#111] border border-white/5 shadow-2xl">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={view}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={view === 'after' ? afterImage : beforeImage}
                    alt={view === 'after' ? "Completed Green Renovation" : "Original Structure"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 ${view === 'before' ? 'opacity-60' : 'opacity-30'}`} />
                </motion.div>
              </AnimatePresence>

              {/* BADGE */}
              <div className={`absolute top-6 left-6 px-4 py-2 backdrop-blur-md border border-white/10 text-xs uppercase tracking-widest text-white font-bold rounded-full z-20 ${view === 'before' ? 'bg-yellow-900/40' : 'bg-teal-900/40'}`}>
                {view === 'after' ? 'Eco-Modern Finish' : 'Existing Structure'}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="absolute -bottom-6 right-6 flex gap-0 bg-[#0a0a0a] border border-white/10 rounded-full p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-30">
              <button 
                onClick={() => setView('before')}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${view === 'before' ? 'bg-white text-black font-bold shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                Before
              </button>
              <button 
                onClick={() => setView('after')}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${view === 'after' ? 'bg-teal-500 text-black font-bold shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                After
              </button>
            </div>
          </div>

          {/* RIGHT: Services */}
          <div className="flex flex-col gap-10 mt-8 lg:mt-0">
            {services.map((service, index) => (
              <div key={index} className="group border-l-2 border-white/10 pl-8 hover:border-teal-500 transition-colors duration-500 cursor-default">
                <h3 className="text-xl text-white font-serif mb-2 flex items-center gap-3">
                  {service.title}
                  <ArrowRight className="w-4 h-4 text-teal-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}

            <div className="pt-8">
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 border border-teal-500/30 text-teal-400 uppercase tracking-[0.2em] text-xs font-bold hover:bg-teal-500 hover:text-black transition-all duration-300 backdrop-blur-sm">
                <RefreshCcw className="w-4 h-4" />
                Start Your Rebuild
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}