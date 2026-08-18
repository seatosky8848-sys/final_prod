import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Medal, Mountain } from "lucide-react";
import { Reveal } from "../components/Reveal";
import aboutHero from "../assets/about-hero.jpg";
import portrait from "../assets/portrait-ajay.jpg";
import cycling from "../assets/cycling-motion.jpg";
import summit from "../assets/everest-summit.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Journey Beyond Sight | Ajay Lalwani" },
      {
        name: "description",
        content:
          "From childhood in a world of light to the roof of the world. The life of Ajay Lalwani — visually impaired endurance athlete, cyclist, and mountaineer.",
      },
      {
        name: "keywords",
        content:
          "Ajay Lalwani, visually impaired athlete, Everest expedition, Sea to Sky, mountaineer, endurance athlete, cycling India",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About Ajay Lalwani — The Journey Beyond Sight" },
      {
        property: "og:description",
        content: "The life and mission of a visually impaired endurance athlete.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const videos = [
  {
    id: "xmQ_s_z2XII",
    title: "The Journey Begins",
    desc: "A raw look at the early road and the mindset behind the mission.",
    link: "https://youtu.be/xmQ_s_z2XII?si=dHPMPyTglugyN4fk",
  },
  {
    id: "JvjpLsKIMrQ",
    title: "Endurance in Motion",
    desc: "Cycling across India, facing distance, weather, and the unknown.",
    link: "https://youtu.be/JvjpLsKIMrQ?si=S1dbA6ft-YIuAa4P",
  },
  {
    id: "T2aWGHz_qjM",
    title: "The Summit Call",
    desc: "A closer look at the Everest dream and the drive behind it.",
    link: "https://youtu.be/T2aWGHz_qjM?si=A1WB8GH0ieuRcxLO",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="Vast Himalayan mountain range at golden hour"
          width={1920}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
            <Reveal>
              <p className="eyebrow text-white/70">— A Documentary in Five Chapters</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="display-xxl text-white mt-6">
                The Journey
                <br />
                Beyond Sight.
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <Chapter
        index="I"
        label="Origins"
        title="The Darkness That Lit the Fire."
        body="Born into a world of light, Ajay's visual world began to fade early in life. As the external world dimmed, an internal clarity emerged. Where others saw limitations, he found a canvas for endurance — one shaped not by what was lost, but by what still remained possible. His early years were defined by quiet determination and the will to move forward."
        image={portrait}
        reverse
      />

      <ChapterStats
        index="II"
        label="Endurance"
        title="Pedaling Across Continents."
        body="Cycling became the first true medium for Ajay's message. He navigated thousands of kilometers, relying on his other senses to map the terrain. The hum of the tires on asphalt, the shift in wind resistance, and the tactile feedback of the handlebars became his guides through cross-country expeditions that challenged even sighted athletes."
        image={cycling}
        stats={[
          { v: "5,000+", l: "Km cycled" },
          { v: "12", l: "Expeditions" },
        ]}
        quote="Pain is temporary. Quitting is forever."
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow">— Honors & Achievements</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-4">Milestones of Grit.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
            {[
              {
                y: "2019",
                t: "National Bravery Award",
                d: "Recognized for exceptional courage in sports despite total visual impairment.",
                icon: Medal,
              },
              {
                y: "2021",
                t: "Ultra-Endurance Titan",
                d: "Completed the 3,900km trans-India cycling marathon in record time.",
                icon: Award,
              },
              {
                y: "2023",
                t: "Summit Excellence",
                d: "First visually impaired cyclist to reach Everest Base Camp on a modified mountain bike.",
                icon: Mountain,
              },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 0.08} className="bg-[#ecebe7] p-8">
                <m.icon size={22} className="text-accent" />
                <p className="eyebrow mt-6">{m.y}</p>
                <h3 className="font-display text-xl mt-2">{m.t}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground mt-3">{m.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Chapter
        index="III"
        label="Ascension"
        title="The Everest Dream."
        body="From the roads to the peaks. Ajay's current mission is his most ambitious yet — the summit of Everest. This is more than a climb; it is a statement that vision is internal. Preparations involve rigorous high-altitude training, sensory navigation at sub-zero temperatures, and assembling a team of elite Sherpas who share the vision."
        image={summit}
        cta={{ to: "/mission", label: "Follow the Preparation" }}
      />

      <section className="pb-24 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">— Watch the Journey</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-5">Documented moments from the road.</h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {videos.map((video, index) => (
              <Reveal key={video.id} delay={index * 0.08}>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full"
                >
                  <div className="overflow-hidden rounded-[22px] border border-border bg-[#ecebe7] transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="h-56 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
                      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#050505] shadow-lg">
                        <span className="ml-1 text-xl">▶</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="eyebrow">Video {index + 1}</p>
                      <h3 className="font-display text-2xl mt-3">{video.title}</h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                        {video.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] text-[#f5f4f1] py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-[#f5f4f1]/50">— Our Purpose</p>
            <h2 className="display-xl mt-5">Beyond Personal Glory.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <Reveal>
              <h3 className="font-display text-2xl">Accessibility Advocacy</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#f5f4f1]/70">
                Ajay works with international bodies to design sports equipment that is more
                inclusive for visually impaired athletes — breaking down technical barriers.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="font-display text-2xl">Youth Inspiration</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#f5f4f1]/70">
                Through speaking tours and workshops, he empowers the next generation to view their
                challenges as competitive advantages rather than obstacles.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Chapter({
  index,
  label,
  title,
  body,
  image,
  reverse,
  cta,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  image: string;
  reverse?: boolean;
  cta?: { to: string; label: string };
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "" : ""}`}>
          <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""} lg:px-6`}>
            <Reveal>
              <p className="eyebrow">
                — Chapter {index} · {label}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-5">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15.5px] leading-[1.8] text-foreground/80 max-w-lg">{body}</p>
            </Reveal>
            {cta && (
              <Reveal delay={0.15}>
                <Link
                  to={cta.to}
                  className="inline-flex items-center gap-2 mt-8 text-[12px] tracking-[0.2em] uppercase font-medium text-accent group"
                >
                  {cta.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterStats({
  index,
  label,
  title,
  body,
  image,
  stats,
  quote,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  image: string;
  stats: { v: string; l: string }[];
  quote: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-[#ecebe7]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-[#f5f4f1] p-7 border-l-2 border-accent">
                <p className="font-display italic text-xl leading-snug">"{quote}"</p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:px-6">
            <Reveal>
              <p className="eyebrow">
                — Chapter {index} · {label}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-5">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15.5px] leading-[1.8] text-foreground/80 max-w-xl">{body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-10 mt-12 pt-8 border-t border-border max-w-md">
                {stats.map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-4xl md:text-5xl">{s.v}</p>
                    <p className="eyebrow mt-3">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
