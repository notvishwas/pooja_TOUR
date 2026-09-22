import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/layout/page-cta";
import { PageHeader } from "@/components/layout/page-header";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact POOJA TOUR & TRAVELLS to discuss destinations, dates, and travel requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactItems = [
    { label: "Phone", value: siteConfig.contact.phoneDisplay, href: siteConfig.contact.phoneHref, icon: Phone },
    { label: "Email", value: siteConfig.contact.email, href: siteConfig.contact.emailHref, icon: Mail },
    { label: "Office", value: siteConfig.contact.address, icon: MapPin },
  ] as const;

  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Contact and enquiries"
        title="Let’s talk about your travel plans"
        description="Share the destination, dates, traveller count, and travel style you have in mind."
        icon={<MessageCircle aria-hidden="true" className="size-6" />}
      />
      <Container className="py-12 sm:py-16">
        <section aria-labelledby="contact-details-title">
          <h2 id="contact-details-title" className="sr-only">Contact details</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><Icon aria-hidden="true" className="size-5" /></span>
                  <span className="mt-4 block text-xs font-bold tracking-wide text-muted-foreground uppercase">{item.label}</span>
                  <span className="mt-1 block break-words font-semibold text-primary">{item.value}</span>
                </>
              );
              return "href" in item ? (
                <a key={item.label} href={item.href} className="rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] transition-colors hover:border-brand-gold/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30">{content}</a>
              ) : (
                <div key={item.label} className="rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)]">{content}</div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start" aria-label="Enquiry and operating information">
          <ContactForm />
          <div className="space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3"><Clock3 aria-hidden="true" className="size-5 text-brand-gold-dark" /><h2 className="text-2xl font-semibold">Operating hours</h2></div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{siteConfig.hours.weekdays}<br />{siteConfig.hours.sunday}</p>
              <div className="mt-6 grid gap-3 xs:grid-cols-2">
                <a href={siteConfig.contact.phoneHref} className={cn(buttonVariants({ size: "lg" }), "w-full")}><Phone aria-hidden="true" /> Call</a>
                <a href={siteConfig.contact.whatsAppHref} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}><MessageCircle aria-hidden="true" /> WhatsApp</a>
              </div>
              {siteConfig.contact.isPlaceholder ? <p className="mt-3 text-xs text-muted-foreground">Phone, WhatsApp, email, address, and operating hours require owner confirmation.</p> : null}
            </div>
            <figure className="overflow-hidden rounded-2xl border bg-secondary shadow-[var(--shadow-card)]">
              <Image src="/images/map-placeholder.svg" alt="Illustration marking the office location" width={1200} height={700} sizes="(max-width: 1023px) calc(100vw - 2rem), 40vw" className="h-auto w-full" />
              <figcaption className="border-t bg-white px-5 py-3 text-xs text-muted-foreground">{siteConfig.contact.address}</figcaption>
            </figure>
          </div>
        </section>
      </Container>
      <PageCta eyebrow="Prefer to explore first?" title="Find a package worth discussing" />
    </main>
  );
}
