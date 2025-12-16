'use client';
import { motion } from 'framer-motion';
import { Award, BookOpen, Newspaper, Globe, ArrowUpRight, Star, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Who We Are
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Beyond Architecture. <br />
            <span className="text-gray-600">Building Legacy.</span>
          </h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1: THE STORY (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-10 bg-[#111] border border-white/5 rounded-2xl flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Leaf className="w-32 h-32 text-teal-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6">
              Est. 2003: The Intersection of <br/>
              <span className="text-teal-400">Heritage & Innovation.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
              Destination Design isn't just a firm; it's a philosophy. Specializing in <strong>Green Design</strong>, we reuse, rebuild, and revitalize. We blend the ancient wisdom of Chettinad craftsmanship with the precision of modern industrial architecture.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                Eco-Friendly
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                Heritage Restoration
              </div>
            </div>
          </motion.div>

          {/* CARD 2: THE BOOK (Tall & Vertical) - "The Apple Card Style" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:row-span-2 bg-gradient-to-b from-teal-900/20 to-[#111] border border-teal-500/20 rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-teal-500/50 transition-colors"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-teal-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 mb-6 rounded-full bg-teal-500 text-black text-[10px] font-bold uppercase tracking-widest">
                Best Seller
              </span>
              
              {/* Abstract Book Cover Representation */}
              <div className="w-32 h-48 mx-auto mb-8 bg-gray-900 border border-white/10 shadow-2xl flex items-center justify-center relative transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-white/20" />
                <BookOpen className="w-10 h-10 text-teal-500 opacity-80" />
                <div className="absolute bottom-4 text-[6px] uppercase tracking-widest text-gray-500">Destination Design</div>
              </div>

              <h3 className="text-2xl font-serif text-white mb-2">
                Chettinad In Your Home
              </h3>
              <p className="text-gray-400 text-xs mb-8 leading-relaxed">
                Our definitive guide to adapting heritage design. <br/>
                <span className="text-teal-400 mt-2 block">Feat. in Indian Express</span>
              </p>

              <Link 
                href="#" 
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-teal-400 transition-colors rounded-lg flex items-center justify-center gap-2"
              >
                Buy Now <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 3: AWARDS (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-[#111] border border-white/5 rounded-2xl hover:bg-[#151515] transition-colors group"
          >
            <Award className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-serif text-lg">Golden Aim Award</h4>
            <p className="text-gray-500 text-xs mt-2">Winner: Best Design Heritage Style (2021 & 2023)</p>
          </motion.div>

          {/* CARD 4: MEDIA FEATURE (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 bg-[#111] border border-white/5 rounded-2xl hover:bg-[#151515] transition-colors group"
          >
            <Newspaper className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-serif text-lg">Deccan Herald</h4>
            <p className="text-gray-500 text-xs mt-2">Featured for unique Heritage Style integration.</p>
          </motion.div>

           {/* CARD 5: STATS (Wide) */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-between group hover:border-white/10 transition-colors"
          >
            <div>
              <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-1">Project Milestone</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-serif text-white group-hover:text-teal-400 transition-colors">200+</span>
                <span className="text-gray-500 text-sm">Completed Projects</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}