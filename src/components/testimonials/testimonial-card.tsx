import { Quote, UserRound } from "lucide-react";

import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
          <Quote aria-hidden="true" className="size-5" />
        </span>
      </div>
      <blockquote className="mt-5 flex-1 text-base leading-7 text-foreground">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
        <span className="grid size-10 place-items-center rounded-full bg-muted text-primary">
          <UserRound aria-hidden="true" className="size-5" />
        </span>
        <span>
          <span className="block text-sm font-bold text-primary">{testimonial.displayName}</span>
          <span className="block text-xs text-muted-foreground">
            {testimonial.tripType} trip · {testimonial.destination}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export { TestimonialCard };
