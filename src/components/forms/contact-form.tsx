"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const fieldClassName =
  "h-12 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20";

function ContactForm() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const contact = String(formData.get("contact") ?? "");
    const trip = String(formData.get("trip") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Trip enquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Phone or email: ${contact}`,
      trip ? `Trip interest: ${trip}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailtoUrl = `${siteConfig.contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setShowConfirmation(true);
  }

  return (
    <form id="enquiry-form" onSubmit={handleSubmit} className="scroll-mt-28 rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] sm:p-7">
      <h2 className="text-2xl font-semibold">Send a trip enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Share a few details and your email app will open with your enquiry ready to send to us.
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
        <Send aria-hidden="true" /> Send Enquiry
      </Button>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        Submitting an enquiry does not confirm a booking. Availability and pricing require confirmation.
      </p>
      {showConfirmation ? (
        <p role="status" className="mt-4 rounded-lg bg-secondary p-3 text-sm font-semibold text-primary">
          Your email app should now open with the enquiry ready to send to {siteConfig.contact.email}.
        </p>
      ) : null}
    </form>
  );
}

export { ContactForm };
