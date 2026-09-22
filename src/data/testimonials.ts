import type { Testimonial } from "@/types/testimonial";

export const testimonials = [
  {
    id: "mock-family-manali",
    displayName: "Sample family traveller",
    tripType: "Family",
    destination: "Manali",
    quote:
      "The sample itinerary balanced sightseeing with enough rest time for children and older family members. Vehicle and hotel choices were explained clearly before confirmation.",
    isMockContent: true,
  },
  {
    id: "mock-honeymoon-kashmir",
    displayName: "Sample honeymoon traveller",
    tripType: "Honeymoon",
    destination: "Kashmir",
    quote:
      "The proposed route felt personal rather than rushed, with flexible time around Srinagar and Pahalgam. The quotation made optional experiences easy to understand.",
    isMockContent: true,
  },
  {
    id: "mock-pilgrimage-chardham",
    displayName: "Sample pilgrimage traveller",
    tripType: "Pilgrimage",
    destination: "Char Dham",
    quote:
      "The planning example paid attention to road travel, early starts, and practical overnight stops. Seasonal conditions and confirmation requirements were communicated upfront.",
    isMockContent: true,
  },
  {
    id: "mock-group-rajasthan",
    displayName: "Sample group organiser",
    tripType: "Group",
    destination: "Rajasthan",
    quote:
      "The sample group plan kept transport, room preferences, and city-to-city timing organized. It also left room to adjust sightseeing around the group’s interests.",
    isMockContent: true,
  },
] satisfies readonly Testimonial[];
