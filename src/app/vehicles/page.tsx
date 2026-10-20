import type { Metadata } from "next";

import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { VehicleRental } from "@/components/vehicles/vehicle-rental";

export const metadata: Metadata = {
  title: "Vehicle Rental",
  description:
    "Rent a Swift Dzire, Ertiga or Innova Crysta. Pick your distance and see the estimated price instantly.",
  alternates: { canonical: "/vehicles" },
};

export default function VehiclesPage() {
  return (
    <main id="main-content" className="flex-1 py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Vehicle rental"
          title="Choose your ride, pick your distance"
          description="Slide to the kilometres you plan to travel and compare the estimated price for each vehicle."
        />
        <div className="mt-10">
          <VehicleRental />
        </div>
      </Container>
    </main>
  );
}
