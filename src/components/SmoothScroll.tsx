'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smooth, responsive feel
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    
    // MEMORY LEAK FIX:
    // We must save the "ID" of the animation frame so we can cancel it later.
    let animationFrameId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    
    animationFrameId = requestAnimationFrame(raf);

    // CLEANUP FUNCTION:
    // This runs when you leave the page. It kills the loop instantly.
    return () => {
      cancelAnimationFrame(animationFrameId); // <--- STOPS THE LAG
      lenis.destroy();
    };
  }, []);

  return null;
}