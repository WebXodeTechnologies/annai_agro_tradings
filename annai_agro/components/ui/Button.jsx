"use client";
import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const Button = ({ 
  text = "Know More", 
  href, 
  onClick, 
  className = "", 
  showIcon = true,
  variant = "primary" // primary: slate, success: green
}) => {
  
  const baseStyles = `group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 shadow-lg active:scale-95 focus:ring-2 focus:ring-offset-2 uppercase tracking-wider text-sm outline-none`;
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-[#67944e] focus:ring-[#67944e] hover:shadow-[#67944e]/30",
    success: "bg-[#67944e] text-white hover:bg-slate-900 focus:ring-slate-900 hover:shadow-slate-900/30",
  };

  const content = (
    <>
      <span className="relative z-10">{text}</span>
      {showIcon && (
        <FaLocationArrow className="relative z-10 text-[10px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
      {/* Shine Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" 
        aria-hidden="true"
      />
    </>
  );

  // Render Link if href exists, otherwise render Button
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;