export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_DETAILS = {
  phone: "+91-9344295395",
  email: "info@annaiagrotradings.com",
  address: "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu, 623704",
  socials: {
    linkedin: "https://www.linkedin.com/in/gokulnath-ramesh-4434a93a4/",
    instagram: "https://instagram.com/annai_agro", // Update with real link
    youtube: "https://youtube.com/@annai_agro", // Update with real link
    whatsapp: "919344295395", // Clean number for API
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
    items: [
      "Koda",
      "Barnyard",
      "Little",
      "Foxtail",
      "Pearl",
      "Sorghum",
      "Ragi",
    ],
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
    image: "/products/millets/pm-2.jpg",
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

export const CERTIFICATIONS = [
  {
    id: "fssai",
    title: "FSSAI",
    image: "/hero/certifications/fssai-seeklogo.png",
    subtitle: "Food Safety Standards Authority",
    description: "Licensing for food safety management and quality assurance.",
    color: "bg-orange-50",
  },
  {
    id: "spices-board",
    title: "Spices Board of India",
    image: "/hero/certifications/spice.png",
    subtitle: "Registration as Exporter (CRES)",
    description:
      "Mandatory authorization for exporting premium Indian spices globally.",
    color: "bg-emerald-50",
  },
  {
    id: "apeda",
    title: "APEDA",
    image: "/hero/certifications/apeda.png",
    subtitle: "Agro Products Export Authority",
    description:
      "Ensures compliance with international quality standards for agro exports.",
    color: "bg-blue-50",
  },
];

export const products = [
  // --- SPICES ---
  {
    id: "dry-red-chilli",
    name: "Dry Red Chilli",
    scientificName: "Capsicum annuum Linn",
    cat: "Spices",
    img: [
    "/products/dry-chilli/img1.jpg",    
    "/products/dry-chilli/chilli-2.jpg",       
    "/products/dry-chilli/teja.jpg", 
    "/products/millets/ramnad-mundu-dry-red-chilli.png"      
  ],
    overview:
      "Leading dry red chilli exporter from India. We supply premium medium-heat varieties sourced from direct farmers, including GI-tagged Ramnad Mundu. As a trusted dry red chilli bulk exporters, we ensure global export standards.",
    hsn: "09042110",
    seoKeywords: [
      "dry red chilli exporter india",
      "dry red chilli supplier india",
      "dry red chilli bulk supplier",
      "red chilli wholesale supplier india",
      "indian dry red chilli exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "10-12%",
      grade: "Premium / Export",
      shelfLife: "12-24 Months",
      origin: "India",
    },
    varieties: [
      {
        name: "S9- Ramnad Mundu",
        heat: "Medium",
        note: "GI Tagged, round shape.",
      },
      { name: "S17 Teja", heat: "High", note: "Slender, bright red." },
      { name: "Byadgi", heat: "Low", note: "Deep red, wrinkled skin." },
      { name: "334/S4 Sannam", heat: "Medium", note: "Light red, thick skin." },
    ],
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    cat: "Spices",
    img: "/gallery/turmeric.jpg",
    overview:
      "Prominent turmeric exporter from India specializing in high-curcumin fingers. We are turmeric exporter in India serving B2B markets as a turmeric bulk exporter and wholesale partner.",
    hsn: "09103020",
    seoKeywords: [
      "turmeric exporter india",
      "organic turmeric supplier india",
      "turmeric bulk supplier",
      "turmeric wholesale supplier india",
      "turmeric exporter from india",
    ],
    specs: {
      purity: "99% Min",
      moisture: "< 10%",
      grade: "Single/Double Polished",
      shelfLife: "12-24 Months",
      origin: "India",
    },
    varieties: [
      {
        name: "Salem Local",
        curcumin: "3.5%-4%",
        note: "Bright golden-yellow.",
      },
      {
        name: "Erode Local",
        curcumin: "2.5%-3.5%",
        note: "GI Tagged variety.",
      },
    ],
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    scientificName: "Elettaria cardamomum",
    cat: "Spices",
    img: "/products/cardomom/img1.jpg",
    overview:
      "Premium Indian Green Cardamom sourced from the high-altitude Western Ghats. We operate as global merchants, providing bulk shipments of export-grade pods to the international spice trade.",
    hsn: "090831",
    seoKeywords: [
      "cardamom exporter india",
      "green cardamom supplier india",
      "cardamom bulk supplier",
      "cardamom wholesale supplier india",
    ],
    specs: {
      purity: "99% Min",
      moisture: "10-12%",
      grade: "Export Quality (7mm - 8mm+)",
      shelfLife: "6-12 Months",
      origin: "India",
    },
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    scientificName: "Piper nigrum",
    cat: "Spices",
    img: "/products/black pepper/img.jpg",
    overview:
      "Indian black pepper exporter offering high-piperine Malabar pepper. We are a dedicated black pepper supplier in India and bulk supplier for the global food and pharma industries.",
    hsn: "09041130",
    seoKeywords: [
      "black pepper exporter india",
      "black pepper supplier india",
      "black pepper bulk supplier",
      "indian black pepper exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "10-12%",
      grade: "500 GL to 580 GL",
      shelfLife: "6-12 Months",
      origin: "India",
    },
  },
  {
    id: "clove",
    name: "Clove",
    scientificName: "Syzygium aromaticum",
    cat: "Spices",
    img: "/gallery/clove.jpg",
    overview:
      "GI-tagged clove exporter from India. Sourced from Kanniyakumari, we are a clove supplier in India providing handpicked premium cloves to bulk and wholesale buyers worldwide.",
    hsn: "090710",
    seoKeywords: [
      "clove exporter india",
      "clove supplier india",
      "clove bulk supplier",
      "clove wholesale supplier india",
    ],
    specs: {
      purity: "99% Min",
      moisture: "10-12%",
      grade: "Handpicked Premium",
      shelfLife: "12-24 Months",
      origin: "India",
    },
  },

  // --- MILLETS ---
  {
    id: "koda-millet",
    name: "Koda Millet",
    scientificName: "Paspalum scrobiculatum",
    cat: "Millets",
    img: "/products/millets/koda.png",
    overview:
      "Koda millet exporter from India. we provide high-fiber, gluten-free grains to koda millet bulk buyers globally.",
    hsn: "10089090",
    seoKeywords: [
      "koda millet exporter india",
      "koda millet supplier india",
      "koda millet bulk supplier",
      "organic koda millet exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "10-12%",
      grade: "Sortex Cleaned",
      shelfLife: "6-12 Months",
      origin: "India",
    },
  },
  {
    id: "barnyard-millet",
    name: "Barnyard Millet",
    scientificName: "Echinochloa esculenta",
    cat: "Millets",
    img: "/products/millets/ban2.jpg",
    overview:
      "Premier barnyard millet exporter from India. specializing in iron-rich, diabetic-friendly grains.",
    hsn: "10082920",
    seoKeywords: [
      "barnyard millet exporter india",
      "barnyard millet supplier india",
      "barnyard millet bulk supplier",
      "organic barnyard millet exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "11%",
      grade: "Premium Sortex",
      shelfLife: "12 Months",
    },
  },
  {
    id: "little-millet",
    name: "Little Millet",
    scientificName: "Panicum sumatrense",
    cat: "Millets",
    img: "/products/millets/banyard-1.jpg",
    overview:
      "Export-quality little millet exporter in India. We serve as a little millet bulk supplier and organic little millet exporter, providing nutrient-dense, sortex-cleaned grains.",
    hsn: "10082930",
    seoKeywords: [
      "little millet exporter india",
      "little millet supplier india",
      "little millet bulk supplier",
      "organic little millet exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "10%",
      grade: "Export Quality",
      shelfLife: "12 Months",
    },
  },
  {
    id: "foxtail-millet",
    name: "Foxtail Millet",
    scientificName: "Setaria italica",
    cat: "Millets",
    img: "/products/millets/fox.jpg",
    overview:
      "Leading foxtail millet exporter from India delivering high-protein ancient grains for the health food industry.",
    hsn: "10082940",
    seoKeywords: [
      "foxtail millet exporter india",
      "foxtail millet supplier india",
      "foxtail millet bulk supplier",
      "organic foxtail millet exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "12%",
      grade: "Double Polished",
      shelfLife: "12 Months",
    },
  },
  {
    id: "pearl-millet",
    name: "Pearl Millet (Bajra)",
    scientificName: "Pennisetum glaucum",
    cat: "Millets",
    img: "/products/millets/pearl2.jpg",
    overview:
      "Major pearl millet exporter from India. Also known as a bajra, we act as a pearl millet bulk export and wholesale partner for global food and feed industries.",
    hsn: "10082110",
    seoKeywords: [
      "pearl millet exporter india",
      "bajra exporter from india",
      "pearl millet bulk supplier",
      "pearl millet wholesale supplier",
    ],
    specs: {
      purity: "98% Min",
      moisture: "12%",
      grade: "Machine Cleaned",
      shelfLife: "12 Months",
    },
  },
  {
    id: "red-sorghum",
    name: "Sorghum (Red)",
    scientificName: "Sorghum bicolor",
    cat: "Millets",
    img: "/products/millets/redsorgum2.jpg",
    overview:
      "Red sorghum exporter from India and premium jowar bulk exporter. We provide red sorghum wholesale for gluten-free brewing and food manufacturing markets.",
    hsn: "10079000",
    seoKeywords: [
      "red sorghum exporter india",
      "sorghum exporter from india",
      "jowar bulk supplier india",
      "sorghum wholesale supplier",
    ],
    specs: {
      purity: "99% Min",
      moisture: "12%",
      grade: "Premium Red",
      shelfLife: "12 Months",
    },
  },
  {
    id: "ragi",
    name: "Ragi (Finger Millet)",
    scientificName: "Eleusine coracana",
    cat: "Millets",
    img: ["/products/millets/finger millet.webp","/products/millets/ragired.jpg"] ,
    overview:
      "Top ragi exporter from India.  we provide calcium-rich grains to wholesale food processors worldwide.",
    hsn: "10082910",
    seoKeywords: [
      "ragi exporter india",
      "finger millet exporter india",
      "ragi bulk supplier",
      "ragi wholesale supplier india",
    ],
    specs: {
      purity: "99% Min",
      moisture: "12%",
      grade: "Sortex Premium",
      shelfLife: "12 Months",
    },
  },

  // --- CEREALS ---
  {
    id: "non-basmati-rice",
    name: "Non-Basmati Rice",
    scientificName: "Oryza sativa",
    cat: "Cereals",
    img: "/products/millets/bs-2.jpg",
    overview:
      "Leading the export of authentic Indian non-basmati rice, from slender long-grain to tender short-grain varieties. Our grains are precision-milled to meet global food safety standards, providing a reliable foundation for the world's most demanding culinary markets",
    hsn: "10063010",
    seoKeywords: [
      "non basmati rice exporter india",
      "non basmati rice supplier india",
      "non basmati rice bulk supplier",
      "indian rice exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "14% Max",
      grade: "Export Grade",
      shelfLife: "24 Months",
    },
  },
  {
    id: "seeraga-samba-rice",
    name: "Seeraga Samba Rice",
    scientificName: "Oryza sativa var. Seeraga Samba",
    cat: "Cereals",
    img: "/products/millets/seeraga samba.jpg",
    overview:
      "Traditional rice exporter from India specializing in GI-tagged Seeraga Samba.",
    hsn: "10063010",
    seoKeywords: [
      "seeraga samba rice exporter india",
      "seeraga samba rice supplier india",
      "seeraga samba rice bulk supplier",
      "traditional rice exporter india",
    ],
    specs: {
      purity: "99.5% Min",
      moisture: "12%",
      grade: "Aromatic Premium",
      shelfLife: "12-24 Months",
    },
  },
  {
    id: "red-rice",
    name: "Red Rice",
    scientificName: "Oryza punctata",
    cat: "Cereals",
    img: "/products/millets/redrice-2.jpg",
    overview:
      "Direct merchant of authentic Indian red rice, delivering a powerhouse of iron and fiber to international markets. Our specialized processing ensures the highest quality across all grades, from bran-rich unpolished grains to refined semi-polished and polished options, tailored for bulk health-food procurement.",
    hsn: "10063010",
    seoKeywords: [
      "red rice exporter india",
      "red rice supplier india",
      "red rice bulk supplier",
      "organic red rice exporter",
    ],
    specs: {
      purity: "99% Min",
      moisture: "13%",
      grade: "Organic Certified",
      shelfLife: "12 Months",
    },
  },

  // --- SUGAR ---
  {
    id: "palm-jaggery",
    name: "Palm Jaggery",
    scientificName: "Borassus flabellifer extract",
    cat: "Sugar",
    img: ["/products/millets/pm-2.jpg", "/products/millets/kp-1.jpg", "/products/millets/kp-2.jpg", "/products/millets/kp-3.jpg" ],
    overview:
      "Premium palm jaggery exporter from India. Annai Agro is a premier Palm Jaggery exporter from India, specializing in traditional, chemical-free sweeteners. Our Karupatti is produced using heritage evaporation techniques to retain essential minerals (Iron, Magnesium, and Potassium), ensuring a low-glycemic index alternative to refined sugar.",
    hsn: "17011310",
    seoKeywords: [
      "palm jaggery exporter india",
      "palm jaggery supplier india",
      "palm jaggery bulk supplier",
      "organic palm jaggery exporter",
    ],
    varieties: [
    { 
      name: "Traditional Solid Blocks", 
      note: "Standard export quality, dark amber color, rich in minerals." 
    },
    { 
      name: "Customized Jaggery Cubes", 
      note: "Precision-cut for portion control. Ideal for the HORECA (Hotels, Restaurants, Cafes) sector." 
    },
    { 
      name: "Granulated Palm Sugar", 
      note: "Easy-to-dissolve powder format for industrial food processing." 
    }
  ],
    specs: {
      purity: "100% Natural",
      moisture: "5-8%",
      grade: "Unrefined / Export",
      shelfLife: "6-12 Months",
      origin: "India",
    },
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "turmeric-curcumin-analysis-b2b-standards",
    title: "The Science of Turmeric Export: Beyond the Golden Hue",
    excerpt: "For global importers, Turmeric value is defined by chemical stability and microbial safety. Explore the technical benchmarks of HPLC testing.",
    category: "Authentic Spices",
    date: "Jan 17, 2026",
    readTime: "10 min",
    image: "/products/millets/tm-4.jpg",
    targetLink: "/products/turmeric",
    content: {
      intro: "In the international spice trade, visual appearance is secondary to biochemical potency. Professional procurement requires verifiable data on Curcuminoid concentration and the absence of ETO residues.",
      sections: [
        {
          heading: "HPLC-Verified Curcuminoid Integrity",
          text: "We utilize High-Performance Liquid Chromatography (HPLC) to guarantee Curcumin levels between 3.5% and 5.5% for varieties like Salem and Erode.",
          subPoints: ["Zero synthetic colorants", "Batch-wise volatile oil analysis", "Detailed COA provided"]
        }
      ]
    }
  },
  {
    id: 2,
    slug: "chilli-asta-color-capsaicin-stability",
    title: "Technical Benchmarks for Export-Grade Dry Red Chilli",
    excerpt: "Navigating SHU levels and ASTA color stability. How to ensure Sudan Dye-free compliance in bulk chilli procurement.",
    category: "Authentic Spices",
    date: "Jan 18, 2026",
    readTime: "11 min",
    image: "/products/dry-chilli/teja.jpg",
    targetLink: "/products/dry-red-chilli",
    content: {
      intro: "Industrial chilli procurement is defined by two metrics: Heat (SHU) and Color (ASTA). Maintaining these through sea-transit requires strict moisture control.",
      sections: [
        {
          heading: "Capsaicin vs. ASTA Retension",
          text: "While Teja S17 offers high pungency (75k-100k SHU), Byadgi is prized for its 120+ ASTA color value. We use cold-storage to prevent pigment oxidation.",
          subPoints: ["Sudan Dye-free certification", "Aflatoxin levels below 5ppb", "Moisture regulated at 9-11%"]
        }
      ]
    }
  },
  {
    id: 3,
    slug: "seeraga-samba-industrial-catering-grade",
    title: "Seeraga Samba: Performance Metrics for High-Volume HORECA",
    excerpt: "Engineering the perfect grain for hospitality. Why Seeraga Samba’s amylose content offers superior ROI for bulk catering.",
    category: "Traditional Rice",
    date: "Jan 19, 2026",
    readTime: "9 min",
    image: "/products/millets/seeraga-2.jpg",
    targetLink: "/products/seeraga-samba-rice",
    content: {
      intro: "Seeraga Samba is a performance grain. It offers a unique combination of intense aroma and structural resilience that long-grain varieties cannot match.",
      sections: [
        {
          heading: "Amylose Content & Culinary Resilience",
          text: "An Amylose profile of >22% ensures grains remain firm under industrial steam-cooking, preventing clumping in bulk preparations.",
          subPoints: ["2.5x volume expansion", "12-month natural aging", "99.9% Sortex Purity"]
        }
      ]
    }
  },
  {
    id: 4,
    slug: "thooyamalli-rice-digestive-health-export",
    title: "Thooyamalli Rice: The Nutraceutical Profile of Ancient Grains",
    excerpt: "Exploring the low-glycemic index and nerve-strengthening properties of India's 'Pure Jasmine' rice variety.",
    category: "Traditional Rice",
    date: "Jan 20, 2026",
    readTime: "8 min",
    image: "/products/millets/tm-2.jpg",
    targetLink: "/products/seeraga-samba-rice",
    content: {
      intro: "Thooyamalli is more than a staple; it is a functional food. Its resistance to pests during growth translates into a grain that requires minimal chemical intervention.",
      sections: [
        {
          heading: "Glycemic Stability & Bran Integrity",
          text: "The retained bran layer in our Thooyamalli rice provides essential B-vitamins and complex carbs that prevent post-meal glucose spikes.",
          subPoints: ["High fiber retention", "Rich in Vitamin B-Complex", "Immune-boosting anthocyanins"]
        }
      ]
    }
  },
  {
    id: 5,
    slug: "millet-processing-dehulling-purity-standards",
    title: "The Millet Revolution: Technical Standards for Global Retail",
    excerpt: "As gluten-free demand surges, understanding de-hulling precision and nutritional stability of Indian Millets is key.",
    category: "Product Benefits",
    date: "Jan 21, 2026",
    readTime: "10 min",
    image: "/products/millets/img1.jpg",
    targetLink: "/products/koda-millet",
    content: {
      intro: "Millets like Koda and Barnyard are the future of sustainable carbohydrates. However, B2B success depends on 'Cold-Press De-hulling' technology.",
      sections: [
        {
          heading: "Gluten-Free Integrity & Cross-Contamination",
          text: "We utilize dedicated 'Millet-Only' processing lines to ensure gluten levels remain below 20ppm, meeting strict EU and US retail laws.",
          subPoints: ["Cold-press de-hulling", "ELISA tested gluten-free status", "Sortex gravity separation"]
        }
      ]
    }
  },
  {
    id: 6,
    slug: "palm-jaggery-clean-label-sweetener-industry",
    title: "Functional Sweeteners: Industrial Application of Palm Jaggery",
    excerpt: "Confectionery is pivoting to 'Clean Label' ingredients. Explore the technical viscosity and solubility of Palm Jaggery.",
    category: "Product Benefits",
    date: "Jan 23, 2026",
    readTime: "8 min",
    image: "/products/millets/pamj.jpg", 
    targetLink: "/products/palm-jaggery",
    content: {
      intro: "Organic Palm Jaggery (Karupatti) is a complex carbohydrate that functions as a mineral-rich additive for health-centric food lines.",
      sections: [
        {
          heading: "Solubility & Alkaline Advantage",
          text: "Granulated powder with <2% moisture allows for seamless integration into automated mixing systems in beverage plants.",
          subPoints: ["Low GI (35-40)", "Rich in Iron & Potassium", "Zero bleaching agents"]
        }
      ]
    }
  },
  {
    id: 7,
    slug: "apeda-tracenet-compliance-exporter-india",
    title: "Regulatory Architecture: Navigating MRL and TraceNet Compliance",
    excerpt: "How APEDA TraceNet and QR-based mapping protect your supply chain from regulatory rejection at international ports.",
    category: "Farm Authenticity",
    date: "Jan 25, 2026",
    readTime: "12 min",
    image: "/products/millets/img3.jpg",
    targetLink: "/about",
    content: {
      intro: "Regulatory rejection is the primary risk in food imports. Our architecture ensures every shipment meets destination-specific MRL standards.",
      sections: [
        {
          heading: "Digital Traceability & HACCP Protocols",
          text: "Every batch is registered under APEDA's TraceNet system, providing a digital audit trail from farm cluster to container.",
          subPoints: ["QR-coded batching", "ISO 22000:2018 Certified", "Strict PMP adherence"]
        }
      ]
    }
  },
  {
    id: 8,
    slug: "golden-milk-curcumin-bioavailability-science",
    title: "Pharmacokinetics of Turmeric: Optimizing Curcumin Absorption",
    excerpt: "A technical guide to increasing Curcumin bioavailability by 2000% using Piperine and Lipid catalysts.",
    category: "Recipes",
    date: "Jan 26, 2026",
    readTime: "7 min",
    image: "/products/millets/tm.jpg",
    targetLink: "/products/turmeric",
    content: {
      intro: "The therapeutic value of Turmeric is limited by its low solubility. We explain the chemical synergy required for effective golden milk formulations.",
      sections: [
        {
          heading: "The Piperine-Lipid Synergy",
          text: "Combining Turmeric with black pepper (Piperine) and healthy fats (Lipids) creates a carrier system that bypasses hepatic metabolism.",
          subPoints: ["95% Curcuminoid retention", "A2 Ghee as a lipid carrier", "Optimal temperature for volatile stability"]
        }
      ]
    }
  },
  {
    id: 9,
    slug: "fermented-rice-probiotic-gut-health",
    title: "Bioavailability in Fermented Grains: The Science of Rice Kanji",
    excerpt: "Why overnight fermentation of Thooyamalli rice increases mineral bioavailability by 300% for gut microbiome health.",
    category: "Daily Health",
    date: "Jan 27, 2026",
    readTime: "9 min",
    image: "/products/millets/rice-kanji.jpg",
    targetLink: "/products/red-rice",
    content: {
      intro: "Traditional fermentation is a biological pre-processing step that converts complex starches into easily absorbable nutrients.",
      sections: [
        {
          heading: "Lactic Acid Fermentation",
          text: "Soaking unpolished rice overnight triggers natural probiotics that balance the gut microbiome and reduce phytic acid.",
          subPoints: ["Vitamin B12 synthesis", "3x Iron absorption increase", "Natural electrolyte balance"]
        }
      ]
    }
  },
  {
    id: 10,
    slug: "millet-lunch-bowls-energy-glycemic-index",
    title: "Sustained Energy: The Glycemic Profile of Barnyard Millet",
    excerpt: "Replacing high-carb pasta with Barnyard Millet for 5-hour energy release and superior dietary fiber intake.",
    category: "Recipes",
    date: "Jan 28, 2026",
    readTime: "8 min",
    image: "/products/millets/banyard-1.jpg",
    targetLink: "/products/koda-millet",
    content: {
      intro: "Barnyard millet's complex carbohydrate structure provides a slow-release energy profile, ideal for diabetic and fitness-focused meal preps.",
      sections: [
        {
          heading: "Fluffy Texture: The 1:2 Water Ratio",
          text: "Mastering the texture of millets is key for consumer acceptance. Proper pre-soaking reduces anti-nutrients while maintaining grain integrity.",
          subPoints: ["10% Dietary fiber", "Gluten-free starch profile", "Rich in phosphorus and magnesium"]
        }
      ]
    }
  }
];
