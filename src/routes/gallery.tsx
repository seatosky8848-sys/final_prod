import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

import cyclingImage from "../assets/1000304720.jpeg";
import cycle1 from "../assets/cyc/IMG-20260912-WA0003.webp";
import cycle2 from "../assets/cyc/IMG-20260912-WA0007.webp";
import cycle3 from "../assets/cyc/IMG-20260912-WA0010.webp";
import cycle4 from "../assets/cyc/IMG-20260912-WA0011.webp";
import cycle5 from "../assets/cyc/IMG-20260912-WA0012.webp";
import g4 from "../assets/everest/1000307598.webp";
import g5 from "../assets/everest/1000307601.webp";
import g7 from "../assets/everest/1000307604.webp";
import g8 from "../assets/1000304711.jpeg";
import g9 from "../assets/News Artical/1000304963.jpeg";
import cert1 from "../assets/Screenshot_20260818_131009_Samsung.jpeg";
import cert2 from "../assets/Screenshot_20260818_131115_Samsung.jpeg";
import cert3 from "../assets/IMG-20260711-WA0002.jpeg";
import certA from "../assets/Certificate/1000304470.jpeg";
import certB from "../assets/Certificate/1000304471.jpeg";
import certC from "../assets/Certificate/1000304472.jpeg";
import certD from "../assets/Certificate/1000304474.jpeg";
import certE from "../assets/Certificate/1000304475.jpeg";
import certF from "../assets/Certificate/1000304770.jpeg";
import certG from "../assets/Certificate/1000304775.jpeg";
import certH from "../assets/Certificate/1000304781.jpeg";
import certI from "../assets/Certificate/1000304784.jpeg";
import certJ from "../assets/Certificate/1000304962.jpeg";
import certK from "../assets/Certificate/1000305012.jpeg";
import certL from "../assets/Certificate/1000307065.webp";
import certM from "../assets/Certificate/1000307068.webp";
import medal1 from "../assets/Medals/1000307054.webp";
import medal2 from "../assets/Medals/1000307059.webp";
import medal3 from "../assets/Medals/1000307062.webp";
import medal4 from "../assets/Medals/1000307071.webp";
import medal5 from "../assets/Medals/1000307074.webp";
import medal6 from "../assets/Medals/1000307077.webp";
import medal7 from "../assets/Medals/1000307080.webp";
import medal8 from "../assets/Medals/1000307083.webp";
import media1 from "../assets/1000307378.webp";
import media2 from "../assets/1000307371.webp";
import media3 from "../assets/IMG-20260912-WA0004.webp";
import media4 from "../assets/IMG-20260912-WA0005.webp";
import media5 from "../assets/IMG-20260912-WA0006.webp";
import media6 from "../assets/IMG-20260912-WA0008.webp";
import media7 from "../assets/IMG-20260912-WA0009.webp";
import news1 from "../assets/News Artical/1000304963.jpeg";
import news2 from "../assets/News Artical/1000304965.jpeg";
import news3 from "../assets/News Artical/1000304967.jpeg";
import news4 from "../assets/News Artical/1000305028.jpeg";
import news5 from "../assets/News Artical/1000305030.jpeg";
import news6 from "../assets/News Artical/1000305032.jpeg";
import { absoluteUrl } from "../lib/site";

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
      { property: "og:url", content: absoluteUrl("/gallery") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
  }),
  component: GalleryPage,
});

type Cat =
  | "All"
  | "Cycling"
  | "Everest"
  | "Training"
  | "Medals"
  | "Certification"
  | "News Article"
  | "Media";

const certificateCollection = [
  {
    src: certA,
    alt: "Certificate recognition archive 1",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certB,
    alt: "Certificate recognition archive 2",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certC,
    alt: "Certificate recognition archive 3",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certD,
    alt: "Certificate recognition archive 4",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certE,
    alt: "Certificate recognition archive 5",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certF,
    alt: "Certificate recognition archive 6",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certG,
    alt: "Certificate recognition archive 7",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certH,
    alt: "Certificate recognition archive 8",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certI,
    alt: "Certificate recognition archive 9",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certJ,
    alt: "Certificate recognition archive 10",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certK,
    alt: "Certificate recognition archive 11",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certL,
    alt: "Indo-Nepal Cycling Adventure certificate",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
  {
    src: certM,
    alt: "Certificate of honor for Ajay Lalwani",
    cat: ["Certification"] as Exclude<Cat, "All">[],
  },
];

const medalCollection = [
  { src: medal1, alt: "Lions International state-level swimming championship trophy" },
  { src: medal2, alt: "IBSA Sports Championship runner-up trophy" },
  { src: medal3, alt: "Race Across India cycling achievement award" },
  { src: medal4, alt: "Race Across India 3,758 km cycling medal" },
  { src: medal5, alt: "International sports achievement medal" },
  { src: medal6, alt: "Endurance cycling achievement medal" },
  { src: medal7, alt: "Cycling championship medal" },
  { src: medal8, alt: "Endurance sports medal" },
].map((medal) => ({
  ...medal,
  cat: ["Medals", "Media"] as Exclude<Cat, "All">[],
}));

const photos: { src: string; alt: string; cat: Exclude<Cat, "All">[] }[] = [
  {
    src: cert1,
    alt: "Bravo International World Record Certificate - 7,500 Km Cycling",
    cat: ["Certification"],
  },
  {
    src: cert2,
    alt: "Bravo International World Record Certificate - 3,758 Km Ultracycling",
    cat: ["Certification"],
  },
  {
    src: cert3,
    alt: "Ajay Lalwani displaying World Record Certificates and Trophies",
    cat: ["Certification"],
  },
  ...certificateCollection,
  ...medalCollection,
  { src: news1, alt: "News article feature 1", cat: ["News Article"] },
  { src: news2, alt: "News article feature 2", cat: ["News Article"] },
  { src: news3, alt: "News article feature 3", cat: ["News Article"] },
  { src: news4, alt: "News article feature 4", cat: ["News Article"] },
  { src: news5, alt: "News article feature 5", cat: ["News Article"] },
  { src: news6, alt: "News article feature 6", cat: ["News Article"] },
  { src: g4, alt: "Misty Himalayan valley at dawn", cat: ["Everest"] },
  { src: g5, alt: "Mountaineer portrait with frost", cat: ["Everest", "Training"] },
  { src: g7, alt: "Himalayan peaks editorial feature", cat: ["Everest"] },
  { src: g8, alt: "Tying running shoes at sunrise", cat: ["Training"] },
  { src: g9, alt: "Press coverage and documentary filming", cat: ["Media", "News Article"] },
  { src: cyclingImage, alt: "Cyclist riding at dusk", cat: ["Cycling"] },
  { src: cycle1, alt: "Ajay Lalwani cycling expedition photo 1", cat: ["Cycling"] },
  { src: cycle2, alt: "Ajay Lalwani cycling expedition photo 2", cat: ["Cycling"] },
  { src: cycle3, alt: "Ajay Lalwani cycling expedition photo 3", cat: ["Cycling"] },
  { src: cycle4, alt: "Ajay Lalwani cycling expedition photo 4", cat: ["Cycling"] },
  { src: cycle5, alt: "Ajay Lalwani cycling expedition photo 5", cat: ["Cycling"] },
  { src: media1, alt: "Ajay Lalwani media feature 1", cat: ["Media"] },
  { src: media2, alt: "Ajay Lalwani media feature 2", cat: ["Media"] },
  { src: media3, alt: "Ajay Lalwani media feature 3", cat: ["Media"] },
  { src: media4, alt: "Ajay Lalwani media feature 4", cat: ["Media"] },
  { src: media5, alt: "Ajay Lalwani media feature 5", cat: ["Media"] },
  { src: media6, alt: "Ajay Lalwani media feature 6", cat: ["Media"] },
  { src: media7, alt: "Ajay Lalwani media feature 7", cat: ["Media"] },
];

const filters: Cat[] = [
  "All",
  "Cycling",
  "Everest",
  "Training",
  "Medals",
  "Certification",
  "News Article",
  "Media",
];

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
                className="block w-full mb-6 break-inside-avoid overflow-hidden border border-black/15 bg-muted group"
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
