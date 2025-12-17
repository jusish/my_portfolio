"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: typeof fadeInUp;
}

const ScrollAnimatedSection = ({
  children,
  className = "",
  variants = fadeInUp,
}: ScrollAnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;

