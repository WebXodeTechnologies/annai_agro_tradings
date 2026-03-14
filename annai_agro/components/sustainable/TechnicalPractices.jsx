const practices = [
  {
    title: "Soil Health Management",
    tags: ["Compost", "Biofertilizers", "Green Manuring"],
    content: "Restoring the earth's natural vitality. We utilize carbon-sequestering green manure and bio-enhancers to build the organic foundation for nutrient-dense spice cultivation."
  },
  {
    title: "Water Conservation",
    tags: ["Farm Ponds", "Mulching", "Drip"],
    content: "Precision hydration for a changing climate. Our rainwater harvesting and moisture-lock mulching ensure crop resilience and zero-waste water cycles year-round."
  },
  {
    title: "Integrated Pest Management",
    tags: ["IPM", "Botanical", "Biological"],
    content: "Purity by design. We replace synthetic hazards with pheromone traps and botanical extracts like Neem to guarantee 100% chemical-free, export-grade commodities."
  },
  {
    title: "Diversification & Crop Rotation",
    tags: ["Intercropping", "Mixed farming", "Livestock"],
    content: "Breaking monoculture for land longevity. By integrating nitrogen-fixing legumes, we naturally regenerate soil fertility while securing a diverse, year-round harvest."
  },
  {
    title: "Agroforestry",
    tags: ["Carbon Capture", "Biodiversity", "Economic Stability"],
    content: "Architecture for a greener future. We blend perennials with seasonal crops to maximize carbon capture, protect biodiversity, and secure long-term farmer prosperity."
  },
  {
    title: "Waste Recycling",
    tags: ["Crop Residue", "Vermicompost", "Biogas"],
    content: "Closing the loop on agriculture. We transform crop residues into high-grade organic vermicompost and clean energy, championing a zero-waste, circular value chain."
  }
];

export default function TechnicalPractices() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl text-slate-900 mb-4 font-bold">Scientific & Indigenous Training</h2>
          <p className="font-body text-slate-600 italic">
            &quot;Farming organically with minimal external inputs, restoring degraded soil and ecosystems.&quot;
          </p>
        </div>
        <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100">
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Main Crop focus</span>
          <span className="font-heading text-xl text-[#67944e]">Red Chili & Urad Dal</span>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {practices.map((p, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-50 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold bg-[#67944e]/10 text-[#67944e] px-2 py-1 rounded uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-heading text-2xl text-slate-900 mb-4">{p.title}</h3>
            <p className="font-body text-slate-500 text-sm leading-relaxed mb-8 grow">
              {p.content}
            </p>
            <div className="pt-6 border-t border-slate-50 text-[#67944e] font-body font-bold text-sm cursor-pointer hover:underline">
              View Training Modules →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}