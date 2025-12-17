"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projectData } from "@/data/projectData";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get first 3 projects as summary
  const featuredProjects = projectData.slice(0, 3);

  return (
    <section ref={ref} className="pb-20 pt-12 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex items-center justify-between mb-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Featured<span className="text-purple-500"> Projects</span>
        </h1>
        <Link
          href="/projects"
          className="text-purple-400 hover:text-purple-300 text-sm md:text-base font-medium transition-colors flex items-center gap-2"
        >
          View All <FaExternalLinkAlt className="w-3 h-3" />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-6 hover:shadow-purple-glow transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs font-medium rounded-full capitalize border border-purple-600/30">
                {project.categories.join(" • ")}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSummary;
