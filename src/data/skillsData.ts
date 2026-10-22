import type { ElementType } from "react";
import {
  Bot,
  Boxes,
  Cpu,
  Database,
  Grid3x3,
  KeyRound,
  MonitorSmartphone,
  Network,
  Radio,
  Search,
  Sliders,
  Sparkles,
  Terminal,
  Webhook,
} from "lucide-react";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

export type Skill = { name: string; icon: ElementType };
export type SkillGroup = { group: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: Database },
      { name: "Java", icon: SiOpenjdk },
      { name: "C++", icon: SiCplusplus },
      { name: "Bash", icon: Terminal },
    ],
  },
  {
    group: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "HTML5/CSS3", icon: SiHtml5 },
      { name: "Responsive UI", icon: MonitorSmartphone },
      { name: "React Flow", icon: Network },
    ],
  },
  {
    group: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Webhook },
      { name: "WebSockets", icon: Radio },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Microservices", icon: Boxes },
    ],
  },
  {
    group: "AI & Modern Stack",
    skills: [
      { name: "Gemini API", icon: Sparkles },
      { name: "OpenAI API", icon: Bot },
      { name: "Vector RAG", icon: Search },
      { name: "Vector Databases", icon: Grid3x3 },
      { name: "Prompt Engineering", icon: Sliders },
      { name: "LLM Orchestration", icon: Cpu },
    ],
  },
  {
    group: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Vercel", icon: SiVite },
      { name: "JWT Auth", icon: KeyRound },
    ],
  },
];
