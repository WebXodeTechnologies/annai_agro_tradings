import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Annai Agro Tradings | Soil is the Source of Life",
    template: "%s | Annai Agro Tradings",
  },
  description:
    "Leading B2B agro products exporter from India. Specializing in organic spices, millets, and cereals. Certified NPOP, NOP, and EU organic food supplier.",
  keywords: [
    "agro products exporter india",
    "organic food exporter india",
    "b2b food supplier india",
    "bulk agricultural products supplier",
    "indian spices and millets exporter",
    "Annai Agro Tradings",
    "sustainable farming india",
  ],
  alternates: {
    canonical: "https://www.annaiagro.com", 
  },
  openGraph: {
    title: "Annai Agro Tradings - Sustainably Sourced. Globally Supplied.",
    description: "Your trusted partner for bulk organic spices, millets, and cereals.",
    url: "https://www.annaiagro.com",
    siteName: "Annai Agro Tradings",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annai Agro Tradings",
    "alternateName": "Annai Agro",
    "url": "https://www.annaiagro.com",
    "logo": "https://www.annaiagro.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "description": "B2B merchandise trading in organic spices, millets, and cereals with backward integration.",
    "sameAs": [
      "https://linkedin.com/company/annai-agro-tradings"
    ]
  };
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased bg-white text-slate-900`}
      >
        {/* Navigation bar will go here */}
        
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer will go here */}
      </body>
    </html>
  );
}