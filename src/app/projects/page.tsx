import MyProjects from "@/components/MyProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Justin - Fullstack Developer",
  description:
    "Explore projects developed by Justin, a fullstack web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Web Development Projects",
    "Frontend Projects",
    "React Projects",
    "Next.js Portfolio",
    "JavaScript Projects",
    "TypeScript Projects",
    "UI/UX Development",
    "Modern Web Applications",
    "Responsive Websites",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/WNR2qrTj/Screenshot-2025-03-29-141609.webp",
    title: "Projects | Justin - Fullstack Developer",
    description:
      "Explore projects developed by Justin, a fullstack web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  twitter: {
    images: "https://i.ibb.co/WNR2qrTj/Screenshot-2025-03-29-141609.webp",
    title: "Projects | Justin - Fullstack Developer",
    description:
      "Explore projects developed by Justin, a fullstack web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Projects = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto pt-24 lg:pt-8">
      <div className="max-w-7xl mx-auto">
        <section className="py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            My<span className="text-purple-500">Best</span>
            Creations
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl border-l-4 lg:border-l-8 border-purple-600 pl-4 lg:pl-6 mb-10">
            Designing and Developing Robust and Stylish Web Applications for a
            Decade and Counting
          </p>
        </section>
        <MyProjects />
      </div>
    </main>
  );
};

export default Projects;
