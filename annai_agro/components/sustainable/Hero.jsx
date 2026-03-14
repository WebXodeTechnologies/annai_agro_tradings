export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle Background Pattern or Gradient */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#67944e] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#67944e]/10 border border-[#67944e]/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67944e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#67944e]"></span>
            </span>
            <span className="text-[#67944e] font-body text-sm font-semibold tracking-wide uppercase">
              Soil is the source of life
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 tracking-tight leading-[1.05]">
            Nurturing Earth, <br />
            <span className="text-[#67944e]">Supplying Excellence.</span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Annai Agro Tradings specializes in the sustainable sourcing and global 
            trading of premium spices, millets, and cereals. We connect 150+ 
            dedicated farmers to international markets through transparency and trust.
          </p>

          {/* B2B Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center">
              <span className="font-heading text-xl font-bold">NPOP</span>
              <span className="font-body text-[10px] uppercase tracking-tighter">Certified Organic</span>
            </div>
            <div className="flex flex-col items-center border-x border-slate-200 px-8">
              <span className="font-heading text-xl font-bold">NOP</span>
              <span className="font-body text-[10px] uppercase tracking-tighter">US Standard</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading text-xl font-bold">EU</span>
              <span className="font-body text-[10px] uppercase tracking-tighter">Organic Standard</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border Graphic */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}