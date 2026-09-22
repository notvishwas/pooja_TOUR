import Image from "next/image";

function TravelIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -top-3 -right-3 hidden rounded-xl bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:block">
        <p className="text-xs font-bold tracking-wide text-brand-gold-dark uppercase">
          Made for your pace
        </p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-secondary shadow-[var(--shadow-card)]">
        <Image
          src="/images/travel-hero-placeholder.svg"
          alt="Illustrated mountain road with a travel vehicle"
          width={800}
          height={620}
          priority
          className="h-auto w-full transition-transform duration-500 motion-safe:hover:scale-[1.015]"
        />
      </div>
      <div className="absolute -bottom-4 left-4 rounded-xl border bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:left-8">
        <p className="text-sm font-semibold text-primary">Routes planned with care</p>
        <p className="mt-0.5 text-xs text-muted-foreground">Stay • Vehicle • Sightseeing</p>
      </div>
    </div>
  );
}

export { TravelIllustration };
