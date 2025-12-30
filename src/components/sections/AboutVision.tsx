import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Sparkles, ChevronUp, ChevronDown } from "lucide-react";
import feature4Bg from "@/assets/features/feature-4-bg.png";
import feature4Img from "@/assets/features/feature-4-img.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: "innovation",
    title: "Innovation",
    content:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    id: "transparency",
    title: "Transparency",
    content:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    content:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
  {
    id: "communication",
    title: "Communication",
    content:
      "Lorem ipsum dolor sit amet consectetur nec quuis suspendisse nulla amet viverra tortor.",
  },
];

const AboutVision = () => {
  const [openItem, setOpenItem] = useState<string>("innovation");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Sparkles} label="Vision" />
          <h2 className="max-w-[704px] text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            Your vision, powered by AI
          </h2>
          <p className="max-w-[604px] text-center text-muted-foreground text-base leading-7">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci
            libero eu laoreet sed augue leo placerat posuere scelerisque feugiat
            et eget ac morbi sit faucibus.
          </p>
        </TextFade>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Accordion */}
          <div className="w-full lg:w-2/5 flex flex-col gap-3">
            {accordionItems.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  className={isOpen ? "accordion-item-open" : "accordion-item-closed"}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-foreground text-lg font-medium">
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground text-base leading-7">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right - Image */}
          <div className="w-full lg:w-3/5 relative rounded-3xl overflow-hidden">
            <img
              src={feature4Bg}
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <BlurFade delay={0.2} className="w-full flex items-center justify-center">
                <img
                  src={feature4Img}
                  alt="Analytics dashboard"
                  className="w-full h-auto max-w-[85%] object-contain"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
