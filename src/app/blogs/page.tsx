"use client";

import { Navbar } from "@/components/Navbar";
import { CurrentTime } from "@/components/CurrentTime";
import { FooterBackground } from "@/components/FooterBackground";
import { BlogList } from "@/components/BlogList";

export default function AllBlogsPage() {
  return (
    <>
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

        {/* Content Section - Compact top spacing */}
        <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[124px] sm:pt-[132px] pb-16 px-4 flex flex-col z-10 relative">
          {/* Header Section: Title & Subtitle matching old portfolio */}
          <div className="flex flex-col items-center justify-center text-center mt-2 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              Blog
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-center mt-3 leading-relaxed">
              This blog will serve as a home for all my thoughts, notes and projects, ranging from programming to web development and more. Scroll down and check &lsquo;em out!
            </p>
          </div>

          {/* Dotted Blueprint Separator Line below Subtitle */}
          <div className="relative mb-8">
            <div
              className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
            <div className="absolute -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
            <div className="absolute left-1/2 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20 hidden md:block" />
          </div>

          {/* Blog Cards Grid */}
          <div className="relative pb-6">
            <BlogList />
          </div>

          {/* Bottom Separator */}
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
            <div className="absolute -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
            <div className="absolute -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </>
  );
}
