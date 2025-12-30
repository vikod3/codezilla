import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { TextFade } from "@/components/ui/text-fade";

const VIDEO_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8";

const TermsHero = () => {
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
    <section className="relative pt-56 pb-32 px-4 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/50 z-10" />
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />

      <TextFade direction="up" className="relative z-20 max-w-[1224px] mx-auto text-center">
        <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-normal leading-tight lg:leading-[72px]">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-muted-foreground text-base leading-7">
          Last Updated On: September 12th, 2024
        </p>
      </TextFade>
    </section>
  );
};

export default TermsHero;
