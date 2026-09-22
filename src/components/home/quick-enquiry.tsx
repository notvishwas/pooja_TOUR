import { CalendarDays, MapPin, Search, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { destinationPreviews } from "@/data/homepage";

const fieldClassName =
  "h-11 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20";

function QuickEnquiry() {
  return (
    <section aria-labelledby="quick-enquiry-title" className="relative z-10 -mt-1 sm:-mt-6">
      <div className="site-container rounded-2xl border bg-white p-4 shadow-[0_18px_45px_-30px_rgb(16_37_64/0.55)] sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <Search aria-hidden="true" className="size-5 text-brand-gold-dark" />
          <h2 id="quick-enquiry-title" className="font-sans text-base font-bold">
            Start planning your trip
          </h2>
        </div>
        <form
          action="/book-now"
          method="get"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_auto] lg:items-end"
        >
          <input type="hidden" name="intent" value="plan-trip" />
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            <span className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 text-brand-gold-dark" />
              Destination
            </span>
            <input
              className={fieldClassName}
              name="destination"
              list="homepage-destinations"
              placeholder="Where would you like to go?"
              required
            />
            <datalist id="homepage-destinations">
              {destinationPreviews.map((destination) => (
                <option key={destination.name} value={destination.name} />
              ))}
            </datalist>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            <span className="flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="size-4 text-brand-gold-dark" />
              Travel date
            </span>
            <input className={fieldClassName} type="date" name="date" required />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            <span className="flex items-center gap-2">
              <UsersRound aria-hidden="true" className="size-4 text-brand-gold-dark" />
              Travellers
            </span>
            <input
              className={fieldClassName}
              type="number"
              name="travellers"
              min="1"
              max="30"
              defaultValue="2"
              required
            />
          </label>
          <Button type="submit" size="lg" className="w-full lg:w-auto">
            <Search aria-hidden="true" />
            Plan Trip
          </Button>
        </form>
      </div>
    </section>
  );
}

export { QuickEnquiry };
