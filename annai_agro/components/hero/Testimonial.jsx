"use client";
import React, { useEffect, useState } from 'react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

/**
 * SEO Optimized Testimonial Data
 * Keywords integrated: agro products exporter india, organic food exporter india, 
 * b2b food supplier india, bulk agricultural products supplier, indian spices and millets exporter
 */
const testimonials = [
  {
    quote: "As a leading agro products exporter in India, Annai Agro's consistency in spice quality is unmatched. Their turmeric and chili exports set a high benchmark.",
    name: "Rajesh Kumar",
    designation: "Procurement Head at Global Spices LLC",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // Reduced width for performance
  },
  {
    quote: "Finding a reliable b2b food supplier in India was tough until we partnered with Annai Agro. Their organic food certifications make them our top choice.",
    name: "Elena Rodriguez",
    designation: "Import Director at EuroFoods Distribution",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "The best organic food exporter from India. Their bulk agricultural products arrive with international-standard packaging every single time.",
    name: "Sarah Jenkins",
    designation: "Operations Manager at HealthyLife Markets",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Exceptional quality. Their position as a premier Indian spices and millets exporter is well-deserved based on the freshness of their products.",
    name: "David Chen",
    designation: "Supply Chain Lead at AsiaGrains Group",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "For bulk agricultural products, Annai Agro provides the scalability we need. Their production facility ensures our large orders are processed without delay.",
    name: "Michael Thompson",
    designation: "Founder of TradeRoute Imports",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
];

const Testimonial = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section 
      className="py-20 w-full" 
      aria-labelledby="testimonial-title"
    >
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <header className="space-y-4">
          <h2 
            id="testimonial-title" 
            className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight"
          >
            Voices of Our <span className="text-[#67944e]">Global Partners</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover why global businesses trust Annai Agro as their premier 
            <strong className="font-bold text-[#4d703b]"> B2B food supplier in India</strong>.
          </p>
        </header>
      </div>

      {/* Wrapping in a div with min-height to prevent Layout Shift (CLS) */}
      <div className="min-h-100 flex items-center justify-center">
        {isMounted ? (
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        ) : (
          <div className="h-100 w-full animate-pulse bg-slate-200 rounded-3xl" />
        )}
      </div>
    </section>
  );
}

export default Testimonial;