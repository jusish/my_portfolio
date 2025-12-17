"use client";

import { projectData, Project, ProjectCategory } from "@/data/projectData";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

type ProjectFilterCategory = "all" | ProjectCategory;

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState<ProjectFilterCategory>("all");
  const ref = useRef(null);

  const tabs = [
    {
      id: "all" as ProjectFilterCategory,
      label: "All Projects",
      count: projectData.length,
    },
    {
      id: "frontend" as ProjectFilterCategory,
      label: "Frontend",
      count: projectData.filter((p) => p.categories.includes("frontend"))
        .length,
    },
    {
      id: "backend" as ProjectFilterCategory,
      label: "Backend",
      count: projectData.filter((p) => p.categories.includes("backend")).length,
    },
    {
      id: "fullstack" as ProjectFilterCategory,
      label: "Full Stack",
      count: projectData.filter((p) => p.categories.includes("fullstack"))
        .length,
    },
    {
      id: "design" as ProjectFilterCategory,
      label: "Design",
      count: projectData.filter((p) => p.categories.includes("design")).length,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectData
      : projectData.filter((project) => project.categories.includes(activeTab));

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-6 hover:shadow-purple-glow transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs font-medium rounded-full capitalize border border-purple-600/30">
              {project.categories.join(" • ")}
            </span>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-md hover:bg-purple-600/20 hover:text-purple-300 transition-colors duration-200 border border-gray-700/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-purple-900/30">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm font-medium group/link"
          >
            <FaGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            Source Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm font-medium group/link"
          >
            <FaExternalLinkAlt className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className="pb-32 max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-purple-glow"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-900/30"
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs opacity-75">({tab.count})</span>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center py-20"
        >
          <div className="text-5xl md:text-6xl mb-4">🚧</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            No Projects Yet
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Projects in the {activeTab} category are coming soon!
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default MyProjects;
