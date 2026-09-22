import { Suspense } from "react";
import type { Metadata } from "next";

import { PackageCatalogue } from "@/components/packages/package-catalogue";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { travelPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse tour packages for popular destinations across India and plan a customized journey.",
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
        <div className="mt-10">
          <Suspense fallback={<CatalogueFallback />}>
            <PackageCatalogue packages={travelPackages} />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}
