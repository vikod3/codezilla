import { SectionBadge } from "@/components/ui/section-badge";
import { Lightbulb, DollarSign, Sparkles, Globe, Brain, BadgeCheck } from "lucide-react";
import solutionCardBg from "@/assets/solution-card-bg.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

const solutions = [
  {
    icon: DollarSign,
    title: "Finance Focused",
    description: "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description: "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced Team",
    description: "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Brain,
    title: "AI Innovation",
    description: "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: BadgeCheck,
    title: "Commitment to Quality",
    description: "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
];

interface SolutionCardProps {
  icon: typeof DollarSign;
  title: string;
  description: string;
}

const SolutionCard = ({ icon: Icon, title, description }: SolutionCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-white/10 overflow-hidden flex flex-col md:h-full">
      {/* Card Image with Icon */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={solutionCardBg}
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        {/* Icon centered on the dark square */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '10%' }}>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-card rounded-3xl flex items-center justify-center">
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="flex flex-col items-center gap-2 p-6 pb-8 text-center md:flex-1">
        <h3 className="text-foreground text-xl md:text-2xl lg:text-3xl font-normal leading-9">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm md:text-base leading-7 max-w-[320px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Lightbulb} label="Solutions" />
          <h2 className="max-w-[704px] text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            SaaS teams waste hours switching between tools
          </h2>
        </TextFade>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <BlurFade key={index} delay={index * 0.1} className="md:h-full">
              <SolutionCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
