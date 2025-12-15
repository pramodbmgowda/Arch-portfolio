import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 1. Disable server-side optimization to fix Timeout Errors
    unoptimized: true, 
    
    // 2. Allow these websites to serve images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ],
  },
  
  // Keep strict mode for performance
  reactStrictMode: true,
};

export default nextConfig;