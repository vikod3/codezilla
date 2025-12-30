import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/sections/AboutHero";
import AboutVision from "@/components/sections/AboutVision";
import AboutValues from "@/components/sections/AboutValues";
import AboutLeadership from "@/components/sections/AboutLeadership";
import Testimonials from "@/components/sections/Testimonials";
import AboutFAQ from "@/components/sections/AboutFAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutVision />
        <AboutValues />
        <AboutLeadership />
        <Testimonials />
        <AboutFAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
