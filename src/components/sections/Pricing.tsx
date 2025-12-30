import { Wallet } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/primary-button";
import pricingBg from "@/assets/pricing/pricing-bg.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Pro",
    price: "$50",
    description: "Essential automation to get started.",
    features: [
      { text: "5 Projects" },
      { text: "5 GB Storage" },
      { text: "Email Support" },
      { text: "Basic Analytics" },
    ],
  },
  {
    name: "Premium",
    price: "$80",
    description: "Advanced tools for growing teams.",
    features: [
      { text: "25 Projects" },
      { text: "50 GB Storage" },
      { text: "Priority Support" },
      { text: "Up to 5 users" },
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$150",
    description: "Full-scale automation without limits.",
    features: [
      { text: "All Professional Plan features" },
      { text: "Advanced analytics and reporting" },
      { text: "Unlimited user accounts" },
      { text: "Dedicated account manager" },
    ],
  },
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => (
  <div 
    className="gradient-card p-6 flex flex-col h-full relative overflow-hidden"
    style={plan.isPopular ? { 
      backgroundImage: `url(${pricingBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    } : undefined}
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-foreground text-xl font-semibold">{plan.name}</h3>
      {plan.isPopular && (
        <span className="bg-zinc-800 text-foreground text-xs font-medium px-4 py-1.5 rounded">
          Most Popular
        </span>
      )}
    </div>

    {/* Price */}
    <div className="flex items-baseline gap-2 mb-4">
      <span className="text-foreground text-5xl md:text-6xl font-normal leading-tight">
        {plan.price}
      </span>
      <span className="text-foreground/60 text-base">per month</span>
    </div>

    {/* Description */}
    <p className="text-foreground/90 text-sm leading-6 mb-8">
      {plan.description}
    </p>

    {/* CTA Button */}
    <PrimaryButton className="w-full mb-8">Get in Touch</PrimaryButton>

    {/* Divider */}
    <div className="w-full h-px bg-zinc-800 mb-6" />

    {/* Features */}
    <div className="flex-1">
      <p className="text-foreground text-base mb-4">What's included?</p>
      <ul className="space-y-3">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="text-foreground/70 text-base leading-7"
          >
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={Wallet} label="Pricing" />
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px] text-center">
            Simple, Unified Pricing
          </h2>
          <p className="text-muted-foreground text-base leading-7 text-center max-w-md">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet.
          </p>
        </TextFade>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <BlurFade key={plan.name} delay={index * 0.1}>
              <PricingCard plan={plan} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
