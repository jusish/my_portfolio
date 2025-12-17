"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { technicalSkills, softSkills } from "@/data/skillsData";
import { languagesData } from "@/data/languagesData";
import { Languages, Code, Users, Sparkles } from "lucide-react";

type SkillTabType = "technical" | "languages" | "soft";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<SkillTabType>("technical");

  const tabs = [
    {
      id: "technical" as SkillTabType,
      label: "Technical",
      icon: Code,
      count: technicalSkills.length,
    },
    {
      id: "languages" as SkillTabType,
      label: "Languages",
      icon: Languages,
      count: languagesData.length,
    },
    {
      id: "soft" as SkillTabType,
      label: "Soft Skills",
      icon: Users,
      count: softSkills.length,
    },
  ];

  return (
    <section ref={ref} className="pb-20 pt-12 max-w-7xl mx-auto">
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
      >
        Skills<span className="text-purple-500">.</span>
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-4 max-w-2xl text-sm md:text-base text-gray-400 mb-8"
      >
        A comprehensive blend of technical expertise and soft skills that enable
        me to build scalable systems, create intuitive interfaces, and
        collaborate effectively on complex projects.
      </motion.p>

      {/* Tab Navigation */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                isActive
                  ? "text-white shadow-purple-glow"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-900/30"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="skillTab"
                  className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
              <Icon className="w-5 h-5" />
              {tab.label}
              <span className="text-xs opacity-75">({tab.count})</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Technical Skills */}
          {activeTab === "technical" && (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 shadow-xl rounded-xl p-5 hover:shadow-purple-glow transition-all cursor-pointer"
                >
                  <h3 className="text-base md:text-lg font-semibold text-purple-400 mb-3">
                    {skill.category}
                  </h3>
                  <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Sparkles className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Languages */}
          {activeTab === "languages" && (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {languagesData.map((language, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 shadow-xl rounded-2xl p-6 hover:shadow-purple-glow transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                      <Languages className="w-5 h-5 text-purple-400" />
                      {language.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        language.level === "native"
                          ? "bg-purple-600/30 text-purple-400 border border-purple-500/50"
                          : language.level === "fluent"
                          ? "bg-blue-600/30 text-blue-400 border border-blue-500/50"
                          : "bg-gray-600/30 text-gray-400 border border-gray-500/50"
                      }`}
                    >
                      {language.proficiency}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-800/50 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? {
                                width:
                                  language.level === "native"
                                    ? "100%"
                                    : language.level === "fluent"
                                    ? "90%"
                                    : "70%",
                              }
                            : { width: 0 }
                        }
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                        className={`h-2.5 rounded-full ${
                          language.level === "native"
                            ? "bg-purple-500"
                            : language.level === "fluent"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Soft Skills */}
          {activeTab === "soft" && (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 shadow-xl rounded-xl p-5 hover:shadow-purple-glow transition-all cursor-pointer"
                >
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    {skill.name}
                  </h3>
                  {skill.description && (
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
