// app/manifest.js
export default function manifest() {
  return {
    name: 'Annai Agro Tradings',
    short_name: 'AnnaiAgro',
    description: 'Exporting Premium Indian Spices',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#67944e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}