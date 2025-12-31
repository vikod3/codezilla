import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const VIDEO_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/be64a67cba95d295d3dde88e803f79f2/manifest/video.m3u8";

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
      className="relative min-h-screen overflow-hidden"
    >
      {/* Video Background - lazy loaded */}
      {isVideoLoaded && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-[140%] h-[140%] object-cover z-0 -scale-x-100 -scale-y-100"
          style={{ objectPosition: "top right" }}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      )}

      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 z-[5] flex">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full bg-blend-overlay bg-gradient-to-l from-white/0 via-black/20 to-white/0 backdrop-blur-[53.82px]"
          />
        ))}
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/60 z-10" />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-[871px] inline-flex flex-col justify-start items-center gap-6">
          {/* Badge */}
          <div className="h-9 pl-[5px] pr-3.5 py-2 bg-slate-600/40 rounded-[10px] border border-violet-400/50 inline-flex justify-center items-center gap-2 overflow-hidden">
            <div className="px-2 py-0.5 bg-white rounded-md flex justify-center items-center">
              <span className="text-center text-background text-sm font-medium font-['Inter'] leading-6">New</span>
            </div>
            <span className="text-center text-zinc-100 text-sm font-medium font-['Inter'] leading-6">Say Hello to Datacore v3.2</span>
          </div>

          {/* Heading Section */}
          <div className="flex flex-col justify-start items-center gap-2.5">
            <h1 className="text-center">
              <span className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-['Inter'] leading-tight lg:leading-[87.40px]">
                Your Finances.<br/>One Smart{" "}
              </span>
              <span className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic font-serif leading-tight lg:leading-[87.40px]">
                Dashboard
              </span>
              <span className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-['Inter'] leading-tight lg:leading-[87.40px]">.</span>
            </h1>
            <p className="w-full max-w-[613px] opacity-90 text-center text-slate-50 text-base sm:text-lg font-normal leading-6">
              Taskora helps teams manage projects, tasks,<br className="hidden sm:block"/>and deadlines with clarity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="inline-flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-5">
            <button className="px-6 py-3.5 bg-white rounded-[10px] flex justify-center items-center gap-2 overflow-hidden hover:bg-white/90 transition-colors">
              <span className="text-background text-base font-medium font-['Inter'] leading-7">Book a Free Demo</span>
            </button>
            <button className="px-6 py-3.5 bg-indigo-950 rounded-[10px] flex justify-center items-center gap-2 overflow-hidden hover:bg-indigo-900 transition-colors">
              <span className="text-slate-50 text-base font-medium font-['Inter'] leading-7">Get Started Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
