import { SectionBadge } from "@/components/ui/section-badge";
import { Layers, Cpu, Building2 } from "lucide-react";
import feature3Bg from "@/assets/features/feature-3-bg.png";
import feature3Img from "@/assets/features/feature-3-img.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

const UseCaseFeatures = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        {/* Feature - Image Left, Content Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden">
            <img
              src={feature3Bg}
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <BlurFade delay={0.2} className="w-full flex items-center justify-center">
                <img
                  src={feature3Img}
                  alt="Analytics chart"
                  className="w-full h-auto max-w-[85%] object-contain"
                />
              </BlurFade>
            </div>
          </div>

          {/* Content */}
          <TextFade direction="up" className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <SectionBadge icon={Layers} label="Features" />
            <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
              Works With the Tools You Already Use
            </h2>
            <p className="text-muted-foreground text-base leading-7 max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur eget sollicitudin maecenas
              ut eget in odio odio velit amet erat id ultrices ut. Imperdiet
              feugiat mattis est id blandit risus enim.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground text-sm">Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground text-sm">
                  Built for B2B SaaS
                </span>
              </div>
            </div>
          </TextFade>
        </div>
      </div>
    </section>
  );
};

export default UseCaseFeatures;
