import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pos-project-s4z3.onrender.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]

  }
  
};

export default nextConfig;
