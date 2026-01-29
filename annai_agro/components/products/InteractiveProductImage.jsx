"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function InteractiveProductImage({ images, name }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Calculate position for zoom
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="sticky top-32 space-y-8">
      <div
        className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
                opacity: 1, 
                scale: isHovered ? 1.5 : 1, // Controlled zoom
                originX: `${mousePos.x}%`,
                originY: `${mousePos.y}%`
            }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
                scale: { type: "spring", stiffness: 150, damping: 25 },
                opacity: { duration: 0.3 } 
            }}
            className="w-full h-full relative p-4 md:p-8"
          >
            <Image
              src={images[index]}
              alt={`${name} view ${index + 1}`}
              fill
              priority
              className="object-contain drop-shadow-2xl transition-transform duration-500 rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar (Modern alternative to dots) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
           <motion.div 
             key={index}
             initial={{ width: "0%" }}
             animate={{ width: isHovered ? "0%" : "100%" }}
             transition={{ duration: 3, ease: "linear" }}
             className="h-full bg-[#67944e]"
           />
        </div>
      </div>

      {/* Modern Thumbnails */}
      <div className="flex gap-3 justify-center">
        {images.map((url, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`group relative h-20 w-20 rounded-2xl overflow-hidden transition-all duration-300 bg-white border ${
              idx === index 
                ? "border-[#67944e] ring-4 ring-[#67944e]/10 shadow-lg scale-105" 
                : "border-slate-100 grayscale hover:grayscale-0 hover:border-slate-300"
            }`}
          >
            <Image src={url} alt="thumbnail" fill className="object-contain p-2" />
          </button>
        ))}
      </div>
    </div>
  );
}