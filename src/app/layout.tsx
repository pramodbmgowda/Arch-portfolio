import type { Metadata, Viewport } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Destination Designs',
  description: 'Global Architecture & Design',

  icons: {
    icon: '/logo.svg', 
  },
};

// CRITICAL: Sets the browser window color to black
export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body className={`${manrope.variable} ${playfair.variable} font-sans bg-[#0a0a0a] text-[#ededed]`}>
        <SmoothScroll />
        <Navbar />
        <main className="relative z-10 bg-[#0a0a0a]">
          {children}
        </main>
        <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest bg-[#0a0a0a] relative z-10">
          © 2025 Destination Designs.
        </footer>
      </body>
    </html>
  );
}