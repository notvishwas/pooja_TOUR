import type { Metadata } from "next";

import { PolicyLayout, type PolicySection } from "@/components/legal/policy-layout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy information for enquiries submitted to POOJA TOUR & TRAVELLS.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: readonly PolicySection[] = [
  {
    title: "Information we may collect",
    paragraphs: [
      "When you send an enquiry, we may ask for information needed to understand and respond to the proposed trip.",
    ],
    bullets: [
      "Name and preferred contact details, such as phone number or email address.",
      "Destination, travel dates, number of travellers, departure point, and travel preferences.",
      "Messages, itinerary requests, accommodation preferences, and other information you choose to provide.",
      "Basic technical records needed to keep the website reliable and secure, if analytics or security tools are added later.",
    ],
  },
  {
    title: "Why we collect it",
    paragraphs: [
      "Enquiry information may be used to respond to questions, prepare or revise a quotation, check potential availability with travel suppliers, coordinate requested services, and maintain reasonable records of the conversation.",
      "Information should not be used for unrelated marketing without an appropriate choice or legal basis. Any future analytics, advertising, newsletter, or automated messaging tools must be added to this policy before use.",
    ],
  },
  {
    title: "Sharing and service providers",
    paragraphs: [
      "Relevant details may need to be shared with hotels, transport providers, activity operators, or other travel suppliers when checking availability or arranging a confirmed trip. Only information reasonably required for that purpose should be shared.",
      "The final policy must identify any website hosting, form delivery, email, analytics, payment, or customer-management services used by the agency.",
    ],
  },
  {
    title: "Correction and deletion requests",
    paragraphs: [
      `You may ask to review, correct, or delete enquiry information by contacting ${siteConfig.contact.email}. The agency may need to verify the request and may retain limited records where required for legal, accounting, dispute, or confirmed-booking purposes.`,
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "Enquiry information should be kept only for as long as reasonably needed to respond, prepare travel arrangements, maintain necessary business records, and meet applicable obligations. The exact retention schedule must be confirmed before launch.",
      "Reasonable technical and organizational safeguards should be used, but no online service can promise absolute security. Sensitive identity or payment information should not be requested through a basic website enquiry form.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `Privacy questions may be directed to ${siteConfig.name} at ${siteConfig.contact.email} or ${siteConfig.contact.phoneDisplay}. These are currently placeholder contact details.`,
    ],
  },
];

const ownerReviewItems = [
  "Confirmed privacy contact email, phone number, and business identity/address.",
  "Actual form, hosting, analytics, email, CRM, payment, and security providers.",
  "Retention periods for unconverted enquiries, quotations, and confirmed bookings.",
  "Applicable privacy-law requirements and whether marketing consent is needed.",
] as const;

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      eyebrow="Draft privacy information"
      title="Privacy Policy"
      description="How enquiry information may be collected, used, corrected, and retained when travellers contact the agency."
      sections={sections}
      ownerReviewItems={ownerReviewItems}
    />
  );
}
