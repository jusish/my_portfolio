import React from "react";

const Experience = () => {
  return (
    <section className="pb-20 pt-8">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
        Experience<span className="text-purple-600">.</span>
      </h1>

      {/* Freelance & Personal Projects */}
      <div className="mt-12 px-2 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-[30%]">
          <span className="text-3xl border-l-4 border-purple-600 px-3 leading-[55px] text-purple-600">
            Freelance & Personal
          </span>
        </div>
        <div className="w-full md:w-[70%] p-2 rounded-lg">
          <h3 className="text-2xl font-bold">
            Fullstack Developer{" "}
            <span className="text-purple-600">@ Independent</span>
          </h3>
          <p className="text-gray-600">2022 - Present</p>
          <ul className="mt-4 space-y-3 text-gray-700 lg:text-[20px]">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Built and deployed fullstack web applications for clients and
              personal learning using modern tools and best practices.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Developed <strong>Bankup</strong> — a banking management system
              with loans, top-ups, reports, and analytics using Next.js,
              TypeScript, Shadcn UI, Node.js, and PostgreSQL.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Created <strong>Librarian</strong> — a library management system
              with user roles, book tracking, and inventory using React (Vite),
              Express.js, MongoDB, and Tailwind CSS.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Strengthened skills in fullstack development, project
              architecture, and working with databases, authentication, and
              UI/UX best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
