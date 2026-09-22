import type { Metadata } from "next";
import { MessageSquareQuote } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/layout/page-cta";
import { PageHeader } from "@/components/layout/page-header";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read traveller stories across family, honeymoon, pilgrimage, and group trips.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Traveller story previews"
        title="Thoughtful trips, told in travellers’ words"
        description="Real experiences from travellers who planned their family, honeymoon, pilgrimage, and group trips with us."
        icon={<MessageSquareQuote aria-hidden="true" className="size-6" />}
      />
      <Container className="py-12 sm:py-16">
        <section aria-labelledby="testimonial-grid-title" className="mt-8">
          <h2 id="testimonial-grid-title" className="sr-only">Traveller testimonials</h2>
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      </Container>
      <PageCta title="Ready to create your own travel plan?" />
    </main>
  );
}
