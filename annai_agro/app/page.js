import About from "@/components/hero/About";
import BestSeller from "@/components/hero/BestSeller";
import Certifications from "@/components/hero/Certifications";
import HeroBanner from "@/components/hero/HeroBanner";
import Products from "@/components/hero/Products";

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <About />
      <Products />
      <BestSeller />
      <Certifications/>
    </section>
  );
}
