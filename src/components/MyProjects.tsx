"use client";

import { projectData, Project } from "@/data/projectData";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'design';

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');
  const [videoErrors, setVideoErrors] = useState<{[key: string]: string}>({});
  const [videoLoaded, setVideoLoaded] = useState<{[key: string]: boolean}>({});
  const [isPlaying, setIsPlaying] = useState<{[key: string]: boolean}>({});
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});

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

  const handleVideoError = (projectId: string, error: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error(`Video error for ${projectId}:`, error);
    const videoElement = error.target as HTMLVideoElement;
    const errorMessage = videoElement?.error?.message || 'Failed to load video';
    setVideoErrors(prev => ({
      ...prev,
      [projectId]: errorMessage
    }));
  };

  const handleVideoLoad = (projectId: string) => {
    console.log(`Video loaded successfully: ${projectId}`);
    setVideoLoaded(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleVideoPlay = (projectId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleVideoPause = (projectId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [projectId]: false
    }));
  };

  const playVideo = (projectId: string) => {
    const video = videoRefs.current[projectId];
    if (video && videoLoaded[projectId]) {
      video.play().catch(console.error);
    }
  };

  const pauseVideo = (projectId: string) => {
    const video = videoRefs.current[projectId];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Project Media */}
      <div className="relative h-80 bg-gray-100 overflow-hidden">
        {project.media.type === 'video' ? (
          <>
            {/* Video Error State */}
            {videoErrors[project.id] && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 border-2 border-red-200 z-20">
                <div className="text-red-500 text-4xl mb-4">⚠️</div>
                <h4 className="text-red-700 font-semibold mb-2">Video Load Error</h4>
                <p className="text-red-600 text-sm text-center px-4 mb-2">
                  {videoErrors[project.id]}
                </p>
                <div className="text-xs text-red-500 font-mono bg-red-100 px-2 py-1 rounded">
                  {project.media.src}
                </div>
              </div>
            )}

            {/* Video Loading State */}
            {!videoLoaded[project.id] && !videoErrors[project.id] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                <span className="ml-3 text-gray-600">Loading video...</span>
              </div>
            )}

            {/* Video Element */}
            <video
              ref={(el) => { videoRefs.current[project.id] = el; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              poster={project.media.poster}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => handleVideoLoad(project.id)}
              onError={(e) => handleVideoError(project.id, e)}
              onPlay={() => handleVideoPlay(project.id)}
              onPause={() => handleVideoPause(project.id)}
              onMouseEnter={() => playVideo(project.id)}
              onMouseLeave={() => pauseVideo(project.id)}
            >
              <source src={project.media.src} type="video/mp4" />
              <source src={project.media.src.replace('.mp4', '.webm')} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Video Play Overlay */}
            {videoLoaded[project.id] && !isPlaying[project.id] && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="p-4 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors duration-200">
                  <FaPlay className="w-6 h-6 text-gray-800 ml-1" />
                </div>
              </div>
            )}
          </>
        ) : (
          <Image
            src={project.media.src}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => console.error(`Image failed to load: ${project.media.src}`)}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
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
          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full capitalize shadow-lg">
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
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
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
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
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