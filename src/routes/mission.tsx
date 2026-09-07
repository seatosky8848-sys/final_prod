import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import missionHero from "../assets/mission-hero.jpg";
import t1 from "../assets/timeline-1.jpg";
import t3 from "../assets/timeline-3.jpg";
import t4 from "../assets/timeline-4.jpg";
import t5 from "../assets/timeline-5.jpg";
import { absoluteUrl } from "../lib/site";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "The Sea-to-Sky Mission | Ajay Lalwani" },
      {
        name: "description",
        content:
          "A journey from sea level to the roof of the world. Five stages: coastline, cross-country expedition, Himalayan training, Everest base camp, and summit.",
      },
      {
        name: "keywords",
        content:
          "Sea to Sky mission, Ajay Lalwani mission, Everest expedition, cycling India, mountaineering journey, visual impairment endurance",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "The Sea-to-Sky Mission" },
      { property: "og:description", content: "From the Arabian Sea to the summit of Everest." },
      { property: "og:url", content: absoluteUrl("/mission") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/mission") }],
  }),
  component: MissionPage,
});

const stages = [
  {
    n: "01",
    label: "Sea Level",
    alt: "0 m",
    title: "The Arabian Sea Begins.",
    body: "The expedition begins on the Indian coastline — a symbolic departure from the world he can no longer see. Salt air, first pedals, and the long road north.",
    img: missionHero,
  },
  {
    n: "02",
    label: "Cross-Country Expedition",
    alt: "0 — 1,500 m",
    title: "Three Thousand Kilometers.",
    body: "A solo cycling traverse through twelve Indian states. Heat, monsoon, altitude shift. The journey is mapped by sound, vibration, and trust in the human network along the way.",
    img: t1,
  },
  {
    n: "03",
    label: "Himalayan Training",
    alt: "3,500 m",
    title: "Sensory Acclimatization.",
    body: "Months of high-altitude conditioning. Tactile route memorization, sub-zero camping, technical ice work alongside national-level mountaineers.",
    img: t3,
  },
  {
    n: "04",
    label: "Everest Base Camp",
    alt: "5,364 m",
    title: "The Threshold.",
    body: "Arrival at the foot of the world's highest peak. A staging ground for the final ascent — and a rehearsal of every system, every breath, every step.",
    img: t4,
  },
  {
    n: "05",
    label: "Everest Summit",
    alt: "8,848 m",
    title: "Beyond the Visible.",
    body: "The historic push. One of the first visually impaired summit attempts in mountaineering history. A culmination of resilience, vision, and the quiet courage of a single human heart.",
    img: t5,
  },
];

function MissionPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">— The Mission</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-xxl mt-6">
              Sea
              <br />
              to Sky.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-[17px] leading-[1.7] text-muted-foreground max-w-2xl">
              A documented expedition spanning eight thousand vertical meters — from the saltwater
              edge of the Arabian Sea to the snow-cornice of Mount Everest. Five stages. One vision.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Center rail */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-foreground/15 -translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-28 md:space-y-40">
            {stages.map((s, i) => (
              <li key={s.n} className="relative">
                <span
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-accent ring-8 ring-[#f5f4f1]"
                  aria-hidden
                />
                <div
                  className={`grid md:grid-cols-2 gap-10 md:gap-20 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <Reveal>
                    <div className="aspect-[4/5] overflow-hidden bg-muted">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <div className="md:px-4">
                    <Reveal>
                      <div className="flex items-baseline gap-5">
                        <span className="font-display text-5xl md:text-6xl text-accent">{s.n}</span>
                        <div>
                          <p className="eyebrow">{s.label}</p>
                          <p className="text-[12px] tracking-widest text-muted-foreground mt-1">
                            {s.alt}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={0.05}>
                      <h2 className="display-lg mt-8">{s.title}</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <p className="mt-5 text-[15px] leading-[1.8] text-foreground/80 max-w-lg">
                        {s.body}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#050505] text-[#f5f4f1] py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-[#f5f4f1]/50">— Why this matters</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-5">
              A historic attempt — for the nineteen million Indians living with visual impairment.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[15px] leading-relaxed text-[#f5f4f1]/70 max-w-2xl mx-auto">
              The Sea-to-Sky expedition is not a personal record. It is a public document — a film,
              a story, and proof that the limits of the body are not the limits of the human spirit.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
