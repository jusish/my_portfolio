"use client";

import { motion } from "framer-motion";

const AnimatedBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large purple blob */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium purple blob */}
      <motion.div
        className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small purple blob */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBlobs;

