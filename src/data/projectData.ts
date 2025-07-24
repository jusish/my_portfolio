// projectData.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  media: {
    type: "image" | "video";
    src: string;
    poster?: string; // Thumbnail for video
  };
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  category: "frontend" | "backend" | "fullstack" | "design";
}

export const projectData: Project[] = [
  // === BACKEND ===
  {
    id: "parking-01",
    title: "SmartPark API",
    description:
      "API for managing parking slot bookings, availability, and secure access using JWT. Built with clean architecture and Prisma ORM.",
    media: {
      type: "video",
      src: "/assets/videos/smartpark.mp4"
    },
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger"
    ],
    category: "backend",
    githubUrl: "https://github.com/jusish/car-parking-backend"
  },
  {
    id: "payroll-02",
    title: "PayrollX",
    description:
      "Automates salary processing for employees, sends notifications via email, and offers admin control with JWT-secured endpoints.",
    media: {
      type: "video",
      src: "/assets/videos/payrollx.mp4"
    },
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Spring Mail",
      "Swagger"
    ],
    category: "backend",
    githubUrl: "https://github.com/jusish/Employee-Payroll-Management"
  },
  {
    id: "eucl-03",
    title: "EUCL Token Service",
    description:
      "Prepaid electricity token generator designed for EUCL clients. Handles secure token creation using Java Spring Boot.",
    media: {
      type: "video",
      src: "/assets/videos/eucl-prepaid.mp4"
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger"],
    category: "backend",
    githubUrl: "https://github.com/jusish/eucl"
  },
  {
    id: "reminderr-04",
    title: "Reminderr API",
    description:
      "Schedules reminders with support for repeat patterns and sends notifications via email. Lightweight and easy to use.",
    media: {
      type: "video",
      src: "/assets/videos/reminderr.mp4"
    },
    githubUrl: "https://github.com/jusish/remindrr-backend",
    technologies: [
      "Node.js",
      "Express",
      "JWT",
      "PostgreSQL",
      "Nodemailer",
      "Cron Jobs"
    ],
    category: "backend"
  },
  {
    id: "recipe-nest-05",
    title: "RecipeNest API",
    description:
      "CRUD API for user recipes built with NestJS and Prisma. Handles user authentication and recipe management.",
    media: {
      type: "video",
      src: "/assets/videos/recipenest.mp4"
    },
    githubUrl: "https://github.com/jusish/recipe-nestjs",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Swagger"
    ],
    category: "backend"
  },

  // === FRONTEND ===
  {
    id: "itasks-06",
    title: "iTasks",
    description:
      "Task management app that lets you track task urgency, set personal challenges, and monitor progress visually.",
    media: {
      type: "video",
      src: "/assets/videos/itasks.mp4"
    },
    liveUrl: "https://i-tasks-murex.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "Zustand"],
    category: "frontend",
    githubUrl: "https://github.com/jusish/iTasks"
  },
  {
    id: "quizy-07",
    title: "Quizy",
    description:
      "Interactive quiz app using Trivia API. Users can choose categories and difficulty, and test their knowledge in real-time.",
    media: {
      type: "video",
      src: "/assets/videos/quizy.mp4"
    },
    liveUrl: "https://jusish-quizy.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Trivia API",
      "Tailwind CSS",
      "React Hooks"
    ],
    category: "frontend",
    githubUrl: "https://github.com/jusish/Quizy"
  },

  // === DESIGN ===
  {
    id: "e-ubaka-08",
    title: "E-Ubaka UI & Frontend",
    description:
      "Construction site management system design — for owners, engineers, and storekeepers. Includes UI design and React-based frontend.",
    media: {
      type: "video",
      src: "/assets/videos/e-ubaka.mp4"
    },
    technologies: ["Figma", "React", "React Query", "Zustand", "Tailwind CSS"],
    category: "design",
    liveUrl:
      "https://www.figma.com/design/1oYJsR0gEs0McLq3BdpRvw/E-UBAKA-%F0%9F%8F%9B%EF%B8%8F%F0%9F%91%B7%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%8F%AD?m=auto&t=u9k54qm1urJ3fmKd-6"
  },
  {
    id: "projexess-09",
    title: "Projexess UI Kit",
    description:
      "Minimal and clean UI design system for a project management software. Created using grids, icons, and branded illustrations.",
    media: {
      type: "video",
      src: "/assets/videos/projexess.mp4"
    },
    technologies: ["Figma", "Adobe Illustrator"],
    category: "design",
    liveUrl:
      "https://www.figma.com/design/yTcddqeE6tAfrUgLnPpMwb/Projexess?m=auto&t=u9k54qm1urJ3fmKd-6"
  },
  {
    id: "stocker-10",
    title: "Stocker App UI",
    description:
      "Stock management system UI and frontend, built with Shadcn UI and Next.js. Designed for simplicity and business clarity.",
    media: {
      type: "video",
      src: "/assets/videos/stocker.mp4"
    },
    technologies: [
      "Figma",
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS"
    ],
    category: "design",
    liveUrl:
      "https://www.figma.com/design/mlqkUVuEJ0ZlShOYeOTrLa/Stock-System?m=auto&t=u9k54qm1urJ3fmKd-6"
  },
  // === FULLSTACK ===
  {
    id: "bankup-11",
    title: "Bankup",
    description:
      "A digital banking management system with features like loan handling, top-ups, liquidation, analytics, and PDF report generation.",
    media: {
      type: "video",
      src: "/assets/videos/bankup.mp4"
    },
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
      "Swagger"
    ],
    category: "fullstack",
    liveUrl: "https://bankupp.netlify.app/overview"
  }
];
