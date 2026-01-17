"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = ["All", "Spices", "Millets", "Cereals", "Sugar"];

const PRODUCTS = [
  {
    id: 1,
    name: "Dry Red Chilli",
    cat: "Spices",
    img: "/gallery/Dry chilli.jpg",
  },
  { id: 2, name: "Turmeric", cat: "Spices", img: "/gallery/turmeric.jpg" },
  { id: 3, name: "Cardamom", cat: "Spices", img: "/gallery/card.jpg" },
  { id: 4, name: "Black Pepper", cat: "Spices", img: "/gallery/bp.jpg" },
  { id: 5, name: "Clove", cat: "Spices", img: "/gallery/clove.jpg" },
  {
    id: 6,
    name: "Koda Millet",
    cat: "Millets",
    img: "/gallery/kodamillet.jpg",
  },
  {
    id: 7,
    name: "Barnyard Millet",
    cat: "Millets",
    img: "/gallery/banyard.jpg",
  },
  {
    id: 8,
    name: "Little Millet",
    cat: "Millets",
    img: "/gallery/littlemiller.jpg",
  },
  {
    id: 9,
    name: "Foxtail Millet",
    cat: "Millets",
    img: "/gallery/foxtail.jpg",
  },
  {
    id: 10,
    name: "Pearl Millet",
    cat: "Millets",
    img: "/gallery/peral millet.jpg",
  },
  { id: 11, name: "Sorghum Red", cat: "Millets", img: "/gallery/sogum.jpg" },
  { id: 12, name: "Ragi", cat: "Millets", img: "/gallery/ragi millet.jpg" },
  {
    id: 13,
    name: "Seeraga Samba",
    cat: "Cereals",
    img: "/gallery/seeraga samba.jpg",
  },
  { id: 14, name: "Red Rice", cat: "Cereals", img: "/gallery/RED.jpg" },
  { id: 15, name: "Palm Jaggery", cat: "Sugar", img: "/gallery/palm.jpg" },
];

const ProductGallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = useMemo(() => {
    return activeTab === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === activeTab);
  }, [activeTab]);

  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h2
            id="gallery-heading"
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Our Premium <span className="text-[#4d703b]">Collection</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Directly sourced from Indian farms. Explore our
            <span className="font-bold text-slate-900"> export-quality </span>
            agro-products curated for global standards.
          </p>
        </header>

        {/* Filter Tabs - Accessibility Optimized */}
        <nav
          className="flex flex-wrap justify-center gap-3 mb-16"
          aria-label="Product categories"
        >
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 border-2 active:scale-95 ${
                activeTab === tab
                  ? "bg-[#67944e] border-[#67944e] text-white shadow-lg"
                  : "border-slate-100 text-slate-600 hover:border-[#67944e] hover:text-[#67944e]"
              }`}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Product Grid - Semantic Article Usage */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          role="list"
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              role="listitem"
              className="group relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 aspect-square shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={product.img}
                alt={`Premium ${product.name} - ${product.cat} from Annai Agro`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />

              {/* Persistent info for SEO / Visual context */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-[#a3e635] text-xs font-black uppercase tracking-[0.2em] mb-2">
                  {product.cat}
                </p>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  {product.name}
                </h3>
                {/* Hidden text for Screen Readers */}
                <span className="sr-only">
                  Click to view detailed specifications for {product.name}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section - Enhanced for Performance */}
        <footer className="mt-20 text-center">
          <Link
            href="/products"
            prefetch={true}
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-[#67944e] transition-all transform hover:scale-105 shadow-2xl active:scale-95"
            aria-label="Navigate to products page for detailed specifications"
          >
            Detailed Specifications
            <svg
              className="w-6 h-6 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default ProductGallery;
