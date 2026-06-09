import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { toast } from "sonner";

import heroImg from "../assets/hero-mountain.jpg";
import portraitImg from "../assets/portrait-ajay.jpg";
import t1 from "../assets/timeline-1.jpg";
import t2 from "../assets/timeline-2.jpg";
import t3 from "../assets/timeline-3.jpg";
import t4 from "../assets/timeline-4.jpg";
import t5 from "../assets/timeline-5.jpg";

import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sea to Sky — Ajay Lalwani | Vision Beyond Sight" },
      { name: "description", content: "A historic cycling and mountaineering expedition from India's coastline to the summit of Mount Everest, led by visually impaired endurance athlete Ajay Lalwani." },
      { property: "og:title", content: "Sea to Sky — Ajay Lalwani" },
      { property: "og:description", content: "A documentary expedition redefining the limits of human endurance." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const timeline = [
  { year: "2019", title: "Cross-Country India Ride", location: "Kanyakumari → Kashmir", desc: "A 7,500km solo cycling expedition along the spine of India, advocating for visually impaired athletes.", img: t1 },
  { year: "2021", title: "Khardung La", location: "Ladakh, 5,359 m", desc: "Cycled one of the highest motorable passes in the world — a proving ground for higher ambitions.", img: t2 },
  { year: "2023", title: "Himalayan Training", location: "Uttarakhand", desc: "Sub-zero conditioning, sensory navigation, and rope work alongside elite mountaineering coaches.", img: t3 },
  { year: "2024", title: "Everest Base Camp", location: "5,364 m, Nepal", desc: "A reconnaissance trek to the foot of the world's highest peak — and a rehearsal for the summit.", img: t4 },
  { year: "2026", title: "Everest Summit Mission", location: "8,848 m, Nepal", desc: "The Sea-to-Sky finale — a historic attempt as one of the first visually impaired summiteers.", img: t5 },
];

function Home() {
  return (
    <>
      <Hero />
      <Narrative />
      <Timeline />
      <Stats />
      <QuoteBlock />
      <Mission />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 lg:pt-12">
            <Reveal>
              <p className="eyebrow">— A Documentary Expedition</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="display-xxl mt-6">
                Sea to<br />Sky
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display italic text-2xl md:text-3xl mt-8 text-foreground/80">
                Beyond limits. Beyond sight.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground max-w-md">
                A historic cycling and mountaineering journey from India's coastline to the summit
                of Mount Everest — led by a visually impaired endurance athlete redefining what it
                means to see.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/mission"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#050505] text-[#f5f4f1] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-accent transition-colors"
                >
                  Explore Journey <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center h-12 px-7 rounded-full border border-foreground/25 text-[12px] tracking-[0.18em] uppercase font-medium hover:border-foreground transition-colors"
                >
                  Support Mission
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div style={{ y }} className="relative">
              <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-muted">
                <img
                  src={heroImg}
                  alt="Cyclist on a Himalayan mountain road at golden hour"
                  width={1536}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="hidden md:block absolute -bottom-10 -left-10 max-w-[300px] bg-[#f5f4f1] border border-border p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
              >
                <Quote size={16} className="text-accent mb-3" />
                <p className="font-display italic text-[17px] leading-snug">
                  "Vision is not what the eyes see. Vision is what the heart feels."
                </p>
                <p className="eyebrow mt-4">— Ajay Lalwani</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Narrative() {
  return (
    <section className="py-24 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center relative">
          <span
            aria-hidden
            className="absolute right-0 lg:right-20 top-0 font-display font-bold text-[180px] md:text-[280px] leading-none text-foreground/[0.04] select-none pointer-events-none"
          >
            01
          </span>

          <Reveal className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={portraitImg}
                alt="Black and white portrait of Ajay Lalwani"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 relative">
            <Reveal>
              <p className="eyebrow">— The Narrative</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6">Redefining<br />Human<br />Determination.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-foreground/80 max-w-lg">
                <p>
                  Ajay Lalwani is more than an athlete. He is a testament to the unyielding spirit of
                  the human soul. A visually impaired cyclist, mountaineer, and national medalist, he
                  is currently preparing for his most audacious chapter yet — Mount Everest.
                </p>
                <p>
                  From pedaling 7,500km across the length of India to scaling 285 forts on foot, his
                  journey is a masterclass in perceived limitations. Every pedal stroke and every
                  step is a message of inclusion and possibility for nineteen million Indians living
                  with visual impairment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-10 text-[12px] tracking-[0.2em] uppercase font-medium text-accent group"
              >
                Read the full biography
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <p className="eyebrow">— Chronicle</p>
            <h2 className="display-lg mt-3">Expedition Timeline</h2>
          </Reveal>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="h-11 w-11 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="h-11 w-11 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        <div className="flex gap-6 px-6 md:px-10 pb-4" style={{ minWidth: "min-content" }}>
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="snap-start w-[320px] md:w-[400px] shrink-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted group">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 bg-[#050505] text-[#f5f4f1] text-[11px] tracking-[0.2em] uppercase px-3 py-1.5">
                    {item.year}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="eyebrow">{item.location}</p>
                  <h3 className="font-display text-2xl mt-2">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}`}</style>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 7500, suf: "+", label: "Kilometers Cycled" },
    { v: 12, suf: "", label: "Indian States Covered" },
    { v: 285, suf: "+", label: "Forts Climbed" },
    { v: 5364, suf: "m", label: "Highest Elevation" },
  ];
  return (
    <section className="bg-[#050505] text-[#f5f4f1] py-24 md:py-32 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-[#f5f4f1]/50">— Impact in numbers</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mt-12 md:divide-x divide-white/10">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="md:px-10 first:pl-0">
              <p className="font-display text-5xl md:text-6xl tracking-tight">
                <Counter value={s.v} suffix={s.suf} />
              </p>
              <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-[#f5f4f1]/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBlock() {
  return (
    <section className="py-32 md:py-44">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <Quote size={36} className="text-accent mx-auto" strokeWidth={1.5} />
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="mt-10 font-display italic text-[28px] md:text-[40px] leading-[1.2] tracking-tight">
            "Limitations are often self-imposed. When you look beyond what you think you can't do,
            you discover an ocean of what you can."
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="block h-px w-10 bg-foreground/40" />
            <p className="eyebrow">Ajay Lalwani</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received", { description: "Our team will share the sponsorship deck within 48 hours." });
    setForm({ name: "", email: "", org: "", message: "" });
  };

  return (
    <section className="bg-[#ecebe7] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">— Contribution</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-5">Support<br />the Mission.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-[15.5px] leading-[1.75] text-foreground/75 max-w-lg">
                The Sea-to-Sky expedition is more than a personal goal — it's a global call for
                accessibility, perseverance, and the power of vision. Your support funds training,
                equipment, and logistical needs for the Mount Everest summit attempt.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-4">
                <div className="bg-[#f5f4f1] border border-border p-5 flex items-start gap-5">
                  <span className="font-display text-xs tracking-widest uppercase text-accent mt-1">UPI</span>
                  <div>
                    <p className="eyebrow">UPI Payment</p>
                    <p className="font-display text-lg mt-1">ajaylalwani@upi</p>
                  </div>
                </div>
                <div className="bg-[#f5f4f1] border border-border p-5 flex items-start gap-5">
                  <span className="font-display text-xs tracking-widest uppercase text-accent mt-1">Bank</span>
                  <div>
                    <p className="eyebrow">Bank Transfer</p>
                    <p className="font-display text-lg mt-1">HDFC Bank · A/C 5010042XXXXXXX</p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">IFSC: HDFC000XXXX</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <form
              onSubmit={submit}
              className="bg-[#f5f4f1] border border-border p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)]"
            >
              <p className="eyebrow text-accent">— Become a sponsor</p>
              <h3 className="display-lg mt-3">Join a Collective<br />of Visionary Brands.</h3>
              <p className="mt-4 text-[14px] text-muted-foreground">
                Partner with extraordinary human achievement. We respond to every inquiry within 48
                hours.
              </p>

              <div className="mt-8 space-y-6">
                <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
                <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@brand.com" />
                <Field label="Organization" value={form.org} onChange={(v) => setForm({ ...form, org: v })} placeholder="Brand or company" />
                <div>
                  <label className="eyebrow block mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How would you like to partner?"
                    className="w-full bg-transparent border-b border-foreground/30 pb-3 text-[15px] focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 w-full h-14 bg-[#050505] text-[#f5f4f1] text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-accent transition-colors"
              >
                Request Sponsorship Deck
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-foreground/30 pb-3 text-[15px] focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
      />
    </div>
  );
}
