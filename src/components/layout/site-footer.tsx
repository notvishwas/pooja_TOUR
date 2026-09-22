import Link from "next/link";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import {
  policyNavigation,
  popularDestinations,
  primaryNavigation,
  siteConfig,
  socialPlatforms,
} from "@/config/site";
import { cn } from "@/lib/utils";

function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <Container>
        <section
          aria-labelledby="footer-cta-title"
          className="flex flex-col gap-5 border-b border-white/15 py-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-gold-light uppercase">
              Your next journey starts here
            </p>
            <h2 id="footer-cta-title" className="mt-2 text-2xl text-white sm:text-3xl">
              Ready to plan a memorable trip?
            </h2>
          </div>
          <Link
            href="/book-now"
            className={cn(
              buttonVariants({ size: "lg" }),
              "self-start bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light md:self-auto",
            )}
          >
            Book Now
          </Link>
        </section>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-2" aria-label="Social media">
              {socialPlatforms.map((platform) => {
                return (
                  <span
                    key={platform}
                    title={`${platform} profile coming soon`}
                    aria-label={`${platform} profile coming soon`}
                    className="grid size-10 place-items-center rounded-full border border-white/20 text-white/70"
                  >
                    <Share2 aria-hidden="true" className="size-4" />
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Quick links</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-brand-gold-light" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Popular destinations</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {popularDestinations.map((destination) => (
                <li key={destination}>
                  <Link className="hover:text-brand-gold-light" href="/packages">
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Contact</h2>
            <address className="mt-4 space-y-3 text-sm leading-6 text-white/70 not-italic">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-start gap-3 hover:text-brand-gold-light"
              >
                <Phone aria-hidden="true" className="mt-1 size-4 shrink-0" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="flex items-start gap-3 break-all hover:text-brand-gold-light"
              >
                <Mail aria-hidden="true" className="mt-1 size-4 shrink-0" />
                {siteConfig.contact.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
                {siteConfig.contact.address}
              </p>
            </address>
            <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/70">
              <Clock3 aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <p>
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.sunday}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {policyNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
