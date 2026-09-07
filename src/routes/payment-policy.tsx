import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";
import { absoluteUrl } from "../lib/site";

export const Route = createFileRoute("/payment-policy")({
  head: () => ({
    meta: [
      { title: "Payment Policy | Ajay Lalwani" },
      {
        name: "description",
        content:
          "Payment and contribution information for supporting the Ajay Lalwani Sea to Sky expedition.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Payment Policy | Ajay Lalwani" },
      { property: "og:url", content: absoluteUrl("/payment-policy") },
      {
        property: "og:description",
        content: "Important information for supporters making a contribution to the expedition.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/payment-policy") }],
  }),
  component: PaymentPolicyPage,
});

function PaymentPolicyPage() {
  return (
    <LegalPage
      eyebrow="Payment Policy"
      title="Simple, careful guidance for supporters."
      intro="Please review these payment details before making a voluntary contribution to the Sea to Sky expedition."
      sections={[
        {
          title: "Accepted methods",
          content: (
            <>
              <p>
                Contributions may be made using the UPI or bank transfer details shown on the
                Contact page. Please use only the current details published on this website.
              </p>
              <p>
                Bank transfer details: Bank of Baroda, Worli, Mumbai; account name Ajay Nanakram
                Lalwani; IFSC BARBOWORLIX. The current UPI ID is ajaylalwani315-1@oksbi.
              </p>
            </>
          ),
        },
        {
          title: "Verify before paying",
          content: (
            <p>
              Before sending funds, confirm the account name, bank details, IFSC, and UPI ID in your
              payment app. If anything appears different, contact us at seatosky8848@gmail.com
              before proceeding.
            </p>
          ),
        },
        {
          title: "Processing and charges",
          content: (
            <p>
              Your bank, payment app, or payment network may apply processing fees, transfer limits,
              exchange charges, or verification requirements. Those charges are controlled by the
              relevant provider and are not set by this website.
            </p>
          ),
        },
        {
          title: "Acknowledgement and refunds",
          content: (
            <>
              <p>
                Contributions are voluntary and used for expedition-related purposes. Payment
                acknowledgements and any refund request are handled individually and subject to the
                payment provider's rules and applicable law.
              </p>
              <p>
                If you sent money to the wrong account, sent an incorrect amount, or believe a
                transaction was unauthorised, contact your bank or payment provider immediately and
                then email us with the transaction reference.
              </p>
            </>
          ),
        },
        {
          title: "Fraud prevention",
          content: (
            <p>
              We will never ask for your UPI PIN, card PIN, password, one-time password, or remote
              access to your device. Do not share these details with anyone claiming to represent
              the expedition. Verify payment details through the official Contact page before
              paying.
            </p>
          ),
        },
        {
          title: "Payment questions",
          content: (
            <>
              <p>
                For a payment confirmation or correction, email the transaction reference and
                relevant details to seatosky8848@gmail.com.
              </p>
              <p>
                Please do not send passwords, PINs, one-time passwords, full card numbers, or other
                sensitive authentication information by email.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
