"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsData, type Blog } from "@/data/blogsData";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={blog.link}
      target={blog.isExternal ? "_blank" : undefined}
      rel={blog.isExternal ? "noopener noreferrer" : undefined}
      className="flex flex-col group cursor-pointer"
    >
      {/* Full-size Cover Image - Matching ProjectCard */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[8px] border border-black/10 dark:border-white/[0.12] bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm transition-all duration-300 group-hover:border-black/25 dark:group-hover:border-white/25 group-hover:shadow-md">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={500}
          sizes="(min-width: 768px) 25vw, 100vw"
          quality={90}
          className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Area directly below the image */}
      <div className="mt-3.5 flex flex-col flex-1 px-0.5">
        <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight line-clamp-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {blog.title}
        </h3>

        <p className="mt-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {blog.description}
        </p>

        {/* Tags row */}
        <div className="flex gap-1.5 flex-wrap items-center mt-3">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 rounded border border-black/20 dark:border-white/[0.15] text-[9px] font-mono text-zinc-500 dark:text-zinc-400 leading-none"
            >
              {tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
              +{blog.tags.length - 3}
            </span>
          )}
        </div>

        {/* Card Footer: Date Published + Read More (same as old portfolio) */}
        <div className="flex items-center justify-between gap-3 mt-3 pt-2 border-t border-black/5 dark:border-white/5">
          <time className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            <svg
              viewBox="0 0 256 256"
              className="w-3.5 h-3.5 fill-current opacity-70"
            >
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
            </svg>
            <span>{blog.date}</span>
          </time>

          <span className="flex shrink-0 items-center gap-1.5 text-[12px] font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
            <span>Read More</span>
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogList() {
  if (blogsData.length === 0) {
    return (
      <div className="py-10 flex flex-col items-center justify-center text-center">
        <p className="text-[13px] text-zinc-500 dark:text-zinc-400">
          Nothing published yet.
        </p>
      </div>
    );
  }

  const rows: Blog[][] = [];
  for (let i = 0; i < blogsData.length; i += 2) {
    rows.push(blogsData.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col relative z-10 w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 w-full">
            {row.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
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
