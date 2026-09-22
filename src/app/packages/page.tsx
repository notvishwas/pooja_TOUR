import { Suspense } from "react";
import type { Metadata } from "next";
import { Info } from "lucide-react";

import { PackageCatalogue } from "@/components/packages/package-catalogue";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { travelPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse mock tour packages for popular destinations across India and plan a customized journey.",
};

function CatalogueFallback() {
  return (
    <div className="rounded-2xl border bg-white p-6 text-sm text-muted-foreground">
      Preparing package filters…
    </div>
  );
}

export default function PackagesPage() {
  return (
    <main id="main-content" className="flex-1 py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Explore packages"
          title="Find a starting point for your next trip"
          description="Compare destination ideas, trip lengths, and travel styles. Every package can be adjusted before a final quotation is prepared."
        />
        <div className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-xl border border-brand-gold/35 bg-brand-gold-light/15 p-4 text-sm leading-6 text-foreground">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-gold-dark" />
          <p>
            This is a mock catalogue for interface review. Prices, ratings, and review
            counts are sample data—not verified business claims or live quotations.
          </p>
        </div>
        <div className="mt-10">
          <Suspense fallback={<CatalogueFallback />}>
            <PackageCatalogue packages={travelPackages} />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}
