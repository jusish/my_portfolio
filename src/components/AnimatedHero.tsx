"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, Code2, Palette, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const AnimatedHero = () => {
  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
  ];

  const stats = [
    { label: "Years Coding", value: "5+" },
    { label: "Projects Built", value: "15+" },
    { label: "Technologies", value: "20+" },
  ];

  return (
    <section className="py-20 md:py-32 relative min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="text-center lg:text-left"
          >
            {/* Greeting with animated emoji */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-purple-600/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-2xl"
              >
                👋🏻
              </motion.span>
              <span className="text-lg md:text-xl text-purple-300 font-medium">
                Hey, {"I'm"}{" "}
                <span className="text-white font-bold">Justin Ishimwe</span>
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4 text-gray-400"
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm md:text-base">Kigali, Rwanda</span>
            </motion.div>

            {/* Main Heading with animated gradient */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="block">
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Full Stack
                </motion.span>
              </span>
              <span className="block text-white mt-2">Developer</span>
              <span className="block">
                <motion.span
                  className="inline-flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  & Designer
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block"
                  >
                    <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                  </motion.div>
                </motion.span>
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              I build{" "}
              <span className="text-purple-400 font-semibold">
                clean, functional
              </span>{" "}
              systems and{" "}
              <span className="text-purple-400 font-semibold">
                user-friendly
              </span>{" "}
              applications using modern technologies. Passionate about creating
              solutions that solve real problems.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6 justify-center lg:justify-start mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Tech Stack */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm text-purple-300 font-medium text-sm md:text-base hover:border-purple-400 hover:shadow-purple-glow transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-purple-glow-lg inline-flex items-center gap-2"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/documents"
                  className="group px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white flex gap-2 items-center font-semibold text-lg transition-all duration-300 hover:shadow-purple-glow hover:border-purple-500"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV / Resume
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Glowing background circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-purple-glow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent z-10" />

                <Image
                  src="/assets/images/IMG_4656.jpg"
                  alt="Justin Ishimwe - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </motion.div>

              {/* Floating badges around image */}
              <motion.div
                className="absolute -top-4 -right-4 bg-purple-600/90 backdrop-blur-sm border border-purple-400 rounded-full p-3 shadow-purple-glow"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500/90 backdrop-blur-sm border border-purple-400 rounded-full p-3 shadow-purple-glow"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Palette className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative icons */}
        <motion.div
          className="mt-16 flex items-center gap-6 justify-center text-purple-500/30"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          >
            <Code2 className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Palette className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
