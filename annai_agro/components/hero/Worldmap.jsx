"use client";
import { motion, useInView } from "framer-motion";
import { GlobeSection } from "../ui/globe-section";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Exporting Countries", value: 10, suffix: "+" },
  { label: "Varieties of Spices & Agro Products", value: 135, suffix: "+" },
  { label: "Local Market Served", value: 50, suffix: "+" },
  { label: "Value For Money", value: 100, suffix: "%" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Triggers when 50% visible

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    if (isInView) {
      let totalMiliseconds = 2000; // 2 seconds duration
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      // Reset when it leaves viewport so it loops next time
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(0);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ExportMap() {
  return (
    <section className="py-20 bg-white w-full overflow-hidden" aria-labelledby="export-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 min-h-[400px] flex items-center justify-center">
            <GlobeSection />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <header>
              <h2 id="export-heading" className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight">
                Trusted <span className="text-[#67944e]">Agro Products Exporter from India</span>
              </h2>
            </header>

            <div className="space-y-4 text-slate-600 font-body text-lg leading-relaxed">
              <p>As a leading <strong className="text-slate-900">bulk agricultural products supplier</strong>, we ensure international standards...</p>
              <p>We specialize in premium <strong className="text-slate-900">Indian spices and millets exporter</strong> services...</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats Grid using <dl> */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-100 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <dt className="text-3xl md:text-4xl font-black text-[#67944e] font-heading">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="text-sm md:text-base text-slate-700 font-medium max-w-[150px] mx-auto">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}