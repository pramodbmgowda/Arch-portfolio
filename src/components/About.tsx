'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-stone-950 text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative aspect-[3/4]"
        >
          <div className="absolute inset-4 border border-stone-700 z-0 translate-x-4 translate-y-4" />
          <Image 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
            alt="Architectural Sketch"
            fill
            className="object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <h4 className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-6">Our Philosophy</h4>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8">
            Designing the <span className="text-stone-500 italic">future</span>, <br/>
            Preserving the past.
          </h2>
          
          <div className="space-y-6 text-stone-400 font-light leading-relaxed">
            <p>
              Founded in 2015, ARCH is an award-winning firm dedicated to the art of sustainable luxury. We believe that great architecture is more than just buildings—it is about how people experience spaces.
            </p>
            <p>
              From modern turnkey construction to heritage restoration, our team brings passion, precision, and a unique perspective to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 border-t border-stone-800 pt-10 mt-10">
            <div>
              <span className="block text-4xl font-serif text-white">150+</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Projects</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">12</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Awards</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">100%</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Success</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}