import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/hero/Footer";

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
  metadataBase: new URL("https://www.annaiagro.com"),
  alternates: { canonical: "/" },
  // Favicon & App Icons Configuration
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Annai Agro",
  },
  openGraph: {
    title: "Annai Agro Tradings - Sustainably Sourced. Globally Supplied.",
    description:
      "Your trusted partner for bulk organic spices, millets, and cereals.",
    url: "https://www.annaiagro.com",
    siteName: "Annai Agro Tradings",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

// Next.js 13+ way to handle Viewport
export const viewport = {
  themeColor: "#67944e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Annai Agro Tradings",
    url: "https://www.annaiagro.com",
    logo: "https://www.annaiagro.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9345336311",
      contactType: "sales",
      availableLanguage: "en",
    },
    sameAs: ["https://linkedin.com/company/annai-agro-tradings"],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased bg-white text-slate-900 selection:bg-[#67944e] selection:text-white`}
      >
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className="min-h-screen py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
