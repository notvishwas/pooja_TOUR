"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { RotateCcw, Search, SearchX, SlidersHorizontal } from "lucide-react";

import { PackageCard } from "@/components/packages/package-card";
import { Button } from "@/components/ui/button";
import type { TravelPackage } from "@/types/travel-package";

type DurationFilter = "" | "short" | "medium" | "long";

type PackageFilters = {
  search: string;
  destination: string;
  category: string;
  duration: DurationFilter;
};

const selectClassName =
  "h-11 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground shadow-sm outline-none focus:border-ring focus:ring-3 focus:ring-ring/20";

function filtersFromSearchParams(searchParams: URLSearchParams): PackageFilters {
  const duration = searchParams.get("duration");

  return {
    search: searchParams.get("q") ?? "",
    destination: searchParams.get("destination") ?? "",
    category: searchParams.get("category") ?? "",
    duration:
      duration === "short" || duration === "medium" || duration === "long"
        ? duration
        : "",
  };
}

function matchesDuration(duration: number, filter: DurationFilter) {
  if (filter === "short") return duration <= 4;
  if (filter === "medium") return duration >= 5 && duration <= 7;
  if (filter === "long") return duration >= 8;
  return true;
}

function PackageCatalogue({ packages }: { packages: readonly TravelPackage[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<PackageFilters>(() =>
    filtersFromSearchParams(new URLSearchParams(searchParams.toString())),
  );
  const deferredSearch = useDeferredValue(filters.search.trim().toLowerCase());

  useEffect(() => {
    const handleHistoryChange = () => {
      setFilters(filtersFromSearchParams(new URLSearchParams(window.location.search)));
    };

    window.addEventListener("popstate", handleHistoryChange);
    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, []);

  const destinations = useMemo(
    () => [...new Set(packages.map((item) => item.destination))].sort(),
    [packages],
  );
  const categories = useMemo(
    () => [...new Set(packages.map((item) => item.category))].sort(),
    [packages],
  );

  const filteredPackages = useMemo(
    () =>
      packages.filter((item) => {
        const searchableText = [
          item.title,
          item.destination,
          item.stateOrRegion,
          item.category,
          item.shortDescription,
        ]
          .join(" ")
          .toLowerCase();

        return (
          (!deferredSearch || searchableText.includes(deferredSearch)) &&
          (!filters.destination || item.destination === filters.destination) &&
          (!filters.category || item.category === filters.category) &&
          matchesDuration(item.duration, filters.duration)
        );
      }),
    [deferredSearch, filters.category, filters.destination, filters.duration, packages],
  );

  function updateFilters(nextFilters: PackageFilters) {
    setFilters(nextFilters);

    const params = new URLSearchParams();
    if (nextFilters.search) params.set("q", nextFilters.search);
    if (nextFilters.destination) params.set("destination", nextFilters.destination);
    if (nextFilters.category) params.set("category", nextFilters.category);
    if (nextFilters.duration) params.set("duration", nextFilters.duration);

    const query = params.toString();
    window.history.replaceState(null, "", query ? `${pathname}?${query}` : pathname);
  }

  function resetFilters() {
    updateFilters({ search: "", destination: "", category: "", duration: "" });
  }

  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div>
      <div className="rounded-2xl border bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal aria-hidden="true" className="size-5 text-brand-gold-dark" />
            <h2 className="font-sans text-base font-bold text-primary">Find your package</h2>
          </div>
          {hasActiveFilters ? (
            <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
              <RotateCcw aria-hidden="true" />
              Reset filters
            </Button>
          ) : null}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            Search
            <span className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="search"
                value={filters.search}
                onChange={(event) =>
                  updateFilters({ ...filters, search: event.target.value })
                }
                placeholder="Search packages"
                className={`${selectClassName} pl-9`}
              />
            </span>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            Destination
            <select
              value={filters.destination}
              onChange={(event) =>
                updateFilters({ ...filters, destination: event.target.value })
              }
              className={selectClassName}
            >
              <option value="">All destinations</option>
              {destinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            Category
            <select
              value={filters.category}
              onChange={(event) =>
                updateFilters({ ...filters, category: event.target.value })
              }
              className={selectClassName}
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-primary">
            Duration
            <select
              value={filters.duration}
              onChange={(event) =>
                updateFilters({
                  ...filters,
                  duration: event.target.value as DurationFilter,
                })
              }
              className={selectClassName}
            >
              <option value="">Any duration</option>
              <option value="short">Up to 4 days</option>
              <option value="medium">5–7 days</option>
              <option value="long">8+ days</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing <strong className="text-foreground">{filteredPackages.length}</strong> of{" "}
          {packages.length} packages
        </p>
      </div>

      {filteredPackages.length > 0 ? (
        <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPackages.map((travelPackage) => (
            <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed bg-white px-6 py-14 text-center">
          <SearchX aria-hidden="true" className="mx-auto size-10 text-brand-gold-dark" />
          <h2 className="mt-4 text-2xl font-semibold">No packages match these filters</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Try a broader search or reset the filters to see the full catalogue.
          </p>
          <Button type="button" className="mt-5" onClick={resetFilters}>
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}

export { PackageCatalogue };
