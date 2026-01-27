"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "919344295395"; // Ensure country code is present
  
  // A crisper, trade-focused message
  const message = "Hello Annai Agro, I am interested in bulk procurement. Please share your Export Price List and Technical Specs.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 group">
      {/* The "Crispy" Trade Label */}
      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-200 shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
        <p className="text-[10px] font-black uppercase tracking-tighter text-slate-500 mb-1">Response Time: &lt; 15 mins</p>
        <p className="text-xs font-bold text-slate-900">Get Bulk Export Quote</p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-105 hover:-rotate-3 active:scale-95 transition-all duration-300 relative overflow-hidden"
      >
        {/* Modern Icon */}
        <FaWhatsapp className="text-3xl relative z-10" />
        
        {/* Subtle Shine Effect */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
      </a>
      
      {/* Pulse Effect */}
      <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </div>
  );
};

export default WhatsAppButton;