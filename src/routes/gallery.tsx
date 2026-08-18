import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";
import g6 from "../assets/gallery-6.jpg";
import g7 from "../assets/gallery-7.jpg";
import g8 from "../assets/gallery-8.jpg";
import g9 from "../assets/gallery-9.jpg";
import t1 from "../assets/timeline-1.jpg";
import t2 from "../assets/timeline-2.jpg";
import t4 from "../assets/timeline-4.jpg";
import t5 from "../assets/timeline-5.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Visual Testimony — Gallery | Ajay Lalwani" },
      {
        name: "description",
        content:
          "Documenting endurance, exploration, and the quiet resilience of the human spirit. Editorial photography from the Sea-to-Sky expedition.",
      },
      { property: "og:title", content: "Visual Testimony — Ajay Lalwani Gallery" },
      {
        property: "og:description",
        content: "Editorial photography from the Sea-to-Sky expedition.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Cycling" | "Everest" | "Training" | "Medals" | "Expeditions" | "Media";

const photos: { src: string; alt: string; cat: Exclude<Cat, "All">[] }[] = [
  { src: t1, alt: "Desert highway sunrise ride", cat: ["Cycling", "Expeditions"] },
  { src: g2, alt: "Bicycle resting against Himalayan stone wall", cat: ["Cycling"] },
  { src: g3, alt: "Endurance medals", cat: ["Medals"] },
  { src: g4, alt: "Misty Himalayan valley at dawn", cat: ["Everest", "Expeditions"] },
  { src: g5, alt: "Mountaineer portrait with frost", cat: ["Everest", "Training"] },
  { src: g6, alt: "Cyclist riding into mountain valley", cat: ["Cycling", "Expeditions"] },
  { src: g7, alt: "Himalayan peaks editorial illustration", cat: ["Everest"] },
  { src: g8, alt: "Tying running shoes at sunrise", cat: ["Training"] },
  { src: g9, alt: "Behind the scenes filming", cat: ["Media"] },
  { src: t2, alt: "Khardung La pass with prayer flags", cat: ["Expeditions"] },
  { src: t4, alt: "Everest base camp at dusk", cat: ["Everest"] },
  { src: t5, alt: "Climber on summit ridge at sunrise", cat: ["Everest"] },
  { src: g1, alt: "Hands gripping bicycle handlebar", cat: ["Cycling", "Training"] },
];

const filters: Cat[] = ["All", "Cycling", "Everest", "Training", "Medals", "Expeditions", "Media"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? photos : photos.filter((p) => p.cat.includes(active));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  return (
    <>
      <section className="pt-36 md:pt-44 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">— Chronicle</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-xxl mt-6">
              Visual
              <br />
              Testimony.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-[16px] leading-relaxed text-muted-foreground max-w-xl">
              Documenting the grit of the human spirit through high-altitude expeditions, endurance
              milestones, and the silent strength of the mountains.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2 mt-14">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`h-10 px-5 rounded-full text-[12px] tracking-wider font-medium transition-colors border ${
                    active === f
                      ? "bg-[#050505] text-[#f5f4f1] border-[#050505]"
                      : "border-border text-foreground/70 hover:border-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <button
                key={p.src + i}
                onClick={() => setLightbox(i)}
                className="block w-full mb-6 break-inside-avoid overflow-hidden bg-muted group"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10">
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-white inline-flex items-center justify-center hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <button
            onClick={() =>
              setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
            }
            aria-label="Previous"
            className="absolute left-4 md:left-8 h-11 w-11 rounded-full bg-white/10 text-white inline-flex items-center justify-center hover:bg-white/20"
          >
            <ChevronLeft size={22} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[88vh] max-w-full object-contain"
          />
          <button
            onClick={() => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length))}
            aria-label="Next"
            className="absolute right-4 md:right-8 h-11 w-11 rounded-full bg-white/10 text-white inline-flex items-center justify-center hover:bg-white/20"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
