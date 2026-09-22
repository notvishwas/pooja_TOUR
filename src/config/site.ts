export const siteConfig = {
  name: "POOJA TOUR & TRAVELLS",
  shortName: "POOJA TOUR",
  description:
    "Thoughtful tour planning and dependable travel support for memorable journeys across India and beyond.",
  contact: {
    isPlaceholder: true,
    phoneDisplay: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    whatsAppDisplay: "+91 00000 00000",
    whatsAppHref: "https://wa.me/910000000000",
    email: "your-email@example.com",
    emailHref: "mailto:your-email@example.com",
    address: "Office address to be confirmed",
  },
  hours: {
    weekdays: "Monday–Saturday: 9:00 AM–7:00 PM",
    sunday: "Sunday: By appointment",
  },
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const popularDestinations = [
  "Goa",
  "Himachal Pradesh",
  "Kerala",
  "Rajasthan",
  "Uttarakhand",
] as const;

export const policyNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
] as const;

export const socialPlatforms = ["Facebook", "Instagram", "YouTube"] as const;
