import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const details = [
    {
      label: "Export Inquiries",
      value: "+91-9344295395",
      sub: "gokul@annaiagrotradings.com",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: "Registered Office",
      value: "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu, 623704",
      sub: "GSTIN: 33CNFPG7152R3ZI",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: "Operational Hours",
      value: "Mon - Sat: 09:00 - 18:00",
      sub: "IST (UTC +5:30)",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
          Our <span className="text-[#67944e]">Supply</span> Desk
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-md font-normal text-md">
          Whether you need a technical data sheet for Turmeric or a shipping
          quote for Seeraga Samba, our export team is ready to assist.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-8">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="group flex items-start gap-6 border-l-4 border-slate-100 pl-6 hover:border-[#67944e] transition-all duration-300"
          >
            {/* Icon Circle */}
            <div className="mt-1 p-3 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#67944e]/10 group-hover:text-[#67944e] transition-colors">
              {item.icon}
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#67944e] mb-1">
                {item.label}
              </p>
              <p className="text-xl font-bold text-slate-900 group-hover:text-[#67944e] transition-colors">
                {item.value}
              </p>
              <p className="text-slate-500 text-sm font-medium">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
