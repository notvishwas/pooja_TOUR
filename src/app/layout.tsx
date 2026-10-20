import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "POOJA TOUR & TRAVELLS AGENCY",
    template: "%s | POOJA TOUR & TRAVELLS AGENCY",
  },
  description:
    "Thoughtfully planned tours and dependable travel services from POOJA TOUR & TRAVELLS AGENCY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
