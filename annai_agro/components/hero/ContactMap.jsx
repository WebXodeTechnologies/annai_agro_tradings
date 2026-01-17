"use client";
import React, { useState, useEffect } from 'react';
import { IoLocationSharp, IoMail, IoCall, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

const ContactSection = () => {

  const lat = 9.389796706698446;
  const lng = 78.49294641349941;

  const address = "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu 623704";


  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTknMjcuMSJOIDc4wrAzNScwMC4wIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  const [showMap, setShowMap] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center flex flex-col justify-center items-center">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-[#67944e]">Presence</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl">
            Visit our facility in <span className="font-semibold text-[#4d703b]">Ramanathapuram</span> or connect with our global export team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* LEFT COLUMN: Real Google Map */}
          <div className="relative min-h-112.5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-slate-100">
            {!showMap ? (
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="w-12 h-12 border-4 border-[#67944e] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-400 font-medium">Loading Interactive Map...</p>
              </div>
            ) : (
              <iframe
                title="Annai Agro Location"
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>

          {/* RIGHT COLUMN: Contact Details */}
          <div className="flex flex-col justify-between py-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#67944e] pl-4">
                Get in Touch
              </h3>

              <div className="grid gap-4">
                <ContactLink
                  href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                  icon={<IoLocationSharp />}
                  title="Visit Us"
                  value={address}
                />
                <ContactLink
                  href="tel:+91-9344295395"
                  icon={<IoCall />}
                  title="Call Support"
                  value="+91 9344295395"
                />
                <ContactLink
                  href="mailto:info@annaiagro.com"
                  icon={<IoMail />}
                  title="Email Us"
                  value="info@annaiagro.com"
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="font-bold text-slate-800 mb-4">Follow Our Export Journey</p>
              <div className="flex gap-4">
                <SocialIcon icon={<IoLogoLinkedin />} label="LinkedIn" color="hover:bg-blue-600" />
                <SocialIcon icon={<IoLogoFacebook />} label="Facebook" color="hover:bg-blue-700" />
                <SocialIcon icon={<IoLogoInstagram />} label="Instagram" color="hover:bg-pink-600" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ href, icon, title, value }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-slate-50 group">
    <div className="mt-1 w-10 h-10 shrink-0 flex items-center justify-center bg-[#f0fdf4] text-[#67944e] rounded-xl group-hover:bg-[#67944e] group-hover:text-white transition-colors">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</span>
      <span className="text-slate-700 font-medium leading-relaxed">{value}</span>
    </div>
  </a>
);

const SocialIcon = ({ icon, label, color }) => (
  <a
    href="#"
    aria-label={label}
    className={`w-12 h-12 flex items-center justify-center bg-white shadow-sm rounded-xl text-slate-400 transition-all hover:text-white ${color} hover:-translate-y-1`}
  >
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default ContactSection;