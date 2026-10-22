"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      ns?: Record<string, unknown>;
      q?: unknown[];
      loaded?: boolean;
    };
  }
}

export function CalEmbed() {
  useEffect(() => {
    (function (C: Window, A: string, L: string) {
      const p = function (a: unknown, ar: unknown) {
        // @ts-expect-error cal queue
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          // eslint-disable-next-line prefer-rest-params
          const ar = arguments;
          if (!cal?.loaded) {
            if (cal) {
              cal.ns = {};
              cal.q = [];
            }
            const s = d.createElement("script");
            s.src = A;
            s.async = true;
            d.head.appendChild(s);
            if (cal) cal.loaded = true;
          }
          if (ar[0] === L) {
            // eslint-disable-next-line prefer-rest-params
            const api = function () {
              // eslint-disable-next-line prefer-rest-params
              p(api, arguments);
            };
            const namespace = ar[1] as string;
            if (cal) {
              cal.ns = cal.ns || {};
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                // eslint-disable-next-line prefer-rest-params
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                // eslint-disable-next-line prefer-rest-params
                p(cal, ar);
              }
            }
            return;
          }
          if (cal) {
            // eslint-disable-next-line prefer-rest-params
            p(cal, ar);
          }
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (window.Cal) {
      window.Cal("init", { origin: "https://cal.com" });
      window.Cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#ffffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return null;
}
