import Hero from "@/components/sustainable/Hero";
import FpoSection from "@/components/sustainable/FpoSection";
import Pillars from "@/components/sustainable/Pillars";
import FutureFocus from "@/components/sustainable/FutureFocus";
import TechnicalPractices from "@/components/sustainable/TechnicalPractices";
import SustainabilityMatrix from "@/components/sustainable/SustainabilityMatrix";

export const metadata = {
    title: "Sustainable Agriculture",
    description:
        "Learn about our commitment to organic farming, soil health, and our 150+ farmer network at Annai Agro Tradings.",
};

export default function SustainableAgriculture() {
    return (
        <div className="space-y-24">
            <Hero />
            <FpoSection />
            <Pillars />

            <div className="bg-slate-50 py-24">
                <TechnicalPractices />
            </div>
            <FutureFocus />

            {/* Final Slogan Section */}
            <section className="max-w-7xl mx-auto px-6 text-center py-12">
                <div className="bg-[#67944e] rounded-3xl p-12 text-white">
                    <h2 className="font-heading text-3xl md:text-5xl mb-6 italic">
                        &quot;Soil is the source of life&quot;
                    </h2>
                    <p className="font-body text-lg opacity-90 max-w-2xl mx-auto">
                        It is our duty to protect the soil. Let&apos;s change the soil and
                        increase the yield for a better tomorrow.
                    </p>
                </div>
            </section>
        </div>
    );
}
