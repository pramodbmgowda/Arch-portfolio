'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  // Defining the luxury gradient here to ensure consistency across text and buttons
  // This uses sophisticated teal, deep indigo, soft amethyst, and a hint of rose gold.
  const luxuryGradient = "bg-gradient-to-r from-teal-300 via-indigo-400 via-purple-400 to-rose-300";

  return (
    // Changed base bg-gray-900 to bg-indigo-950 for a richer deep tone
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-indigo-950">
      
      {/* 1. Background Image (Darkened with tinted overlay) */}
      <div 
        className="absolute inset-0 z-0"
      >
        <div 
            className="absolute inset-0 bg-cover bg-center grayscale-[30%]" // Slight grayscale for sophistication
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')" }} 
        />
        {/* Luxury Tint Overlay: Instead of pure black, use a very deep indigo tint to enrich the scene */}
        <div className="absolute inset-0 bg-indigo-950/80 mix-blend-multiply" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Top Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-indigo-200/70 text-xs md:text-sm mb-8 font-medium"
        >
          Est. 2015 • Architecture & Design
        </motion.p>
        
        {/* Main Title with Luxury Iridescent Text */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Elegant easing function
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight text-white"
        >
          Crafting Spaces <br />
          {/* LUXURY STYLING HERE: 
             1. Use the new luxury gradient palette.
             2. Add a subtle drop-shadow filter BEFORE clipping to create a glowing glass effect.
          */}
          <span className={`relative inline-block text-transparent bg-clip-text ${luxuryGradient} filter drop-shadow-[0_0_15px_rgba(167,139,250,0.3)] pb-2`}>
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
          {/* Luxury Button */}
          <button className="relative px-10 py-4 text-white font-bold rounded-full overflow-hidden group shadow-[0_10px_30px_-10px_rgba(167,139,250,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(167,139,250,0.7)] transition-shadow duration-500">
            {/* The Gradient Background with blur shimmer effect on hover */}
            <div className={`absolute inset-0 ${luxuryGradient} opacity-90 group-hover:opacity-100 group-hover:blur-[2px] group-hover:scale-110 transition-all duration-500 ease-in-out`} />
            
            {/* Subtle shimmering overlay layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10" />

            {/* The Text */}
            <span className="relative z-20 uppercase tracking-[0.2em] text-xs font-bold">
              View Projects
            </span>
          </button>

          {/* Secondary Button - Refined */}
          <button className="px-10 py-4 text-indigo-100 border border-indigo-200/20 rounded-full hover:bg-white/5 hover:border-indigo-200/40 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium backdrop-blur-sm">
            Contact Us
          </button>
        </motion.div>
      </div>
      
      {/* Decorative Luxury Glow at bottom */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-to-t from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

    </section>
  );
}