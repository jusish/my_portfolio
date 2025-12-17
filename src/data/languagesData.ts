export interface Language {
  name: string;
  proficiency: string;
  level: "native" | "fluent" | "conversational" | "basic";
}

export const languagesData: Language[] = [
  {
    name: "Kinyarwanda",
    proficiency: "Native",
    level: "native",
  },
  {
    name: "English",
    proficiency: "Fluent",
    level: "fluent",
  },
];
