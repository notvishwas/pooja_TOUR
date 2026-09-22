export const siteConfig = {
  name: "POOJA TOUR & TRAVELLS",
  shortName: "POOJA TOUR",
  description:
    "Thoughtful tour planning and dependable travel support for memorable journeys across India and beyond.",
  owner: {
    name: "Dr. Abhishek Kumar",
  },
  contact: {
    isPlaceholder: false,
    phoneDisplay: "+91 79821 60912",
    phoneHref: "tel:+917982160912",
    whatsAppDisplay: "+91 79821 60912",
    whatsAppHref: "https://wa.me/917982160912",
    email: "poojatravelss.delhi95@gmail.com",
    emailHref: "mailto:poojatravelss.delhi95@gmail.com",
    address: "A-579, Shahbad Dairy, Delhi-110042",
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
