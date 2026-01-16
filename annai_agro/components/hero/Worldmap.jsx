"use client";
import { motion } from "framer-motion";
import { GlobeSection } from "../ui/globe-section";

const stats = [
  { label: "Exporting Countries", value: "10+" },
  { label: "Varieties of Spices & Agro Products", value: "135+" },
  { label: "Local Market Served", value: "50+" },
  { label: "Value For Money", value: "100%" },
];

export default function ExportMap() {
  return (
    <section
      className="py-20 bg-white w-full overflow-hidden"
      aria-labelledby="export-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Globe - Using a container with aspect ratio for Lighthouse CLS scores */}
          <div className="order-2 lg:order-1 min-h-100 flex items-center justify-center">
            <GlobeSection />
          </div>

          {/* Right: SEO Optimized Marketing Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <header>
              <h2
                id="export-heading"
                className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight"
              >
                Trusted{" "}
                <span className="text-[#67944e]">
                  Agro Products Exporter from India
                </span>{" "}
                to 10+ Countries
              </h2>
            </header>

            <div className="space-y-4 text-slate-600 font-body text-lg leading-relaxed">
              <p>
                As a leading{" "}
                <strong className="text-slate-900">
                  bulk agricultural products supplier
                </strong>
                , we ensure international standards from sourcing to private
                label packaging. Our diligence has made us a preferred choice
                for those seeking a reliable
                <strong className="text-slate-900">
                  {" "}
                  B2B food supplier in India
                </strong>
                .
              </p>
              <p>
                We specialize in premium{" "}
                <strong className="text-slate-900">
                  Indian spices and millets exporter
                </strong>{" "}
                services and agro-derivatives, acting as a top{" "}
                <strong className="text-slate-900">
                  organic food exporter from India
                </strong>{" "}
                to the EU, UK, USA, Malaysia, Middle East, and Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-100 pt-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center space-y-2"
            >
              <dt className="text-3xl md:text-4xl font-black text-[#67944e] font-heading">
                {stat.value}
              </dt>
              <dd className="text-sm md:text-base text-slate-500 font-medium max-w-37.5 mx-auto">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
