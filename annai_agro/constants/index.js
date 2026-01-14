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
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
