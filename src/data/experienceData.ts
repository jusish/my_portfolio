export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  years: string;
  location?: string;
  description: string;
  achievements: string[];
}

export const experienceData: WorkExperience[] = [
  {
    id: "exp-1",
    company: "Arksoft Rwanda",
    position: "Full-Stack Developer",
    years: "July 2025 - Present",
    location: "Kigali, Rwanda",
    description:
      "Building and leading development of enterprise software solutions, specializing in property management platforms and scalable web applications.",
    achievements: [
      "Built and launched Vistally v1, a complete property management platform covering frontend, backend, DevOps, and CI/CD via GitHub Actions.",
      "Currently architecting Vistally v2 with advanced features including payment gateways, SMS & email notifications, tenant portals, expense management, and scalable property workflows.",
      "Implemented DevOps automation and environment configuration for production-ready deployments.",
      "Collaborated with product and business stakeholders to define project scope and UX requirements.",
      "Contributed system design and architectural decisions for multiple client engagements.",
    ],
  },
  {
    id: "exp-2",
    company: "Dealuz Ltd",
    position: "Lead Designer & Full-Stack Engineer",
    years: "2024 - Present",
    location: "Hybrid",
    description:
      "Co-developer of Dealuz, a comprehensive inventory and stock management system. Responsible for UX/UI design, frontend interfaces, and backend modules.",
    achievements: [
      "Designed comprehensive stock tracking, product management, and warehouse support features.",
      "Built frontend interfaces and backend modules for real-time inventory tracking.",
      "Created analytics dashboards and automated alerts for inventory management.",
      "Implemented multi-location warehouse support and purchase & sales tracking.",
    ],
  },
  {
    id: "exp-3",
    company: "Independent / Freelance",
    position: "Full-Stack Developer",
    years: "2022 - Present",
    location: "Remote",
    description:
      "Building and deploying fullstack web applications for clients and personal learning using modern tools and best practices.",
    achievements: [
      "Delivered end-to-end project development including frontend UX design and backend logic for multiple clients.",
      "Developed Bankup — a banking management system with loans, top-ups, reports, and analytics using Next.js, TypeScript, Shadcn UI, Node.js, and PostgreSQL.",
      "Created Library Management System with user roles, book tracking, and inventory using React (Vite), Express.js, MongoDB, and Tailwind CSS.",
      "Designed responsive and user-centric UI for client projects while solving backend scalability and integration problems.",
      "Provided system architecture planning, documentation, and DevOps support for various engagements.",
    ],
  },
  {
    id: "exp-4",
    company: "E-Ubaka",
    position: "Lead UI/UX & Backend",
    years: "2023 - Present",
    location: "Remote",
    description:
      "Team contributor working on E-Ubaka, a construction management tool. Focused on design workflows, backend logic, and client onboarding.",
    achievements: [
      "Led design and testing workflows for construction site management features.",
      "Contributed to backend logic and server endpoints for the platform.",
      "Helped onboard early clients and refine user experience based on feedback.",
      "Designed UI/UX for owners, engineers, and storekeepers interfaces.",
    ],
  },
  {
    id: "exp-5",
    company: "Alliance Investment",
    position: "Lead Web Developer",
    years: "2025",
    location: "Kigali, Rwanda",
    description:
      "Developed professional business website for corporate presence with modern responsive design and SEO optimizations.",
    achievements: [
      "Developed professional corporate website showcasing company profile and services.",
      "Implemented modern responsive design ensuring cross-device compatibility.",
      "Optimized for fast load times and SEO best practices.",
      "Ensured strong branding and clean layout for real estate investment firm.",
    ],
  },
];
