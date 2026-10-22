import type { ComponentType } from "react";
import { Network, Search, Radio, Sparkles, MousePointerClick } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiLangchain,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiPython,
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiEclipsemosquitto,
  SiSupabase,
  SiDatabricks,
  SiPostgresql,
  SiDocker,
  SiGrafana,
  SiPrometheus,
  SiScikitlearn,
  SiQdrant,
  SiGooglechrome,
  SiGradle,
  SiJunit5,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "langchain" | "langgraph" | "rag"
  | "node" | "tailwind" | "github" | "fastapi" | "redis" | "python"
  | "kotlin" | "android" | "compose" | "mqtt" | "supabase" | "databricks"
  | "postgres" | "docker" | "grafana" | "prometheus" | "sklearn" | "qdrant"
  | "chrome" | "gradle" | "junit" | "playwright" | "websockets" | "llm";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export type ProjectStatus = "live" | "building" | "research" | "archived";

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  description: string;
  tech: TechItem[];
  github: string;
  /** Omit when there is nothing working to link to. */
  live?: string;
  status: ProjectStatus;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs,
  langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  tailwind: SiTailwindcss, github: SiGithub, fastapi: SiFastapi, redis: SiRedis,
  python: SiPython, kotlin: SiKotlin, android: SiAndroid, compose: SiJetpackcompose,
  mqtt: SiEclipsemosquitto, supabase: SiSupabase, databricks: SiDatabricks,
  postgres: SiPostgresql, docker: SiDocker, grafana: SiGrafana, prometheus: SiPrometheus,
  sklearn: SiScikitlearn, qdrant: SiQdrant, chrome: SiGooglechrome, gradle: SiGradle,
  junit: SiJunit5, playwright: MousePointerClick, websockets: Radio, llm: Sparkles,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js",
  langchain: "LangChain", langgraph: "LangGraph", rag: "RAG", node: "Node.js",
  tailwind: "Tailwind CSS", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  python: "Python", kotlin: "Kotlin", android: "Android", compose: "Jetpack Compose",
  mqtt: "MQTT", supabase: "Supabase", databricks: "Databricks", postgres: "PostgreSQL",
  docker: "Docker", grafana: "Grafana", prometheus: "Prometheus", sklearn: "scikit-learn",
  qdrant: "Qdrant", chrome: "Chrome Extension", gradle: "Gradle", junit: "JUnit",
  playwright: "Playwright", websockets: "WebSockets", llm: "LLM",
};

export const projectsData: Project[] = [
  {
    slug: "sonicdrop",
    title: "SonicDrop",
    imageTitle: "Ultrasonic Data Transport",
    src: "/project-image/sonicdrop_dashboard.png",
    description: "Air-gapped data transfer protocol transmitting text and cryptographic keys through near-inaudible ultrasonic audio (18.5–20 kHz) with WebAssembly DSP and Reed-Solomon FEC.",
    tech: ["ts", "react", { label: "WebAssembly" }, { label: "Web Audio DSP" }],
    github: "https://github.com/Krishnanand-10",
    live: "https://sonic-drop.vercel.app",
    status: "live",
    hasPin: true,
  },
  {
    slug: "argus-search",
    title: "Argus Search",
    imageTitle: "Embedded Search Engine",
    src: "/project-image/argus_preview.png",
    description: "A high-performance, deterministic full-text search engine built from first principles in TypeScript with mechanical sympathy for JavaScript runtimes.",
    tech: ["ts", "node", "rag", { label: "BM25" }],
    github: "https://github.com/Krishnanand-10",
    live: "https://argus-search.vercel.app",
    status: "live",
    hasPin: true,
  },
  {
    slug: "p2pcopy",
    title: "p2pcopy",
    imageTitle: "P2P Data Stream",
    src: "/project-image/p2pcopy_preview.png",
    description: "Zero-cloud, end-to-end encrypted peer-to-peer file and clipboard sharing across developer terminals and web browsers via WebRTC DataChannels.",
    tech: ["ts", "node", "react", "websockets", { label: "WebRTC" }],
    github: "https://github.com/Krishnanand-10",
    live: "https://p2pcopy.vercel.app",
    status: "live",
    hasPin: true,
  },
  {
    slug: "repurpose-ai",
    title: "RepurposeAI",
    imageTitle: "Content Automation",
    src: "/project-image/repurpose_ai_dashboard.png",
    description: "AI-powered multi-platform content repurposing SaaS. Ingests YouTube URLs, articles, and audio to generate LinkedIn carousels, X threads, video scripts, and SEO packs.",
    tech: ["next", "ts", "tailwind", "fastapi", "llm"],
    github: "https://github.com/Krishnanand-10",
    live: "https://repurposeai-rp.vercel.app/",
    status: "live",
    hasPin: true,
  },
  {
    slug: "kinship",
    title: "Kinship Family Tree",
    imageTitle: "Lineage Canvas",
    src: "/project-image/kinship_landing.png",
    description: "Zoomable interactive canvas family tree built with React Flow, custom spouse junctions, sibling alignment algorithms, and vector PDF exports.",
    tech: ["react", "supabase", "postgres", "ts", "tailwind"],
    github: "https://github.com/Krishnanand-10",
    live: "https://familytree-livid.vercel.app",
    status: "live",
    hasPin: false,
  },
  {
    slug: "smart-learn",
    title: "Smart Learn",
    imageTitle: "AI Study Platform",
    src: "/project-image/smart_learn_dashboard.png",
    description: "AI study platform supporting multi-format ingestion (PDFs, media, URLs) with conversational tutoring, flashcards, quizzes, and Vector RAG retrieval with Supabase.",
    tech: ["next", "ts", "supabase", "rag", "llm"],
    github: "https://github.com/Krishnanand-10",
    live: "https://smart-learn-web.vercel.app",
    status: "live",
    hasPin: false,
  },
  {
    slug: "chronos",
    title: "Chronos",
    imageTitle: "OS Telemetry TUI",
    src: "/project-image/chronos_dashboard.png",
    description: "High-frequency OS telemetry engine and TUI dashboard in TypeScript with zero-GC typed ring buffers and decoupled multi-tier sampling.",
    tech: ["ts", "node", "react", { label: "Ink TUI" }],
    github: "https://github.com/Krishnanand-10",
    status: "building",
    hasPin: false,
  },
  {
    slug: "cleanfiles",
    title: "CleanFiles",
    imageTitle: "On-Device Android Tool",
    src: "/project-image/cleanfiles_preview.png",
    description: "Android utility app engineered on-device using Termux and PRoot Linux with automated cleaning workflows and native storage hooks.",
    tech: ["android", "python", { label: "Termux" }],
    github: "https://github.com/Krishnanand-10",
    status: "building",
    hasPin: false,
  },
];
