"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  type TechIcon,
  type TechKey,
  type TechItem,
  type Project,
  iconMap,
  techNames,
  projectsData,
} from "@/data/projectsData";

export {
  type TechIcon,
  type TechKey,
  type TechItem,
  type Project,
  iconMap,
  techNames,
  projectsData,
};

export const ProjectCard = ({
  project,
  isPriority = false,
}: {
  project: Project;
  isPriority?: boolean;
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  const imageSrc =
    resolvedTheme === "light" && project.lightModeSrc
      ? project.lightModeSrc
      : project.src;

  const targetBlog = project.blogSlug || project.slug;

  return (
    <Link
      href={`/blogs/${targetBlog}`}
      className="flex flex-col group cursor-pointer"
    >
      {/* Full-size Project Cover Image */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[8px] border border-black/10 dark:border-white/[0.12] bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm transition-all duration-300 group-hover:border-black/25 dark:group-hover:border-white/25 group-hover:shadow-md">
        <Image
          src={imageSrc}
          alt={`${project.title} preview`}
          width={800}
          height={500}
          priority={isPriority}
          sizes="(min-width: 768px) 25vw, 100vw"
          quality={90}
          className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />

        {/* Ambient bottom gradient vignette on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Area directly below the image */}
      <div className="mt-3.5 flex flex-col flex-1 px-0.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight truncate group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Project Description */}
        <p className="mt-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Icons (ONLY icons/emojis from old portfolio, no text, no live demo text) */}
        <div className="flex items-center justify-between gap-3 mt-3 pt-1">
          <div className="flex gap-2 items-center flex-wrap">
            {project.tech.map((key) => {
              const TechIcon = iconMap[key];
              const tooltipText = techNames[key] || key;
              const uniqueId = `${project.title}-${key}`;

              if (!TechIcon) return null;

              return (
                <div
                  key={key}
                  className="relative flex items-center justify-center"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setHoveredTech(uniqueId);
                  }}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-[5px] border border-black/10 dark:border-white/[0.12] bg-zinc-50 dark:bg-zinc-800/80 shadow-xs hover:border-black/30 dark:hover:border-white/30 transition-colors">
                    <TechIcon className="w-3.5 h-3.5" />
                  </span>

                  <AnimatePresence>
                    {hoveredTech === uniqueId && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-7 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                      >
                        <div className="bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] font-mono px-2 py-0.5 rounded shadow-xl whitespace-nowrap">
                          {tooltipText}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export function ProjectsGrid() {
  const rows: Project[][] = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    rows.push(projectsData.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col relative z-10 w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 w-full">
            {row.map((project, colIndex) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isPriority={rowIndex === 0 && colIndex === 0}
              />
            ))}
          </div>

          {rowIndex < rows.length - 1 && (
            <div className="relative my-10 w-full">
              <div
                className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
                style={{
                  maskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
              <div
                className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
              />
              <div
                className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
                style={{ transform: "translate(50%, -50%)" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
