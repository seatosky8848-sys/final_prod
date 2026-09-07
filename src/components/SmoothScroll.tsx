import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const resetFrame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.cancelAnimationFrame(resetFrame);
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
    });

    return () => {
      window.cancelAnimationFrame(resetFrame);
      lenis.destroy();
    };
  }, []);

  return children;
}
