import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Layers } from "lucide-react";
import featureHeroBg from "@/assets/features/feature-hero-bg.png";
import featureHeroImg from "@/assets/features/feature-hero-img.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

const FeaturesHero = () => {
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <TextFade direction="up" className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <SectionBadge icon={Layers} label="Features" />
            <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight lg:leading-[67px]">
              Create AI that seems like magic
            </h1>
            <p className="max-w-[400px] text-muted-foreground text-base leading-7">
              Lorem ipsum dolor sit amet consectetur nibh aliquam natoque
              pretium urna tristique vitae a aliquam fermentum rutrum nisi cras
              vulputate nunc enim.
            </p>
            <PrimaryButton className="mt-2">Our story</PrimaryButton>
          </TextFade>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden">
            <img
              src={featureHeroBg}
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <BlurFade delay={0.2} className="w-full flex items-center justify-center">
                <img
                  src={featureHeroImg}
                  alt="Feature interface"
                  className="w-full h-auto max-w-[90%] object-contain"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
