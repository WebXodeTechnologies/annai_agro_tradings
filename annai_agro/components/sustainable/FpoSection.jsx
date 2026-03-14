import Image from "next/image";
import {
  ShieldCheck,
  Workflow,
  Users2,
  Handshake,
} from "lucide-react";



export default function FpoSection() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Global Compliance",
      desc: "NPOP, NOP, & EU Organic Certifications",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Backward Integration",
      desc: "Specialized in Red Chili & Urad Dal supply chains",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Content */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users2 className="text-[#67944e] w-5 h-5" />
            <span className="font-body font-bold text-[#67944e] uppercase tracking-[0.2em] text-xs">
              Farmer Collective
            </span>
          </div>

          <h2 className="font-heading text-4xl lg:text-5xl text-slate-900 mb-6 leading-[1.1]">
            Empowering Farmers through <br />
            <span className="text-[#67944e]">Roots Organic Association</span>
          </h2>

          <p className="font-body text-slate-600 leading-relaxed mb-10 text-lg">
            Beyond trading, we lead a Farmer Producer Organization (FPO)
            dedicated to the welfare of our agricultural community. With over{" "}
            <strong className="text-slate-900">150+ farmers</strong>, we bridge the gap between traditional
            soil wisdom and international trade standards.
          </p>

          <div className="grid gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 p-6 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white group"
              >
                <div className="bg-[#67944e]/10 p-3 rounded-xl text-[#67944e] group-hover:bg-[#67944e] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-lg">
                    {item.title}
                  </h4>
                  <p className="font-body text-slate-500 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image & Trust Card */}
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-[#67944e]/5 rounded-[2.5rem] -rotate-2 hidden md:block" />
          
          <div className="relative rounded-3xl overflow-hidden aspect-4/5 md:aspect-square shadow-2xl z-10">
            <Image
              src="https://i.pinimg.com/1200x/67/39/18/6739180698b78019b9e96148e47f2ba2.jpg"
              alt="Farmers in field"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Premium Floating Trust Card */}
          <div className="absolute -bottom-12 -right-6 lg:-right-12 bg-white p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 hidden md:block max-w-[320px] w-full z-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* Pulsing indicator */}
            <div className="absolute top-6 right-6 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67944e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#67944e]"></span>
            </div>

            <div className="flex items-center gap-4  border-b border-slate-100">
              <div className="bg-[#67944e]/10 p-3 rounded-xl text-[#67944e]">
                <Handshake className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-xl leading-tight">
                  Direct Farmer Sourced
                </h3>
                <p className="text-[10px] font-body text-[#67944e] uppercase tracking-widest mt-1 font-bold">
                  Ethical Partnership
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}