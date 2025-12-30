import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Users } from "lucide-react";
import { TextFade } from "@/components/ui/text-fade";

const VIDEO_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8";

const AboutHero = () => {
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
    <section className="relative min-h-screen flex items-end px-4 pt-40 lg:pt-48 pb-16 lg:pb-20 overflow-hidden">
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

      <div className="relative z-20 max-w-[1224px] mx-auto w-full">
        <TextFade direction="up" className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-6">
            <SectionBadge icon={Users} label="About us" />
            <h1 className="max-w-[700px] text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-normal leading-tight lg:leading-[72px]">
              We're on a mission to simplify how teams work
            </h1>
          </div>

          {/* CTA Button */}
          <div>
            <PrimaryButton>Our Story</PrimaryButton>
          </div>

          {/* Description */}
          <p className="max-w-[400px] text-muted-foreground text-base leading-7">
            Lorem ipsum dolor sit amet consectetur nibh aliquam natoque pretium
            urna tristique vitae a aliquam fermentum rutrum nisl orare vulputate
            nunc enim.
          </p>
        </TextFade>
      </div>
    </section>
  );
};

export default AboutHero;
