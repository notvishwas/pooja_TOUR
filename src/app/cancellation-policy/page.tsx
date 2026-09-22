import type { Metadata } from "next";

import { PolicyLayout, type PolicySection } from "@/components/legal/policy-layout";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Draft cancellation, supplier-charge, and refund structure for POOJA TOUR & TRAVELLS.",
  alternates: { canonical: "/cancellation-policy" },
};

const sections: readonly PolicySection[] = [
  {
    title: "How to request cancellation",
    paragraphs: [
      "Cancellation requests should be submitted through a confirmed agency contact channel and should identify the lead traveller, booking reference, and affected services. A request is considered received only when acknowledged by the agency in writing.",
      "The effective cancellation date should be the date of written acknowledgement, subject to the final process approved by the owner.",
    ],
  },
  {
    title: "Placeholder cancellation structure",
    paragraphs: [
      "[OWNER TO FINALIZE] Cancellation charges should be stated in each quotation and may increase as the travel date approaches. The agency must decide whether to use fixed slabs, actual supplier charges, a service fee, or a combination of these methods.",
    ],
    bullets: [
      "More than [NUMBER] days before travel: [PERCENTAGE OR FEE] plus non-refundable supplier charges.",
      "Between [NUMBER] and [NUMBER] days before travel: [PERCENTAGE OR FEE] plus non-refundable supplier charges.",
      "Within [NUMBER] days of travel or after commencement: [PERCENTAGE OR FEE], potentially up to the full booking value.",
      "No-show, early departure, or unused services: [OWNER TO CONFIRM TREATMENT].",
    ],
  },
  {
    title: "Supplier-specific conditions",
    paragraphs: [
      "Hotels, transport operators, airlines, rail services, activity providers, guides, and permit authorities may apply their own cancellation, amendment, no-show, and refund rules. These supplier rules may be stricter than the agency’s general structure and should be disclosed in the quotation where known.",
      "Non-refundable fares, peak-season stays, group bookings, event dates, permits, and special arrangements may become fully or partly non-refundable immediately after confirmation.",
    ],
  },
  {
    title: "Changes instead of cancellation",
    paragraphs: [
      "Date, traveller-name, route, hotel, or service changes are subject to availability and supplier approval. A change may be treated as a cancellation and new booking, and any fare difference, supplier charge, tax, or agency amendment fee may apply after owner approval.",
    ],
  },
  {
    title: "Refund process and timing",
    paragraphs: [
      "[OWNER TO FINALIZE] Eligible refunds should be calculated after applicable supplier charges, confirmed services, taxes, transaction costs, and approved agency fees are known.",
      "Refunds may depend on the agency first receiving money back from the relevant supplier. The owner must define a reasonable processing target, for example within [NUMBER] business days after receipt of all supplier refunds, and explain the original-payment-method process.",
    ],
  },
  {
    title: "Agency or supplier cancellation",
    paragraphs: [
      "If the agency or a supplier cannot provide a confirmed service, the available response may include an alternative, rescheduling, credit, or refund for the affected component, depending on the circumstances and supplier terms. The final policy must distinguish agency-controlled cancellations from events outside reasonable control.",
    ],
  },
  {
    title: "Exceptional circumstances",
    paragraphs: [
      "Weather, road conditions, natural events, health restrictions, government action, strikes, or other disruptions may prevent or materially change travel. The final policy must state how unavoidable supplier costs, alternative arrangements, credits, insurance claims, and additional traveller expenses are handled.",
    ],
  },
];

const ownerReviewItems = [
  "Exact cancellation slabs, notice periods, percentages, minimum fees, and no-show treatment.",
  "Whether service, planning, payment-processing, or amendment fees apply and when they become non-refundable.",
  "Refund processing target, payment method, supplier-delay handling, and communication process.",
  "Peak-season, pilgrimage, group, flight, rail, permit, and force-majeure rules.",
] as const;

export default function CancellationPolicyPage() {
  return (
    <PolicyLayout
      eyebrow="Draft cancellation framework"
      title="Cancellation Policy"
      description="A transparent structure for cancellation requests, supplier charges, changes, and potential refunds."
      sections={sections}
      ownerReviewItems={ownerReviewItems}
    />
  );
}
