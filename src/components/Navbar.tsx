'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          // FIX: Replaced 'border-b' with a 'shadow' that acts as an overlap seal.
          // shadow-[0_2px_0_#0a0a0a] creates a 2px solid black line BELOW the navbar.
          // This physically covers the white gap during the height transition.
          ? 'bg-[#0a0a0a] shadow-[0_2px_0_#0a0a0a] h-20' 
          : 'bg-transparent h-24'
      } flex items-center`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center w-full">
        
        {/* BRANDING */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <Image src="/logo.svg" alt="Destination Design" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg md:text-xl font-bold text-white tracking-widest leading-none">
                DESTINATION
              </span>
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase leading-none bg-gradient-to-r from-teal-200 via-teal-400 to-cyan-500 text-transparent bg-clip-text group-hover:brightness-125 transition-all duration-300">
                DESIGNS
              </span>
            </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-teal-400 transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] md:hidden flex flex-col items-center py-10 space-y-8 border-b border-white/5 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-serif text-white hover:text-teal-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}