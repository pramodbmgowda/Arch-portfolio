export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-500 py-12 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
        
        {/* Copyright */}
        <p className="hover:text-white transition-colors duration-300 cursor-default">
          &copy; {new Date().getFullYear()} ARCH Studio. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-8 mt-6 md:mt-0 font-bold">
          <a href="#" className="hover:text-teal-400 transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-300">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}