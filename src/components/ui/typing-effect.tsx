import * as React from 'react';
import { motion, useInView } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypingEffect({ text, className = '', delay = 0.1 }: TypingEffectProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * delay }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
