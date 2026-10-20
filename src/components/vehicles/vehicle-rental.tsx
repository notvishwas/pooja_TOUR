"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Check, MessageCircle, Users } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { KM_SELECTOR, vehicles } from "@/data/vehicles";
import { formatIndianRupees } from "@/lib/format";
import { cn } from "@/lib/utils";

function buildWhatsAppLink(vehicleName: string, km: number, price: number) {
  const message = `Hello! I would like to rent a ${vehicleName} for about ${km} km (estimated ${formatIndianRupees(price)}). Please share availability and the final quotation.`;

  return `${siteConfig.contact.whatsAppHref}?text=${encodeURIComponent(message)}`;
}

function VehicleRental() {
  const [km, setKm] = useState<number>(KM_SELECTOR.default);
  const [selectedId, setSelectedId] = useState<string>(vehicles[1].id);

  const sliderProgress =
    ((km - KM_SELECTOR.min) / (KM_SELECTOR.max - KM_SELECTOR.min)) * 100;

  return (
    <div>
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] sm:p-7">
        <div className="flex items-end justify-between gap-4">
          <label htmlFor="km-range" className="text-sm font-bold text-primary">
            How far are you travelling?
          </label>
          <p className="text-right" aria-live="polite">
            <span className="text-3xl font-bold text-primary">{km}</span>
            <span className="ml-1 text-sm font-semibold text-muted-foreground">km</span>
          </p>
        </div>

        <input
          id="km-range"
          type="range"
          min={KM_SELECTOR.min}
          max={KM_SELECTOR.max}
          step={KM_SELECTOR.step}
          value={km}
          onChange={(event) => setKm(Number(event.target.value))}
          style={{
            background: `linear-gradient(to right, var(--color-brand-gold) ${sliderProgress}%, var(--color-border) ${sliderProgress}%)`,
          }}
          className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-[var(--color-brand-gold-dark)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{KM_SELECTOR.min} km</span>
          <span>{KM_SELECTOR.max} km</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Quick distance picks">
          {KM_SELECTOR.quickPicks.map((pick) => (
            <button
              key={pick}
              type="button"
              aria-pressed={km === pick}
              onClick={() => setKm(pick)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                km === pick
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:border-brand-gold hover:bg-brand-gold-light/20",
              )}
            >
              {pick} km
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {vehicles.map((vehicle) => {
          const total = km * vehicle.ratePerKm;
          const isSelected = vehicle.id === selectedId;

          return (
            <article
              key={vehicle.id}
              className={cn(
                "flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-[var(--shadow-card)] transition-[border-color,box-shadow]",
                isSelected && "border-brand-gold ring-2 ring-brand-gold/50",
              )}
            >
              <button
                type="button"
                aria-pressed={isSelected}
                aria-label={`Select ${vehicle.name}`}
                onClick={() => setSelectedId(vehicle.id)}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/35"
              >
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  unoptimized
                  sizes="(max-width: 767px) calc(100vw - 2rem), 33vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-sm">
                  {vehicle.type}
                </span>
                {isSelected ? (
                  <span className="absolute top-4 right-4 grid size-7 place-items-center rounded-full bg-brand-gold text-brand-navy-dark shadow-sm">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                ) : null}
              </button>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-2xl font-semibold">{vehicle.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{vehicle.bestFor}</p>

                <div className="mt-4 flex gap-5 text-sm font-semibold text-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Users aria-hidden="true" className="size-4 text-brand-gold-dark" />
                    {vehicle.seats} guests
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase aria-hidden="true" className="size-4 text-brand-gold-dark" />
                    {vehicle.bags} bags
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-brand-gold-dark"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="border-t pt-5">
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      Estimated for {km} km
                    </p>
                    <p className="mt-1 text-3xl font-bold text-primary">
                      {formatIndianRupees(total)}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {formatIndianRupees(vehicle.ratePerKm)} per km × {km} km
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppLink(vehicle.name, km, total)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: isSelected ? "default" : "outline",
                      }),
                      "mt-5 w-full",
                    )}
                  >
                    <MessageCircle aria-hidden="true" />
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-muted-foreground">
        Prices are estimates based on the distance you select. Tolls, parking, state taxes and
        any night or driver charges are confirmed in your final quotation.
      </p>
    </div>
  );
}

export { VehicleRental };
