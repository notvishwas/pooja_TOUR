"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const fieldClassName =
  "h-12 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20";

function ContactForm() {
  const [showDemoMessage, setShowDemoMessage] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowDemoMessage(true);
  }

  return (
    <form id="enquiry-form" onSubmit={handleSubmit} className="scroll-mt-28 rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] sm:p-7">
      <h2 className="text-2xl font-semibold">Send a trip enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        This form is a frontend preview and does not send or store information yet.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-primary">
          Name
          <input className={fieldClassName} name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary">
          Phone or email
          <input className={fieldClassName} name="contact" autoComplete="email" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary sm:col-span-2">
          Trip interest
          <input className={fieldClassName} name="trip" placeholder="Destination, package, or travel dates" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary sm:col-span-2">
          Message
          <textarea
            className={`${fieldClassName} min-h-32 resize-y py-3`}
            name="message"
            placeholder="Tell us about travellers, preferences, and any support you need."
            required
          />
        </label>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        <Send aria-hidden="true" /> Preview Enquiry
      </Button>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        Submitting an enquiry does not confirm a booking. Availability and pricing require confirmation.
      </p>
      {showDemoMessage ? (
        <p role="status" className="mt-4 rounded-lg bg-secondary p-3 text-sm font-semibold text-primary">
          Demo only: no information was submitted. Backend delivery will be connected in a later phase.
        </p>
      ) : null}
    </form>
  );
}

export { ContactForm };
