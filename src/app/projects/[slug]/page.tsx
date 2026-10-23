import { Navbar } from "@/components/Navbar";
import { CurrentTime } from "@/components/CurrentTime";
import { FooterBackground } from "@/components/FooterBackground";
import { projectsData, iconMap, techNames, TechItem, TechKey } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { SiGithub } from "react-icons/si";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  const statusDot =
    project?.status === "research" ? "bg-sky-500"
    : project?.status === "building" ? "bg-red-500"
    : project?.status === "archived" ? "bg-zinc-400 dark:bg-zinc-500"
    : "bg-emerald-500";
  const statusText =
    project?.status === "research" ? "text-sky-600 dark:text-sky-400"
    : project?.status === "building" ? "text-red-600 dark:text-red-400"
    : project?.status === "archived" ? "text-zinc-500 dark:text-zinc-400"
    : "text-emerald-600 dark:text-emerald-400";
  const statusLabel =
    project?.status === "research" ? "Research"
    : project?.status === "building" ? "Building"
    : project?.status === "archived" ? "Archived"
    : "Live";

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div
        className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Horizontal Line below Navbar - Ultra-fine Micro Dots */}
      <div
        className="absolute left-0 right-0 top-14 h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Compact Time Strip (just enough for time to fit with micro-dot background) */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-14 h-12 -z-0 pointer-events-auto overflow-hidden">
        <FooterBackground />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Horizontal Line below Time Strip - Ultra-fine Micro Dots */}
      <div
        className="absolute left-0 right-0 top-[104px] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Ultra-Tiny Solid Nodes at Intersections */}
      {[
        { top: "56px", left: "30%" },
        { top: "56px", right: "30%" },
        { top: "104px", left: "30%" },
        { top: "104px", right: "30%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      {/* Content Section */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[124px] sm:pt-[132px] pb-16 px-4 flex flex-col z-10 relative">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>See all projects</span>
          </Link>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            projects/{project.slug}
          </span>
        </div>

        {/* Media (Video or Image) right at the top */}
        <div className="w-full aspect-[16/10] relative mt-8 rounded-lg overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-sm bg-zinc-100 dark:bg-[#0a0a0a] z-20">
          <Image
            src={project.src}
            alt={project.imageTitle}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            quality={85}
            className="object-cover"
          />
        </div>

        {/* Top Dashed Divider (Blueprint system) */}
        <div className="relative mt-8">
          <div
            className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Action Links Grid */}
        <div className="grid grid-cols-2 items-center justify-between py-4 relative">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <SiGithub className="w-4 h-4" /> Github
            </a>
          ) : (
            <div />
          )}

          {/* Vertical Divider 1 */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0 border-l border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          ) : (
            <div />
          )}
        </div>

        {/* Bottom Dashed Divider */}
        <div className="relative mb-6">
          <div
            className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Title and Status */}
        <div className="flex items-center justify-between w-full mb-4">
          <h1 className="text-[24px] sm:text-[28px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">
            {project.title}
          </h1>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {project.status === "live" && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${statusDot}`} />
            </span>
            <span className={`text-[13px] font-medium ${statusText}`}>{statusLabel}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>

        {/* Dashed Divider before Stack */}
        <div className="relative mt-8 mb-6">
          <div
            className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-[16px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Stack used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: TechItem, i: number) => {
              const isKey = typeof t === "string";
              const label = isKey ? techNames[t as TechKey] : t.label;
              const Icon = isKey ? iconMap[t as TechKey] : null;

              return (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/5 rounded-md text-[12px] font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
