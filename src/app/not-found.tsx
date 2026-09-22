import Link from "next/link";
import { MapPinned } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="flex flex-1 items-center py-16 sm:py-24">
      <Container className="text-center">
        <MapPinned aria-hidden="true" className="mx-auto size-12 text-brand-gold-dark" />
        <p className="mt-5 text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">404 · Route not found</p>
        <h1 className="mt-3 text-4xl font-semibold">This journey is not available</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
          The package or page may have moved. Return to the catalogue to explore the available mock packages.
        </p>
        <Link href="/packages" className={`${buttonVariants({ size: "lg" })} mt-7`}>
          Explore Packages
        </Link>
      </Container>
    </main>
  );
}
