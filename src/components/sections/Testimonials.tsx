import { MessageSquare } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Once cumbersome procedures are effortlessly expedited, preserving both quality and trustworthiness. A revolutionary approach for managing complex systems.",
    name: "David Lee",
    role: "Director of Smart Innovations",
  },
  {
    quote: "Transforming lengthy processes into swift, efficient tasks, all while maintaining excellence and reliability. At last, a solution for intricate workflows.",
    name: "Michael Smith",
    role: "Founder of Tech Pioneers",
  },
  {
    quote: "What used to be a painstaking journey is now a streamlined experience, ensuring both precision and dependability. A breakthrough for complicated operations.",
    name: "Emily Chen",
    role: "Co-Founder of Future Solutions",
  },
  {
    quote: "Everything works together seamlessly—no more juggling disconnected systems or wasting time on manual workarounds. From day one, it felt natural and empowering.",
    name: "Rajiv Patel",
    role: "Director of HopePath NGO",
  },
  {
    quote: "What used to take months now happens in a fraction of the time, without compromising on quality or stability. Finally, a way to turn complex workflows.",
    name: "Sarah Johnson",
    role: "CEO of Community Innovators",
  },
  {
    quote: "What used to take months now happens in a fraction of the time, without compromising on quality or stability. Our ideas finally move from concept to launch fast.",
    name: "Michael Chen",
    role: "Program Manager at Future Vision",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="testimonial-card p-4 flex flex-col h-full min-h-[320px]">
    {/* Quote */}
    <div className="flex-1 mb-6">
      <span className="text-foreground/90 text-4xl font-normal leading-10">"</span>
      <p className="text-foreground/90 text-base font-normal leading-6 mt-2">
        {testimonial.quote}
      </p>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
        {testimonial.name.charAt(0)}
      </div>
      <div className="flex flex-col">
        <span className="text-foreground text-base font-normal leading-7">
          {testimonial.name}
        </span>
        <span className="text-foreground/50 text-sm font-normal leading-6">
          {testimonial.role}
        </span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
          <SectionBadge icon={MessageSquare} label="Testimonials" />
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px] text-center">
            Loved by Teams That Scale Fast
          </h2>
          <p className="text-muted-foreground text-base leading-7 text-center max-w-md">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet.
          </p>
        </TextFade>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={index} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
