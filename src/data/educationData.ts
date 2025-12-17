export interface Education {
  id: string;
  school: string;
  location: string;
  level: string;
  period: string;
  grades: string;
  description: string;
  focus?: string;
}

export const educationData: Education[] = [
  {
    id: "edu-3",
    school: "Rwanda Coding Academy",
    location: "Nyabihu District, Rwanda",
    level: "Advanced Level (Upper Secondary)",
    period: "Late 2022 - 2025",
    grades: "Grade 10 - Grade 12",
    description:
      "Studied Software Programming & Embedded Systems as the main course. This is where I started getting into tech much more deeply, learning both software development and embedded systems programming. Completed 3 years of intensive technical education.",
    focus: "Software Programming & Embedded Systems",
  },
  {
    id: "edu-2",
    school: "Kagarama Secondary School",
    location: "Kicukiro, Kigali, Rwanda",
    level: "Ordinary Level (Lower Secondary)",
    period: "2020 - Mid 2022",
    grades: "Grade 8 - Grade 9",
    description:
      "Continued my lower secondary education, completing Grade 8 and Grade 9 (ordinary level curriculum). Spent 2 years here developing foundational academic skills.",
    focus: "General Education",
  },
  {
    id: "edu-1",
    school: "Groupe Scholaire Muhura",
    location: "Gatsibo, Rwanda",
    level: "Ordinary Level (Lower Secondary)",
    period: "2019 - 2020",
    grades: "Grade 7",
    description:
      "Started lower secondary education (ordinary level) with Grade 7. Began the transition from primary to secondary education, completing 1 year here.",
    focus: "General Education",
  },
  {
    id: "edu-0",
    school: "Groupe Scholaire Nyakayaga",
    location: "Gatsibo, Rwanda",
    level: "Primary School",
    period: "2012 - 2018",
    grades: "Grade 1 - Grade 6",
    description:
      "Completed primary school education from Grade 1 to Grade 6, laying the foundation for my academic journey. Spent 6 years building fundamental skills.",
    focus: "Primary Education",
  },
];
