import type { Vehicle } from "@/types/vehicle";

/**
 * ====================================================================
 *  PER-KM RATES (₹ per km) — edit these numbers to change pricing.
 *  Every price shown on the site is calculated from these values.
 * ====================================================================
 */
export const PER_KM_RATES = {
  dzire: 11,
  ertiga: 14,
  innova: 18,
} as const satisfies Record<string, number>;

/** Range of the kilometre selector. */
export const KM_SELECTOR = {
  min: 10,
  max: 1500,
  step: 10,
  default: 300,
  quickPicks: [100, 250, 500, 1000],
} as const;

const wikimedia = "https://upload.wikimedia.org/wikipedia/commons/thumb";

export const vehicles: readonly Vehicle[] = [
  {
    id: "dzire",
    name: "Swift Dzire",
    type: "Sedan",
    seats: 4,
    bags: 2,
    ratePerKm: PER_KM_RATES.dzire,
    image: `${wikimedia}/0/0a/Maruti_Suzuki_Dzire_VXi_VVT_%28front%29.JPG/1280px-Maruti_Suzuki_Dzire_VXi_VVT_%28front%29.JPG`,
    bestFor: "Couples, small families and airport or city transfers",
    features: ["Air conditioned", "Comfortable for 3–4 guests", "Fuel efficient"],
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    type: "7-seater MPV",
    seats: 6,
    bags: 3,
    ratePerKm: PER_KM_RATES.ertiga,
    image: `${wikimedia}/2/23/2022_Maruti_Suzuki_Ertiga_LXi.jpg/1280px-2022_Maruti_Suzuki_Ertiga_LXi.jpg`,
    bestFor: "Family trips and small groups with extra luggage",
    features: ["Air conditioned", "Roomy 3-row seating", "Good luggage space"],
  },
  {
    id: "innova",
    name: "Toyota Innova Crysta",
    type: "Premium MPV",
    seats: 7,
    bags: 4,
    ratePerKm: PER_KM_RATES.innova,
    image: `${wikimedia}/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg/1280px-Toyota_Innova_Crysta_2.4_Z_front_right.jpg`,
    bestFor: "Long hill and highway journeys with maximum comfort",
    features: ["Air conditioned", "Plush captain-style comfort", "Ideal for long routes"],
  },
];
