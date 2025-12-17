"use client";

import { personalInfo } from "@/data/personalInfo";
import { experienceData } from "@/data/experienceData";
import { educationData } from "@/data/educationData";
import { certificationsData } from "@/data/certificationsData";
import { technicalSkills } from "@/data/skillsData";
import { languagesData } from "@/data/languagesData";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const CVView = () => {
  return (
    <div className="cv-container p-8 md:p-10 print:p-0 bg-white text-gray-900 max-w-4xl mx-auto print:max-w-full print:m-0">
      <style jsx>{`
        @media print {
          @page {
            margin: 0.2in 0.5in !important;
            size: letter;
          }
          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          html,
          body {
            background: white !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
          .cv-container {
            padding: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
            box-shadow: none !important;
            background: white !important;
          }
          .header-section {
            background: #9333ea !important;
            background-color: #9333ea !important;
            background-image: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            color: white !important;
          }
          .header-section,
          .header-section h1,
          .header-section p,
          .header-section div,
          .header-section span {
            color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .header-section::before {
            display: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
        .cv-container {
          font-family: "Georgia", "Times New Roman", serif;
          line-height: 1.6;
        }
        .header-section {
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          background-color: #9333ea;
          color: white;
          padding: 2rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        .header-section::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        @media print {
          .header-section {
            background: #9333ea !important;
            background-color: #9333ea !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
        .profile-image-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid white;
          overflow: hidden;
          margin: 0 auto 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          background: white;
        }
        .section-title {
          position: relative;
          padding-left: 1rem;
          padding-bottom: 0.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: bold;
          color: #9333ea;
          border-left: 4px solid #9333ea;
        }
        .section-title::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 60px;
          height: 2px;
          background: #9333ea;
        }
        .experience-item,
        .education-item,
        .cert-item {
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 2px solid #e5e7eb;
          padding-bottom: 1rem;
        }
        .experience-item:last-child,
        .education-item:last-child,
        .cert-item:last-child {
          border-left: none;
        }
        .experience-title {
          font-weight: bold;
          font-size: 1.1rem;
          color: #1f2937;
        }
        .experience-company {
          color: #9333ea;
          font-weight: 600;
          font-size: 1rem;
        }
        .experience-date {
          color: #6b7280;
          font-size: 0.85rem;
          background: #f3f4f6;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          display: inline-block;
          margin-top: 0.5rem;
        }
        ul {
          margin-left: 1.5rem;
          margin-top: 0.75rem;
        }
        li {
          margin-bottom: 0.5rem;
          color: #374151;
        }
        li::marker {
          color: #9333ea;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .skill-category {
          margin-bottom: 1.5rem;
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border-top: 3px solid #9333ea;
        }
        .skill-category-title {
          font-weight: bold;
          color: #9333ea;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        .skill-item {
          display: inline-block;
          background: white;
          padding: 0.35rem 0.75rem;
          margin: 0.25rem 0.25rem 0.25rem 0;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          border: 1px solid #e5e7eb;
          color: #374151;
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
      `}</style>

      {/* Header */}
      <header
        className="header-section text-center"
        style={{ backgroundColor: "#9333ea" }}
      >
        <div className="profile-image-wrapper">
          <Image
            src="/assets/images/IMG_4656.jpg"
            alt={personalInfo.name}
            width={120}
            height={120}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 relative z-10">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-white/90 mb-4 relative z-10">
          {personalInfo.title}
        </p>
        <div className="contact-info relative z-10">
          <div className="contact-item">
            <Mail className="w-4 h-4" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-item">
            <Phone className="w-4 h-4" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="contact-item">
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </div>
          <div className="contact-item">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section>
        <h2 className="section-title">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="section-title">Professional Experience</h2>
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="experience-title">{exp.position}</div>
                <div className="experience-company">{exp.company}</div>
                {exp.location && (
                  <div className="text-sm text-gray-600">{exp.location}</div>
                )}
              </div>
              <div className="experience-date">{exp.years}</div>
            </div>
            <p className="text-gray-700 mb-2">{exp.description}</p>
            {exp.achievements.length > 0 && (
              <ul className="list-disc">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-700">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="section-title">Education</h2>
        {educationData.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="experience-title">{edu.level}</div>
                <div className="experience-company">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                {edu.focus && (
                  <div className="text-sm text-purple-600 font-medium mt-1">
                    Focus: {edu.focus}
                  </div>
                )}
              </div>
              <div className="experience-date">{edu.period}</div>
            </div>
            <div className="text-sm text-gray-600 mb-1">
              Grades: {edu.grades}
            </div>
            <p className="text-gray-700 text-sm">{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section>
        <h2 className="section-title">
          Certifications & Professional Training
        </h2>
        {certificationsData.map((cert) => (
          <div key={cert.id} className="cert-item">
            <div className="flex justify-between items-start mb-1">
              <div>
                <div className="experience-title">{cert.title}</div>
                <div className="experience-company">{cert.issuer}</div>
              </div>
              <div className="experience-date">{cert.year}</div>
            </div>
            <p className="text-gray-700 text-sm mb-1">{cert.description}</p>
            {cert.highlights && cert.highlights.length > 0 && (
              <ul className="list-disc text-sm">
                {cert.highlights.slice(0, 3).map((highlight, idx) => (
                  <li key={idx} className="text-gray-700">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {technicalSkills.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-category-title">{category.category}</div>
              <div>
                {category.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="section-title">Languages</h2>
        <div className="flex gap-6">
          {languagesData.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="font-semibold">{lang.name}:</span>
              <span className="text-gray-700">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CVView;
