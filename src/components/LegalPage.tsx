import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} /> Back to Contact
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="eyebrow mt-12">— {eyebrow}</p>
          <h1 className="display-xl mt-5 max-w-3xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.8] text-muted-foreground">{intro}</p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Last updated: 8 September 2026
          </p>
        </Reveal>

        <div className="mt-16 max-w-3xl border-t border-border">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={0.08 + index * 0.03}>
              <section className="border-b border-border py-8">
                <h2 className="font-display text-2xl sm:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-muted-foreground">
                  {section.content}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
