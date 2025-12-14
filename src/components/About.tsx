'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] text-white relative">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative aspect-[3/4]"
        >
          <div className="absolute inset-4 border border-teal-500/20 z-0 translate-x-4 translate-y-4" />
          <div className="relative z-10 w-full h-full bg-[#111] overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
                alt="Architectural Sketch"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-6">
            Our Philosophy
          </h4>
          
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8">
            Designing the <span className="text-gray-500 italic font-light">future</span>, <br/>
            Preserving the past.
          </h2>
          
          <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              Founded in 2015, ARCH is an award-winning firm dedicated to the art of sustainable luxury. We believe that great architecture is more than just buildings—it is about how people experience spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10 mt-10">
            <div>
              <span className="block text-4xl font-serif text-white">150+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 block">Projects</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">12</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 block">Awards</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 block">Success</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}