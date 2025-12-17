import Skils from "@/components/Skils";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import DecorativeElements from "@/components/DecorativeElements";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
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
    "Backend Developer",
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
  themeColor: "#1a0a2e",
};

const Home = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto pt-20 lg:pt-8">
      {/* Animated Background Elements */}
      <AnimatedBlobs />
      <DecorativeElements />

      {/* Hero Section */}
      <AnimatedHero />

      {/* Sections with Scroll Animations */}
      <ScrollAnimatedSection>
        <Skils />
      </ScrollAnimatedSection>
    </main>
  );
};

export default Home;
