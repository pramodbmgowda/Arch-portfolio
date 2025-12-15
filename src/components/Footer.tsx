'use client';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-500 py-12 border-t border-white/5 relative overflow-hidden z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest">
        
        {/* Branding & Copyright */}
        <div className="text-center md:text-left">
          <h5 className="text-white font-bold mb-2">Destination Design</h5>
          <p className="hover:text-gray-400 transition-colors duration-300 cursor-default">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-8 font-bold">
          <a 
            href="https://www.instagram.com/destinationdesignsindia?igsh=Y3I4Y3lwZnR4bWNv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          
          <a href="#" className="hover:text-teal-400 transition-colors duration-300">
            LinkedIn
          </a>
          
          <a href="#" className="hover:text-teal-400 transition-colors duration-300">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}