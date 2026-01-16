"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/constants";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import TrustBanner from "./TrustBanner";

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="cert-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Improved for SEO with Keywords */}
        <header className="flex flex-col md:flex-row items-center justify-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2
              id="cert-heading"
              className="font-heading text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
            >
              Export Licensed & <span className="text-[#67944e]">Verified</span>
            </h2>
            <p className="text-slate-600 max-w-xl font-body text-lg leading-relaxed">
              Annai Agro Tradings is a fully{" "}
              <strong>authorized Indian exporter</strong>. We comply with
              international safety standards to ensure secure B2B global trade.
            </p>
          </div>
        </header>

        {/* Certification Grid - Semantic List for SEO */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.li
              key={cert.id}
              variants={itemVariants}
              className="group relative p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#67944e]/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Logo Container - Optimized for Performance */}
              <div className="relative w-24 h-16 mb-6 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105">
                <Image
                  src={cert.image}
                  alt={`${cert.title} License Logo`}
                  fill
                  sizes="96px"
                  className="object-contain"
                  // Use priority if this section is near the top of the fold
                  loading="lazy"
                />
              </div>

              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#67944e] mb-4">
                  {cert.subtitle}
                </p>
                <p className="text-slate-600 text-sm font-body leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Background Decorative Icon */}
              <div
                className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-slate-900 pointer-events-none"
                aria-hidden="true"
              >
                <HiOutlineBadgeCheck size={100} />
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom Banner */}
        <TrustBanner />
      </div>
    </section>
  );
};

export default Certifications;
