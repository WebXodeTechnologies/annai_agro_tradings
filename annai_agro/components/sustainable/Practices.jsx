const list = [
  { title: "Soil Health", items: ["Crop rotation", "Green manuring", "Biofertilizers"] },
  { title: "Water Conservation", items: ["Drip systems", "Mulching", "Rainwater harvesting"] },
  { title: "Pest Management", items: ["Biological control", "Botanical pesticides", "Cultural practices"] },
  { title: "Diversification", items: ["Intercropping", "Agroforestry", "Livestock integration"] }
];

export default function Practices() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="font-heading text-3xl mb-12">Trainings & Practices</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {list.map((item, i) => (
          <div key={i} className="group">
            <h4 className="font-heading text-xl text-slate-900 mb-4 border-l-4 border-[#67944e] pl-3">
              {item.title}
            </h4>
            <ul className="space-y-2">
              {item.items.map((li, idx) => (
                <li key={idx} className="font-body text-slate-500 text-sm group-hover:text-slate-900 transition-colors">
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}