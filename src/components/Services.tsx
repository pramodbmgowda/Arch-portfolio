'use client';
import { PenTool, Home, Layers, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Home strokeWidth={1} className="w-10 h-10" />,
    title: 'Architecture Planning',
    desc: 'Comprehensive floor planning and structural blueprints optimized for aesthetics and utility.',
  },
  {
    icon: <PenTool strokeWidth={1} className="w-10 h-10" />,
    title: 'Interior Design',
    desc: 'Bespoke interior concepts that blend luxury with functionality for residential and commercial spaces.',
  },
  {
    icon: <Layers strokeWidth={1} className="w-10 h-10" />,
    title: '3D Elevation',
    desc: 'Photorealistic 3D rendering to visualize your project exterior before construction begins.',
  },
  {
    icon: <Ruler strokeWidth={1} className="w-10 h-10" />,
    title: 'Turnkey Construction',
    desc: 'End-to-end project execution, managing everything from sourcing materials to final handover.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a] text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4">
              What We Do
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Our Expertise
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="text-gray-400 mb-8 group-hover:text-teal-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}