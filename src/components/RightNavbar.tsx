"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export function RightNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const links = useMemo(
    () => [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Activity", href: "#github" },
      { name: "Skills", href: "#skills" },
      { name: "Blogs", href: "#blogs" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));

    const sync = () => {
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveSection(current ?? ids[0] ?? null);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [links]);

  if (pathname !== "/") return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none hidden lg:block"
      style={{ width: 'calc(100vw - var(--removed-body-scroll-bar-size, 0px))' }}
    >
      <nav className="absolute top-[22vh] left-[calc(69%+32px)] pointer-events-auto flex flex-col gap-4 mt-2">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-500 uppercase mb-1">Index</h3>
        {links.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out flex items-center gap-3 ${
                isActive
                  ? "text-zinc-800 dark:text-zinc-200"
                  : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              <span
                className={`h-[1px] transition-all duration-300 ease-out ${
                  isActive ? "w-3 bg-zinc-400 dark:bg-zinc-600" : "w-0 bg-transparent"
                }`}
              />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
