import Skils from "@/components/Skils";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import DecorativeElements from "@/components/DecorativeElements";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin | Product Officer & Full Stack Developer",
  description:
    "Product Officer and Full Stack Developer from Rwanda with expertise in product strategy, React, Next.js, TypeScript, and fintech solutions. Passionate about building global products like Avadapay and Vistally.",
  keywords: [
    "Product Officer",
    "Fullstack Developer",
    "Next.js Developer",
    "Fintech",
    "Rwanda Developer",
    "UI Designer",
    "TypeScript",
    "React",
    "Avadapay",
    "Vistally",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/CK5dKs62/Screenshot-2025-03-29-135543.webp",
    title: "Justin | Product Officer & Full Stack Developer",
    description:
      "Product Officer and Full Stack Developer from Rwanda with expertise in product strategy, React, Next.js, TypeScript, and fintech solutions.",
  },
  twitter: {
    images: "https://i.ibb.co/CK5dKs62/Screenshot-2025-03-29-135543.webp",
    title: "Justin | Product Officer & Full Stack Developer",
    description:
      "Product Officer and Full Stack Developer from Rwanda with expertise in product strategy, React, Next.js, TypeScript, and fintech solutions.",
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
