import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog/blog-1.png";
import { BlurFade } from "@/components/ui/blur-fade";

const BlogFeatured = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center rounded-2xl border border-white/10 p-6">
            {/* Image */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
              <img
                src={blog1}
                alt="Power and Potential of Blockchain Technology"
                className="w-full h-auto object-cover grayscale"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <span className="text-muted-foreground text-sm leading-6">
                27 Feb, 2024
              </span>
              <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                Power and Potential of Blockchain Technology
              </h2>
              <p className="text-muted-foreground text-base leading-7">
                Take the first step towards embracing the transformative power of
                Web3 and blockchain technology.
              </p>
              <Link 
                to="/blog/blockchain-technology" 
                className="flex items-center gap-2 text-foreground font-semibold text-base leading-7 hover:opacity-80 transition-opacity w-fit mt-4"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default BlogFeatured;
