import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import lights from "@/assets/lights.png";
import { TextFade } from "@/components/ui/text-fade";
import { PrimaryButton } from "@/components/ui/primary-button";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Lights Effect */}
      <img
        src={lights}
        alt=""
        className="fixed top-[-20%] left-1/2 -translate-x-1/2 scale-[1.18] w-screen pointer-events-none opacity-60 z-0"
        loading="lazy"
      />

      <Navbar />
      <main id="main-content" className="relative z-10">
        <section className="pt-48 pb-20 px-4 min-h-[70vh] flex items-center justify-center">
          <TextFade direction="up" className="text-center flex flex-col items-center gap-6">
            <span className="text-8xl font-bold text-foreground">404</span>
            <h1 className="text-3xl md:text-4xl font-normal text-foreground">
              Page not found
            </h1>
            <p className="text-muted-foreground text-base leading-7 max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <PrimaryButton>Return to Home</PrimaryButton>
            </Link>
          </TextFade>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
