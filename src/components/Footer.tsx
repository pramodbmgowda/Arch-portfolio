export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-8 border-t border-stone-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} ARCH Studio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}