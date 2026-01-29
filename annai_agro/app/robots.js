// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/', '/favicon.ico',],
      disallow: [
        '/api/',      // Private backend routes
        '/_next/data/',     // Next.js internal files
      ],
    },
    sitemap: 'https://annaiagrotradings.com/sitemap.xml',
  };
}