export interface TechnicalSkill {
  category: string;
  items: string[];
}

export interface SoftSkill {
  name: string;
  description?: string;
}

export const technicalSkills: TechnicalSkill[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript / TypeScript",
      "Node.js (Express, REST APIs)",
      "Django (Python)",
      "React / Next.js",
      "React Native / Expo",
      "Java / Spring Boot",
      "C++ (Data Structures, Systems)",
    ],
  },
  {
    category: "Frontend Development",
    items: [
      "React / Next.js",
      "TypeScript",
      "TanStack Table",
      "TanStack Query",
      "Responsive & Modern UI/UX",
      "State Management",
      "Component Architecture",
      "Mobile Navigation (Expo Router)",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js / Express",
      "RESTful API Design",
      "Authentication & RBAC",
      "Email Verification",
      "Password Reset Flows",
      "Background Jobs & Async Processing",
      "API Documentation (Swagger)",
      "NestJS",
    ],
  },
  {
    category: "Databases & Data Modeling",
    items: [
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
      "Prisma",
      "Schema Design & Migrations",
      "Relational & Document Modeling",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      "Docker & Containerization",
      "CI/CD (GitHub Actions)",
      "Linux Server Management",
      "PM2 Process Supervision",
      "Deployment Pipelines",
      "Environment Configuration",
      "Production Debugging",
    ],
  },
  {
    category: "System Architecture",
    items: [
      "API Design (RESTful)",
      "Multi-tenant & Scalable Design",
      "Modular Architecture",
      "System Design & Planning",
      "Clean Architecture Patterns",
    ],
  },
  {
    category: "Design & UI/UX",
    items: [
      "Figma",
      "UI/UX Design",
      "Responsive Design",
      "User Research",
      "Adobe Illustrator",
      "Design Systems",
    ],
  },
  {
    category: "Third-Party Integrations",
    items: [
      "Payment Gateways",
      "SMS & Email Services",
      "OCR & Computer Vision (YOLOv8)",
      "Arduino Integration",
      "Third-party APIs",
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "YOLOv8 (License Plate Detection)",
      "OCR Pipelines",
      "ML-driven Dashboard Insights",
      "Data Analysis (MSE, Accuracy, Precision, Recall, F1)",
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      "Git & GitHub",
      "VSCode",
      "Testing & Debugging Workflows",
      "Swagger / OpenAPI",
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    name: "System Thinking & Architecture Design",
    description:
      "Design before coding, thinking in diagrams, flows, and edge cases",
  },
  {
    name: "Problem Decomposition & Analytical Reasoning",
    description: "Breaking down complex problems into manageable components",
  },
  {
    name: "Clear Documentation & Technical Writing",
    description:
      "Ability to document decisions and communicate technical concepts clearly",
  },
  {
    name: "User-Centric UI/UX Focus",
    description:
      "Designing solutions that prioritize user experience and usability",
  },
  {
    name: "Collaborative Development",
    description:
      "Working effectively with teams and stakeholders to align goals",
  },
  {
    name: "Continuous Learning Mindset",
    description:
      "Self-driven learner with strong curiosity for understanding how things work",
  },
  {
    name: "Adaptability",
    description:
      "Comfortable working across web, mobile, backend, and hardware intersections",
  },
  {
    name: "Persistence on Hard Problems",
    description:
      "Ability to tackle complex technical challenges with determination",
  },
  {
    name: "Product-Oriented Mindset",
    description:
      "Thinking beyond code to consider product implications and trade-offs",
  },
  {
    name: "Security-First Thinking",
    description: "Building systems with security built in, not added later",
  },
  {
    name: "Conflict Resolution",
    description:
      "Ability to navigate disagreements and find constructive solutions in team environments",
  },
  {
    name: "Understanding & Teachable",
    description:
      "Open to feedback, quick to learn, and able to understand complex concepts while helping others learn",
  },
  {
    name: "Team Leadership & Collaboration",
    description:
      "Capable of leading teams when needed and working effectively as a collaborative team player",
  },
  {
    name: "Communication & Presentation",
    description:
      "Ability to clearly communicate technical concepts to both technical and non-technical stakeholders",
  },
  {
    name: "Time Management & Prioritization",
    description:
      "Effective at managing multiple tasks, prioritizing work, and meeting deadlines",
  },
  {
    name: "Critical Thinking & Decision Making",
    description:
      "Ability to analyze situations, evaluate options, and make informed decisions under pressure",
  },
];
