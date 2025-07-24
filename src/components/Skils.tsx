import React from "react";

const Skills = () => {
  return (
    <section className="pb-20 pt-12 px-4 text-center md:text-start">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
        Skills<span className="text-purple-600">.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto md:mx-0">
        A blend of design thinking, frontend mastery, backend understanding, and strong soft skills.
      </p>

      <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Design</h3>
          <ul className="space-y-2 text-gray-700 text-[17px]">
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>User Research</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frontend</h3>
          <ul className="space-y-2 text-gray-700 text-[17px]">
            <li>JavaScript / TypeScript</li>
            <li>ReactJS / React Native</li>
            <li>Ionic Framework</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Backend</h3>
          <ul className="space-y-2 text-gray-700 text-[17px]">
            <li>Node.js (Express)</li>
            <li>Firebase / Supabase</li>
            <li>MongoDB / PostgreSQL</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
          <ul className="space-y-2 text-gray-700 text-[17px]">
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Commitment</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
