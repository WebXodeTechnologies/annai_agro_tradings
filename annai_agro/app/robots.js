// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',      // Private backend routes
        '/_next/',     // Next.js internal files
      ],
    },
    sitemap: 'https://annaiagrotradings.com/sitemap.xml',
  };
}