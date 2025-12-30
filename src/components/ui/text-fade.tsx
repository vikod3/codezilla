import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

export function TextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
}: {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const location = useLocation();
  
  const FADE_ANIMATION: Variants = {
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    hidden: { 
      opacity: 0, 
      y: direction === 'down' ? -18 : 18 
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_ANIMATION}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
