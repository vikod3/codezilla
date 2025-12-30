import { PrimaryButton } from "@/components/ui/primary-button";
import feature1Bg from "@/assets/features/feature-1-bg.png";
import feature2Bg from "@/assets/features/feature-2-bg.png";
import feature3Bg from "@/assets/features/feature-3-bg.png";
import work1 from "@/assets/how-it-works/work-1.png";
import work2 from "@/assets/how-it-works/work-2.png";
import work3 from "@/assets/how-it-works/work-3.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface StepCard {
  step: number;
  title: string;
  description: string;
  bgImage: string;
  topImage: string;
}

const steps: StepCard[] = [
  {
    step: 1,
    title: "Discover & strategize",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat posuere scelerisque feugiat",
    bgImage: feature1Bg,
    topImage: work1,
  },
  {
    step: 2,
    title: "Design & develop",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat posuere scelerisque feugiat",
    bgImage: feature2Bg,
    topImage: work2,
  },
  {
    step: 3,
    title: "Launch & optimize",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat posuere scelerisque feugiat",
    bgImage: feature3Bg,
    topImage: work3,
  },
];

const FeaturesHowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            This is how it works
          </h2>
          <p className="max-w-[450px] text-muted-foreground text-base leading-7">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci
            libero eu laoreet sed augue leo placerat posuere scelerisque feugiat
          </p>
        </TextFade>

        <div className="flex flex-col gap-6 w-full lg:w-[80%] mx-auto">
          {steps.map((step, index) => (
            <BlurFade key={step.step} delay={index * 0.15}>
              <div
                className="testimonial-card p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12"
              >
                {/* Left Content */}
                <div className="lg:w-2/5 flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-foreground text-xl font-medium">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-foreground text-2xl md:text-3xl font-medium">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-7">
                    {step.description}
                  </p>
                  <PrimaryButton className="w-fit">
                    Get Started for free
                  </PrimaryButton>
                </div>

                {/* Right Image */}
                <div className="lg:w-3/5 relative rounded-2xl overflow-hidden">
                  <img
                    src={step.bgImage}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <BlurFade delay={0.2} className="w-full flex items-center justify-center">
                      <img
                        src={step.topImage}
                        alt={step.title}
                        className="w-full h-auto max-w-[85%] object-contain"
                      />
                    </BlurFade>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHowItWorks;
