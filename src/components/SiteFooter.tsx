import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

/* Copyright (c) 2026 Rootops Technologies. All rights reserved. */
export function SiteFooter() {
  return (
    <footer className="bg-[#ecebe7] mt-32">
      <div className="mx-auto max-w-[1400px] px-4 pb-12 pt-20 sm:px-6 sm:pt-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
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
                href="https://www.instagram.com/ajay.lalwani.9277?igsh=bTNoaTM3aTl3Z3hh"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/share/1JYzBbviMY/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtu.be/xmQ_s_z2XII?si=dHPMPyTglugyN4fk"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a
                href="mailto:seatosky8848@gmail.com"
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
              <li>
                <Link to="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-accent">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Legal</p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link to="/terms-and-conditions" className="hover:text-accent">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/payment-policy" className="hover:text-accent">
                  Payment Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:mt-20 md:flex-row md:items-center">
          <p>© 2026 Ajay Lalwani. Vision Beyond Sight.</p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://www.rootopstechnologies.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Rootops Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
