
export default function FutureFocus() {
  const futureItems = [
    {
      title: "Precision Farming",
      desc: "Utilizing data-driven insights to optimize resource use and maximize crop yields while minimizing environmental impact."
    },
    {
      title: "Traceability Systems",
      desc: "Implementing blockchain-ready systems to ensure complete transparency from the farm gate to the global buyer."
    },
    {
      title: "Sustainable Value Chains",
      desc: "Building export chains that prioritize carbon neutrality and fair value distribution for all stakeholders."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="font-heading text-3xl text-white mb-4">
                The Future of <br />
                <span className="text-[#67944e]">Sustainable Export</span>
              </h2>
              <p className="font-body text-slate-400 text-sm leading-relaxed">
                We are evolving our indigenous methods with modern technology to ensure food security and climate resilience for the global market.
              </p>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {futureItems.map((item, idx) => (
                <div key={idx} className="border-l border-slate-700 pl-6">
                  <h4 className="font-heading text-white text-lg mb-2">{item.title}</h4>
                  <p className="font-body text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-heading text-2xl text-white">100%</p>
              <p className="font-body text-xs text-[#67944e] uppercase tracking-widest">Traceable</p>
            </div>
            <div>
              <p className="font-heading text-2xl text-white">NPOP</p>
              <p className="font-body text-xs text-[#67944e] uppercase tracking-widest">Certified</p>
            </div>
            <div>
              <p className="font-heading text-2xl text-white">Eco</p>
              <p className="font-body text-xs text-[#67944e] uppercase tracking-widest">Friendly</p>
            </div>
            <div>
              <p className="font-heading text-2xl text-white">Fair</p>
              <p className="font-body text-xs text-[#67944e] uppercase tracking-widest">Income</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}