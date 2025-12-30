import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Sparkles } from "lucide-react";
import { TypingEffect } from "@/components/ui/typing-effect";
import { TextFade } from "@/components/ui/text-fade";

const VIDEO_URL = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/c028dfe62a2d176088358f42c3061d3e/manifest/video.m3u8";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const hlsRef = useRef<Hls | null>(null);

  // Lazy load video when component is near viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            setIsVideoLoaded(true);
          }
        });
      },
      { rootMargin: "100px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isVideoLoaded]);

  // Initialize video when loaded flag is set
  useEffect(() => {
    if (!isVideoLoaded) return;
    
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(VIDEO_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_URL;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, [isVideoLoaded]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 pt-40 lg:pt-48 pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Video Background - lazy loaded */}
      {isVideoLoaded && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 scale-[2.5]"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      )}
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/50 z-10" />
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-20 max-w-[888px] w-full flex flex-col items-center gap-10">
        {/* Badge */}
        <div className="pl-1 pr-3 sm:pr-4 py-1 rounded-2xl border border-white/20 inline-flex items-center gap-2 sm:gap-4 bg-background/30 backdrop-blur-sm">
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-xl inline-flex items-center gap-1.5 sm:gap-2">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs sm:text-sm font-medium leading-5 sm:leading-6">
              New Update
            </span>
          </div>
          <TypingEffect 
            text="Introducing v3 — Try It" 
            className="text-muted-foreground text-xs sm:text-sm font-medium leading-4 sm:leading-5"
          />
        </div>

        <TextFade direction="up" className="flex flex-col items-center gap-6 w-full">
          <h1 className="max-w-[790px] text-center text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-normal leading-tight lg:leading-[72px]">
            The future beyond human intelligence
          </h1>
          <p className="max-w-[542px] opacity-70 text-center text-foreground text-base sm:text-lg md:text-xl font-normal leading-7 md:leading-8">
            Harness the power of advanced AI to transform your workflow, automate complex tasks, and unlock new possibilities.
          </p>
        </TextFade>

        {/* CTA Button */}
        <PrimaryButton>
          Get Started
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
