import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import blog2 from "@/assets/blog/blog-2.png";
import lights from "@/assets/lights.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

const BlogPost = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Lights Effect */}
      <img
        src={lights}
        alt=""
        className="fixed top-[-20%] left-1/2 -translate-x-1/2 scale-[1.18] w-screen pointer-events-none opacity-60 z-0"
        loading="lazy"
      />

      <Navbar />
      <main id="main-content" className="relative z-10">
        <article className="pt-56 pb-20 px-4">
          <div className="max-w-[800px] mx-auto">
            {/* Back Button */}
            <BlurFade delay={0.1} yOffset={24}>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </BlurFade>

            {/* Date & Title */}
            <TextFade direction="up" className="flex flex-col">
              <span className="block text-muted-foreground text-sm leading-6">
                27 Feb, 2024
              </span>
              <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-tight lg:leading-[64px] mt-4">
                Power and Potential of Blockchain Technology
              </h1>
            </TextFade>

            {/* Subtitle Section */}
            <BlurFade delay={0.2} yOffset={24}>
              <div className="mt-12">
                <h2 className="text-foreground text-xl md:text-2xl font-medium leading-8 mb-4">
                  Blockchain and Sustainable Development
                </h2>
                <p className="text-muted-foreground text-base leading-7">
                  Explore how blockchain technology can contribute to sustainable development goals, environmental conservation, and responsible business practices. Blockchain in Healthcare: Investigate the applications of blockchain in healthcare, such as patient data management, drug traceability, and securing health records.
                </p>
              </div>
            </BlurFade>

            {/* Featured Image */}
            <BlurFade delay={0.3} yOffset={24}>
              <div className="mt-12 rounded-2xl overflow-hidden">
                <img
                  src={blog2}
                  alt="Blockchain technology abstract visualization"
                  loading="lazy"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </BlurFade>

            {/* Content */}
            <BlurFade delay={0.4} yOffset={24}>
              <div className="mt-12 flex flex-col gap-6">
                <p className="text-muted-foreground text-base leading-7">
                  We continued our partnership with DeFi, allowing their members to access the world of crypto with exciting new features and benefits. Our CEO, Peter Smith, shared his thoughts on the migration process for these users, and looks forward at how this changes the crypto community.
                </p>

                <p className="text-muted-foreground text-base leading-7">
                  This information is provided for informational purposes only and is not intended to substitute for obtaining accounting, tax or financial advice from a professional advisor.
                </p>

                <p className="text-muted-foreground text-base leading-7">
                  The purchase of crypto entails a risk. The value of crypto can fluctuate and capital involved in a crypto transaction is subject to market volatility and loss.
                </p>

                <p className="text-muted-foreground text-base leading-7">
                  Digital currencies are not bank deposits, are not legal tender, and are not backed by the government. Products and services are subject to any government or government backed deposit protection schemes, legislative and regulatory changes or actions in any jurisdiction in which customers are located may adversely affect the use, transfer, exchange, and value of digital currencies.
                </p>

                <p className="text-muted-foreground text-base leading-7">
                  Zeta is available to buy, sell, swap, trade, and hold in your Account now. Find out all the information you need to know about the latest token added in this article.
                </p>

                <p className="text-muted-foreground text-base leading-7">
                  You can also start earning daily bonuses with Zeta crypto:
                </p>
              </div>
            </BlurFade>

            {/* Numbered List */}
            <BlurFade delay={0.5} yOffset={24}>
              <div className="mt-8 flex flex-col gap-8">
                <div>
                  <h3 className="text-foreground text-lg font-medium leading-7 mb-2">
                    1. Buy or swap into Zeta within your Account
                  </h3>
                  <p className="text-muted-foreground text-base leading-7">
                    Unlock ZetaChain rewards. Buy or swap Zeta within your account, seamlessly. Start now.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground text-lg font-medium leading-7 mb-2">
                    2. Unlock a daily bonus, right into your Account
                  </h3>
                  <p className="text-muted-foreground text-base leading-7">
                    Your Zeta holdings pay a bonus on a daily basis, right into your Account. Proportional to your share of the total Zeta within the platform.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
