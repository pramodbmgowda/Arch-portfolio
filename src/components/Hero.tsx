'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const luxuryGradient = "bg-gradient-to-r from-teal-200 via-teal-400 to-cyan-500";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] -mt-1 pt-1">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 select-none">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
          alt="Destination Design Architecture"
          fill
          priority
          quality={85}
          className="object-cover object-center grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-indigo-950/40 to-[#0a0a0a] opacity-90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-teal-400/80 text-xs md:text-sm mb-8 font-medium drop-shadow-md"
        >
          {/* UPDATED: REAL ESTABLISHMENT YEAR */}
          Est. 2003 • Over 200+ Projects Completed
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight text-white"
        >
          Your Vision. <br />
          <span className={`relative inline-block text-transparent bg-clip-text ${luxuryGradient} filter drop-shadow-[0_0_20px_rgba(45,212,191,0.3)] pb-2`}>
            Our Destination.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#portfolio" className="relative px-10 py-4 text-black font-bold rounded-full overflow-hidden group shadow-[0_10px_30px_-10px_rgba(45,212,191,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.6)] transition-shadow duration-500">
            <div className={`absolute inset-0 ${luxuryGradient} opacity-100 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500 ease-in-out`} />
            <span className="relative z-20 uppercase tracking-[0.2em] text-xs font-bold text-[#0a0a0a]">View Projects</span>
          </a>

          <a href="#contact" className="px-10 py-4 text-teal-100 border border-teal-500/30 rounded-full hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium backdrop-blur-sm">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}