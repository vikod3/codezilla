import { useEffect, useRef } from "react";
import Hls from "hls.js";
import BlankNavbar from "@/components/layout/BlankNavbar";

const VIDEO_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/257c7359efd4b4aaebcc03aa8fc78a36/manifest/video.m3u8";

const Blank = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
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
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 -scale-x-100 -scale-y-100"
        autoPlay
        loop
        muted
        playsInline
      />
      
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
      
      <BlankNavbar />
      
      <main className="relative z-20 px-6 md:px-12 lg:px-20 pt-12 md:pt-20">
        {/* Card on the left */}
        <div className="w-80 h-64 relative bg-background/70 rounded-[20px] border border-foreground/20 backdrop-blur-lg overflow-hidden mb-16 md:mb-24">
          <div className="px-2 py-1 absolute left-4 top-4">
            <span className="opacity-70 text-foreground text-sm font-normal uppercase leading-6">
              [ 2025 ]
            </span>
          </div>
          <div className="w-60 absolute left-4 top-[68px] flex flex-col gap-3">
            <h3 className="text-foreground text-3xl leading-10 flex flex-col">
              <span className="whitespace-nowrap"><span className="font-semibold">Taught by </span><span className="font-normal italic">Industry</span></span>
              <span className="whitespace-nowrap font-semibold">Professionals</span>
            </h3>
            <p className="opacity-70 text-foreground text-sm font-normal leading-6">
              Get mentorship and instruction from top tech software engineers.
            </p>
          </div>
        </div>

        {/* Main hero content */}
        <div className="flex flex-col gap-6 max-w-3xl">
          {/* Badge */}
          <div className="px-3 py-1 rounded-full border border-foreground/40 inline-flex w-fit">
            <span className="text-foreground text-sm font-medium leading-5">
              Career-Ready Curriculum
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-foreground text-4xl sm:text-6xl lg:text-8xl font-black uppercase leading-tight lg:leading-[88px] flex flex-col">
            <span className="whitespace-nowrap">Launch Your</span>
            <span className="whitespace-nowrap">Coding Career<span className="text-indigo-400">.</span></span>
          </h1>

          {/* Description */}
          <p className="opacity-90 text-foreground text-base sm:text-lg lg:text-xl font-normal leading-7 lg:leading-8 max-w-[499px]">
            Master in-demand coding skills with hands-on projects, guided lessons, and real-world mentorship.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-foreground text-background rounded-full shadow-sm inline-flex justify-center items-center w-fit hover:bg-foreground/90 transition-colors">
            <span className="text-base font-medium leading-6">
              Start Building Wealth
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Blank;