import { Layers } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/primary-button";
import { TextFade } from "@/components/ui/text-fade";

// Import all integration logos
import chromeLogo from "@/assets/integrations/chrome.png";
import dockerLogo from "@/assets/integrations/docker.png";
import driveLogo from "@/assets/integrations/drive.png";
import excelLogo from "@/assets/integrations/excel.png";
import figmaLogo from "@/assets/integrations/figma.png";
import flutterLogo from "@/assets/integrations/flutter.png";
import githubLogo from "@/assets/integrations/github.png";
import jiraLogo from "@/assets/integrations/jira.png";
import linearLogo from "@/assets/integrations/linear.png";
import metamaskLogo from "@/assets/integrations/metamask.png";
import notionLogo from "@/assets/integrations/notion.png";
import reactLogo from "@/assets/integrations/react.png";
import vscodeLogo from "@/assets/integrations/vscode.png";
import webstormLogo from "@/assets/integrations/webstorm.png";
import wordpressLogo from "@/assets/integrations/wordpress.png";

const logos = [
  { src: chromeLogo, alt: "Browser extension integration" },
  { src: dockerLogo, alt: "Container platform integration" },
  { src: driveLogo, alt: "Cloud storage integration" },
  { src: excelLogo, alt: "Spreadsheet integration" },
  { src: figmaLogo, alt: "Design tool integration" },
  { src: flutterLogo, alt: "Mobile framework integration" },
  { src: githubLogo, alt: "Version control integration" },
  { src: jiraLogo, alt: "Project management integration" },
  { src: linearLogo, alt: "Issue tracking integration" },
  { src: metamaskLogo, alt: "Crypto wallet integration" },
  { src: notionLogo, alt: "Documentation integration" },
  { src: reactLogo, alt: "Frontend framework integration" },
  { src: vscodeLogo, alt: "Code editor integration" },
  { src: webstormLogo, alt: "IDE integration" },
  { src: wordpressLogo, alt: "CMS integration" },
];

// Optimized: Reduced from 3x to 2x duplication for seamless scroll
const row1Logos = [...logos, ...logos];
const row2Logos = [...logos, ...logos];

const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      className="w-16 h-16 object-contain grayscale"
    />
  </div>
);

const Integrations = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Layers} label="Integrations" />
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px] text-center max-w-3xl">
            Works Seamlessly With the Tools You Already Use
          </h2>
        </TextFade>

        {/* Marquee Container */}
        <div className="w-full relative mix-blend-luminosity overflow-hidden mb-12 lg:mb-16">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1 - moves left */}
          <div className="flex gap-9 mb-9 animate-marquee-left">
            {row1Logos.map((logo, index) => (
              <LogoCard key={`row1-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>

          {/* Row 2 - moves right, starts offset */}
          <div className="flex gap-9 animate-marquee-right" style={{ marginLeft: '-60px' }}>
            {row2Logos.map((logo, index) => (
              <LogoCard key={`row2-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>

        {/* Button at bottom */}
        <div className="flex justify-center">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
