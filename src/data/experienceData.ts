export type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  /** Logos that are their own coloured tile bleed to the edge instead of sitting inset on white. */
  imageBleed?: boolean;
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  screenshot?: string;
};

export const experiences: ExperienceData[] = [
  {
    title: "Dyashin Technosoft",
    role: "Python & Data Analytics Intern",
    dates: "Feb 2025 - Mar 2025",
    location: "Bengaluru, Karnataka",
    src: "/Experience-image/dyashin.png",
    type: "On-site",
    imageFit: "cover",
    imageBleed: true,
    imageZoom: 1,
    description: `
      Delivered Python-based analytics, automated data transformations, and supporting workflows in a client services environment.
      Coordinated with stakeholders and cross-functional peers to clarify technical requirements and ship maintainable data solutions.
      Automated repetitive data preparation steps to increase reporting throughput and accuracy.
    `,
    tech: ["Python", "Pandas", "SQL", "Data Analytics", "Workflow Automation"],
    metrics: [
      { label: "Role", value: "Analytics" },
      { label: "Status", value: "Completed" },
      { label: "Location", value: "Bengaluru" },
      { label: "Term", value: "Feb-Mar" },
    ],
  },
];
