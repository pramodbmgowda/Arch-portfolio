'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  // OPTIMIZATION: Added "&w=800" to request smaller images for smoother scrolling
  { id: 1, category: 'Interior', title: 'Modern Loft', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Exterior', title: 'The Glass House', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Commercial', title: 'Tech Hub Office', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Interior', title: 'Minimalist Kitchen', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Exterior', title: 'Lakeside Villa', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Residential', title: 'Urban Apartment', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Interior', 'Exterior', 'Commercial', 'Residential'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 md:gap-0">
          <div>
            <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4">
              Selected Works
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Featured Projects
            </h2>
          </div>
          
          <div className="w-full md:w-auto overflow-x-auto pb-2">
            <div className="flex gap-6 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="relative group pb-1 text-xs uppercase tracking-widest transition-all duration-300"
                >
                  <span className={`relative z-10 ${filter === cat ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                    {cat}
                  </span>
                  {filter === cat && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-teal-500"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer bg-[#111]"
              >
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  // Added sizes to help browser download smaller versions on mobile
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-teal-400 text-xs uppercase tracking-widest mb-2 font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-white font-serif text-2xl">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}