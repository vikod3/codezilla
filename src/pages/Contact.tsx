import Navbar from "@/components/layout/Navbar";
import ContactHero from "@/components/sections/ContactHero";
import Footer from "@/components/sections/Footer";
import lights from "@/assets/lights.png";

const Contact = () => {
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
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
