import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";
import CustomerStories from "@/components/sections/CustomerStories";
import Solutions from "@/components/sections/Solutions";
import Features from "@/components/sections/Features";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Companies />
        <CustomerStories />
        <Solutions />
        <Features />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;