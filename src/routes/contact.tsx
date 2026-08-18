import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Mail, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import qrImage from "../assets/IMG-20260818-WA0000.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — Be Part of the Mission | Ajay Lalwani" },
      {
        name: "description",
        content:
          "Connect with the Sea-to-Sky expedition. Sponsorship inquiries, media requests, and ways to contribute to the journey from coastline to Everest.",
      },
      {
        name: "keywords",
        content:
          "Ajay Lalwani contact, support the mission, sponsorship, Everest fundraiser, sea to sky campaign",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Be Part of the Mission — Ajay Lalwani" },
      { property: "og:description", content: "Sponsorships, media, and ways to contribute." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">— Connect</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display-xxl mt-6">
                  Be Part of
                  <br />
                  the Mission.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 text-[16px] leading-relaxed text-muted-foreground max-w-md">
                  Your support will fuel his journey from sea to sky. Connect with us to explore
                  sponsorships, media partnerships, or simply to share in the story of endurance.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <Reveal>
                <p className="eyebrow mb-6">— Direct Connect</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center shrink-0">
                      <MessageSquare size={15} />
                    </span>
                    <div>
                      <p className="font-display text-lg">+91 98765 43210</p>
                      <p className="eyebrow mt-0.5">WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="h-10 w-10 rounded-full border border-border inline-flex items-center justify-center shrink-0">
                      <Mail size={15} />
                    </span>
                    <div>
                      <p className="font-display text-lg">seatosky8848@gmail.com</p>
                      <p className="eyebrow mt-0.5">Email</p>
                    </div>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="eyebrow mb-5">— Follow the Story</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/ajay.lalwani.9277?igsh=bTNoaTM3aTl3Z3hh"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="h-11 w-11 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1JYzBbviMY/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="h-11 w-11 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://youtu.be/xmQ_s_z2XII?si=dHPMPyTglugyN4fk"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="h-11 w-11 rounded-full border border-border inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Youtube size={16} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-[#ecebe7] p-7" id="privacy-policy">
                  <h3 className="font-display text-2xl">Sponsorships</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    Partner with a global documentary project that redefines human limits. We offer
                    unique storytelling assets and high-impact brand visibility for corporate
                    partners.
                  </p>
                  <a
                    href="mailto:seatosky8848@gmail.com?subject=Sponsorship Deck Request"
                    className="inline-flex items-center gap-2 mt-5 text-[12px] tracking-[0.2em] uppercase font-medium text-accent group"
                  >
                    Request Deck
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="bg-gradient-to-br from-[#eef1fc] to-[#f5f4f1] border border-border p-8 md:p-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow text-accent">— Contribute</p>
                <h2 className="display-xl mt-4">Fuel the Pursuit.</h2>
                <p className="mt-6 text-[15px] leading-relaxed text-foreground/80 max-w-xl">
                  Direct funding goes towards accessibility gear, cinematic production costs, and
                  expedition logistics. Every contribution helps us capture the invisible beauty of
                  the high Himalayas.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mt-10 max-w-lg">
                  <div id="payment-policy">
                    <p className="eyebrow">Bank Transfer</p>
                    <p className="font-display text-lg mt-2">Bank of Baroda</p>
                    <p className="text-[13.5px] text-muted-foreground">Branch: Worli, Mumbai</p>
                    <p className="text-[13.5px] text-muted-foreground">A/C: 04220100020053</p>
                    <p className="text-[13.5px] text-muted-foreground">IFSC: BARBOWORLIX</p>
                    <p className="text-[13.5px] text-muted-foreground">
                      A/C Name: Ajay Nanakram Lalwani
                    </p>
                  </div>
                  <div id="terms-and-conditions">
                    <p className="eyebrow">UPI ID</p>
                    <p className="font-display text-lg mt-2">ajaylalwani315-1@oksbi</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-[#f5f4f1] border border-dashed border-foreground/20 p-8 text-center">
                  <img
                    src={qrImage}
                    alt="Ajay Lalwani UPI payment QR code"
                    className="mx-auto h-[360px] w-[360px] rounded-2xl object-cover shadow-sm"
                    style={{ objectPosition: "center 18%" }}
                  />
                  <p className="mt-4 text-[15px] text-muted-foreground">
                    UPI ID: ajaylalwani315-1@oksbi
                  </p>
                  <p className="eyebrow mt-4">Scan to pay with any UPI app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-[#ecebe7] p-6" id="terms-and-conditions">
              <p className="eyebrow">— Terms & Conditions</p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Contributions made to support the expedition are voluntary and used for logistical,
                training, and expedition-related costs. Donations are acknowledged for support
                purposes and are not exchangeable for goods or services unless otherwise agreed in
                writing.
              </p>
            </div>
            <div className="bg-[#ecebe7] p-6" id="privacy-policy">
              <p className="eyebrow">— Privacy Policy</p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Personal data shared through this website or contact forms is used only to respond
                to sponsorship, media, and support requests. Information is not sold or shared with
                third parties, except when required for payment or legal compliance.
              </p>
            </div>
            <div className="bg-[#ecebe7] p-6" id="payment-policy">
              <p className="eyebrow">— Payment Policy</p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Payments may be made via UPI or bank transfer using the details shown on this page.
                Please confirm the exact account name, IFSC, and UPI ID before sending funds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
