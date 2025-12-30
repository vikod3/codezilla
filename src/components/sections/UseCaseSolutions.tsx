import { useState } from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Lightbulb, Cpu, Users, BarChart3 } from "lucide-react";
import solutionDashboard from "@/assets/use-cases/solution-dashboard.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface TabData {
  id: string;
  icon: typeof Cpu;
  label: string;
  title: string;
  description: string;
}

const tabs: TabData[] = [
  {
    id: "automations",
    icon: Cpu,
    label: "Smart Automations",
    title: "Dashboards",
    description:
      "Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet sed augue leo placerat.",
  },
  {
    id: "collaboration",
    icon: Users,
    label: "Team Collaboration",
    title: "Collaboration Hub",
    description:
      "Seamlessly work together with your team in real-time. Share insights, track progress, and stay aligned on goals.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Live Analytics",
    title: "Real-time Insights",
    description:
      "Monitor your performance metrics in real-time. Get actionable insights and make data-driven decisions faster.",
  },
];

const UseCaseSolutions = () => {
  const [activeTab, setActiveTab] = useState("automations");
  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Lightbulb} label="Solutions" />
          <h2 className="max-w-[704px] text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            Don't waste hours switching between tools.
          </h2>
          <p className="max-w-[604px] text-center text-muted-foreground text-base leading-7">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci
            libero eu laoreet sed augue leo placerat posuere scelerisque feugiat
            et eget ac morbi sit faucibus.
          </p>
        </TextFade>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? "solution-tab-active text-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/3 flex flex-col gap-6 p-6 md:p-8 lg:p-10">
              <div className="w-14 h-14 p-3 bg-gradient-to-br from-[#5c5c5d] to-[#131315] rounded-2xl border border-white/10 flex items-center justify-center">
                <activeTabData.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                {activeTabData.title}
              </h3>
              <p className="text-muted-foreground text-base leading-7">
                {activeTabData.description}
              </p>
              <PrimaryButton className="w-fit mt-2">Get Started</PrimaryButton>
            </div>

            {/* Right Dashboard Image */}
            <div className="lg:w-2/3 self-end pt-6 lg:pt-10">
              <BlurFade delay={0.2}>
                <img
                  src={solutionDashboard}
                  alt="Dashboard preview"
                  className="w-full h-auto object-cover"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSolutions;
