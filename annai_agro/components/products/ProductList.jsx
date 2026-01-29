"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/constants/index';

const categories = ["All", "Spices", "Millets", "Cereals", "Sugar"];

export const ProductList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = useMemo(() => 
    activeTab === "All" ? products : products.filter(p => p.cat === activeTab)
  , [activeTab]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" aria-labelledby="portfolio-heading">
      
      {/* 1. Header: Semantic H1/H2 for SEO crawlers */}
      <header className="text-center mb-16 space-y-4">
        <h2 id="portfolio-heading" className="text-md font-black uppercase tracking-[0.3em] text-[#67944e]">
          Premium Indian Agro Exporter
        </h2>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
          Export Quality <span className="text-[#67944e]">Agro Products</span> from India
        </h1>
        <p className="max-w-2xl mx-auto text-slate-500 font-medium">
          Leading bulk exporter of Spices, Millets, and Cereals to global B2B markets.
        </p>
      </header>

      {/* 2. Tabs with ARIA for Accessibility */}
      <nav className="sticky top-24 z-20 bg-white/80 backdrop-blur-md py-6 mb-12" aria-label="Product categories">
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              aria-pressed={activeTab === cat}
              className={`px-6 md:px-10 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 border-2 
              ${activeTab === cat 
                ? "bg-[#67944e] border-[#67944e] text-white shadow-xl shadow-[#67944e]/20 scale-105" 
                : "border-slate-100 text-slate-400 hover:border-[#67944e] hover:text-[#67944e] bg-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. The Grid: Uses <article> for individual products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
        {filtered.map(product => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="group outline-none"
            title={`View wholesale details for ${product.name}`}
          >
            <article className="h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col">
              
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <Image 
                  src={Array.isArray(product.img) ? product.img[0] : (product.img || "/placeholder.png")} 
                  alt={`${product.name} wholesale supplier and exporter in India`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                   <p className="text-[10px] font-black uppercase tracking-tighter text-[#67944e]">
                    {product.cat} Export
                   </p>
                </div>
              </div>

              <div className="p-8 text-center grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#67944e] transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="w-10 h-0.5 bg-slate-100 mx-auto my-4 group-hover:w-20 group-hover:bg-[#67944e] transition-all duration-500"></div>
                <p className="text-xs font-medium text-slate-400 italic tracking-wide uppercase">
                  {product.scientificName}
                </p>
              </div>

              <div className="pb-6 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                 <span className="text-[10px] font-black text-[#67944e] uppercase tracking-[0.2em]">View Export Specs →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};