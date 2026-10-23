"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface BlogArticleContentProps {
  contentHtml: string;
}

export function BlogArticleContent({ contentHtml }: BlogArticleContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const renderMermaid = () => {
    if (typeof window === "undefined" || !(window as any).mermaid) return;
    const mermaid = (window as any).mermaid;

    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "#09090b",
          primaryColor: "#27272a",
          primaryTextColor: "#f4f4f5",
          lineColor: "#71717a",
        },
      });

      const elements = containerRef.current?.querySelectorAll(".mermaid");
      if (elements && elements.length > 0) {
        elements.forEach(async (el, i) => {
          if (el.querySelector("svg")) return;
          const code = el.getAttribute("data-original-code") || el.textContent || "";
          if (!el.getAttribute("data-original-code")) {
            el.setAttribute("data-original-code", code);
          }
          const id = `mermaid-chart-${i}-${Date.now()}`;
          try {
            const { svg } = await mermaid.render(id, code.trim());
            el.innerHTML = svg;
          } catch (err) {
            console.error("Mermaid render error:", err);
          }
        });
      }
    } catch (e) {
      console.error("Mermaid init error:", e);
    }
  };

  useEffect(() => {
    renderMermaid();
  }, [contentHtml]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"
        strategy="lazyOnload"
        onLoad={renderMermaid}
      />
      <div
        ref={containerRef}
        className="blog-article-content w-full"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </>
  );
}
