export type Education = {
  school: string;
  degree: string;
  cgpa: string;
  dates: string;
  location: string;
  coursework: string[];
};

export const education: Education = {
  school: "Dayananda Sagar University",
  degree: "Master of Computer Applications (MCA)",
  cgpa: "Pursuing",
  dates: "Oct 2025 - Present",
  location: "Bengaluru, India",
  coursework: [
    "Full Stack Development",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Architecture",
    "Cloud Computing",
    "Machine Learning & AI",
  ],
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  note?: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    name: "Certified Secure Computer User (CSCU)",
    issuer: "EC-Council",
    date: "2024",
    note: "Cybersecurity & Network Defense",
  },
  {
    name: "Python & Data Analytics",
    issuer: "Dyashin Technosoft",
    date: "Mar 2025",
    note: "Internship Certificate",
  },
  {
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "2024",
    note: "Foundational AI & ML",
  },
];
