'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  // The Luxury Rainbow Gradient
  const luxuryGradient = "bg-gradient-to-r from-teal-300 via-indigo-400 via-purple-400 to-rose-300";

  return (
    // CHANGE: Switched to #0a0a0a to match the rest of the website's new theme
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
            className="absolute inset-0 bg-cover bg-center grayscale-[30%]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')" }} 
        />
        
        {/* Rich Tint: Gradient from Black (top) to Indigo (center) to Black (bottom) */}
        {/* This keeps the luxury color but blends perfectly into the next black section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-indigo-950/80 to-[#0a0a0a]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Top Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-teal-400/80 text-xs md:text-sm mb-8 font-medium drop-shadow-md"
        >
          Est. 2015 • Architecture & Design
        </motion.p>
        
        {/* Main Title - Rainbow Iridescent */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight text-white"
        >
          Crafting Spaces <br />
          <span className={`relative inline-block text-transparent bg-clip-text ${luxuryGradient} filter drop-shadow-[0_0_20px_rgba(129,140,248,0.4)] pb-2`}>
            Building Dreams
          </span>
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Functional Scroll Button */}
          <a 
            href="#portfolio"
            className="relative px-10 py-4 text-white font-bold rounded-full overflow-hidden group shadow-[0_10px_30px_-10px_rgba(167,139,250,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(167,139,250,0.7)] transition-shadow duration-500"
          >
            <div className={`absolute inset-0 ${luxuryGradient} opacity-90 group-hover:opacity-100 group-hover:blur-[2px] group-hover:scale-110 transition-all duration-500 ease-in-out`} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10" />
            <span className="relative z-20 uppercase tracking-[0.2em] text-xs font-bold">
              View Projects
            </span>
          </a>

          <a 
            href="#contact"
            className="px-10 py-4 text-indigo-100 border border-indigo-200/20 rounded-full hover:bg-white/5 hover:border-teal-400/40 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium backdrop-blur-sm"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
      
      {/* Seamless Fade into Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

    </section>
  );
}