"use client";

import { projectData, Project } from "@/data/projectData";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'design';

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');

  const tabs = [
    { id: 'all', label: 'All Projects', count: projectData.length },
    { id: 'frontend', label: 'Frontend', count: projectData.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projectData.filter(p => p.category === 'backend').length },
    { id: 'fullstack', label: 'Full Stack', count: projectData.filter(p => p.category === 'fullstack').length },
    { id: 'design', label: 'Design', count: projectData.filter(p => p.category === 'design').length },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === activeTab);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Project Media */}
      <div className="relative h-80 bg-gray-100 overflow-hidden">
        {project.media.type === 'video' ? (
          <video
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            poster={project.media.poster}
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          >
            <source src={project.media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.media.src}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors duration-200"
              aria-label="View GitHub Repository"
            >
              <FaGithub className="w-5 h-5 text-gray-800" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors duration-200"
              aria-label="View Live Site"
            >
              <FaExternalLinkAlt className="w-5 h-5 text-gray-800" />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full capitalize">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-gray-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
            >
              <FaGithub className="w-4 h-4" />
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="pb-32">
      {/* Tab Navigation */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ProjectCategory)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-sm opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Yet</h3>
          <p className="text-gray-600">
            Projects in the {activeTab} category are coming soon!
          </p>
        </div>
      )}
    </section>
  );
};

export default MyProjects;