"use client";

import { motion } from "framer-motion";

const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-600 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG geometric shapes */}
      <motion.svg
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10"
        viewBox="0 0 100 100"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          stroke="rgb(147, 51, 234)"
          strokeWidth="2"
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-1/4 left-1/4 w-24 h-24 opacity-10"
        viewBox="0 0 100 100"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="2" />
      </motion.svg>
    </div>
  );
};

export default DecorativeElements;

