/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Node.js servers
  trailingSlash: false,
  images: {
    unoptimized: true, 
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
  },
};

export default nextConfig;