"use client";

import React from "react";
import { BadgeCheck, MapPin } from "lucide-react";

const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "REST API",
  "Figma",
  "Adobe XD",
  "Framer Motion",
  "Git & GitHub",
  "PostgreSQL",
  "Docker",
];

const Myplace = () => {
  return (
    <section className="pb-20 px-4">
      <div className="mt-10 grid gap-10 grid-cols-1 lg:grid-cols-2 items-start">
        {/* Tech Stack */}
        <div className="w-full">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">💻 My Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-xl shadow hover:bg-purple-600 transition duration-300"
              >
                <BadgeCheck className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Special Place */}
        <div className="w-full">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            📍 My Special Place
          </h3>
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg border">
            <iframe
              title="My Special Place"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.70881422732!2d30.106375844896313!3d-1.983732717973124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7cd8512b215%3A0x3362f4a2eb84abcd!2sGatare%2C%20Kigali!5e0!3m2!1sen!2srw!4v1753337962347!5m2!1sen!2srw"
              className="w-full h-64 sm:h-80 lg:h-[250px] border-none"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-2 left-2 bg-white/80 px-3 py-1 rounded-lg flex items-center gap-2 text-sm text-gray-800 font-medium">
              <MapPin className="w-4 h-4 text-red-500" />
              Gatare, Kigali
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myplace;
