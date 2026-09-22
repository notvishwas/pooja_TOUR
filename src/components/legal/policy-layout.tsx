import { AlertTriangle, Scale } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/layout/page-cta";
import { PageHeader } from "@/components/layout/page-header";

export type PolicySection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly PolicySection[];
  ownerReviewItems: readonly string[];
};

function PolicyLayout({ eyebrow, title, description, sections, ownerReviewItems }: PolicyLayoutProps) {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader eyebrow={eyebrow} title={title} description={description} icon={<Scale aria-hidden="true" className="size-6" />} />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-brand-gold/35 bg-brand-gold-light/10 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-gold-dark" />
              <div>
                <h2 className="text-lg font-semibold">Pre-launch review required</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  This is practical placeholder copy, not finalized legal advice. The agency owner and a qualified adviser should review it before publication.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title} aria-labelledby={section.title.toLowerCase().replaceAll(" ", "-")}>
                <h2 id={section.title.toLowerCase().replaceAll(" ", "-")} className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-gold-dark" /> {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="owner-review-title">
            <h2 id="owner-review-title" className="text-2xl font-semibold">Agency owner must confirm</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {ownerReviewItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" /> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
      <PageCta eyebrow="Need clarification?" title="Talk through a trip before booking" primaryHref="/contact" primaryLabel="Contact Us" />
    </main>
  );
}

export { PolicyLayout };
