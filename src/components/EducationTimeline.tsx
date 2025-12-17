"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { educationData, Education } from "@/data/educationData";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const EducationTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="max-w-7xl mx-auto">
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10"
      >
        Education<span className="text-purple-500">.</span>
      </motion.h1>

      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 opacity-30"></div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          {educationData.map((education: Education) => (
            <motion.div
              key={education.id}
              variants={fadeInUp}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-[#0a0a0a] shadow-purple-glow"></div>

              {/* Content */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-6 hover:shadow-purple-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {education.level}
                  </h3>
                  <span className="text-sm md:text-base text-purple-400 font-medium">
                    {education.period}
                  </span>
                </div>
                <h4 className="text-base md:text-lg text-purple-400 mb-1">
                  {education.school}
                </h4>
                <p className="text-sm text-gray-400 mb-2">
                  {education.location}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <p className="text-sm text-purple-300/80 font-medium">
                    Grades: {education.grades}
                  </p>
                  {education.focus && (
                    <>
                      <span className="text-gray-600">•</span>
                      <p className="text-sm text-purple-300/80 font-medium">
                        Focus: {education.focus}
                      </p>
                    </>
                  )}
                </div>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeline;
