/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
  output: 'standalone',  // Ensures that Next.js doesn't attempt to do static HTML export
  experimental: {
    appDir: true,
  },
};
