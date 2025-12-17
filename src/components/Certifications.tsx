"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { certificationsData, Certification } from "@/data/certificationsData";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex items-center gap-3 mb-10"
      >
        <Award className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Certifications<span className="text-purple-500">.</span>
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {certificationsData.map((certification: Certification) => (
          <motion.div
            key={certification.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-6 hover:shadow-purple-glow transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {certification.title}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400 mb-3">
                  <span className="text-purple-400 font-medium">
                    {certification.issuer}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>{certification.year}</span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
              {certification.description}
            </p>

            {certification.highlights &&
              certification.highlights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-purple-900/30">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">
                    Key Areas:
                  </h4>
                  <ul className="space-y-2">
                    {certification.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <span className="text-purple-500 mr-2 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
