"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData, WorkExperience } from "@/data/experienceData";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const ExperienceList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto">
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10"
      >
        Experience<span className="text-purple-500">.</span>
      </motion.h1>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="space-y-8"
      >
        {experienceData.map((experience: WorkExperience) => (
          <motion.div
            key={experience.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.02, x: 5 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-6 hover:shadow-purple-glow transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {experience.position}
                  <span className="text-purple-400">
                    {" "}
                    @ {experience.company}
                  </span>
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:gap-3 text-sm text-gray-400">
                  <span>{experience.years}</span>
                  {experience.location && (
                    <>
                      <span className="hidden md:inline">•</span>
                      <span>{experience.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
              {experience.description}
            </p>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm md:text-base text-gray-300"
                >
                  <span className="text-purple-500 mr-2 mt-1">✔</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceList;
