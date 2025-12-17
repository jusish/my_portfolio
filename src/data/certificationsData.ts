export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  highlights?: string[];
  url?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Certified Java Developer",
    issuer: "Simplilearn",
    year: "2023–2024",
    description:
      "This certification demonstrates solid grounding in Java programming and backend development fundamentals. The curriculum covered core Java concepts, object-oriented programming, JSP, Servlets, JDBC, and Spring Boot.",
    highlights: [
      "Core Java concepts and object-oriented programming",
      "JSP, Servlets, and JDBC",
      "Spring Boot framework",
      "Structured programming and server-side logic",
      "Enterprise-style application development",
    ],
  },
  {
    id: "cert-2",
    title: "Certified Frontend Developer",
    issuer: "Simplilearn",
    year: "2023",
    description:
      "This certification validates comprehensive training in modern frontend web development. The program covered core and advanced frontend technologies including HTML5, CSS3, JavaScript, React.js, Angular.js, and responsive web design principles.",
    highlights: [
      "HTML5, CSS3, and JavaScript",
      "React.js and Angular.js",
      "Responsive web design principles",
      "User-friendly and scalable web interfaces",
      "Clean and maintainable frontend systems",
    ],
  },
  {
    id: "cert-3",
    title: "JavaScript Developer Certification",
    issuer: "freeCodeCamp",
    year: "2022",
    description:
      "This certification confirms proficiency in JavaScript programming, with emphasis on ES6 features, functional programming concepts, and practical application development.",
    highlights: [
      "ES6 features and modern JavaScript",
      "Functional programming concepts",
      "Practical application development",
      "Hands-on problem solving",
      "Real-world JavaScript usage",
    ],
  },
  {
    id: "cert-4",
    title: "PicoCTF-Africa Best Performer",
    issuer: "Carnegie Mellon University Africa (CMU-Africa)",
    year: "2023 & 2024",
    description:
      "Participated twice in PicoCTF-Africa, a competitive cybersecurity challenge organized by Carnegie Mellon University Africa. Achieved recognition as one of the first participating teams in Africa at the high-school level.",
    highlights: [
      "2024: 1st Place in African Highschool Competition",
      "2023: 3rd Place in African Highschool Competition",
      "Cybersecurity fundamentals and CTF problem solving",
      "Security thinking and vulnerability analysis",
      "Team-based technical problem solving under time constraints",
      "First participating teams in Africa category",
    ],
  },
];
