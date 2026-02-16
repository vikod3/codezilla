import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";
import { TextFade } from "@/components/ui/text-fade";

const testimonials = [
  {
    quote: "Finally, a way to turn complex workflows into simple, automated solutions that actually improve our productivity.",
    name: "Raj Patel",
    role: "Product Manager at InnovateX",
    videoUrl: "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8",
  },
  {
    quote: "We deliver features faster while keeping quality consistently high, which our clients and team both appreciate.",
    name: "Raj Patel",
    role: "Product Manager at InnovateX",
    videoUrl: "https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8",
  },
  {
    quote: "Complex processes that once drained resources now run smoothly, saving us both time and operational costs.",
    name: "Raj Patel",
    role: "Product Manager at InnovateX",
    videoUrl: "https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8",
  },
];

interface VideoCardProps {
  testimonial: typeof testimonials[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  anyHovered: boolean;
  isDesktop: boolean;
}

const VideoCard = ({ testimonial, isHovered, onHover, onLeave, anyHovered, isDesktop }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(testimonial.videoUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = testimonial.videoUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, [testimonial.videoUrl]);

  return (
    <motion.div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[623px] rounded-3xl overflow-hidden cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={isDesktop ? {
        flex: isHovered ? 2 : anyHovered ? 0.8 : 1,
      } : {}}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      style={{ flex: isDesktop ? 1 : undefined }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover grayscale"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-6">
        <p className="text-foreground text-lg md:text-xl lg:text-2xl font-normal leading-7 lg:leading-8">
          {testimonial.quote}
        </p>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
            {testimonial.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-base leading-7">
              {testimonial.name}
            </span>
            <span className="text-foreground/90 text-sm leading-6">
              {testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="text-center mb-12 lg:mb-16">
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px] mb-4 lg:mb-6">
            Architecting tomorrow's mind
          </h2>
          <p className="max-w-[604px] mx-auto text-muted-foreground text-base leading-7">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci libero eu laoreet
            sed augue leo placerat posuere scelerisque feugiat et eget ac morbi sit faucibus.
          </p>
        </TextFade>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {testimonials.map((testimonial, index) => (
            <VideoCard
              key={index}
              testimonial={testimonial}
              isHovered={hoveredIndex === index}
              anyHovered={hoveredIndex !== null}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
