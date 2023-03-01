/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ],
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;
