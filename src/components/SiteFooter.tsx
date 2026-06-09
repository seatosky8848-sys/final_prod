import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-[#ecebe7] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="font-display text-3xl font-bold">
              Ajay Lalwani
            </Link>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-sm">
              Documenting the resilience of the human spirit through extreme endurance and cinematic
              storytelling. From the Arabian Sea to the summit of Everest.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a
                href="mailto:expeditions@ajaylalwani.com"
                aria-label="Email"
                className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Journey</p>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/mission" className="hover:text-accent">Mission</Link></li>
              <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Resources</p>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-accent">Press Kit</a></li>
              <li><a href="#" className="hover:text-accent">Sponsorships</a></li>
              <li><a href="#" className="hover:text-accent">Accessibility</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Stay Updated</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success("Subscribed", { description: "You'll hear from base camp soon." });
                setEmail("");
              }}
              className="flex items-center border-b border-foreground/40 pb-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 text-[14px] focus:outline-none placeholder:text-muted-foreground"
              />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          <p>© 2026 Ajay Lalwani. Vision Beyond Sight.</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
