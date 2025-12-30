import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Logoipsum and what services do you offer?",
    answer:
      "Blockchain technology is a decentralized digital ledger that records transactions across multiple computers in a way that is secure, transparent, and immutable. Each block in the blockchain contains a cryptographic hash of the previous block.",
  },
  {
    question: "How does Logoipsum protect my business from cyber threats?",
    answer:
      "We provide comprehensive security solutions including real-time monitoring, threat detection, and automated response systems to keep your business safe from evolving cyber threats.",
  },
  {
    question: "Do I need cybersecurity services if I have antivirus software?",
    answer:
      "While antivirus software is important, it only covers one aspect of cybersecurity. Our services provide multi-layered protection including network security, data encryption, and employee training.",
  },
];

const AboutFAQ = () => {
  const [openItem, setOpenItem] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-[900px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <h2 className="text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            Frequently Asked Questions
          </h2>
        </TextFade>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <BlurFade key={index} delay={index * 0.1}>
                <div
                  className="rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg border border-white/20 flex items-center justify-center">
                      <span className="text-foreground text-base font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-foreground text-base md:text-lg font-medium">
                      {item.question}
                    </span>
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
                        <div className="px-6 pb-5 pl-20">
                          <p className="text-muted-foreground text-base leading-7">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutFAQ;
