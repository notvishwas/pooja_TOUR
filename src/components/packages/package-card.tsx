import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatIndianRupees, formatPackageDuration } from "@/lib/format";
import type { TravelPackage } from "@/types/travel-package";

type PackageCardProps = {
  travelPackage: TravelPackage;
  className?: string;
};

function PackageCard({ travelPackage, className }: PackageCardProps) {
  const enquiryQuery = new URLSearchParams({
    intent: "package-enquiry",
    package: travelPackage.slug,
  });

  return (
    <article
      className={cn(
        "group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-lg",
        className,
      )}
    >
      <Link
        href={`/packages/${travelPackage.slug}`}
        aria-label={`View details for ${travelPackage.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/35"
      >
        <Image
          src={travelPackage.image}
          alt={`Illustrated preview for ${travelPackage.title}`}
          fill
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.035]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-sm">
          {travelPackage.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-3.5 text-brand-gold-dark" />
            {travelPackage.destination}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 aria-hidden="true" className="size-3.5 text-brand-gold-dark" />
            {formatPackageDuration(travelPackage.duration, travelPackage.nights)}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold">
          <Link
            href={`/packages/${travelPackage.slug}`}
            className="rounded-sm hover:text-brand-navy-light focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            {travelPackage.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {travelPackage.shortDescription}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-foreground">
          {travelPackage.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-gold-dark"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="border-t pt-5">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Starting from
            </p>
            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <p className="text-2xl font-bold text-primary">
                {formatIndianRupees(travelPackage.startingPrice)}
              </p>
              {travelPackage.originalPrice ? (
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sr-only">Original price </span>
                  {formatIndianRupees(travelPackage.originalPrice)}
                </p>
              ) : null}
              <span className="text-xs text-muted-foreground">per person*</span>
            </div>
          </div>

          <div className="mt-5 grid gap-2 xs:grid-cols-2">
            <Link
              href={`/packages/${travelPackage.slug}`}
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              View Details
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              href={`/contact?${enquiryQuery.toString()}#enquiry-form`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full",
              )}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export { PackageCard };
