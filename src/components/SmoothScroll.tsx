import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { resetSmoothScroll, setActiveLenis } from "../lib/scroll";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    resetSmoothScroll();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
    });
    setActiveLenis(lenis);

    return () => {
      lenis.destroy();
      setActiveLenis(null);
    };
  }, []);

  return children;
}
