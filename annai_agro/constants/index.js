export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    subLinks: [
      { name: "Organic Spices", href: "/products/spices" },
      { name: "Premium Millets", href: "/products/millets" },
      { name: "Grains & Pulses", href: "/products/pulses" },
    ]
  },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_DETAILS = {
  phone: "+91-9344295395",
  email: "annaiagrotradings@gmail.com",
  address: "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu, 623704",
  socials: {
    linkedin: "https://linkedin.com/company/annai-agro-tradings",
    instagram: "https://instagram.com/annai_agro", // Update with real link
    youtube: "https://youtube.com/@annai_agro",     // Update with real link
    whatsapp: "919344295395" // Clean number for API
  },
};