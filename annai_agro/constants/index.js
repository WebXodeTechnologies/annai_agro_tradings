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

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    category: "Spices",
    image: "hero/Products/Spices-1.jpg",
    description: "Export-grade aromatic Indian spices.",
    items: ["Dry Red Chilli", "Turmeric", "Cardamom", "Black Pepper", "Clove"],
    color: "bg-orange-50",
  },
  {
    id: 2,
    category: "Millets",
    image: "/hero/Products/Cerals-2.jpg",
    description: "Nutrient-dense ancient grains for global health.",
    items: ["Koda", "Barnyard", "Little", "Foxtail", "Pearl", "Sorghum", "Ragi"],
    color: "bg-green-50",
  },
  {
    id: 3,
    category: "Cereals",
    image: "/hero/Products/Cerals-1.jpg",
    description: "Premium Non-Basmati rice varieties.",
    items: ["Seeraga Samba", "Red Rice", "Traditional Rice"],
    color: "bg-blue-50",
  },
  {
    id: 4,
    category: "Natural Sugar",
    image: "/hero/Products/Sugar.jpg",
    description: "Traditional chemical-free sweeteners.",
    items: ["Palm Jaggery"],
    color: "bg-amber-50",
  },
];

export const BEST_SELLERS = [
  {
    id: "bs-1",
    name: "Dry Red Chilli",
    category: "Spices",
    image: "/hero/bestSellers/RedChilli.jpg",
    slug: "dry-red-chilli",
    specs: ["S4/S17 Stemless", "High Pungency", "Moisture < 12%"],
  },
  {
    id: "bs-2",
    name: "Turmeric Finger",
    category: "Spices",
    image: "/hero/bestSellers/turmeric.jpg",
    slug: "turmeric-finger",
    specs: ["Curcumin 3% - 5%", "Double Polished", "Salem/Erode Origin"],
  },
  {
    id: "bs-3",
    name: "Green Cardamom",
    category: "Spices",
    image: "/hero/bestSellers/card.jpg",
    slug: "green-cardamom",
    specs: ["7mm - 8mm Grade", "Deep Green Color", "Aromatic Export Quality"],
  },
  {
    id: "bs-4",
    name: "Black Pepper",
    category: "Spices",
    image: "/hero/bestSellers/BP.jpg",
    slug: "black-pepper",
    specs: ["500g - 550g GL", "Machine Cleaned", "Malabar Origin"],
  },
  {
    id: "bs-5",
    name: "Koda Millet",
    category: "Millets",
    image: "/hero/bestSellers/millet.jpg",
    slug: "koda-millet",
    specs: ["Hulled & Cleaned", "High Fiber Content", "Gluten-Free"],
  },
  {
    id: "bs-6",
    name: "Seeraga Samba Rice",
    category: "Cereals",
    image: "/hero/bestSellers/Rice.jpg",
    slug: "seeraga-samba",
    specs: ["Aromatic Tiny Grain", "Aged 12+ Months", "Traditional Variety"],
  },
 
];