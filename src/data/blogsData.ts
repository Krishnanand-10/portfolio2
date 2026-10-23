import { blogArticlesHtml } from "./blogArticles";

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | { type: "list"; items: string[] }
  | {
      type: "links";
      items: { title: string; href: string; description: string }[];
    };

export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  image: string;
  description: string;
  readingTime?: string;
  slug: string;
  contentHtml?: string;
  content?: BlogBlock[];
}

export const blogsData: Blog[] = [
  {
    slug: "sonicdrop",
    title: "Building SonicDrop: Air-Gapped Ultrasonic Data Transfer with C++ WebAssembly & DSP",
    date: "October 20, 2026",
    claps: 128,
    tags: ["WebAssembly", "Acoustic DSP", "TypeScript", "Web Audio API", "Reed-Solomon FEC"],
    link: "/blogs/sonicdrop",
    isExternal: false,
    image: "/images/sonicdrop_dashboard.png",
    description: "How I engineered an air-gapped data transport protocol in the browser transmitting text and cryptographic keys over near-inaudible sound waves (18.5–20 kHz) using C++ ggwave WebAssembly, 16-FSK modulation, Reed-Solomon FEC, and Web Audio API.",
    readingTime: "8 min read",
    contentHtml: blogArticlesHtml["sonicdrop"],
  },
  {
    slug: "chronos",
    title: "Building Chronos: High-Frequency OS Telemetry & TUI Dashboard in TypeScript",
    date: "October 11, 2026",
    claps: 94,
    tags: ["TypeScript", "Ink / React", "OS Telemetry", "Zero-GC Buffers", "V8 Optimizations"],
    link: "/blogs/chronos",
    isExternal: false,
    image: "/images/chronos_dashboard.png",
    description: "How I engineered a real-time, low-overhead terminal telemetry engine with zero-GC typed ring buffers, a decoupled multi-tier sampling engine, and smooth rolling process inspection in Ink/React.",
    readingTime: "6 min read",
    contentHtml: blogArticlesHtml["chronos"],
  },
  {
    slug: "argus",
    title: "Building Argus: Zero-Dependency Embedded Search Engine",
    date: "October 8, 2026",
    claps: 156,
    tags: ["TypeScript", "Information Retrieval", "BM25", "V8 Optimizations"],
    link: "/blogs/argus",
    isExternal: false,
    image: "/images/argus_preview.png",
    description: "How I engineered a deterministic BM25 full-text search engine in TypeScript with mechanical sympathy for V8, custom inverted indices, AST query parsing, and compression.",
    readingTime: "9 min read",
    contentHtml: blogArticlesHtml["argus"],
  },
  {
    slug: "p2pcopy",
    title: "Building p2pcopy: Zero-Cloud Peer-to-Peer Streaming with WebRTC",
    date: "September 10, 2026",
    claps: 82,
    tags: ["TypeScript", "WebRTC", "Node.js", "WebSocket"],
    link: "/blogs/p2pcopy",
    isExternal: false,
    image: "/images/p2pcopy_preview.png",
    description: "How I designed a zero-cloud, end-to-end encrypted transfer tool with WebRTC DataChannels, chunked SCTP backpressure streaming, and seamless terminal-to-browser interoperability.",
    readingTime: "7 min read",
    contentHtml: blogArticlesHtml["p2pcopy"],
  },
  {
    slug: "termux-antigravity",
    title: "Building Android Apps Without a Laptop: On-Device Dev with Termux & Antigravity CLI",
    date: "September 3, 2026",
    claps: 112,
    tags: ["Android", "Termux", "Antigravity CLI", "PRoot"],
    link: "/blogs/termux-antigravity",
    isExternal: false,
    image: "/images/cleanfiles_preview.png",
    description: "How I ran an AI coding agent inside Ubuntu 24.04 PRoot on Android to architect, compile, sign, and install CleanFiles APK directly on my phone.",
    readingTime: "5 min read",
    contentHtml: blogArticlesHtml["termux-antigravity"],
  },
  {
    slug: "repurpose-ai",
    title: "Building Repurpose AI: Multi-Platform Content Automation",
    date: "August 20, 2026",
    claps: 77,
    tags: ["Next.js", "FastAPI", "OpenAI", "Redis"],
    link: "/blogs/repurpose-ai",
    isExternal: false,
    image: "/images/repurpose_ai_preview.png",
    description: "How I built an intelligent content transformation pipeline with AST parsing, token-budgeted prompt graphs, and automated multi-channel delivery.",
    readingTime: "6 min read",
    contentHtml: blogArticlesHtml["repurpose-ai"],
  },
  {
    slug: "kinship",
    title: "Building Kinship: Private Micro-Social Network",
    date: "July 15, 2026",
    claps: 65,
    tags: ["React Flow", "Supabase", "TypeScript", "Tailwind"],
    link: "/blogs/kinship",
    isExternal: false,
    image: "/images/kinship_preview.png",
    description: "How I designed a zoomable infinite canvas family tree with React Flow, custom spouse connection nodes, layout recalculation algorithms, and vector PDF rendering.",
    readingTime: "5 min read",
    contentHtml: blogArticlesHtml["kinship"],
  },
];

export const blogPosts = blogsData;

export function getBlogPostBySlug(slug: string) {
  return blogsData.find((blog) => blog.slug === slug);
}
