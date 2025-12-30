import { PrimaryButton } from "@/components/ui/primary-button";
import ctaBg from "@/assets/cta-bg.png";
import { TextFade } from "@/components/ui/text-fade";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden py-16 md:py-24 px-6 md:px-12"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TextFade direction="up" className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-[600px] text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
              Everything you need to unlock excellence
            </h2>
            <p className="max-w-[500px] text-muted-foreground text-base leading-7">
              Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci
              libero eu laoreet
            </p>
            <PrimaryButton className="mt-2">Get Started for Free</PrimaryButton>
          </TextFade>
        </div>
      </div>
    </section>
  );
};

export default CTA;
