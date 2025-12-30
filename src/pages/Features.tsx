import Navbar from "@/components/layout/Navbar";
import FeaturesHero from "@/components/sections/FeaturesHero";
import FeaturesBenefits from "@/components/sections/FeaturesBenefits";
import FeaturesHowItWorks from "@/components/sections/FeaturesHowItWorks";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import Footer from "@/components/sections/Footer";
import lights from "@/assets/lights.png";

const FeaturesPage = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Lights Effect */}
      <img
        src={lights}
        alt=""
        className="fixed top-[-20%] left-1/2 -translate-x-1/2 scale-[1.18] w-screen pointer-events-none opacity-60 z-0"
      />

      <Navbar />
      <main id="main-content" className="relative z-10">
        <FeaturesHero />
        <FeaturesBenefits />
        <FeaturesHowItWorks />
        <CTA />
        <Testimonials />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
