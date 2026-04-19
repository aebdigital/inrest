/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.inrestsro.sk',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
