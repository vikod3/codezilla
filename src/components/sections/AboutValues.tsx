import { SectionBadge } from "@/components/ui/section-badge";
import { Award, Lightbulb, Settings, Users } from "lucide-react";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface ValueItem {
  icon: typeof Lightbulb;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    icon: Settings,
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
];

const AboutValues = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Award} label="Our Values" />
          <h2 className="max-w-[704px] text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            Guided by what matters
          </h2>
        </TextFade>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <BlurFade key={index} delay={index * 0.1}>
                <div className="flex flex-col gap-6">
                  <div className="w-16 h-16 p-4 bg-gradient-to-br from-[#5c5c5d] to-[#131315] rounded-2xl border border-white/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-foreground text-xl md:text-2xl font-medium">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-7">
                    {value.description}
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

export default AboutValues;
