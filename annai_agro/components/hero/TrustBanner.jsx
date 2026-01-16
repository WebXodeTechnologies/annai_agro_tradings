"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TrustBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
    >
      {/* Content Side */}
      <div className="relative z-10 text-center md:text-left">
        <motion.h4 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-2"
        >
          Hassle-Free Global Shipping
        </motion.h4>
        <p className="text-slate-400 text-sm max-w-md italic leading-relaxed">
          We handle the complex paperwork. Every shipment comes with verified 
          health certificates and quality lab reports required by your country&apos;s customs.
        </p>
      </div>

      {/* Stats Side */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="relative z-10 flex items-center gap-6 bg-white/5 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10"
      >
        <div className="text-center">
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="block text-2xl font-black text-[#67944e]"
          >
            100%
          </motion.span>
          <span className="text-[10px] uppercase tracking-widest opacity-60">
            Legal & Verified
          </span>
        </div>

        <div className="w-px h-10 bg-white/10" />

        <div className="text-center">
          <span className="block text-2xl font-black text-[#67944e]">
            Direct
          </span>
          <span className="text-[10px] uppercase tracking-widest opacity-60">
            Export Ready
          </span>
        </div>
      </motion.div>

      {/* Animated Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#67944e] rounded-full blur-[100px]" 
      />
    </motion.div>
  );
};

export default TrustBanner;