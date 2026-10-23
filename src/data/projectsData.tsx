import React, { type ComponentType } from "react";
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

export const WebAssemblyIcon: TechIcon = (props) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#654FF0" d="M1.5 1.5h125v125H1.5z" />
    <path
      fill="#ffffff"
      d="M22.5 35h13.2l10.3 43.1L57.5 35h13l-18.4 58H39.5L28.1 49.9 16.7 93H4.1L22.5 35zm60.7 0h13.2l10.3 43.1L118.2 35h13l-18.4 58h-12.6L88.8 49.9 77.4 93H64.8l18.4-58z"
    />
  </svg>
);

export const WebAudioIcon: TechIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

export const WebRTCIcon: TechIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00d2ff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 9h11M13 5l4 4-4 4" />
    <path d="M19 15H8M12 11l-4 4 4 4" />
  </svg>
);

export const GeminiIcon: TechIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="#a855f7" {...props}>
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export const ReactFlowIcon: TechIcon = (props) => (
  <svg viewBox="0 0 128 128" {...props}>
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z" />
    </g>
  </svg>
);

export type TechKey =
  | "wasm"
  | "webaudio"
  | "webrtc"
  | "gemini"
  | "reactflow"
  | "next"
  | "ts"
  | "react"
  | "three"
  | "langchain"
  | "langgraph"
  | "rag"
  | "node"
  | "tailwind"
  | "github"
  | "fastapi"
  | "redis"
  | "python"
  | "kotlin"
  | "android"
  | "compose"
  | "mqtt"
  | "supabase"
  | "databricks"
  | "postgres"
  | "docker"
  | "grafana"
  | "prometheus"
  | "sklearn"
  | "qdrant"
  | "chrome"
  | "gradle"
  | "junit"
  | "playwright"
  | "websockets"
  | "llm";

export type TechItem = TechKey | { label: string; tooltip?: string };

export type ProjectStatus = "live" | "building" | "research" | "archived";

export interface Project {
  slug: string;
  blogSlug?: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  description: string;
  tech: TechKey[];
  github: string;
  live?: string;
  status: ProjectStatus;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  wasm: WebAssemblyIcon,
  webaudio: WebAudioIcon,
  webrtc: WebRTCIcon,
  gemini: GeminiIcon,
  reactflow: ReactFlowIcon,
  next: SiNextdotjs,
  ts: SiTypescript,
  react: SiReact,
  three: SiThreedotjs,
  langchain: SiLangchain,
  langgraph: Network,
  rag: Search,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
  github: SiGithub,
  fastapi: SiFastapi,
  redis: SiRedis,
  python: SiPython,
  kotlin: SiKotlin,
  android: SiAndroid,
  compose: SiJetpackcompose,
  mqtt: SiEclipsemosquitto,
  supabase: SiSupabase,
  databricks: SiDatabricks,
  postgres: SiPostgresql,
  docker: SiDocker,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  sklearn: SiScikitlearn,
  qdrant: SiQdrant,
  chrome: SiGooglechrome,
  gradle: SiGradle,
  junit: SiJunit5,
  playwright: MousePointerClick,
  websockets: Radio,
  llm: Sparkles,
};

export const techNames: Record<TechKey, string> = {
  wasm: "WebAssembly",
  webaudio: "Web Audio DSP",
  webrtc: "WebRTC",
  gemini: "Gemini AI",
  reactflow: "React Flow",
  next: "Next.js",
  ts: "TypeScript",
  react: "React",
  three: "Three.js",
  langchain: "LangChain",
  langgraph: "LangGraph",
  rag: "RAG",
  node: "Node.js",
  tailwind: "Tailwind CSS",
  github: "GitHub API",
  fastapi: "FastAPI",
  redis: "Redis",
  python: "Python",
  kotlin: "Kotlin",
  android: "Android",
  compose: "Jetpack Compose",
  mqtt: "MQTT",
  supabase: "Supabase",
  databricks: "Databricks",
  postgres: "PostgreSQL",
  docker: "Docker",
  grafana: "Grafana",
  prometheus: "Prometheus",
  sklearn: "scikit-learn",
  qdrant: "Qdrant",
  chrome: "Chrome Extension",
  gradle: "Gradle",
  junit: "JUnit",
  playwright: "Playwright",
  websockets: "WebSockets",
  llm: "LLM",
};

export const projectsData: Project[] = [
  {
    slug: "sonicdrop",
    blogSlug: "sonicdrop",
    title: "SonicDrop",
    imageTitle: "Ultrasonic Protocol",
    src: "/images/sonicdrop_dashboard.png",
    description: "Air-gapped data transfer protocol transmitting text and cryptographic keys through near-inaudible ultrasonic audio (18.5–20 kHz) with WebAssembly DSP and Reed-Solomon FEC.",
    tech: ["wasm", "ts", "react", "webaudio"],
    github: "https://github.com/Krishnanand-10/SonicDrop",
    live: "https://sonic-drop.vercel.app",
    status: "live",
    hasPin: false,
  },
  {
    slug: "argus-search",
    blogSlug: "argus",
    title: "Argus Search",
    imageTitle: "Embedded Search Engine",
    src: "/images/argus_preview.png",
    description: "A high-performance, deterministic full-text search engine built from first principles in TypeScript with mechanical sympathy for JavaScript runtimes.",
    tech: ["ts", "node"],
    github: "https://github.com/Krishnanand-10/Argus",
    live: "https://argus-search.vercel.app",
    status: "live",
    hasPin: false,
  },
  {
    slug: "p2pcopy",
    blogSlug: "p2pcopy",
    title: "p2pcopy",
    imageTitle: "P2P WebRTC Transfer",
    src: "/images/p2pcopy_preview.png",
    description: "Zero-cloud, end-to-end encrypted peer-to-peer file and clipboard transfer streaming across developer terminals and web browsers via WebRTC DataChannels.",
    tech: ["ts", "node", "webrtc"],
    github: "https://github.com/Krishnanand-10/p2pcopy",
    live: "https://p2pcopy.vercel.app",
    status: "live",
    hasPin: false,
  },
  {
    slug: "repurpose-ai",
    blogSlug: "repurpose-ai",
    title: "RepurposeAI",
    imageTitle: "Content Automation SaaS",
    src: "/images/repurpose_ai_preview.png",
    description: "AI-powered multi-platform content repurposing SaaS. Ingests YouTube URLs, articles, and audio transcripts to generate LinkedIn carousels, X threads, video scripts, and SEO packs.",
    tech: ["next", "ts", "tailwind", "gemini"],
    github: "https://github.com/Krishnanand-10/RepurposeAI",
    live: "https://repurposeai-rp.vercel.app/",
    status: "live",
    hasPin: false,
  },
  {
    slug: "kinship",
    blogSlug: "kinship",
    title: "Kinship Family Tree",
    imageTitle: "Interactive Lineage Canvas",
    src: "/images/kinship_preview.png",
    description: "A high-end family tree platform with a zoomable React Flow canvas, spouse junctions, sibling row alignment, and PDF export capabilities.",
    tech: ["reactflow", "ts", "supabase"],
    github: "https://github.com/Krishnanand-10/familytree",
    live: "https://familytree-livid.vercel.app",
    status: "live",
    hasPin: false,
  },
];
