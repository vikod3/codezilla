import Navbar from "@/components/layout/Navbar";
import UseCaseHero from "@/components/sections/UseCaseHero";
import UseCaseSolutions from "@/components/sections/UseCaseSolutions";
import UseCaseSolutionsGrid from "@/components/sections/UseCaseSolutionsGrid";
import Integrations from "@/components/sections/Integrations";
import UseCaseFeatures from "@/components/sections/UseCaseFeatures";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import Footer from "@/components/sections/Footer";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <UseCaseHero />
        <UseCaseSolutions />
        <UseCaseSolutionsGrid />
        <Integrations />
        <UseCaseFeatures />
        <Pricing />
        <Testimonials />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
