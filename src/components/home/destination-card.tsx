import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { HomeIcon } from "@/components/home/home-icon";
import type { DestinationPreview } from "@/data/homepage";
import { cn } from "@/lib/utils";

const destinationTones = {
  sky: "bg-[#dcecf7] text-[#1d5577]",
  pine: "bg-[#dfece5] text-[#28583d]",
  rose: "bg-[#eee5ea] text-[#70415c]",
  sand: "bg-[#f2e7d1] text-[#79541f]",
  coast: "bg-[#dcefed] text-[#17605b]",
  spice: "bg-[#e7ead8] text-[#596326]",
} satisfies Record<DestinationPreview["tone"], string>;

function DestinationCard({ destination }: { destination: DestinationPreview }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg">
      <div
        className={cn(
          "relative grid aspect-[16/9] place-items-center overflow-hidden",
          destinationTones[destination.tone],
        )}
      >
        <span className="absolute -top-8 -right-8 size-32 rounded-full border-[20px] border-white/35" />
        <span className="absolute bottom-4 left-5 h-1.5 w-16 rounded-full bg-current/20" />
        <HomeIcon
          name={destination.icon}
          aria-hidden="true"
          className="size-14 transition-transform duration-300 motion-safe:group-hover:scale-105"
          strokeWidth={1.5}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold-dark">
              <MapPin aria-hidden="true" className="size-3.5" />
              {destination.region}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{destination.name}</h3>
          </div>
          <ArrowUpRight aria-hidden="true" className="size-5 text-muted-foreground group-hover:text-primary" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {destination.description}
        </p>
        <Link
          href={`/contact?destination=${encodeURIComponent(destination.name)}#enquiry-form`}
          className="mt-4 inline-flex rounded-md text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          Plan this trip
        </Link>
      </div>
    </article>
  );
}

export { DestinationCard };
