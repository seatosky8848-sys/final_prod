import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { toast } from "sonner";

import heroImg from "../assets/hero-mountain.jpg";
import narrativeImg from "../assets/101302_15328352_837652322.webp";
import crossCountryRide from "../assets/1000304720.jpeg";
import khardungLa from "../assets/Ladhak.jpeg";
import himalayanTraining from "../assets/1000304717.jpeg";
import everestBaseCamp from "../assets/Everest Base .jpeg";
import t5 from "../assets/timeline-5.jpg";

import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { SITE_URL } from "../lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sea to Sky — Ajay Lalwani | Vision Beyond Sight" },
      {
        name: "description",
        content:
          "A historic cycling and mountaineering expedition from India's coastline to the summit of Mount Everest, led by visually impaired endurance athlete Ajay Lalwani.",
      },
      {
        name: "keywords",
        content:
          "Ajay Lalwani, Sea to Sky, Everest summit, visually impaired athlete, cycling expedition, mountaineering India, support mission",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Sea to Sky — Ajay Lalwani" },
      {
        property: "og:description",
        content: "A documentary expedition redefining the limits of human endurance.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

const timeline = [
  {
    year: "2019",
    title: "Cross-Country India Ride",
    location: "Kanyakumari → Kashmir",
    desc: "A 7,500km solo cycling expedition along the spine of India, advocating for visually impaired athletes.",
    img: crossCountryRide,
  },
  {
    year: "2021",
    title: "Khardung La",
    location: "Ladakh, 5,359 m",
    desc: "Cycled one of the highest motorable passes in the world — a proving ground for higher ambitions.",
    img: khardungLa,
  },
  {
    year: "2023",
    title: "Himalayan Training",
    location: "Uttarakhand",
    desc: "Sub-zero conditioning, sensory navigation, and rope work alongside elite mountaineering coaches.",
    img: himalayanTraining,
  },
  {
    year: "2026",
    title: "Everest Base Camp",
    location: "5,364 m, Nepal",
    desc: "A reconnaissance trek to the foot of the world's highest peak — and a rehearsal for the summit.",
    img: everestBaseCamp,
  },
  {
    year: "2028",
    title: "Everest Summit Mission",
    location: "8,848 m, Nepal",
    desc: "The Sea-to-Sky finale — a historic attempt as one of the first visually impaired summiteers.",
    img: t5,
  },
];

function Home() {
  return (
    <>
      <Hero />
      <RouteMapSection />
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const highlights = ["7,500+ km", "285+ forts", "Everest Base Camp", "Everest Summit"];

  return (
    <section ref={ref} className="relative min-h-[88svh] overflow-hidden sm:min-h-[92vh]">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cyclist on a Himalayan mountain road at golden hour"
          width={1536}
          height={1280}
          className="hero-drift h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.2)_100%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1400px] items-end px-4 py-8 sm:px-6 sm:py-10 md:min-h-[92vh] md:px-10 md:py-16">
        <div className="max-w-3xl pb-4 sm:pb-6 md:pb-10">
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl leading-[0.88] tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-[7.2rem] xl:text-[8.8rem]">
              SEA
              <br />
              TO
              <br />
              SKY
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.35] text-white/80 sm:mt-6 sm:text-[18px] md:text-[20px] lg:text-[24px]">
              He has traversed India by bicycle, scaled 285+ forts, reached Everest Base Camp, and
              now stands on the threshold of a historic summit attempt on Mount Everest.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:px-4 sm:text-[10px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Link
                to="/mission"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f5f4f1] px-7 text-[12px] font-medium uppercase tracking-[0.18em] text-[#050505] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffffff] sm:w-auto"
              >
                Discover the Journey <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/25 px-7 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Support the Mission
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RouteMapSection() {
  const routePoints = [
    { place: "Mumbai", detail: "The starting point of the expedition" },
    { place: "Kashmir", detail: "The northern frontier of the mission" },
    { place: "Kanyakumari", detail: "The southern edge of the journey" },
    { place: "Mumbai", detail: "The route closes where it began" },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="overflow-hidden rounded-[36px] border border-black/10 bg-[#050505] p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.45)] md:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="max-w-xl">
              <Reveal>
                <p className="eyebrow text-white/55">— The Expedition Route</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl leading-tight text-[#f5f4f1] sm:text-4xl md:text-5xl">
                  A journey written in motion.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[15px] leading-[1.75] text-white/70 sm:text-[16px]">
                  From Mumbai to Kashmir, then to Kanyakumari and back again, the route spans the
                  country with a single purpose: to turn endurance into a message of possibility.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-[11px]">
                    Mumbai → Kashmir → Kanyakumari → Mumbai
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08} className="w-full">
              <div className="rounded-[28px] border border-white/10 bg-[#0d0d0d] p-5 text-[#f5f4f1] md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">
                      Journey Path
                    </p>
                    <p className="mt-1 font-display text-xl">From coast to summit</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/60">
                    7,500+ km
                  </div>
                </div>

                <div className="relative mt-6">
                  <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/15" />
                  <div className="space-y-4">
                    {routePoints.map((point, index) => (
                      <div key={point.place + index} className="relative pl-8">
                        <div className="absolute left-0 top-2 h-[10px] w-[10px] rounded-full border border-[#4169E1] bg-[#f5f4f1]" />
                        <p className="font-display text-lg text-[#f5f4f1]">{point.place}</p>
                        <p className="mt-1 text-[13px] leading-[1.6] text-white/65">
                          {point.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[16px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">
                      Distance
                    </p>
                    <p className="mt-2 font-display text-2xl">7,500+</p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">States</p>
                    <p className="mt-2 font-display text-2xl">12</p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">Mission</p>
                    <p className="mt-2 font-display text-2xl">One</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Narrative() {
  return (
    <section className="relative py-20 sm:py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 font-display text-[180px] font-bold leading-none text-foreground/[0.04] select-none md:text-[280px] lg:right-20"
          >
            01
          </span>

          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[32px] border border-border bg-muted">
              <img
                src={narrativeImg}
                alt="Ajay Lalwani competing in an endurance race"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </Reveal>

          <div className="relative lg:col-span-7">
            <Reveal>
              <p className="eyebrow">— The Narrative</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl leading-tight sm:text-4xl md:text-5xl">
                Redefining what courage looks like.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-xl space-y-5 text-[15.5px] leading-[1.75] text-foreground/80">
                <p>
                  Ajay Lalwani is more than an athlete. He is a living testament to endurance,
                  discipline, and purpose. A visually impaired cyclist, mountaineer, and national
                  medalist, he is preparing for his most ambitious chapter yet — Mount Everest.
                </p>
                <p>
                  From cycling 7,500 km across India to scaling 285 forts on foot, his journey is a
                  powerful demonstration that perceived limits can be rewritten. Every milestone
                  carries a larger message of inclusion, resilience, and possibility.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
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
    <section className="py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow">— Chronicle</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Expedition Timeline</h2>
          </Reveal>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
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
        <div
          className="flex gap-4 px-4 pb-4 sm:gap-6 sm:px-6 md:px-10"
          style={{ minWidth: "min-content" }}
        >
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="w-[calc(100vw-2rem)] shrink-0 snap-start rounded-[28px] border border-border bg-[#f5f4f1] p-3 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] sm:w-[320px] md:w-[400px]">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[20px] bg-muted">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#050505] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#f5f4f1]">
                    {item.year}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="eyebrow">{item.location}</p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
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
    <section className="mt-12 bg-[#050505] py-20 text-[#f5f4f1] sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-[#f5f4f1]/50">— Impact in numbers</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 sm:gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="md:px-10 first:pl-0">
              <p className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
                <Counter value={s.v} suffix={s.suf} />
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#f5f4f1]/55">
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
    <section className="py-24 sm:py-28 md:py-44">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-10">
        <Reveal>
          <Quote size={36} className="text-accent mx-auto" strokeWidth={1.5} />
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="mt-8 font-display text-[22px] leading-[1.2] tracking-tight italic sm:mt-10 sm:text-[28px] md:text-[40px]">
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
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "sponsorship-enquiry",
          name: form.name,
          email: form.email,
          organization: form.org,
          message: form.message,
          "bot-field": "",
        }).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Partnership enquiry received", {
        description: "Thank you. Our team will contact you to discuss the partnership.",
      });
      setForm({ name: "", email: "", org: "", message: "" });
    } catch {
      toast.error("We couldn't send your enquiry", {
        description:
          "Please send your name, organization, email, and message to seatosky8848@gmail.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#ecebe7] py-20 sm:py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">— Contribution</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-5">
                Support
                <br />
                the Mission.
              </h2>
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
                <div className="flex items-start gap-4 border border-border bg-[#f5f4f1] p-4 sm:gap-5 sm:p-5">
                  <span className="font-display text-xs tracking-widest uppercase text-accent mt-1">
                    UPI
                  </span>
                  <div>
                    <p className="eyebrow">UPI Payment</p>
                    <p className="font-display text-lg mt-1">ajaylalwani315-1@oksbi</p>
                  </div>
                </div>
                <div className="bg-[#f5f4f1] border border-border p-5 flex items-start gap-5">
                  <span className="font-display text-xs tracking-widest uppercase text-accent mt-1">
                    Bank
                  </span>
                  <div>
                    <p className="eyebrow">Bank Transfer</p>
                    <p className="font-display text-lg mt-1">Bank of Baroda · Worli, Mumbai</p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">A/C: 04220100020053</p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">IFSC: BARBOWORLIX</p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">
                      A/C Name: Ajay Nanakram Lalwani
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <form
              name="sponsorship-enquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={submit}
              className="border border-border bg-[#f5f4f1] p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)] sm:p-8 md:p-10"
            >
              <input type="hidden" name="form-name" value="sponsorship-enquiry" />
              <div className="hidden" aria-hidden="true">
                <label>
                  Do not fill this out: <input name="bot-field" tabIndex={-1} />
                </label>
              </div>
              <p className="eyebrow text-accent">— Become a sponsor</p>
              <h3 className="display-lg mt-3">
                Join a Collective
                <br />
                of Visionary Brands.
              </h3>
              <p className="mt-4 text-[14px] text-muted-foreground">
                Explore a meaningful partnership around endurance, accessibility, and extraordinary
                human achievement. We respond to every inquiry within 48 hours.
              </p>

              <div className="mt-8 space-y-6">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Your name"
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@brand.com"
                />
                <Field
                  label="Organization"
                  name="organization"
                  value={form.org}
                  onChange={(v) => setForm({ ...form, org: v })}
                  placeholder="Brand or company"
                />
                <div>
                  <label className="eyebrow block mb-2">Message</label>
                  <textarea
                    name="message"
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
                disabled={submitting}
                className="mt-10 w-full h-14 bg-[#050505] text-[#f5f4f1] text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-accent transition-colors"
              >
                {submitting ? "Sending Enquiry..." : "Start a Partnership Conversation"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        name={name}
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
