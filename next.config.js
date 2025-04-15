/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', ← REMOVE THIS LINE
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'favicon.ico']
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;
