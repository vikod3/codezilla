import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import feature4Bg from "@/assets/features/feature-4-bg.png";
import benefits1 from "@/assets/benefits/benefits-1.png";
import benefits2 from "@/assets/benefits/benefits-2.png";
import benefits3 from "@/assets/benefits/benefits-3.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface BenefitCard {
  image: string;
  title: string;
  description: string;
}

const benefitCards: BenefitCard[] = [
  {
    image: benefits1,
    title: "Streamline integrations",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat.",
  },
  {
    image: benefits2,
    title: "Streamline integrations",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat.",
  },
  {
    image: benefits3,
    title: "Streamline integrations",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat.",
  },
];

const FeaturesBenefits = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <TextFade direction="up" className="flex flex-col gap-4">
            <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
              Simplify and Accelerate with...
            </h2>
            <p className="max-w-[500px] text-muted-foreground text-base leading-7">
              Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci
              libero eu laoreet sed augue leo placerat posuere scelerisque
              feugiat et eget ac morbi sit faucibus.
            </p>
          </TextFade>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-neutral-400/10 border border-neutral-400/20 flex items-center justify-center text-foreground hover:bg-neutral-400/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center text-background hover:bg-foreground/90 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Carousel - Full width with overflow */}
      <div className="max-w-[1224px] mx-auto overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {benefitCards.map((card, index) => (
            <BlurFade key={index} delay={index * 0.1}>
              <div className="flex-shrink-0 w-[380px] md:w-[450px] flex flex-col gap-6">
                {/* Image Card */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={feature4Bg}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <BlurFade delay={0.2} className="w-full flex items-center justify-center">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-auto max-w-[90%] object-contain"
                      />
                    </BlurFade>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 p-2 bg-gradient-to-br from-[#5c5c5d] to-[#131315] rounded-xl border border-white/10 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-foreground text-lg font-medium">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-6">
                    {card.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;
