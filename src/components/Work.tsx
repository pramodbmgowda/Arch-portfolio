'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'The Concrete House', loc: 'Berlin', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Kyoto Pavilion', loc: 'Japan', img: 'https://images.unsplash.com/photo-1598528859428-144d15654c6e?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Nordic Museum', loc: 'Oslo', img: 'https://images.unsplash.com/photo-1470723710355-171b443c6589?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Desert Villa', loc: 'Dubai', img: 'https://images.unsplash.com/photo-1511818966892-d5567a464c44?auto=format&fit=crop&q=80' },
];

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Track mouse for floating image
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate mouse position relative to container
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section 
      id="work" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 px-6 md:px-12 bg-indigo-950 min-h-screen overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mb-20 border-b border-indigo-200/10 pb-4">
        {/* Teal Accent Header */}
        <h2 className="text-xs uppercase tracking-[0.3em] text-teal-300/80 drop-shadow-[0_0_5px_rgba(94,234,212,0.3)]">
          Selected Works (04)
        </h2>
      </div>

      <div className="relative z-10">
        {projects.map((project) => (
          <div 
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group flex justify-between items-baseline border-b border-indigo-200/10 py-10 cursor-pointer transition-all duration-500 hover:border-indigo-200/30 hover:bg-white/5 px-4"
          >
            {/* Title - Turns into Luxury Gradient on Hover */}
            <h3 className="font-serif text-4xl md:text-6xl text-white transition-all duration-500 group-hover:pl-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-200 group-hover:via-indigo-200 group-hover:to-rose-200">
              {project.title}
            </h3>
            
            <span className="font-sans text-xs uppercase tracking-widest text-indigo-300/60 group-hover:text-white transition-colors duration-300">
              {project.loc}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Reveal Image with Luxury Borders */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePos.x - 200, 
              y: mousePos.y - 150 
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-none absolute top-0 left-0 w-[400px] h-[300px] z-20 hidden md:block"
          >
            {projects.map(p => p.id === hoveredProject && (
              <div key={p.id} className="relative w-full h-full p-2 bg-indigo-950/50 backdrop-blur-sm border border-indigo-200/20 shadow-[0_0_30px_rgba(129,140,248,0.2)]">
                <Image 
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                {/* Image Overlay tint */}
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay" />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}