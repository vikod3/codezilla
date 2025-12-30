import { SectionBadge } from "@/components/ui/section-badge";
import { Lightbulb, Cpu, Users, Globe, Award, Sparkles } from "lucide-react";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface SolutionCard {
  icon: typeof Cpu;
  title: string;
  description: string;
}

const solutions: SolutionCard[] = [
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Cpu,
    title: "Innovative Approach",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Award,
    title: "Commitment to Quality",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
];

const UseCaseSolutionsGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Lightbulb} label="Solutions" />
          <h2 className="max-w-[704px] text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[67px]">
            SaaS teams waste hours switching between tools
          </h2>
        </TextFade>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <BlurFade key={index} delay={index * 0.1}>
                <div
                  className="solution-grid-card px-8 py-10 md:px-10 md:py-12 flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-6">
                    <div className="w-20 h-20 p-4 bg-gradient-to-br from-[#5c5c5d] to-[#131315] rounded-2xl border border-white/10 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-foreground" />
                    </div>
                    <h3 className="text-foreground text-2xl md:text-3xl font-medium leading-9">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 text-base leading-7">
                    {solution.description}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSolutionsGrid;
