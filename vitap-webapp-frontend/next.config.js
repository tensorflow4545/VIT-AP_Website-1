/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    // Bind to localhost (your local machine) for development
    host: 'localhost', // You can also use your IP address here, e.g., '192.168.0.100'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost', // Use the same hostname as your server
      },
    ],
  },
};

module.exports = nextConfig;
