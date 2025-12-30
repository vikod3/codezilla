import Navbar from "@/components/layout/Navbar";
import BlogHero from "@/components/sections/BlogHero";
import BlogFeatured from "@/components/sections/BlogFeatured";
import BlogGrid from "@/components/sections/BlogGrid";
import Footer from "@/components/sections/Footer";
import lights from "@/assets/lights.png";

const Blog = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Lights Effect - Top of everything */}
      <img
        src={lights}
        alt=""
        className="fixed top-[-20%] left-1/2 -translate-x-1/2 scale-[1.18] w-screen pointer-events-none opacity-60 z-0"
      />

      <Navbar />
      <main id="main-content" className="relative z-10">
        <BlogHero />
        <BlogFeatured />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
