import type { Testimonial } from "@/types/testimonial";

export const testimonials = [
  {
    id: "family-manali",
    displayName: "Ritu Malhotra",
    tripType: "Family",
    destination: "Manali",
    quote:
      "The itinerary balanced sightseeing with enough rest time for the kids and my parents. Vehicle and hotel choices were explained clearly before we confirmed anything.",
  },
  {
    id: "honeymoon-kashmir",
    displayName: "Aditya & Simran Kapoor",
    tripType: "Honeymoon",
    destination: "Kashmir",
    quote:
      "The route felt personal rather than rushed, with flexible time around Srinagar and Pahalgam. The quotation made the optional experiences easy to understand.",
  },
  {
    id: "pilgrimage-chardham",
    displayName: "Ram Prakash Sharma",
    tripType: "Pilgrimage",
    destination: "Char Dham",
    quote:
      "The planning paid attention to road travel, early starts, and practical overnight stops. Seasonal conditions and confirmation requirements were communicated well in advance.",
  },
  {
    id: "group-rajasthan",
    displayName: "Neha Verma",
    tripType: "Group",
    destination: "Rajasthan",
    quote:
      "Our group plan kept transport, room preferences, and city-to-city timing organized. There was also room to adjust sightseeing around what the group actually wanted to see.",
  },
] satisfies readonly Testimonial[];
