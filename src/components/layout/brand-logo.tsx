import Link from "next/link";
import { Compass } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type BrandLogoProps = {
  className?: string;
  inverse?: boolean;
};

function BrandLogo({ className, inverse = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
        className,
      )}
    >
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-full",
          inverse
            ? "bg-brand-gold text-brand-navy-dark"
            : "bg-primary text-primary-foreground",
        )}
      >
        <Compass aria-hidden="true" className="size-5" />
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            "block truncate font-heading text-base font-bold tracking-wide sm:text-lg",
            inverse ? "text-white" : "text-primary",
          )}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.625rem] font-semibold tracking-[0.2em] uppercase",
            inverse ? "text-brand-gold-light" : "text-brand-gold-dark",
          )}
        >
          &amp; Travells
        </span>
      </span>
    </Link>
  );
}

export { BrandLogo };
