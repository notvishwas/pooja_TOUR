import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Info, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getTravelPackageBySlug, travelPackages } from "@/data/packages";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Start a package enquiry with POOJA TOUR & TRAVELLS.",
};

type BookNowPageProps = {
  searchParams: Promise<{ package?: string | string[] }>;
};

export default async function BookNowPage({ searchParams }: BookNowPageProps) {
  const query = await searchParams;
  const packageSlug = typeof query.package === "string" ? query.package : "";
  const selectedPackage = getTravelPackageBySlug(packageSlug);

  return (
    <main id="main-content" className="flex-1 py-12 sm:py-16">
      <Container className="max-w-4xl">
        <div className="rounded-3xl border bg-white p-6 shadow-[var(--shadow-card)] sm:p-10">
          <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">Plan your journey</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Book Now</h1>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            {selectedPackage
              ? `${selectedPackage.title} is selected. Review it below, then contact us to request availability and a final quotation.`
              : "Choose a package to begin an enquiry. We will confirm availability and prepare a quotation before any booking is finalized."}
          </p>

          <form action="/book-now" className="mt-8">
            <label className="grid gap-2 text-sm font-bold text-primary" htmlFor="package">
              Selected package
              <select
                id="package"
                name="package"
                defaultValue={selectedPackage?.slug ?? ""}
                className="h-12 rounded-lg border border-input bg-white px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/20"
              >
                <option value="">Select a package</option>
                {travelPackages.map((travelPackage) => (
                  <option key={travelPackage.id} value={travelPackage.slug}>{travelPackage.title}</option>
                ))}
              </select>
            </label>
            <button type="submit" className={cn(buttonVariants({ variant: "outline" }), "mt-3")}>
              Update selection
            </button>
          </form>

          <div className="mt-8 rounded-xl bg-muted p-4 text-sm leading-6 text-muted-foreground">
            <p className="flex items-start gap-3">
              <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-gold-dark" />
              This is an enquiry step only. Availability is subject to confirmation, prices are starting prices, and submitting an enquiry does not confirm a booking.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.contact.phoneHref} className={buttonVariants({ size: "lg" })}>
              <Phone aria-hidden="true" /> Call to Enquire
            </a>
            <a
              href={siteConfig.contact.whatsAppHref}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <MessageCircle aria-hidden="true" /> WhatsApp
            </a>
            <Link href="/packages" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              <CalendarCheck aria-hidden="true" /> Browse Packages
            </Link>
          </div>
          {siteConfig.contact.isPlaceholder ? (
            <p className="mt-4 text-xs text-muted-foreground">Contact numbers are clearly marked placeholders pending final business details.</p>
          ) : null}
        </div>
      </Container>
    </main>
  );
}
