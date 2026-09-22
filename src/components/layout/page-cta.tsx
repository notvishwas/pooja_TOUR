import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

function PageCta({
  eyebrow = "Let’s plan thoughtfully",
  title = "Ready to discuss your next trip?",
  description = "Share your dates, group size, and preferences. We’ll help shape a practical itinerary and quotation.",
  primaryHref = "/book-now",
  primaryLabel = "Plan My Trip",
}: PageCtaProps) {
  return (
    <section className="py-14 sm:py-16" aria-labelledby="page-cta-title">
      <Container>
        <div className="rounded-3xl bg-brand-navy-dark px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-sm font-bold tracking-[0.16em] text-brand-gold-light uppercase">{eyebrow}</p>
          <h2 id="page-cta-title" className="mt-3 text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">{description}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 xs:flex-row">
            <Link
              href={primaryHref}
              className={cn(buttonVariants({ size: "lg" }), "bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light")}
            >
              {primaryLabel} <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/packages"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/30 bg-transparent text-white hover:bg-white/10")}
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { PageCta };
