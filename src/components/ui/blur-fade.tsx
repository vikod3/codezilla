import { motion, Variants } from "framer-motion";
import * as React from "react";
import { useLocation } from "react-router-dom";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function BlurFade({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  yOffset = 6,
}: BlurFadeProps) {
  const location = useLocation();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <BlurFade delay={index * staggerDelay} key={index}>
          {child}
        </BlurFade>
      ))}
    </div>
  );
}
