import Navbar from "@/components/layout/Navbar";
import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";
import Footer from "@/components/sections/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
