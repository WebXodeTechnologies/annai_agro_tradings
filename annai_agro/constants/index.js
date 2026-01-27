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
  email: "annaiagrotradings@gmail.com",
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
    img: "/products/dry chilli/img1.jpg",
    overview:
      "Leading dry red chilli exporter from India. We supply premium medium-heat varieties sourced from organic farmers, including GI-tagged Ramnad Mundu. As a trusted dry red chilli bulk supplier, we ensure global export standards.",
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
    ],
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    cat: "Spices",
    img: "/gallery/turmeric.jpg",
    overview:
      "Prominent turmeric exporter from India specializing in high-curcumin fingers. We are an organic turmeric supplier in India serving B2B markets as a turmeric bulk supplier and wholesale partner.",
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
      "Authentic green cardamom supplier in India. Sourced from the Western Ghats, we act as a cardamom bulk supplier and cardamom exporter from India for premium export-grade pods.",
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
      "Certified organic koda millet exporter from India. As a leading koda millet supplier in India, we provide high-fiber, gluten-free grains to koda millet bulk buyers globally.",
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
      "Premier barnyard millet exporter from India. We are an organic barnyard millet exporter and bulk supplier specializing in iron-rich, diabetic-friendly grains.",
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
      "Export-quality little millet supplier in India. We serve as a little millet bulk supplier and organic little millet exporter, providing nutrient-dense, sortex-cleaned grains.",
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
      "Leading foxtail millet exporter from India. We are a foxtail millet bulk supplier and organic foxtail millet exporter, delivering high-protein ancient grains for the health food industry.",
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
      "Major pearl millet exporter from India. Also known as a bajra exporter from India, we act as a pearl millet bulk supplier and wholesale partner for global food and feed industries.",
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
      "Red sorghum exporter from India and premium jowar bulk supplier. We provide red sorghum wholesale for gluten-free brewing and food manufacturing markets.",
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
    img: "/products/millets/ragired.jpg",
    overview:
      "Top ragi exporter from India. As a finger millet exporter from India and ragi bulk supplier, we provide calcium-rich grains to wholesale food processors worldwide.",
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
      "Established non-basmati rice exporter from India. We are a reliable non-basmati rice supplier in India and indian rice exporter for long and short grain varieties.",
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
      "Traditional rice exporter from India specializing in GI-tagged Seeraga Samba. We are a primary seeraga samba rice supplier in India and bulk supplier for aromatic rice markets.",
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
      "Leading red rice exporter from India. As a red rice supplier and organic red rice exporter, we provide nutrient-rich unpolished rice for health-conscious bulk buyers.",
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
    img: "/products/millets/pm-3.jpg",
    overview:
      "Premium palm jaggery exporter from India. We are an organic palm jaggery exporter and palm jaggery supplier in India, providing traditional, unrefined sweeteners to bulk importers.",
    hsn: "17011310",
    seoKeywords: [
      "palm jaggery exporter india",
      "palm jaggery supplier india",
      "palm jaggery bulk supplier",
      "organic palm jaggery exporter",
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
    title:
      "Decoding Turmeric Purity: A B2B Guide to Curcumin Integrity and Food Safety",
    excerpt:
      "In the global spice trade, the value of Turmeric is determined by its bio-active compounds and chemical purity. Learn why Curcumin levels and microbial sterilization are the true benchmarks of quality.",
    category: "Authentic Spices",
    date: "Jan 17, 2026",
    readTime: "12 min",
    image: "/blog/turmeric.jpg",
    keywords: [
      "Turmeric Curcumin analysis",
      "Steam Sterilized Spices",
      "HPLC testing turmeric",
      "Spice export quality standards",
    ],
    targetLink: "/products/turmeric",
    content: {
      intro:
        "For the discerning global importer, Turmeric (Curcuma longa) is more than a culinary colorant—it is a functional ingredient whose value is rooted in its chemical profile. However, the industry often prioritizes visual aesthetics over biochemical potency. To secure a safe and effective supply chain, buyers must look beyond the 'Golden' appearance and focus on verifiable laboratory parameters like Curcumin concentration and Maximum Residue Levels (MRLs).",
      sections: [
        {
          heading: "1. The Curcumin Myth vs. Analytical Reality",
          text: "The most common misconception in the spice market is that a vibrant neon-yellow color indicates high quality. In reality, a bright exterior can often be a mask for adulteration with agents like Lead Chromate or Metanil Yellow. True quality is dictated by the Curcuminoid content, typically ranging from 2.5% to 5.5% in premium Indian varieties like Salem and Erode. This can only be verified through High-Performance Liquid Chromatography (HPLC) testing.",
          subPoints: [
            "Curcumin is the primary bio-active compound responsible for anti-inflammatory properties.",
            "Natural turmeric has a deep, dull orange-yellow hue in its core, not a bright surface sheen.",
            "Buyers should demand HPLC certificates rather than relying on visual 'finger tests'.",
          ],
        },
        {
          heading:
            "2. The Danger of ETO and the Steam Sterilization Alternative",
          text: "Food safety in Europe and North America is currently focused on Ethylene Oxide (ETO) residues. While ETO is an effective fumigant to kill bacteria, it is classified as a carcinogen. Importers must be aware that many budget suppliers still use ETO to meet microbial counts. The modern, awareness-driven choice is Steam Sterilization. This heat-based process reduces the Total Plate Count (TPC) to safe levels without leaving toxic chemical residues on the spice.",
          subPoints: [
            "Steam Sterilization (SS) preserves the essential volatile oils of the turmeric.",
            "ETO-Free certification is now a mandatory requirement for most EU food processors.",
            "Cold-grinding technology ensures the heat from grinding doesn't burn the volatile oils (3-5%).",
          ],
        },
        {
          heading: "3. Mycotoxins and Post-Harvest Awareness",
          text: "The presence of Aflatoxins and Ochratoxins is often a result of poor post-harvest handling. When turmeric is dried on bare soil, it absorbs moisture and soil-borne pathogens. Awareness of raised-bed drying and mechanical polishing is vital for importers to ensure their batch doesn't get rejected at international borders due to mycotoxin levels exceeding 5-10 ppb (parts per billion).",
          subPoints: [
            "Insist on produce dried on HDPE tarpaulins or raised platforms.",
            "Polished turmeric rhizomes have a lower risk of fungal infestation during sea transit.",
            "Moisture content must be strictly regulated below 10% to prevent 'container sweat'.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title:
      "The Science of Scoville: A Technical Guide to Export-Grade Dry Red Chilli",
    excerpt:
      "Navigating the complexities of the global chilli trade requires an understanding of SHU levels, ASTA color stability, and the critical importance of Sudan Dye-free certification.",
    category: "Authentic Spices",
    date: "Jan 18, 2026",
    readTime: "11 min",
    image: "/products/dry chilli/img1.jpg",
    keywords: [
      "S17 Teja Chilli SHU",
      "ASTA color value dry chilli",
      "Sudan Dye testing spices",
      "Capsaicin content analysis",
    ],
    targetLink: "/products/dry-red-chilli",
    content: {
      intro:
        "In the international market, the quality of Dry Red Chilli is defined by its chemical potency rather than just its visual appearance. For food processors and spice blenders, the primary concerns are the retention of Capsaicin (heat) and the stability of natural pigments (color). However, the industry faces significant challenges with adulteration and improper drying techniques. Understanding these technical benchmarks is essential for securing a high-quality, safe supply chain.",
      sections: [
        {
          heading: "1. Decoding Pungency: The Scoville Heat Unit (SHU)",
          text: "The heat of a chilli is measured by its concentration of capsaicinoids, quantified via the Scoville Scale. While varieties like S17 Teja are prized for high pungency (up to 100,000 SHU), premium mild varieties like Byadgi are valued for their color rather than heat. Importers must be aware that pungency can degrade during improper storage. High-grade exports must undergo HPLC testing to verify that the SHU levels meet the technical data sheet (TDS) requirements.",
          subPoints: [
            "Capsaicinoids are stable under heat but can degrade under UV light.",
            "High-pungency chilli (Teja/S4) is ideal for oleoresin extraction.",
            "Always verify heat levels via HPLC (High-Performance Liquid Chromatography) for accuracy.",
          ],
        },
        {
          heading: "2. Color Retention and the ASTA Benchmark",
          text: "The extractable color of chilli is measured in ASTA units (American Spice Trade Association). A common awareness gap in the industry is the difference between surface color and extractable color. Natural chilli color eventually fades due to oxidation. To counter this, some unethical suppliers use Sudan Dyes (I-IV)—industrial carcinogens—to maintain a permanent red hue. Buyers must prioritize 'Sudan-Free' lab reports to comply with EU and Gulf food safety regulations.",
          subPoints: [
            "Byadgi chilli typically offers high ASTA values (120-150) with low heat.",
            "Sudan Dyes are strictly prohibited globally; zero detection is the only acceptable standard.",
            "Cold storage at temperatures below 10°C is the only organic way to preserve natural ASTA values.",
          ],
        },
        {
          heading: "3. Moisture Control and Aflatoxin Prevention",
          text: "Chilli is highly hygroscopic, meaning it absorbs moisture from the air. If moisture levels exceed 12%, the risk of Aspergillus mold growth increases significantly, leading to the production of toxic Aflatoxins. For long-haul sea transit (30-45 days), moisture management is the single most important factor in preventing batch rejection at international ports.",
          subPoints: [
            "Export-grade chilli must maintain a moisture level between 9% and 11%.",
            "Aflatoxin B1 levels should be tested to ensure they are below 5 ppb for EU markets.",
            "Utilization of moisture-proof bulk packaging and silica gel desiccants is a standard requirement for sea containers.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title:
      "The Seeraga Samba Phenomenon: Technical Insights into South India's Aromatic Short-Grain",
    excerpt:
      "While Basmati dominates the long-grain market, Seeraga Samba is disrupting the HORECA sector with its unique aroma and superior cooking resilience. Discover the science behind its grain elongation and digestive profile.",
    category: "Traditional Rice",
    date: "Jan 19, 2026",
    readTime: "11 min",
    image:
      " https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200",
    keywords: [
      "Seeraga Samba export quality",
      "Amylose content in rice",
      "Short grain aromatic rice India",
      "Rice Sortex specifications",
    ],
    targetLink: "/products/seeraga-samba-rice",
    content: {
      intro:
        "Seeraga Samba, known as the 'Jeera' of rice due to its resemblance to cumin seeds, is a Geographical Indication (GI) tagged variety that defies the global obsession with long grains. For the international catering and hospitality industry, this rice offers a unique combination of intense fragrance and a robust texture that holds its shape even under extreme industrial cooking conditions—a technical feat most long-grain varieties cannot match.",
      sections: [
        {
          heading: "1. The Science of Grain Elongation and Amylose",
          text: "The quality of Seeraga Samba is determined by its Amylose content. High-amylose rice (above 22%) ensures that the grains remain firm and separate after cooking, preventing the 'clumping' often seen in lower-grade short grains. This high-amylose profile also contributes to a lower Glycemic Index (GI), making it a technically superior choice for health-conscious markets in Europe and Southeast Asia.",
          subPoints: [
            "High amylose levels ensure zero-stickiness in bulk catering preparations.",
            "Natural aroma compounds (2-Acetyl-1-pyrroline) are higher than in non-aromatic short grains.",
            "Superior oil absorption capability makes it the preferred choice for authentic Biryanis and Pilafs.",
          ],
        },
        {
          heading: "2. Sortex Precision and Purity Standards",
          text: "In the global market, 'Sortex Purity' is a non-negotiable metric. Because Seeraga Samba is a small grain, traditional milling can leave behind broken kernels or discolored grains. For export grade, the rice must undergo multi-stage Sortex cleaning (using CCD cameras) to ensure a 99.9% purity level, removing chalky grains and foreign matter that could affect the shelf life and visual appeal of retail packaging.",
          subPoints: [
            "99.9% Sortex Purity is the standard for US and EU retail markets.",
            "Moisture must be stabilized at 12% to prevent aflatoxin development during sea transit.",
            "Silk-polishing (without chemicals) improves the aesthetic shine while maintaining the bran's nutrition.",
          ],
        },
        {
          heading: "3. The Critical Role of Natural Aging",
          text: "A common mistake in the rice trade is exporting 'New Crop' (freshly harvested) rice. Fresh rice has high moisture and active enzymes that cause the grain to break and become mushy during cooking. Awareness of the aging process is vital; rice aged for 12 to 18 months undergoes a biochemical change that hardens the starch, leading to better volume expansion and a much more pronounced aroma upon boiling.",
          subPoints: [
            "Aged rice expands 2.5 times its original volume when cooked.",
            "Natural aging reduces the moisture-to-protein ratio for better shelf stability.",
            "Look for 'Aged 1+ Year' certification to guarantee cooking performance.",
          ],
        },
      ],
    },
  },

  {
    id: 4,
    title:
      "The Millet Revolution: Technical Standards for Koda and Barnyard Millet in Global Retail",
    excerpt:
      "As the global demand for gluten-free ancient grains surges, understanding the de-hulling precision and nutritional stability of Indian Millets is key to successful market entry.",
    category: "Product Benefits",
    date: "Jan 21, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1200",
    keywords: [
      "Koda Millet processing",
      "Barnyard Millet wholesale",
      "Gluten-free ancient grains exporter",
      "Millet nutritional analysis",
    ],
    targetLink: "/products/koda-millet",
    content: {
      intro:
        "The resurgence of Millets (Sirudhanyangal) is not merely a dietary trend; it is a structural shift in the global food supply chain. While the world seeks alternatives to wheat and white rice, Koda and Barnyard millets offer a unique combination of high dietary fiber and a low Glycemic Index (GI). However, for an international buyer, the challenge lies in the 'Technical Purity' of the grain—ensuring that traditional harvesting methods meet modern food safety protocols.",
      sections: [
        {
          heading: "1. The De-Hulling Challenge and Purity Standards",
          text: "Unlike major cereals, millets have a hard, multi-layered fibrous husk. If the de-hulling process is too aggressive, the nutrient-rich bran layer is lost; if it is too weak, the grain remains unpalatable. Awareness of 'Cold-Press De-hulling' technology is vital, as it removes the husk while preserving the embryonic sprout and bran, ensuring that the exported grain remains a 'Whole Grain' with its nutritional integrity intact.",
          subPoints: [
            "Mechanical de-husking must achieve 99% efficiency to be retail-ready.",
            "Sortex cleaning via gravity separators is required to remove 100% of stones and sand grit.",
            "Preservation of the bran layer maintains the grain's high phosphorus and antioxidant levels.",
          ],
        },
        {
          heading: "2. Gluten-Free Integrity and Cross-Contamination Awareness",
          text: "For the Western market, 'Gluten-Free' is more than a label; it is a legal requirement. The biggest risk in millet export is cross-contamination in facilities that also process wheat or barley. Technical buyers must ensure that the processing units are dedicated 'Millet-Only' lines or follow strict ISO-certified cleaning protocols between batches to ensure gluten levels remain below 20ppm (parts per million).",
          subPoints: [
            "Dedicated processing lines prevent gluten cross-contamination.",
            "Regular ELISA testing is necessary to verify gluten-free status.",
            "Moisture regulation below 11% prevents rancidity of the natural fats in the millet.",
          ],
        },
        {
          heading: "3. Bioavailability and Anti-Nutrient Management",
          text: "A technical nuance of millets is the presence of anti-nutrients like phytic acid. Educational awareness around 'Pre-processing'—such as parboiling or specific heat treatments—can significantly improve the bioavailability of minerals like Iron and Zinc. Importers should understand these processing steps to market millets effectively to health-conscious consumers who prioritize nutrient absorption.",
          subPoints: [
            "Low Glycemic Index (GI) makes millets ideal for diabetic-friendly food lines.",
            "Barnyard millet has the highest fiber content among all cereals (approx. 10-12%).",
            "Koda millet is exceptionally high in polyphenols, offering superior shelf-stability.",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    title:
      "The Compliance Architecture: Navigating APEDA, FSSAI, and Global Food Safety Standards",
    excerpt:
      "In the high-stakes world of food imports, certifications are not just paperwork—they are the blueprints of a safe supply chain. Understand the role of TraceNet and QR-based farm mapping.",
    category: "Farm Authenticity",
    date: "Jan 22, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?q=80&w=1200",
    keywords: [
      "APEDA TraceNet system",
      "FSSAI export compliance",
      "Farm to Fork traceability",
      "ISO 22000 food safety",
    ],
    targetLink: "/about",
    content: {
      intro:
        "For a global importer, the primary risk is not just quality—it is regulatory rejection. With tightening US-FDA and EU-EFSA norms, 'Farm Authenticity' has moved from a marketing slogan to a technical requirement. At Annai Agro, we believe that transparency is the ultimate commodity, and it begins with a deep understanding of the regulatory frameworks that govern Indian agricultural exports.",
      sections: [
        {
          heading: "1. APEDA & TraceNet: The Digital Identity of Your Produce",
          text: "The Agricultural and Processed Food Products Export Development Authority (APEDA) isn't just a registrar; it manages 'TraceNet'—an end-to-end system that tracks the produce from the registered farm to the final shipping container. This ensures that the pesticide management plan (PMP) was followed at the source, allowing for a 100% recall capability if any batch fails the Maximum Residue Level (MRL) test at the port of entry.",
          subPoints: [
            "Phytosanitary certification ensures zero pest infestation in bulk cargo.",
            "TraceNet mapping prevents the mixing of non-certified produce with export-grade lots.",
            "QR-coded batching allows importers to verify the specific FPO (Farmer Producer Organization) cluster.",
          ],
        },
        {
          heading: "2. The FSSAI & ISO 22000 Synergy",
          text: "While FSSAI regulates domestic safety, its alignment with ISO 22000 (Food Safety Management System) ensures that the processing facility follows a Hazard Analysis and Critical Control Point (HACCP) approach. This means identifying physical, chemical, and biological hazards at every stage—from de-husking millets to steam-sterilizing turmeric.",
          subPoints: [
            "HACCP protocols eliminate cross-contamination risks during processing.",
            "Regular third-party audits ensure facility hygiene meets BRC (British Retail Consortium) standards.",
            "Documented 'Corrective Actions' (CAPA) provide a trail for continuous quality improvement.",
          ],
        },
      ],
    },
  },
  {
    id: 6,
    title:
      "Functional Sweeteners: The Industrial Application of Organic Palm Jaggery",
    excerpt:
      "As global confectionery moves toward 'Clean Label' ingredients, Organic Palm Jaggery is emerging as a low-GI, mineral-rich alternative to refined sugar. Explore its technical viscosity and solubility.",
    category: "Product Benefits",
    date: "Jan 23, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
    keywords: [
      "Palm Jaggery bulk supply",
      "Natural low-GI sweetener",
      "Industrial jaggery powder",
      "Clean label food ingredients",
    ],
    targetLink: "/products/palm-jaggery",
    content: {
      intro:
        "The global food industry is currently in the midst of a 'Sugar Pivot.' Manufacturers are no longer seeking just sweetness; they are seeking 'Clean Label' ingredients that add nutritional value. Organic Palm Jaggery (Karupatti), derived from the sap of the Palmyrah tree, is a complex carbohydrate that offers a slow-release energy profile and a rich mineral density, making it a premium functional ingredient for the modern food chemist.",
      sections: [
        {
          heading: "1. The Alkaline Advantage: pH and Mineral Profile",
          text: "Unlike refined beet or cane sugar, which are acid-forming, Palm Jaggery is naturally alkaline. In food formulations, this helps balance the pH level of the final product. Technically, it is rich in Potassium and Iron, which provides a natural 'fortification' effect to confectionery products without the need for synthetic additives.",
          subPoints: [
            "Low Glycemic Index (GI) of 35-40 compared to 65 for refined sugar.",
            "Rich in B-vitamins and Essential Minerals (Iron, Magnesium, Calcium).",
            "Zero use of Phosphoric Acid or Bleaching Agents during extraction.",
          ],
        },
        {
          heading: "2. Solving the Solubility and Shelf-Life Challenge",
          text: "For industrial use, the primary challenge with traditional jaggery is moisture and inconsistent texture. Awareness of the 'Granulated Powder' form is essential for B2B buyers. By reducing moisture levels to below 2%, jaggery powder becomes free-flowing and highly soluble, making it compatible with large-scale automated mixing systems used in chocolate and beverage manufacturing.",
          subPoints: [
            "Consistency in Brix levels ensures predictable sweetness across bulk batches.",
            "Low moisture profile prevents microbial growth and extends shelf life to 18 months.",
            "Compatible with vacuum-sealed industrial bulk packaging (25kg to 50kg).",
          ],
        },
      ],
    },
  },
  {
    id: 7,
    title:
      "The Morning Ritual: Why Traditional Rice Kanji Outperforms Modern Cereals",
    excerpt:
      "Discover the probiotic benefits of fermented 'Pazhaya Sadam' (Old Rice) and why Thooyamalli rice is the ultimate grain for gut health.",
    category: "Daily Health",
    date: "Jan 24, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1200",
    keywords: [
      "gut health rice",
      "Thooyamalli benefits",
      "traditional rice kanji",
      "natural probiotics",
    ],
    targetLink: "/products/thooyamalli-rice",
    content: {
      intro:
        "In the rush of modern life, we often overlook the most powerful wellness tool in our heritage: the fermented rice porridge. Far from being a simple meal, this ancient breakfast is a powerhouse of vitamin B12 and natural probiotics.",
      sections: [
        {
          heading: "1. The Fermentation Advantage",
          text: "When traditional rice like Thooyamalli is soaked overnight, the fermentation process breaks down anti-nutrients and increases the bioavailability of minerals like Iron and Potassium by over 300%.",
          subPoints: [
            "Natural source of lactic acid bacteria for gut microbiome balance.",
            "Instant energy release without the glycemic spike of processed cornflakes.",
            "Helps in maintaining body coolness in tropical climates.",
          ],
        },
        {
          heading: "2. Thooyamalli: The 'Pure Jasmine' for Longevity",
          text: "Unlike polished white rice, Thooyamalli retains its bran layer, which is rich in nerve-strengthening antioxidants. Consuming this as a daily staple helps in strengthening the immune system and stabilizing blood sugar.",
          subPoints: [
            "Rich in Vitamin B-Complex for nervous system health.",
            "Strengthens internal organs and promotes skin radiance.",
            "Easy to digest, making it ideal for both children and the elderly.",
          ],
        },
      ],
    },
  },
  {
    id: 8,
    title:
      "Culinary Precision: Mastering the Golden Turmeric Latte (Golden Milk)",
    excerpt:
      "Learn the science of increasing Curcumin absorption by 2000% using two simple kitchen ingredients: Black Pepper and Healthy Fats.",
    category: "Recipes",
    date: "Jan 25, 2026",
    readTime: "6 min",
    image:
      "https://i.pinimg.com/1200x/07/9e/bb/079ebb8d7d60134e7cc8ff17cc208908.jpg",
    keywords: [
      "golden milk recipe",
      "turmeric absorption",
      "curcumin with black pepper",
      "anti-inflammatory drink",
    ],
    targetLink: "/products/turmeric",
    content: {
      intro:
        "Golden Milk (Haldi Doodh) has become a global wellness phenomenon. However, simply stirring turmeric into milk is not enough. To unlock the healing power of Curcumin, you must understand the chemistry of its absorption.",
      sections: [
        {
          heading: "1. The Piperine and Lipid Catalyst",
          text: "Curcumin is not easily absorbed by the human bloodstream. However, when combined with Piperine (found in Black Pepper) and a healthy fat (like Coconut oil or A2 Ghee), its bioavailability increases by a staggering 2000%.",
          subPoints: [
            "Always add a pinch of freshly ground black pepper to your turmeric drinks.",
            "Curcumin is fat-soluble; healthy fats act as a carrier for the nutrient.",
            "Heat the milk gently; boiling for too long can degrade the volatile oils.",
          ],
        },
        {
          heading: "2. The Recipe for Immunity",
          text: "A daily evening cup of this golden elixir acts as a natural anti-inflammatory agent, repairing cellular damage and improving sleep quality by regulating melatonin production.",
          subPoints: [
            "Mix 1/2 tsp Annai Agro Salem Turmeric with 250ml warm milk.",
            "Add 1/4 tsp Palm Jaggery for a low-GI natural sweetener.",
            "Incorporate a small piece of cinnamon for metabolic health.",
          ],
        },
      ],
    },
  },
  {
    id: 9,
    title: "Millet Power Bowls: A 15-Minute Recipe for Sustained Energy",
    excerpt:
      "Replace your afternoon pasta with a Barnyard Millet salad. High in fiber, gluten-free, and designed to keep you full until dinner.",
    category: "Recipes",
    date: "Jan 26, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200", // Placeholder for Healthy Salad Bowl
    keywords: [
      "millet salad recipe",
      "barnyard millet lunch",
      "gluten free meal prep",
      "low calorie millet",
    ],
    targetLink: "/products/koda-millet",
    content: {
      intro:
        "The 'afternoon slump' is usually caused by high-carb lunches. By switching to Barnyard or Koda Millet, you provide your body with complex carbohydrates that release energy slowly over 4-5 hours.",
      sections: [
        {
          heading: "1. The 1:2 Water Ratio Mastery",
          text: "The secret to a perfect millet salad is the texture. Millets should be fluffy, not mushy. Using a strict 1:2 ratio of millet to water ensures each grain remains distinct, making it perfect for cold salads.",
          subPoints: [
            "Pre-soak millets for 30 minutes to reduce cooking time.",
            "Dry roast the millets for 2 minutes before boiling for a nutty aroma.",
            "Pressure cook for 2 whistles or open-pot cook for 10-12 minutes.",
          ],
        },
        {
          heading: "2. The Mediterranean-Millet Fusion",
          text: "Combine your cooked Barnyard millet with fresh cucumbers, cherry tomatoes, olives, and a drizzle of cold-pressed oil for a nutrient-dense Mediterranean power bowl.",
          subPoints: [
            "High fiber content (10%) promotes long-lasting satiety.",
            "Iron and Magnesium in millets support heart health and muscle recovery.",
            "A perfect meal-prep option that stays fresh in the fridge for 48 hours.",
          ],
        },
      ],
    },
  },
];
