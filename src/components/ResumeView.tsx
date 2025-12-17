"use client";

import { personalInfo } from "@/data/personalInfo";
import { experienceData } from "@/data/experienceData";
import { educationData } from "@/data/educationData";
import { certificationsData } from "@/data/certificationsData";
import { technicalSkills } from "@/data/skillsData";
import { languagesData } from "@/data/languagesData";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const ResumeView = () => {
  // Get most recent/relevant experience (top 3)
  const recentExperience = experienceData.slice(0, 3);
  // Get most recent education (top 2)
  const recentEducation = educationData.slice(0, 2);
  // Get top certifications (most relevant)
  const topCertifications = certificationsData.slice(0, 3);
  // Get key technical skills (flattened, unique, top items)
  const keySkills = technicalSkills
    .flatMap((cat) => cat.items)
    .filter((item, index, self) => self.indexOf(item) === index)
    .slice(0, 20);

  return (
    <div className="resume-container p-6 md:p-8 print:p-0 bg-white text-gray-900 max-w-3xl mx-auto print:max-w-full print:m-0">
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
          .resume-container {
            padding: 0 !important;
            font-size: 0.8rem;
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
            display: flex !important;
            page-break-inside: avoid !important;
          }
          .header-section::before {
            display: none !important;
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
          .sidebar-section {
            background: #f9fafb !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
        }
        .resume-container {
          font-family: "Arial", "Helvetica", sans-serif;
          line-height: 1.5;
        }
        .header-section {
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          background-color: #9333ea;
          color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .header-section::before {
          content: "";
          position: absolute;
          top: -30%;
          right: -5%;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        @media print {
          .header-section {
            background: #9333ea !important;
            background-color: #9333ea !important;
            background-image: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            color: white !important;
          }
          .header-section * {
            color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        .profile-image-wrapper {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 3px solid white;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          background: white;
        }
        .header-text {
          flex: 1;
          position: relative;
          z-index: 10;
        }
        .section-title {
          position: relative;
          padding-left: 0.75rem;
          padding-bottom: 0.25rem;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          font-weight: bold;
          color: #9333ea;
          border-left: 3px solid #9333ea;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .experience-item,
        .education-item {
          margin-bottom: 0.75rem;
          padding-left: 0.75rem;
          border-left: 2px solid #e5e7eb;
          padding-bottom: 0.75rem;
        }
        .experience-item:last-child,
        .education-item:last-child {
          border-left: none;
          padding-bottom: 0;
        }
        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.4rem;
        }
        .experience-title {
          font-weight: bold;
          font-size: 0.9rem;
          color: #1f2937;
        }
        .experience-company {
          color: #9333ea;
          font-weight: 600;
          font-size: 0.85rem;
        }
        .experience-date {
          color: #6b7280;
          font-size: 0.75rem;
          white-space: nowrap;
          background: #f3f4f6;
          padding: 0.2rem 0.5rem;
          border-radius: 0.75rem;
        }
        ul {
          margin-left: 1rem;
          margin-top: 0.3rem;
          font-size: 0.8rem;
        }
        li {
          margin-bottom: 0.3rem;
          line-height: 1.4;
          color: #374151;
        }
        li::marker {
          color: #9333ea;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .skill-item {
          display: inline-block;
          background: #f9fafb;
          padding: 0.25rem 0.6rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          border: 1px solid #e5e7eb;
          color: #374151;
        }
        .two-column {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.25rem;
        }
        .sidebar-section {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border-top: 3px solid #9333ea;
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
        }
        @media (max-width: 768px) {
          .two-column {
            grid-template-columns: 1fr;
          }
          .header-section {
            flex-direction: column;
            text-align: center;
          }
        }
        @media print {
          .two-column {
            grid-template-columns: 2fr 1fr;
          }
          .header-section {
            flex-direction: row;
          }
        }
      `}</style>

      {/* Header - Compact */}
      <header className="header-section" style={{ backgroundColor: "#9333ea" }}>
        <div className="profile-image-wrapper">
          <Image
            src="/assets/images/IMG_4656.jpg"
            alt={personalInfo.name}
            width={90}
            height={90}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="header-text">
          <h1 className="text-2xl font-bold text-white mb-1">
            {personalInfo.name}
          </h1>
          <p className="text-base text-white/90 mb-2">{personalInfo.title}</p>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="w-3 h-3" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <Phone className="w-3 h-3" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <MapPin className="w-3 h-3" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="contact-item">
              <Linkedin className="w-3 h-3" />
              <span>LinkedIn</span>
            </div>
            <div className="contact-item">
              <Github className="w-3 h-3" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="two-column">
        {/* Left Column - Experience & Education */}
        <div>
          {/* Professional Summary - Compact */}
          <section>
            <h2 className="section-title">Summary</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="section-title">Experience</h2>
            {recentExperience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <div>
                    <div className="experience-title">{exp.position}</div>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-date">{exp.years}</div>
                </div>
                {exp.achievements.length > 0 && (
                  <ul className="list-disc">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
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
            {recentEducation.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="experience-header">
                  <div>
                    <div className="experience-title">{edu.level}</div>
                    <div className="experience-company">{edu.school}</div>
                    {edu.focus && (
                      <div className="text-xs text-purple-600 mt-0.5">
                        {edu.focus}
                      </div>
                    )}
                  </div>
                  <div className="experience-date">{edu.period}</div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column - Skills, Certifications, Languages */}
        <div>
          {/* Technical Skills */}
          <section className="sidebar-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-list">
              {keySkills.map((skill, idx) => (
                <span key={idx} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="sidebar-section">
            <h2 className="section-title">Certifications</h2>
            {topCertifications.map((cert) => (
              <div key={cert.id} className="mb-2">
                <div className="experience-title text-xs">{cert.title}</div>
                <div className="text-xs text-gray-600">
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            ))}
          </section>

          {/* Languages */}
          <section className="sidebar-section">
            <h2 className="section-title">Languages</h2>
            <div className="space-y-1">
              {languagesData.map((lang, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-semibold text-gray-900">
                    {lang.name}:
                  </span>{" "}
                  <span className="text-gray-700">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
