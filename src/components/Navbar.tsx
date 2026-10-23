"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isMac, setIsMac] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMac(
      typeof navigator !== "undefined" &&
        /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    );
  }, []);

  const openSearch = () => {
    window.dispatchEvent(new CustomEvent("open-command-menu"));
  };

  const isProjects = pathname === "/projects" || pathname.startsWith("/projects/");
  const isBlogs = pathname === "/blogs" || pathname.startsWith("/blogs/");

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md transition-colors duration-300 pointer-events-auto">
      {/* Bottom dotted border line matching the blueprint grid */}
      <div
        className="absolute left-0 right-0 bottom-0 h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Grid crosshair corner nodes at left:30% and right:30% */}
      <div
        className="absolute bottom-0 left-[30%] w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
        style={{ transform: "translate(-50%, 50%)" }}
      />
      <div
        className="absolute bottom-0 right-[30%] w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
        style={{ transform: "translate(50%, 50%)" }}
      />

      <nav
        aria-label="Main Navigation"
        className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 bottom-0 flex items-center justify-between px-4"
      >
        {/* Left: Avatar + Brand + Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative p-[1.5px] rounded-[4px] border border-black/20 dark:border-white/[0.2] shrink-0">
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-[2px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/avatar.jpg"
                  alt="Krishna"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <span className="font-semibold text-[13.5px] sm:text-[14px] text-zinc-900 dark:text-zinc-100 tracking-tight">
              Krishna
            </span>
          </Link>

          <span className="text-zinc-300 dark:text-zinc-700 text-[11px] font-mono">/</span>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[12.5px] sm:text-[13px] font-medium">
            <Link
              href="/projects"
              className={`px-2 py-0.5 rounded-[4px] transition-all duration-150 ${
                isProjects
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className={`px-2 py-0.5 rounded-[4px] transition-all duration-150 ${
                isBlogs
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* Right: Technical Search button + ThemeToggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openSearch}
            className="group flex items-center gap-2 h-7 sm:h-7.5 px-2 sm:px-2.5 rounded-[4px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-black/10 dark:border-white/10 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all text-[11.5px] cursor-pointer"
            aria-label="Search"
          >
            <span className="font-mono text-[10.5px] text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
              <span className="text-[11px]">&gt;</span> Search
            </span>
            <kbd className="hidden sm:inline-flex items-center font-mono text-[9.5px] text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-zinc-800/80 px-1 py-0.5 rounded border border-black/10 dark:border-white/10">
              {isMac ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>

          <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-200" />
        </div>
      </nav>
    </header>
  );
}
