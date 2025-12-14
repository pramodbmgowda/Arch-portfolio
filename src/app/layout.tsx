import type { Metadata, Viewport } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll'; // Import the new component

// FONTS
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ARCH | Premium Architecture',
  description: 'Luxury Architecture & Interior Design Portfolio',
};

// This fixes the white line on Mobile/Mac overscroll
export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} font-sans bg-[#0a0a0a] text-[#ededed]`}>
        <SmoothScroll /> {/* Logic runs here */}
        <Navbar />
        <main>{children}</main>
        <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm uppercase tracking-widest bg-[#0a0a0a]">
          © 2025 Arch Studio.
        </footer>
      </body>
    </html>
  );
}