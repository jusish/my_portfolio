"use client";

import EducationTimeline from "@/components/EducationTimeline";
import ExperienceList from "@/components/ExperienceList";
import Certifications from "@/components/Certifications";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

type TabType = "education" | "experience" | "certificates";

const About = () => {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  const tabs = [
    {
      id: "education" as TabType,
      label: "Education",
      icon: GraduationCap,
    },
    {
      id: "experience" as TabType,
      label: "Experience",
      icon: Briefcase,
    },
    {
      id: "certificates" as TabType,
      label: "Certificates",
      icon: Award,
    },
  ];

  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto pt-24 lg:pt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimatedSection className="py-10 mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About me<span className="text-purple-500">.</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl border-l-4 lg:border-l-8 border-purple-600 pl-4 lg:pl-6">
            Developing beautiful and functional websites is what I love doing,
            and {"that's"} why I give my all in every new challenge.
          </p>
        </ScrollAnimatedSection>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start relative">
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
                      layoutId="activeTab"
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
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "education" && (
              <ScrollAnimatedSection>
                <EducationTimeline />
              </ScrollAnimatedSection>
            )}

            {activeTab === "experience" && (
              <ScrollAnimatedSection>
                <ExperienceList />
              </ScrollAnimatedSection>
            )}

            {activeTab === "certificates" && (
              <ScrollAnimatedSection>
                <Certifications />
              </ScrollAnimatedSection>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default About;
