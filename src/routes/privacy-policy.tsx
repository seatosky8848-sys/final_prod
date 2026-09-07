import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";
import { absoluteUrl } from "../lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ajay Lalwani" },
      {
        name: "description",
        content:
          "Learn how the Ajay Lalwani Sea to Sky website handles contact, sponsorship, media, and support information.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy | Ajay Lalwani" },
      { property: "og:url", content: absoluteUrl("/privacy-policy") },
      {
        property: "og:description",
        content: "How information shared with the Sea to Sky website is handled.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy-policy") }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Respect for the information you share."
      intro="This policy explains what information may be received through this website and how it is used to respond to genuine enquiries."
      sections={[
        {
          title: "Information we receive",
          content: (
            <>
              <p>
                We may receive your name, email address, phone number, message, and any other
                details you choose to include when contacting us about sponsorship, media, or
                support.
              </p>
              <p>
                Basic technical information, such as browser type, device type, and pages visited,
                may be processed to keep the website secure and improve its performance.
              </p>
            </>
          ),
        },
        {
          title: "How information is used",
          content: (
            <p>
              Information is used to respond to your enquiry, coordinate support, communicate about
              the expedition, and meet applicable legal or payment requirements. We do not sell your
              personal information.
            </p>
          ),
        },
        {
          title: "Cookies and external services",
          content: (
            <p>
              This website may use essential browser storage or similar technologies to keep core
              features working. External links, such as social media and payment services, are
              governed by the privacy policies of those providers. We do not use this website to
              sell personal information or build advertising profiles.
            </p>
          ),
        },
        {
          title: "Sharing and retention",
          content: (
            <p>
              Information is shared only when necessary to respond to your request, process a
              payment, operate a service, or comply with law. We retain information only for as long
              as it is reasonably needed for these purposes.
            </p>
          ),
        },
        {
          title: "Security",
          content: (
            <p>
              We take reasonable technical and organisational steps to protect information from
              unauthorised access, loss, or misuse. No online service can guarantee absolute
              security, so please do not send passwords, payment PINs, one-time passwords, or other
              confidential credentials through this website.
            </p>
          ),
        },
        {
          title: "Your choices",
          content: (
            <>
              <p>
                You may ask what personal information we hold, request a correction, or ask us to
                stop using it for contact purposes by emailing seatosky8848@gmail.com.
              </p>
              <p>
                We may need to retain limited information where required by law, for accounting, or
                to resolve a legitimate dispute.
              </p>
            </>
          ),
        },
        {
          title: "Children's privacy",
          content: (
            <p>
              This website is not directed at children under 13. We do not knowingly collect
              personal information from children. A parent or guardian can contact us if they
              believe a child has shared information with us.
            </p>
          ),
        },
        {
          title: "Policy updates and contact",
          content: (
            <p>
              We may update this policy when the website, services, or legal requirements change.
              Questions or privacy requests can be sent to seatosky8848@gmail.com.
            </p>
          ),
        },
      ]}
    />
  );
}
