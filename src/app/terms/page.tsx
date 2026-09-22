import type { Metadata } from "next";

import { PolicyLayout, type PolicySection } from "@/components/legal/policy-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Draft website, enquiry, quotation, and booking terms for POOJA TOUR & TRAVELLS.",
  alternates: { canonical: "/terms" },
};

const sections: readonly PolicySection[] = [
  {
    title: "Website and enquiry use",
    paragraphs: [
      "Website content is provided for general travel-planning information. Package descriptions, itineraries, images, ratings, review counts, and starting prices are not binding offers.",
      "Submitting a website form, calling, or sending a message creates an enquiry only. It does not reserve hotels, vehicles, tickets, activities, or any other service.",
    ],
  },
  {
    title: "Quotations, prices, and availability",
    paragraphs: [
      "A quotation should identify the proposed itinerary, validity period, included and excluded services, price assumptions, payment schedule, cancellation terms, and any supplier conditions known at that time.",
      "Prices and availability can change until the agency has received the required payment and issued written booking confirmation. Changes in dates, traveller count, room type, route, taxes, fuel costs, exchange rates, or supplier pricing may require a revised quotation.",
    ],
  },
  {
    title: "Booking confirmation",
    paragraphs: [
      "A booking should be treated as confirmed only after the agency has accepted the required payment, completed necessary checks, and issued written confirmation. Supplier references or vouchers may follow separately.",
      "If a requested service becomes unavailable before confirmation, the agency may propose an alternative or return the amount received for that unavailable service, subject to finalized business and supplier terms.",
    ],
  },
  {
    title: "Customer responsibilities",
    paragraphs: [
      "Travellers are responsible for providing accurate names, ages, contact details, travel dates, and relevant requirements. They should review the quotation and confirmation promptly and report errors.",
    ],
    bullets: [
      "Carry valid identification, permits, tickets, visas, medical documents, and registrations required for the journey.",
      "Assess personal fitness and seek appropriate advice for altitude, pilgrimage, adventure, or other demanding travel.",
      "Follow hotel, transport, activity, local-authority, and safety rules.",
      "Arrive at agreed meeting points on time and communicate disruptions promptly.",
    ],
  },
  {
    title: "Payment terms",
    paragraphs: [
      "[OWNER TO CONFIRM] The agency must finalize deposit percentages, balance due dates, accepted payment methods, transaction charges, tax treatment, invoice process, late-payment consequences, and whether any payments are non-refundable.",
      "No payment instruction should be published until verified bank or payment details and fraud-prevention procedures are approved by the owner.",
    ],
  },
  {
    title: "Changes and disruptions",
    paragraphs: [
      "Travel can be affected by weather, road closures, strikes, government action, supplier changes, natural events, or other circumstances outside reasonable control. Where practical, the agency may assist with alternatives, but additional costs may remain payable by the traveller according to the finalized quotation and supplier rules.",
    ],
  },
  {
    title: "Liability disclaimer",
    paragraphs: [
      "[LEGAL AND BUSINESS REVIEW REQUIRED] Hotels, carriers, vehicle operators, guides, and activity providers may supply services as independent parties. The final terms must accurately define the agency’s role, applicable limits of responsibility, exclusions that are legally permitted, complaint process, governing law, and dispute venue.",
      "Nothing in these draft terms is intended to exclude rights or liabilities that cannot lawfully be excluded.",
    ],
  },
];

const ownerReviewItems = [
  "Legal business name, address, tax or registration details, and contracting entity.",
  "Quotation validity, confirmation workflow, deposit, balance, and accepted payment methods.",
  "Supplier relationship, service responsibility, liability limits, and insurance wording.",
  "Complaint escalation, governing law, jurisdiction, and dispute-resolution process.",
] as const;

export default function TermsPage() {
  return (
    <PolicyLayout
      eyebrow="Draft website and booking terms"
      title="Terms & Conditions"
      description="General conditions for website use, quotations, customer responsibilities, payments, and booking confirmation."
      sections={sections}
      ownerReviewItems={ownerReviewItems}
    />
  );
}
