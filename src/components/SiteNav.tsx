import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "The Journey" },
  { to: "/mission", label: "Mission" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f4f1]/85 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-10">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-[28px]"
        >
          Ajay Lalwani
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="text-[13px] font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden h-10 items-center rounded-full bg-[#050505] px-5 text-[12px] font-medium uppercase tracking-wider text-[#f5f4f1] transition-colors hover:bg-accent sm:inline-flex"
          >
            Support Mission
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#f5f4f1] border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-12 rounded-full bg-[#050505] text-[#f5f4f1] text-sm font-medium tracking-wider uppercase"
            >
              Support Mission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
