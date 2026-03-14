const pillars = [
  {
    title: "Environmental",
    points: ["Soil conservation & regeneration", "Efficient water management", "Biodiversity protection", "Reduced GHG emissions"]
  },
  {
    title: "Economic",
    points: ["Stable and fair income", "Reduced input dependency", "Direct Market access", "Value addition"]
  },
  {
    title: "Social",
    points: ["Safe working conditions", "Fair wages", "Knowledge sharing", "Rural employment"]
  }
];

export default function Pillars() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl mb-4">Our Sustainability Policy</h2>
        <p className="font-body text-slate-500 max-w-xl mx-auto">Focusing on long-term ecological balance and farmer profitability.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border-b-4 border-[#67944e] shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-heading text-2xl mb-6 text-[#67944e]">{pillar.title}</h3>
            <ul className="space-y-3">
              {pillar.points.map((p, idx) => (
                <li key={idx} className="font-body text-slate-600 flex items-start gap-2">
                  <span className="text-[#67944e] mt-1 text-xs">●</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}