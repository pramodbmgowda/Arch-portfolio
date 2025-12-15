'use client';
import { motion } from 'framer-motion';
import { Award, BookOpen, Newspaper, Globe } from 'lucide-react';

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Golden Aim Award",
    desc: "Winner: Best Design Heritage Style (2021 & 2023)."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-teal-400" />,
    title: "Published Authors",
    desc: "Published 'Chettinad in Your Home'. Received a special mention in The Indian Express."
  },
  {
    icon: <Newspaper className="w-6 h-6 text-teal-400" />,
    title: "Deccan Herald Feature",
    desc: "Featured for our unique approach to incorporating Heritage Style designs into modern works."
  },
  {
    icon: <Globe className="w-6 h-6 text-teal-400" />,
    title: "Online Recognition",
    desc: "Featured in multiple online design magazines and blogs for our Chettinad design adaptations."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: Text Content */}
          <div className="lg:w-1/2">
            <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
              Our Legacy
            </h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Bridging Heritage & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-500">
                Modern Innovation.
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Since 2003, Destination Design has stood at the intersection of tradition and modernity. Specializing in <strong>Green Design</strong>, we don't just build; we sustain. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              From our acclaimed work in Chettinad-style interiors to cutting-edge industrial retail spaces, our philosophy is simple: <strong>Reuse, Rebuild, and Revitalize.</strong> We take pride in using recycled materials to create eco-friendly homes that carry the soul of the past into the future.
            </p>
          </div>

          {/* RIGHT: Grid of Achievements */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#111] border border-white/5 hover:border-teal-500/30 transition-colors group"
              >
                <div className="mb-4 p-3 bg-black/50 w-fit rounded-full border border-white/10 group-hover:border-teal-500/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}