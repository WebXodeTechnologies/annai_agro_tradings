/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for maximum speed and SEO
  // output: 'export', 
  
  // Ensures that trailing slashes are handled (better for SEO consistency)
  trailingSlash: false,
  
  // Required for 'output: export' if you use the next/image component
  images: {
    unoptimized: true, 
  },
};
export default nextConfig;
