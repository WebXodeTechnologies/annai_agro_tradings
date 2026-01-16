import React from "react";
import Image from "next/image";
import { BEST_SELLERS } from "@/constants";
import Button from "../ui/Button";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const BestSeller = () => {
     return (
    <section className="py-20" aria-labelledby="bestseller-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="p-2.5 bg-[#67944e]/10 text-[#67944e] rounded-xl" aria-hidden="true">
            <HiOutlineArrowTrendingUp size={28} />
          </div>
          <div>
            <h2 id="bestseller-title" className="font-heading text-3xl font-black text-slate-900">
              Best Selling <span className="text-[#67944e]">Exports</span>
            </h2>
            <p className="text-slate-500 text-sm font-body mt-1">
              Our highest-demand agricultural products globally.
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEST_SELLERS.map((item, index) => (
            <article 
              key={item.id} 
              className="group bg-white rounded-3xl p-4 border border-slate-200 hover:border-[#67944e]/50 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={`${item.name} - Premium Export Quality from Annai Agro`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-slate-100">
                  <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">
                    🔥 Top Demand
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Technical Specs for B2B SEO */}
                <div className="space-y-2 mb-6">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-body">
                      <div className="w-1 h-1 rounded-full bg-[#67944e]" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* CTA - Using your reusable button */}
                <Button 
                  text="Check Availability" 
                  href={`/products/${item.slug}`}
                  variant="primary"
                  className="w-full text-xs py-3"
                  showIcon={true}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSeller



