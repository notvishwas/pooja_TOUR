import type { Metadata } from "next";
import Image from "next/image";
import {
  CarFront,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Hotel,
  Map,
  Route,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/layout/page-cta";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how POOJA TOUR & TRAVELLS approaches practical, personalized travel planning.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Clarity", description: "Explain the route, inclusions, assumptions, and starting prices before confirmation.", icon: ShieldCheck },
  { title: "Thoughtful planning", description: "Balance important sights with realistic travel time and room to breathe.", icon: Map },
  { title: "Personal attention", description: "Shape each proposal around the travellers, not only a fixed template.", icon: HeartHandshake },
  { title: "Practical support", description: "Help coordinate the moving parts of a trip through clear communication.", icon: Compass },
] as const;

const services = [
  { title: "Tour packages", description: "Ready starting points for popular routes across India.", icon: Route },
  { title: "Customized trips", description: "Flexible itineraries shaped around dates, pace, and interests.", icon: Sparkles },
  { title: "Hotel assistance", description: "Stay options matched to location, comfort, and trip style.", icon: Hotel },
  { title: "Vehicle arrangements", description: "Vehicle suggestions based on route, luggage, and group size.", icon: CarFront },
  { title: "Family and group travel", description: "Practical coordination for different ages and larger groups.", icon: UsersRound },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="About the agency"
        title="Travel plans built around real people"
        description="POOJA TOUR & TRAVELLS helps travellers turn an idea into a practical route, with clear options and room to personalize the journey."
        icon={<Compass aria-hidden="true" className="size-6" />}
      />

      <Container className="py-14 sm:py-18">
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14" aria-labelledby="introduction-title">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">A considered starting point</p>
            <h2 id="introduction-title" className="mt-3 text-3xl font-semibold sm:text-4xl">Planning should feel clear, not overwhelming</h2>
            <div className="mt-5 space-y-4 leading-7 text-muted-foreground">
              <p>
                We focus on understanding where you want to go, who is travelling, how quickly you prefer to move, and which details matter most. From there, we can suggest a sensible route and suitable travel arrangements.
              </p>
              <p>
                The packages on this website are useful starting points rather than rigid promises. Final hotels, vehicles, activities, prices, and availability are confirmed through a tailored quotation.
              </p>
              <p>
                {siteConfig.name} is run by {siteConfig.owner.name}, based out of our Delhi office, and every enquiry is reviewed personally before a quotation is shared.
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-3xl border bg-secondary shadow-[var(--shadow-card)]">
            <Image
              src="/images/agency-placeholder.svg"
              alt="Illustration of a travel planning workspace with a map, suitcase, and compass"
              width={1200}
              height={800}
              sizes="(max-width: 1023px) calc(100vw - 2rem), 50vw"
              className="h-auto w-full"
            />
          </figure>
        </section>

        <section className="mt-18 rounded-3xl bg-brand-navy-dark px-6 py-10 sm:px-10 sm:py-12" aria-labelledby="mission-title">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-light uppercase">Our mission</p>
              <h2 id="mission-title" className="mt-3 text-3xl text-white sm:text-4xl">Make each journey easier to understand and shape</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                    <Icon aria-hidden="true" className="size-5 text-brand-gold-light" />
                    <h3 className="mt-4 text-xl text-white">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-18" aria-labelledby="approach-title">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">How we plan</p>
            <h2 id="approach-title" className="mt-3 text-3xl font-semibold sm:text-4xl">A simple, collaborative approach</h2>
          </div>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Listen first", "Understand your dates, travellers, priorities, comfort level, and budget direction."],
              ["02", "Shape the route", "Suggest a practical sequence, suitable stays, transport, and optional experiences."],
              ["03", "Confirm the details", "Refine the proposal and confirm availability before treating anything as booked."],
            ].map(([number, title, description]) => (
              <li key={number} className="rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="text-sm font-bold text-brand-gold-dark">{number}</span>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-18" aria-labelledby="services-title">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">Travel support</p>
            <h2 id="services-title" className="mt-3 text-3xl font-semibold sm:text-4xl">Services that fit together</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-2xl border bg-white p-5 text-center shadow-[var(--shadow-card)]">
                  <span className="mx-auto grid size-11 place-items-center rounded-full bg-secondary text-primary"><Icon aria-hidden="true" className="size-5" /></span>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-18 grid gap-8 rounded-3xl border bg-white p-6 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-2" aria-labelledby="why-title">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">Why choose us</p>
            <h2 id="why-title" className="mt-3 text-3xl font-semibold">Useful guidance without unsupported promises</h2>
          </div>
          <ul className="space-y-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {["Starting prices are labelled clearly.", "Itineraries can adapt to the travellers and route conditions.", "Vehicle suggestions consider group size and journey type.", "Availability is checked before booking confirmation."].map((item) => (
              <li key={item} className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-gold-dark" /> {item}</li>
            ))}
          </ul>
        </section>
      </Container>
      <PageCta />
    </main>
  );
}
