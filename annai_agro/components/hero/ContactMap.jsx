"use client";
import React, { useState, useEffect } from 'react';
import { IoLocationSharp, IoMail, IoCall, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

const ContactSection = () => {
  // Updated Precise Coordinates
  const lat = 9.39436719368992; 
  const lng = 78.4861653601726;
  const address = "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu 623704";

  /**
   * Precise Map Embed URL 
   * - z=17: Optimal zoom level for facilities
   * - q: Centers the pin exactly on your coordinates
   */
  const mapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`;

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col justify-center items-center">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-[#67944e]">Presence</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl">
            Visit our facility in <span className="font-semibold text-[#4d703b]">Ramanathapuram</span> or connect with our global export team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Map Container */}
          <div className="relative min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-slate-50 group bg-slate-100">
            {!showMap ? (
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="w-10 h-10 border-4 border-[#67944e] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Loading Map...</p>
              </div>
            ) : (
              <iframe
                title="Annai Agro Location"
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>

          {/* RIGHT COLUMN: Contact Details */}
          <div className="flex flex-col justify-between py-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 border-l-4 border-[#67944e] pl-4 uppercase tracking-tighter">
                Direct Contact
              </h3>

              <div className="grid gap-2">
                <ContactLink
                  href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                  icon={<IoLocationSharp />}
                  title="Visit Us"
                  value={address}
                />
                <ContactLink
                  href="tel:+919344295395"
                  icon={<IoCall />}
                  title="Call Support"
                  value="+91 93442 95395"
                />
                <ContactLink
                  href="mailto:info@annaiagrotradings.com"
                  icon={<IoMail />}
                  title="Email Us"
                  value="info@annaiagrotradings.com"
                />
              </div>
            </div>

            {/* Social Section */}
            <div className="mt-8 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <p className="text-[10px] font-black text-[#67944e] uppercase tracking-[0.2em] mb-6">
                Follow Our Export Journey
              </p>
              <div className="flex gap-4">
                <SocialIcon 
                    icon={<IoLogoLinkedin />} 
                    label="LinkedIn" 
                    color="hover:bg-[#0077b5]" 
                    href="https://www.linkedin.com/in/gokulnath-ramesh-4434a93a4/" 
                />
                <SocialIcon 
                    icon={<IoLogoFacebook />} 
                    label="Facebook" 
                    color="hover:bg-[#1877f2]" 
                    href="https://www.facebook.com/profile.php?id=61587328765249" 
                />
                <SocialIcon 
                    icon={<IoLogoInstagram />} 
                    label="Instagram" 
                    color="hover:bg-[#e4405f]" 
                    href="#" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Sub-Component: ContactLink */
const ContactLink = ({ href, icon, title, value }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-5 rounded-2xl transition-all hover:bg-slate-50 group">
    <div className="mt-1 w-12 h-12 shrink-0 flex items-center justify-center bg-white text-[#67944e] rounded-xl shadow-sm border border-slate-100 group-hover:bg-[#67944e] group-hover:text-white transition-all duration-300">
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div>
      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</span>
      <span className="text-slate-800 font-bold leading-relaxed block group-hover:text-[#67944e] transition-colors">{value}</span>
    </div>
  </a>
);

/* Sub-Component: SocialIcon */
const SocialIcon = ({ icon, label, color, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-slate-100 rounded-xl text-slate-400 transition-all hover:text-white ${color} hover:-translate-y-1 hover:shadow-lg`}
  >
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default ContactSection;