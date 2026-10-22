export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  content?: BlogBlock[];
}

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

export const blogsData: Blog[] = [
  {
    title: "Building SonicDrop: Air-Gapped Ultrasonic Data Transfer with C++ WebAssembly & DSP",
    date: "Oct 20, 2026",
    claps: 128,
    tags: ["WebAssembly", "Acoustic DSP", "TypeScript", "Web Audio API", "Reed-Solomon FEC"],
    link: "https://krishnaworks-10.vercel.app/sonicdrop.html",
    isExternal: true,
    description: "How I engineered an air-gapped data transport protocol in the browser transmitting text and cryptographic keys over near-inaudible sound waves (18.5–20 kHz) using C++ ggwave WebAssembly, 16-FSK modulation, Reed-Solomon FEC, and Web Audio API.",
    readingTime: "8 min read",
  },
  {
    title: "Building Chronos: High-Frequency OS Telemetry & TUI Dashboard in TypeScript",
    date: "Oct 12, 2026",
    claps: 94,
    tags: ["TypeScript", "Ink / React", "OS Telemetry", "Zero-GC Buffers"],
    link: "https://krishnaworks-10.vercel.app/chronos.html",
    isExternal: true,
    description: "How I engineered a real-time, low-overhead terminal telemetry engine with zero-GC typed ring buffers, a decoupled multi-tier sampling engine, and smooth rolling process inspection in Ink/React.",
    readingTime: "6 min read",
  },
  {
    title: "Building Argus: Zero-Dependency Embedded Search Engine",
    date: "Sep 28, 2026",
    claps: 156,
    tags: ["TypeScript", "Information Retrieval", "BM25", "V8 Optimizations"],
    link: "https://krishnaworks-10.vercel.app/argus.html",
    isExternal: true,
    description: "How I engineered a deterministic BM25 full-text search engine in TypeScript with mechanical sympathy for V8, custom inverted indices, AST query parsing, and compression.",
    readingTime: "9 min read",
  },
  {
    title: "Building p2pcopy: Zero-Cloud Peer-to-Peer Streaming with WebRTC",
    date: "Sep 15, 2026",
    claps: 82,
    tags: ["TypeScript", "WebRTC", "Node.js", "WebSocket"],
    link: "https://krishnaworks-10.vercel.app/p2pcopy.html",
    isExternal: true,
    description: "How I designed a zero-cloud, end-to-end encrypted transfer tool with WebRTC DataChannels, chunked SCTP backpressure streaming, and seamless terminal-to-browser interoperability.",
    readingTime: "7 min read",
  },
  {
    title: "Building Android Apps Without a Laptop: On-Device Dev with Termux & Antigravity CLI",
    date: "Aug 30, 2026",
    claps: 112,
    tags: ["Android", "Termux", "Antigravity CLI", "PRoot"],
    link: "https://krishnaworks-10.vercel.app/cleanfiles.html",
    isExternal: true,
    description: "How I ran an AI coding agent inside Ubuntu 24.04 PRoot on Android to architect, compile, sign, and install CleanFiles APK directly on my phone.",
    readingTime: "5 min read",
  },
  {
    title: "Building Repurpose AI: Multi-Platform Content Automation",
    date: "Aug 14, 2026",
    claps: 77,
    tags: ["Next.js", "FastAPI", "OpenAI", "Redis"],
    link: "https://krishnaworks-10.vercel.app/repurpose-ai.html",
    isExternal: true,
    description: "How I built an intelligent content transformation pipeline with AST parsing, token-budgeted prompt graphs, and automated multi-channel delivery.",
    readingTime: "6 min read",
  },
  {
    title: "Building Kinship: Private Micro-Social Network",
    date: "Jul 22, 2026",
    claps: 65,
    tags: ["React Flow", "Supabase", "TypeScript", "Tailwind"],
    link: "https://krishnaworks-10.vercel.app/kinship.html",
    isExternal: true,
    description: "How I designed a zoomable infinite canvas family tree with React Flow, custom spouse connection nodes, layout recalculation algorithms, and vector PDF rendering.",
    readingTime: "5 min read",
  },
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
