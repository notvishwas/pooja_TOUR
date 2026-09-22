import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { PackageCard } from "@/components/packages/package-card";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getRelatedTravelPackages } from "@/data/packages";
import { formatIndianRupees, formatPackageDuration } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { TravelPackage } from "@/types/travel-package";

type PackageDetailProps = {
  travelPackage: TravelPackage;
};

const listCardClassName = "rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] sm:p-6";

function PackageDetail({ travelPackage }: PackageDetailProps) {
  const relatedPackages = getRelatedTravelPackages(travelPackage);
  const bookingQuery = new URLSearchParams({ package: travelPackage.slug });

  return (
    <main id="main-content" className="flex-1 pb-16 sm:pb-20">
      <Container>
        <nav aria-label="Breadcrumb" className="py-5 sm:py-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link className="rounded-sm hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
            <li>
              <Link className="rounded-sm hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30" href="/packages">
                Packages
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
            <li aria-current="page" className="font-semibold text-foreground">
              {travelPackage.title}
            </li>
          </ol>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.65fr)] lg:items-start lg:gap-8">
          <div className="min-w-0">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border bg-secondary shadow-[var(--shadow-card)] sm:rounded-3xl">
              <Image
                src={travelPackage.image}
                alt={`Travel preview for ${travelPackage.title}`}
                fill
                preload
                sizes="(max-width: 1023px) calc(100vw - 2rem), 66vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary shadow-sm sm:top-5 sm:left-5">
                {travelPackage.category}
              </span>
            </div>

            <header className="mt-6">
              <p className="flex items-start gap-2 text-sm font-semibold text-brand-gold-dark">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {travelPackage.destination} · {travelPackage.stateOrRegion}
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                {travelPackage.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                {travelPackage.shortDescription}
              </p>
              <dl className="mt-5 grid gap-3 xs:grid-cols-2 sm:grid-cols-3">
                <div className="rounded-xl border bg-white p-4">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    <Clock3 aria-hidden="true" className="size-4 text-brand-gold-dark" /> Duration
                  </dt>
                  <dd className="mt-2 text-sm font-bold text-primary">
                    {formatPackageDuration(travelPackage.duration, travelPackage.nights)}
                  </dd>
                </div>
                <div className="rounded-xl border bg-white p-4">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    <UsersRound aria-hidden="true" className="size-4 text-brand-gold-dark" /> Group size
                  </dt>
                  <dd className="mt-2 text-sm font-bold text-primary">
                    Up to {travelPackage.maximumTravellers} travellers
                  </dd>
                </div>
                <div className="rounded-xl border bg-white p-4 xs:col-span-2 sm:col-span-1">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    <CalendarCheck aria-hidden="true" className="size-4 text-brand-gold-dark" /> Availability
                  </dt>
                  <dd className="mt-2 text-sm font-bold text-primary">Subject to confirmation</dd>
                </div>
              </dl>
            </header>
          </div>

          <aside className="rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] sm:p-6 lg:sticky lg:top-24">
            <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Starting from</p>
            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <p className="text-3xl font-bold text-primary">
                {formatIndianRupees(travelPackage.startingPrice)}
              </p>
              {travelPackage.originalPrice ? (
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sr-only">Original price </span>
                  {formatIndianRupees(travelPackage.originalPrice)}
                </p>
              ) : null}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">per person, based on selected arrangements</p>

            <Link
              href={`/book-now?${bookingQuery.toString()}`}
              className={cn(buttonVariants({ size: "lg" }), "mt-5 w-full")}
            >
              Book This Package
            </Link>
            <div className="mt-3 grid gap-2 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={siteConfig.contact.phoneHref}
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                <Phone aria-hidden="true" /> Call
              </a>
              <a
                href={siteConfig.contact.whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                <MessageCircle aria-hidden="true" /> WhatsApp
              </a>
            </div>
            {siteConfig.contact.isPlaceholder ? (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Call and WhatsApp numbers are placeholders.
              </p>
            ) : null}
            <div className="mt-5 border-t pt-5 text-xs leading-5 text-muted-foreground">
              <p className="flex items-start gap-2">
                <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-gold-dark" />
                Enquiring does not confirm a booking. We will first confirm availability and share a final quotation.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-12">
          <div className="min-w-0">
            <section aria-labelledby="overview-title">
              <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">At a glance</p>
              <h2 id="overview-title" className="mt-2 text-3xl font-semibold">Package overview</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{travelPackage.fullDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {travelPackage.suitableFor.map((travellerType) => (
                  <span key={travellerType} className="rounded-full border bg-white px-3 py-1.5 text-xs font-semibold text-primary">
                    {travellerType}
                  </span>
                ))}
              </div>
            </section>

            <section aria-labelledby="itinerary-title" className="mt-12 scroll-mt-28">
              <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">Day by day</p>
              <h2 id="itinerary-title" className="mt-2 text-3xl font-semibold">Suggested itinerary</h2>
              <ol className="mt-6 space-y-2">
                {travelPackage.itinerary.map((item, index) => (
                  <li key={item.day} className="relative grid grid-cols-[auto_1fr] gap-4 pb-6 last:pb-0">
                    {index < travelPackage.itinerary.length - 1 ? (
                      <span aria-hidden="true" className="absolute top-10 bottom-0 left-5 w-px bg-border" />
                    ) : null}
                    <span className="relative z-10 grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {item.day}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div className="space-y-6">
            <section className={listCardClassName} aria-labelledby="highlights-title">
              <h2 id="highlights-title" className="text-2xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                {travelPackage.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-gold-dark" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className={listCardClassName} aria-labelledby="vehicles-title">
              <div className="flex items-center gap-3">
                <CarFront aria-hidden="true" className="size-5 text-brand-gold-dark" />
                <h2 id="vehicles-title" className="text-2xl font-semibold">Vehicle options</h2>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {travelPackage.availableVehicleTypes.map((vehicle) => (
                  <li key={vehicle} className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-primary">{vehicle}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">Final vehicle depends on route, group size, luggage, and availability.</p>
            </section>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className={listCardClassName} aria-labelledby="inclusions-title">
            <h2 id="inclusions-title" className="text-2xl font-semibold">Inclusions</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {travelPackage.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-gold-dark" /> {item}
                </li>
              ))}
            </ul>
          </section>
          <section className={listCardClassName} aria-labelledby="exclusions-title">
            <h2 id="exclusions-title" className="text-2xl font-semibold">Exclusions</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {travelPackage.exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X aria-hidden="true" className="mt-1 size-4 shrink-0 text-destructive" /> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="notes-title" className="mt-8 rounded-2xl border border-brand-gold/35 bg-brand-gold-light/10 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Info aria-hidden="true" className="size-5 text-brand-gold-dark" />
            <h2 id="notes-title" className="text-2xl font-semibold">Important notes</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground">
            {travelPackage.importantNotes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold-dark" /> {note}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="gallery-title" className="mt-14">
          <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">A glimpse of the journey</p>
          <h2 id="gallery-title" className="mt-2 text-3xl font-semibold">Image gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {travelPackage.gallery.map((image, index) => (
              <figure key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-secondary">
                <Image
                  src={image}
                  alt={`${travelPackage.destination} package gallery preview ${index + 1}`}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), 50vw"
                  className="object-cover transition-transform duration-500 motion-safe:hover:scale-[1.02]"
                />
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="related-title" className="mt-16 border-t pt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">More ways to travel</p>
              <h2 id="related-title" className="mt-2 text-3xl font-semibold">Related packages</h2>
            </div>
            <Link href="/packages" className={buttonVariants({ variant: "outline" })}>
              View all packages
            </Link>
          </div>
          <div className="mt-7 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {relatedPackages.map((relatedPackage) => (
              <PackageCard key={relatedPackage.id} travelPackage={relatedPackage} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export { PackageDetail };
