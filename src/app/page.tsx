import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Compass,
  Quote,
  Sparkles,
} from "lucide-react";

import { DestinationCard } from "@/components/home/destination-card";
import { HomeIcon } from "@/components/home/home-icon";
import { QuickEnquiry } from "@/components/home/quick-enquiry";
import { SectionHeading } from "@/components/home/section-heading";
import { TravelIllustration } from "@/components/home/travel-illustration";
import { Container } from "@/components/layout/container";
import { PackageCard } from "@/components/packages/package-card";
import { buttonVariants } from "@/components/ui/button";
import {
  destinationPreviews,
  frequentlyAskedQuestions,
  planningSteps,
  servicePreviews,
  testimonialPreviews,
  trustReasons,
} from "@/data/homepage";
import { featuredTravelPackages } from "@/data/packages";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thoughtfully Planned Tours Across India",
  description:
    "Explore destination ideas and plan customized family, group, and leisure trips with POOJA TOUR & TRAVELLS.",
};

const heroTrustPoints = [
  "Personalized planning",
  "Suitable vehicle options",
  "Responsive trip support",
] as const;

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <section className="overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold-light/20 px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-brand-gold-dark uppercase">
              <Sparkles aria-hidden="true" className="size-3.5" />
              Thoughtful journeys, planned around you
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-[3.5rem]">
              See more of India,
              <span className="block text-brand-gold-dark">without the planning stress.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              From mountain holidays to cultural getaways, we help shape practical
              itineraries with stays, sightseeing, and transport considered together.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row">
              <Link
                href="/packages"
                className={cn(buttonVariants({ size: "lg" }), "w-full xs:w-auto")}
              >
                Explore Packages
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="/book-now"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full xs:w-auto",
                )}
              >
                Plan Custom Trip
              </Link>
            </div>
            <ul className="mt-7 grid gap-3 text-sm text-foreground sm:grid-cols-3">
              {heroTrustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CircleCheck
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand-gold-dark"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <TravelIllustration />
        </Container>
      </section>

      <QuickEnquiry />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="destinations-title">
        <Container>
          <div id="destinations-title">
            <SectionHeading
              eyebrow="Popular destinations"
              title="Start with a place that inspires you"
              description="Browse a few favourite holiday ideas. Every route can be discussed and adjusted around your group and travel dates."
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinationPreviews.map((destination) => (
              <DestinationCard key={destination.name} destination={destination} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y bg-white py-16 sm:py-20" aria-labelledby="services-title">
        <Container>
          <div id="services-title">
            <SectionHeading
              eyebrow="Travel services"
              title="One plan, fewer moving parts"
              description="Bring the key parts of your journey together with practical assistance from planning through confirmation."
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {servicePreviews.map((service) => (
              <article
                key={service.title}
                className="group rounded-xl border bg-background p-5 transition-colors hover:border-brand-gold/60 hover:bg-brand-gold-light/10"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <HomeIcon name={service.icon} aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="why-us-title">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div id="why-us-title" className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why choose us"
              title="Clear guidance for a smoother journey"
              description="A good holiday plan should make the details easier to understand, not add more confusion."
              align="left"
            />
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6")}
            >
              Learn About Us
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustReasons.map((reason, index) => (
              <article
                key={reason.title}
                className={cn(
                  "rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)]",
                  index === trustReasons.length - 1 && "sm:col-span-2",
                )}
              >
                <span className="grid size-11 place-items-center rounded-full bg-brand-gold-light/35 text-brand-gold-dark">
                  <HomeIcon name={reason.icon} aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy-dark py-16 sm:py-20" aria-labelledby="packages-title">
        <Container>
          <div id="packages-title" className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured packages"
              title="Popular journeys to start exploring"
              description="Compare a few mock package ideas, then open the full catalogue to search by destination, category, or duration."
              align="left"
              inverse
            />
            <Link
              href="/packages"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-md font-bold text-brand-gold-light underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-gold/40 md:self-auto"
            >
              View package page
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
            {featuredTravelPackages.slice(0, 3).map((travelPackage) => (
              <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="process-title">
        <Container>
          <div id="process-title">
            <SectionHeading
              eyebrow="How it works"
              title="From an idea to a confirmed itinerary"
              description="A simple planning flow keeps each decision clear and gives you space to review the details."
            />
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {planningSteps.map((step, index) => (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < planningSteps.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-border lg:block" aria-hidden="true" />
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y bg-white py-16 sm:py-20" aria-labelledby="testimonials-title">
        <Container>
          <div id="testimonials-title">
            <SectionHeading
              eyebrow="Testimonials preview"
              title="The kind of experience we aim to create"
              description="The feedback below is sample copy for layout review and will be replaced with verified traveller testimonials before launch."
            />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonialPreviews.map((testimonial) => (
              <figure
                key={testimonial.trip}
                className="rounded-2xl border bg-background p-6 shadow-[var(--shadow-card)]"
              >
                <Quote aria-hidden="true" className="size-7 text-brand-gold" />
                <blockquote className="mt-5 text-base leading-7 text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t pt-4 text-sm">
                  <span className="block font-bold text-primary">
                    {testimonial.attribution}
                  </span>
                  <span className="mt-1 block text-muted-foreground">{testimonial.trip}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="faq-title">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div id="faq-title">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Helpful details before you enquire"
              description="These general answers explain the planning process. Your final quotation will contain the trip-specific details."
              align="left"
            />
          </div>
          <div className="divide-y overflow-hidden rounded-2xl border bg-white">
            {frequentlyAskedQuestions.map((item, index) => (
              <details key={item.question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-bold text-primary hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/25 sm:px-6 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground sm:px-6 sm:pb-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center sm:px-10 sm:py-14">
            <Compass
              aria-hidden="true"
              className="absolute -top-10 -right-10 size-44 text-white/[0.06]"
              strokeWidth={1}
            />
            <p className="text-xs font-bold tracking-[0.18em] text-brand-gold-light uppercase">
              Start with a conversation
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Tell us where you want to go. We’ll help shape the route.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
              Share your dates, group size, and preferences to begin a customized trip plan.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 xs:flex-row">
              <Link
                href="/book-now"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light",
                )}
              >
                Plan My Trip
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="/packages"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Browse Destinations
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/60">
              <Check aria-hidden="true" className="size-4 text-brand-gold-light" />
              No database submission is connected yet.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
