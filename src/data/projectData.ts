// projectData.ts
export type ProjectCategory =
  | "frontend"
  | "backend"
  | "fullstack"
  | "design"
  | "testing"
  | "devops";

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  /**
   * One project can appear in multiple categories.
   * Example: both "frontend" and "design" if you did UI + frontend.
   */
  categories: ProjectCategory[];
}

export const projectData: Project[] = [
  // === FULLSTACK ===
  {
    id: "vistally-01",
    title: "Vistally — Property Management Platform",
    description:
      "Complete property management SaaS platform (v1 launched, v2 in progress). Features include property listing & administration, tenant portals, expense & ledger management, payment integrations, SMS & email notifications, and scalable multi-tenant architecture. Full-stack development including frontend, backend, infrastructure & CI/CD.",
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
    categories: ["fullstack", "devops"],
    liveUrl: "https://arksoft.rw/",
  },
  {
    id: "dealuz-02",
    title: "Dealuz — Inventory & Stock Management",
    description:
      "Full-featured inventory and stock management system with real-time tracking, supplier management, advanced analytics, multi-location warehouse support, automated alerts, and purchase & sales tracking. Designed for simplicity and business clarity.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    categories: ["fullstack", "design"],
    liveUrl: "https://dealuz.com",
  },
  {
    id: "bankup-03",
    title: "Bankup — Digital Banking Management",
    description:
      "A digital banking management system with features like loan handling, top-ups, liquidation, analytics, and PDF report generation. Full-stack application with secure authentication and comprehensive financial management tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "React Hook Form",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Swagger",
    ],
    categories: ["fullstack"],
    liveUrl: "https://bankupp.netlify.app/",
  },
  {
    id: "hospital-04",
    title: "Hospital Management System",
    description:
      "Comprehensive hospital management system with patient records, billing, inventory management, medical records, and ML-assisted trend analytics dashboard. Built with multi-module architecture and secure handling of sensitive healthcare data.",
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "Machine Learning",
      "Data Analytics",
    ],
    categories: ["fullstack"],
    githubUrl: "https://github.com/jusish/clinic_system",
  },
  {
    id: "gate-management-05",
    title: "Gate Management & Vehicle Access Control",
    description:
      "Real-world gate management system combining AI, hardware, and backend logic. Features license plate detection using YOLOv8, OCR pipelines, Arduino integration, entry & exit validation, time-based access control, payment status verification, and unauthorized access logging.",
    technologies: [
      "YOLOv8",
      "OCR",
      "Arduino",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Computer Vision",
      "Hardware Integration",
    ],
    categories: ["fullstack", "backend"],
    githubUrl: "https://github.com/jusish/pms",
  },
  {
    id: "library-06",
    title: "Library Management System",
    description:
      "Complete library management system with user roles, book tracking, inventory management, authentication, and user profile management. Features advanced data tables with filtering, pagination, sorting, and data visualization.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Table",
    ],
    categories: ["fullstack"],
    githubUrl: "https://github.com/jusish/Librarian",
  },
  {
    id: "e-ubaka-07",
    title: "E-Ubaka — Construction Management",
    description:
      "Construction site management system design and frontend implementation for owners, engineers, and storekeepers. Includes UI design, React-based frontend, and comprehensive project tracking features.",
    technologies: ["Figma", "React", "React Query", "Zustand", "Tailwind CSS"],
    categories: ["design", "frontend"],
    liveUrl: "https://ubaka.site",
  },
  {
    id: "alliance-08",
    title: "Alliance Investment — Corporate Website",
    description:
      "Professional corporate website for real estate investment firm showcasing company profile and services. Features modern responsive design, SEO optimizations, fast load times, and strong branding.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    categories: ["frontend", "design"],
    liveUrl: "https://allianceinvestment.rw/",
  },
  {
    id: "expense-tracker-09",
    title: "Mobile Expense Tracker App",
    description:
      "Cross-platform mobile expense tracking application with authentication flows, tab navigation, expense filtering & sorting, and offline-friendly data fetching patterns. Clean, modern UI built with React Native and Expo.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "TanStack Query",
      "NativeWind",
    ],
    categories: ["frontend"],
    githubUrl: "https://github.com/jusish/Expense-Tracker",
  },

  // === BACKEND ===
  {
    id: "reminderr-10",
    title: "Remindrr API",
    description:
      "Scheduling system with support for repeat patterns and email notifications. Lightweight and easy to use with scalable backend architecture. Designed as a learning-driven but production-minded project.",
    githubUrl: "https://github.com/jusish/remindrr-backend",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "JWT",
      "Nodemailer",
      "Cron Jobs",
    ],
    categories: ["backend"],
  },
  {
    id: "parking-11",
    title: "SmartPark API",
    description:
      "API for managing parking slot bookings, availability, and secure access using JWT. Built with clean architecture and Prisma ORM.",
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],
    categories: ["backend"],
    githubUrl: "https://github.com/jusish/car-parking-backend",
  },
  {
    id: "payroll-12",
    title: "PayrollX",
    description:
      "Automates salary processing for employees, sends notifications via email, and offers admin control with JWT-secured endpoints.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Spring Mail",
      "Swagger",
    ],
    categories: ["backend"],
    githubUrl: "https://github.com/jusish/Employee-Payroll-Management",
  },
  {
    id: "eucl-13",
    title: "EUCL Token Service",
    description:
      "Prepaid electricity token generator designed for EUCL clients. Handles secure token creation using Java Spring Boot.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger"],
    categories: ["backend"],
    githubUrl: "https://github.com/jusish/eucl",
  },
  {
    id: "recipe-nest-14",
    title: "RecipeNest API",
    description:
      "CRUD API for user recipes built with NestJS and Prisma. Handles user authentication and recipe management.",
    githubUrl: "https://github.com/jusish/recipe-nestjs",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Swagger",
    ],
    categories: ["backend"],
  },

  // === FRONTEND ===
  {
    id: "itasks-15",
    title: "iTasks",
    description:
      "Task management app that lets you track task urgency, set personal challenges, and monitor progress visually.",
    liveUrl: "https://i-tasks-murex.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "Zustand"],
    categories: ["frontend"],
    githubUrl: "https://github.com/jusish/iTasks",
  },
  {
    id: "quizy-16",
    title: "Quizy",
    description:
      "Interactive quiz app using Trivia API. Users can choose categories and difficulty, and test their knowledge in real-time.",
    liveUrl: "https://jusish-quizy.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Trivia API",
      "Tailwind CSS",
      "React Hooks",
    ],
    categories: ["frontend"],
    githubUrl: "https://github.com/jusish/Quizy",
  },

  // === DESIGN ===
  {
    id: "projexess-17",
    title: "Projexess UI Kit",
    description:
      "Minimal and clean UI design system for a project management software. Created using grids, icons, and branded illustrations.",
    technologies: ["Figma", "Adobe Illustrator"],
    categories: ["design"],
    liveUrl:
      "https://www.figma.com/design/yTcddqeE6tAfrUgLnPpMwb/Projexess?m=auto&t=u9k54qm1urJ3fmKd-6",
  },
  {
    id: "stocker-18",
    title: "Stocker App UI",
    description:
      "Stock management system UI and frontend, built with Shadcn UI and Next.js. Designed for simplicity and business clarity.",
    technologies: [
      "Figma",
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    categories: ["design", "frontend"],
    liveUrl:
      "https://www.figma.com/design/mlqkUVuEJ0ZlShOYeOTrLa/Stock-System?m=auto&t=u9k54qm1urJ3fmKd-6",
  },
];
