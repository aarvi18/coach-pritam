import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com"], // Add Unsplash as a trusted image source
  },
  /* config options here */
};

export default nextConfig;
