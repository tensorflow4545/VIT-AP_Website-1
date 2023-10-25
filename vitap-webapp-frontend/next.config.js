/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    // Bind to all network interfaces
    host: '0.0.0.0',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '0.0.0.0',
      },
    ],
  },
};

module.exports = nextConfig;
