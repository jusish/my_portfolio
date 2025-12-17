import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Metadata } from "next";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "My Story | Justin - Fullstack Developer",
  description:
    "Learn about Justin's journey, philosophy on building software, what drives his work, and his approach to engineering.",
  keywords: [
    "Developer Story",
    "Software Engineering Philosophy",
    "Fullstack Developer Journey",
    "Engineering Mindset",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#1a0a2e",
};

const StorySection = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) => {
  return (
    <ScrollAnimatedSection className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        {Icon && <Icon className="w-8 h-8 text-purple-500" />}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          {title}
          <span className="text-purple-500">.</span>
        </h2>
      </div>
      <div className="space-y-5 text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        {children}
      </div>
    </ScrollAnimatedSection>
  );
};

const Stories = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto pt-24 lg:pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <ScrollAnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-10 h-10 text-purple-500" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              My Story
              <span className="text-purple-500">.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A journey through my coding path, engineering philosophy, and what
            drives my work every day.
          </p>
        </ScrollAnimatedSection>

        {/* My Story */}
        <StorySection title="My Story">
          <p>
            My coding journey began not in a classroom, but in my room — just a
            spark of interest and the drive to figure things out. From simple
            HTML pages to full-stack applications, every line of code I wrote
            opened a new door.
          </p>

          <p>
            I didn&apos;t start by chasing titles or tools. I started by wanting
            to understand <em>how things actually work</em>. Over time, that
            curiosity turned into building systems — first small ones, then
            products used by real people and companies.
          </p>

          <p>
            I wasn&apos;t just learning to build apps — I was learning how to
            think, solve, and create. I explored frontend frameworks, backend
            systems, databases, design, and even a bit of AI. Curiosity became
            consistency, and consistency brought growth.
          </p>

          <p>
            I have worked across backend, frontend, mobile, DevOps, and even
            hardware-integrated systems. What matters to me is not writing code
            for its own sake, but designing solutions that are reliable, secure,
            and scalable. From building property management platforms to
            AI-assisted access control systems, I approach each project as a
            system, not just a feature.
          </p>

          <p>
            Now, I don&apos;t just want to build things alone. I want to
            collaborate — with individuals, teams, and organizations. I believe
            that true innovation happens when great minds come together to solve
            real problems.
          </p>

          <p>
            My mission is to build solutions that help others while also growing
            my own skills, network, and opportunities. Whether it&apos;s a
            startup needing an MVP or a nonprofit needing a system — I want to
            contribute, learn, and evolve through every challenge.
          </p>

          <p>
            This journey is just getting started. And I&apos;m not just coding
            to code — I&apos;m coding to create impact, to connect with amazing
            people, and to build a future where technology solves problems that
            actually matter. 🌍💻
          </p>
        </StorySection>

        {/* How I Think About Building Software */}
        <StorySection title="How I Think About Building Software">
          <p>
            My work environment is quiet, structured, and focused. I usually
            begin by understanding the problem deeply before touching any code.
          </p>

          <p>
            I think in diagrams, flows, and edge cases. I prefer clean
            architectures, clear naming, and systems that can survive change. I
            often move between backend logic, frontend UX, and infrastructure
            because I like seeing the full picture — how users interact, how
            data flows, and how systems behave in production.
          </p>

          <p>
            I am comfortable working independently, but I value collaboration
            when it sharpens ideas. I test often, document decisions, and deploy
            with intention.
          </p>

          <p>
            I ask questions like:{" "}
            <em>Why does this architecture scale better?</em>{" "}
            <em>Where could this system break under pressure?</em>{" "}
            <em>How can security be built in, not added later?</em>{" "}
            <em>What happens when real users behave unpredictably?</em>
          </p>
        </StorySection>

        {/* What Drives My Work */}
        <StorySection title="What Drives My Work">
          <p>
            I am deeply interested in building real-world systems that solve
            operational problems. I enjoy designing clean, user-friendly
            interfaces backed by strong logic. Backend architecture and API
            design fascinate me, as does DevOps, deployment pipelines, and
            system reliability.
          </p>

          <p>
            I believe in security-first thinking and protecting systems from
            misuse. Beyond technology, I enjoy analyzing how people use
            products, why systems fail, and how small design choices affect
            long-term outcomes.
          </p>

          <p>
            I enjoy responsibility. I enjoy ownership. And I enjoy turning
            complex ideas into working products.
          </p>

          <p>
            Recently, my curiosity has been pulling me toward{" "}
            <strong>DevSecOps, system hardening, and security testing</strong>,
            alongside deeper exploration of{" "}
            <strong>automation, monitoring, and infrastructure design</strong>.
          </p>

          <p>
            I believe curiosity is not a phase — it is a long-term advantage.
          </p>
        </StorySection>

        {/* Engineering, Not Just Coding */}
        <StorySection title="Engineering, Not Just Coding">
          <p>
            There&apos;s a difference between coding and engineering. Coding is
            writing instructions for a computer. Engineering is designing
            systems that solve problems elegantly, scale gracefully, and adapt
            to change.
          </p>

          <p>
            I approach projects as an engineer, not just a coder. This means:
          </p>

          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>
              <strong>Design before code:</strong> I think through architecture,
              data flow, and edge cases before writing the first line.
            </li>
            <li>
              <strong>Consider trade-offs:</strong> Every decision has
              implications. I evaluate options, not just pick the latest trend.
            </li>
            <li>
              <strong>Build for maintainability:</strong> Code is read more
              often than it&apos;s written. I write for the next developer,
              including future me.
            </li>
            <li>
              <strong>Test and validate:</strong> Systems need to work under
              real conditions. I test assumptions and handle edge cases.
            </li>
            <li>
              <strong>Document decisions:</strong> Why we built something a
              certain way matters. I document the reasoning, not just the code.
            </li>
          </ul>

          <p>
            This positions me as an <strong>engineer</strong>, not a
            &quot;framework user.&quot;
          </p>
        </StorySection>

        {/* Systems Over Shortcuts */}
        <StorySection title="Systems Over Shortcuts">
          <p>
            Quick fixes might solve today&apos;s problem, but they often create
            tomorrow&apos;s technical debt. I prefer building systems that are
            well-thought-out from the start.
          </p>

          <p>
            This means sometimes taking a bit longer initially to get the
            architecture right, but it pays off in:
          </p>

          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>
              <strong>Scalability:</strong> Systems that grow without breaking
            </li>
            <li>
              <strong>Maintainability:</strong> Code that&apos;s easy to
              understand and modify
            </li>
            <li>
              <strong>Reliability:</strong> Systems that behave predictably
              under load
            </li>
            <li>
              <strong>Security:</strong> Security built in from the ground up,
              not bolted on later
            </li>
          </ul>

          <p>
            I am curious about what happens beneath the surface. I want to
            understand not just <em>what</em> works, but <em>why</em> it works
            and <em>how</em> it could break.
          </p>

          <p>
            Strong problem decomposition, systems thinking, and the ability to
            learn complex systems fast — these are the skills that enable
            building robust, production-ready software.
          </p>
        </StorySection>
      </div>
    </main>
  );
};

export default Stories;
