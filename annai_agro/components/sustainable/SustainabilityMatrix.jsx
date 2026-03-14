const data = [
  {
    category: "Environmental",
    description: "Restoring the natural equilibrium of our farmlands.",
    items: [
      { title: "Soil Regeneration", detail: "Focus on humus building and microbial health." },
      { title: "Water Stewardship", detail: "Transitioning 100% of FPO lands to micro-irrigation." },
      { title: "Pollinator Safety", detail: "Eliminating synthetic neonicotinoids to protect bees." }
    ]
  },
  {
    category: "Economic",
    description: "Ensuring farming remains a dignified, profitable profession.",
    items: [
      { title: "Fair Income", detail: "Eliminating middle-men to provide direct export premiums." },
      { title: "Risk Mitigation", detail: "Diversified cropping to protect against market volatility." },
      { title: "Value Addition", detail: "On-farm primary processing to increase crop value." }
    ]
  }
];

export default function SustainabilityMatrix() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-heading text-4xl mb-4 text-slate-900">Our Triple-Bottom-Line Approach</h2>
        <p className="font-body text-slate-500 max-w-2xl">
          We measure success not just in metric tons exported, but in the health of the 
          soil and the wealth of the farmer.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {data.map((col, idx) => (
          <div key={idx} className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl text-[#67944e] mb-2">{col.category}</h3>
              <p className="font-body text-slate-500 text-sm">{col.description}</p>
            </div>
            <div className="space-y-4">
              {col.items.map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all">
                  <h4 className="font-heading text-lg text-slate-800 mb-1">{item.title}</h4>
                  <p className="font-body text-slate-500 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}