import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { FaLocationArrow } from "react-icons/fa6";
import Button from "../ui/Button";

const About = () => {
  const features = [
    "Spice Board Registered Exporter",
    "Direct Sourcing from Farmers",
    "Certified Organic Standards",
    "Global Logistics Excellence",
  ];

  return (
    <section
      className="py-16 md:py-24 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image with LCP Optimization */}
          <div className="relative order-1 lg:order-1">
            <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 w-full rounded-3xl overflow-hidden shadow-2xl z-10 bg-slate-100">
              <Image
                src="/hero/spices-1.jpg"
                alt="Premium Indian Spices and Organic Millets - Annai Agro Tradings Export Quality"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Decorative Element - Optimized for performance (no blur on mobile) */}
            <div
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#67944e] rounded-full -z-10 opacity-20 blur-3xl"
              aria-hidden="true"
            />
          </div>

          {/* Right Side: SEO Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-2">
            <header>
              <h2
                id="about-heading"
                className="font-heading text-3xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                Premium{" "}
                <span className="text-[#67944e]">Agro Products Exporter</span>{" "}
                from India
              </h2>
            </header>

            <article className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed font-body">
                <strong>Annai Agro Tradings</strong> is a globally recognized
                <span className="text-slate-600 font-body">
                  {" "}
                  organic food exporter in India
                </span>
                . We specialize in manufacturing and supplying premium
                <strong> Indian spices, millets</strong>, traditional rice, and
                essential cereals tailored for international markets.
              </p>

              <p className="text-slate-600 leading-relaxed font-body">
                As a premier <strong>B2B food supplier in India</strong> and a
                <strong> Spice Board registered exporter</strong>, we bridge the
                gap between rural Indian farms and global quality standards. Our
                <strong> bulk agricultural products</strong> ensure
                uncompromising freshness and nutritional integrity for every
                shipment.
              </p>
            </article>

            {/* Feature List - Enhanced Accessibility */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 py-6"
              role="list"
            >
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#67944e]/10 text-[#67944e] shrink-0 transition-all group-hover:bg-[#67944e] group-hover:text-white"
                    aria-hidden="true"
                  >
                    <HiOutlineCheckBadge size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-[15px] leading-tight pt-1">
                      {item}
                    </span>
                    <div className="h-0.5 w-0 bg-[#67944e] transition-all duration-300 group-hover:w-full mt-1" />
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button - Keyboard accessible */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button text="Know More" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
