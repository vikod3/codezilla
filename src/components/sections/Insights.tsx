import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import insight1 from "@/assets/insights/insight-1.png";
import insight2 from "@/assets/insights/insight-2.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface InsightCard {
  image: string;
  date: string;
  title: string;
}

const insights: InsightCard[] = [
  {
    image: insight1,
    date: "27 Feb, 2024",
    title: "Exploring the Future of Digital Ownership",
  },
  {
    image: insight2,
    date: "27 Feb, 2024",
    title: "Exploring the Future of Digital Ownership",
  },
];

const InsightCard = ({ insight }: { insight: InsightCard }) => (
  <div className="rounded-2xl border border-white/10 p-6 flex flex-col gap-6">
    {/* Image */}
    <div className="w-full h-48 rounded overflow-hidden">
      <img
        src={insight.image}
        alt={insight.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2">
      <span className="text-foreground text-sm leading-6">{insight.date}</span>
      <h3 className="text-foreground text-xl md:text-2xl font-medium leading-8">
        {insight.title}
      </h3>
    </div>

    {/* Read more link */}
    <button className="flex items-center gap-2 text-foreground font-semibold text-base leading-7 hover:opacity-80 transition-opacity w-fit">
      Read more
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
);

const Insights = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <TextFade direction="up" className="flex flex-col gap-4 lg:gap-6 lg:max-w-[260px]">
            <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
              News & Insight
            </h2>
            <p className="text-muted-foreground text-base leading-7">
              Get great news and insight from our expert team.
            </p>
            <PrimaryButton className="w-fit mt-4">
              View more Insights
            </PrimaryButton>
          </TextFade>

          {/* Right Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <BlurFade key={index} delay={index * 0.15}>
                <InsightCard insight={insight} />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
