import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Solution } from "@/components/Solution";
import { ProductEcosystem } from "@/components/ProductEcosystem";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ROICalculator } from "@/components/ROICalculator";
import { Guarantee } from "@/components/Guarantee";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-terra-black noise-overlay">
      {/* Section 1: Hero - The Hook */}
      <Hero />

      {/* Section 2: Pain Points - Agitate (Campus/Municipal specific) */}
      <PainPoints />

      {/* Section 3: Solution - Introduce TerraSYNC™ GMA */}
      <Solution />

      {/* Section 3.5: Product Ecosystem - Technology Showcase */}
      <ProductEcosystem />

      {/* Section 4: How It Works - Remove Complexity Fear */}
      <HowItWorks />

      {/* Section 5: Testimonials - Social Proof (Universities & Institutions) */}
      <Testimonials />

      {/* Section 6: ROI Calculator - Interactive Engagement + Environmental Impact */}
      <ROICalculator />

      {/* Section 7: Guarantee - Risk Reversal */}
      <Guarantee />

      {/* Section 8: Final CTA - Lead Capture + Booking */}
      <FinalCTA />

      {/* Section 9: Footer */}
      <Footer />
    </main>
  );
}
