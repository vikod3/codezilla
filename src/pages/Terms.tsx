import Navbar from "@/components/layout/Navbar";
import TermsHero from "@/components/sections/TermsHero";
import TermsContent from "@/components/sections/TermsContent";
import Footer from "@/components/sections/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <TermsHero />
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
