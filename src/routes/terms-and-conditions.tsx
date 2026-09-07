import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";
import { absoluteUrl } from "../lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Ajay Lalwani" },
      {
        name: "description",
        content:
          "Terms governing support, sponsorship, contributions, and use of the Ajay Lalwani Sea to Sky website.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Terms & Conditions | Ajay Lalwani" },
      { property: "og:url", content: absoluteUrl("/terms-and-conditions") },
      {
        property: "og:description",
        content: "Terms governing support and use of the Sea to Sky website.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms-and-conditions") }],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="A clear understanding for every contribution."
      intro="These terms explain how this website may be used and how support for the Sea to Sky expedition is handled."
      sections={[
        {
          title: "Website use",
          content: (
            <p>
              This website provides information about Ajay Lalwani, the Sea to Sky expedition, and
              related support opportunities. Content is provided for general information and may be
              updated as the expedition develops.
            </p>
          ),
        },
        {
          title: "Contributions and support",
          content: (
            <>
              <p>
                Contributions are voluntary and intended to support training, accessibility
                equipment, travel, production, and expedition logistics.
              </p>
              <p>
                Please verify the recipient name, account details, and payment identifier before
                sending funds. A contribution does not create a partnership, employment, or other
                contractual relationship unless separately agreed in writing.
              </p>
            </>
          ),
        },
        {
          title: "Content and availability",
          content: (
            <p>
              We aim to keep the information accurate and available, but do not guarantee that every
              page, image, link, or detail will always be complete, current, or uninterrupted.
            </p>
          ),
        },
        {
          title: "Contact",
          content: (
            <p>
              Questions about these terms can be sent to seatosky8848@gmail.com. We may update these
              terms when the website or expedition arrangements change.
            </p>
          ),
        },
      ]}
    />
  );
}
