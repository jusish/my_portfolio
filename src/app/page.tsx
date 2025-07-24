import { Download } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/assets/images/profile.jpg";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin | Fullstack Developer & UI Designer Portfolio",
  description:
    "Fullstack and mobile developer from Rwanda with expertise in React, Next.js, TypeScript, Node.js, Spring Boot, and design systems. Passionate about building fast, user-friendly apps and systems that solve real problems.",
  keywords: [
    "Fullstack Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "Spring Boot Developer",
    "Rwanda Developer",
    "UI Designer",
    "Mobile Developer",
    "TypeScript",
    "React",
    "Backend Developer"
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/CK5dKs62/Screenshot-2025-03-29-135543.webp",
    title: "Justin | Fullstack Developer & UI Designer Portfolio",
    description:
      "Fullstack and mobile developer from Rwanda with expertise in React, Next.js, TypeScript, Node.js, Spring Boot, and design systems. Passionate about building fast, user-friendly apps and systems that solve real problems.",
  },
  twitter: {
    images: "https://i.ibb.co/CK5dKs62/Screenshot-2025-03-29-135543.webp",
    title: "Justin | Fullstack Developer & UI Designer Portfolio",
    description:
      "Fullstack and mobile developer from Rwanda with expertise in React, Next.js, TypeScript, Node.js, Spring Boot, and design systems. Passionate about building fast, user-friendly apps and systems that solve real problems.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Home = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      <section className="py-28">
        {/* Reverse order on mobile so image shows first */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-2xl text-gray-800 mb-2">
              Hey, {"I'm"} Justin Ishimwe <span className="inline-block">👋🏻</span>
            </p>
            <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
              <span className="text-purple-600">Full</span>Stack <br />
              Developer & Designer
            </h1>
            <p className="mt-6 text-gray-800 text-xl lg:text-2xl px-2">
              I&apos;m a Rwandan fullstack developer and UI designer — I build clean, functional systems and user-friendly apps using modern technologies like Next.js, React Native, Node.js, Spring Boot, and more.
            </p>

            {/* Button Section */}
            <div className="mt-6 flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold"
              >
                Get In Touch
              </Link>
              <a
                href="https://jusish-portfolio.vercel.app/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-transparent transition-all duration-300 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white flex gap-2 font-bold"
              >
                <Download /> Download CV
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] mt-10 lg:mt-0 rounded-full border-4 border-purple-300">
            <Image
              src={profileImg}
              alt="Profile Image"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      <Experience />
      <Skils />
      <MyStory />
    </main>
  );
};

export default Home;
