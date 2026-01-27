import React from 'react';
import Image from 'next/image';
import { PRODUCT_CATEGORIES } from '@/constants';
import Button from '../ui/Button';

const Products = () => {
  return (
    <section 
      className="py-20 bg-white" 
      aria-labelledby="products-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h2 
            id="products-title"
            className="font-heading text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Our <span className="text-[#67944e]">Product Portfolio</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Leading <strong>Agro products exporter in India</strong>, providing 
            premium spices, millets, and organic cereals for global B2B supply.
          </p>
        </header>

        {/* Product Grid - Semantic List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((cat, index) => (
            <li 
              key={cat.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              {/* Image Section - Performance Optimized */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-200">
                <Image
                  src={cat.image}
                  alt={`Bulk supply of ${cat.category} - Annai Agro Tradings`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  // Load first 4 images with priority for better LCP
                  priority={index < 4}
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
                <h3 className="absolute bottom-4 left-6 text-white font-heading text-2xl font-bold">
                  {cat.category}
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <p className="text-md text-neutral-600 mb-4 font-body leading-relaxed">
                  {cat.description}
                </p>
                
                {/* Items Tag Cloud - B2B Keywords */}
                <div className="flex flex-wrap gap-2 mb-6" aria-label={`${cat.category} varieties`}>
                  {cat.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg ${cat.color} text-slate-800 border border-slate-200/50 transition-transform hover:scale-105 cursor-default`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA - Fixed bottom alignment */}
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <Button 
                    text={`View ${cat.category}`} 
                    href={`/products`}
                    size="sm"
                    className="w-full justify-center"
                    showIcon={true}
                    ariaLabel={`Explore our ${cat.category} range`}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;