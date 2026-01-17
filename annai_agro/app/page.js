import About from "@/components/hero/About";
import BestSeller from "@/components/hero/BestSeller";
import Certifications from "@/components/hero/Certifications";
import ContactMap from "@/components/hero/ContactMap";
import HeroBanner from "@/components/hero/HeroBanner";
import Products from "@/components/hero/Products";
import Testimonial from "@/components/hero/Testimonial";
import Worldmap from "@/components/hero/Worldmap";


export default function Home() {
  return (
    <section>
      <HeroBanner />
      <About />
      <Products />
      <BestSeller />
      <Certifications/>
      <Worldmap/>
      <Testimonial/>
      <ContactMap/>
      
    </section>
  );
}
