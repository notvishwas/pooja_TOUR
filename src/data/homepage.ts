import type { HomeIconName } from "@/components/home/home-icon";

export type DestinationPreview = {
  name: string;
  region: string;
  description: string;
  icon: HomeIconName;
  image: string;
  tone: "sky" | "pine" | "rose" | "sand" | "coast" | "spice";
};

export const destinationPreviews = [
  {
    name: "Manali",
    region: "Himachal Pradesh",
    description: "Mountain views, scenic drives, and relaxed family escapes.",
    icon: "mountain",
    image: "/images/packages/manali.png",
    tone: "sky",
  },
  {
    name: "Shimla",
    region: "Himachal Pradesh",
    description: "Heritage streets, pine-covered hills, and easy-paced holidays.",
    icon: "trees",
    image: "/images/packages/shimla.png",
    tone: "pine",
  },
  {
    name: "Kashmir",
    region: "Jammu & Kashmir",
    description: "Valleys, lakes, gardens, and thoughtfully planned local travel.",
    icon: "snowflake",
    image: "/images/packages/kashmir.png",
    tone: "rose",
  },
  {
    name: "Jaipur",
    region: "Rajasthan",
    description: "Forts, bazaars, architecture, and vibrant cultural experiences.",
    icon: "landmark",
    image: "/images/packages/rajasthan.png",
    tone: "sand",
  },
  {
    name: "Goa",
    region: "West Coast",
    description: "Beach time, local sightseeing, and flexible group getaways.",
    icon: "palmtree",
    image: "/images/packages/goa.png",
    tone: "coast",
  },
  {
    name: "Kerala",
    region: "South India",
    description: "Backwaters, green landscapes, and unhurried family journeys.",
    icon: "waves",
    image: "/images/packages/kerala.png",
    tone: "spice",
  },
] satisfies readonly DestinationPreview[];

export const servicePreviews = [
  {
    title: "Tour packages",
    description: "Well-paced itineraries for popular destinations and holiday styles.",
    icon: "map",
  },
  {
    title: "Customized trips",
    description: "Travel plans shaped around your dates, interests, and preferred pace.",
    icon: "route",
  },
  {
    title: "Hotel assistance",
    description: "Help shortlisting stays that suit your route, group, and budget range.",
    icon: "hotel",
  },
  {
    title: "Vehicle rental",
    description: "Suitable vehicles for local sightseeing, transfers, and longer tours.",
    icon: "car",
  },
  {
    title: "Family & group tours",
    description: "Practical coordination for families, friends, and small group journeys.",
    icon: "users",
  },
] as const;

export const trustReasons = [
  {
    title: "Transparent pricing",
    description: "Clear quotations with inclusions and exclusions explained before confirmation.",
    icon: "receipt",
  },
  {
    title: "Custom itineraries",
    description: "Routes can be adjusted around your schedule, group, and priorities.",
    icon: "notebook",
  },
  {
    title: "Reliable vehicles",
    description: "Vehicle options are matched to the route and number of travellers.",
    icon: "car",
  },
  {
    title: "Local expertise",
    description: "Practical destination guidance helps make each travel day smoother.",
    icon: "mapPin",
  },
  {
    title: "Responsive support",
    description: "A clear point of contact helps you coordinate before and during the trip.",
    icon: "headphones",
  },
] as const;

export const planningSteps = [
  {
    title: "Select a destination",
    description: "Choose a place you love or share the kind of holiday you want.",
  },
  {
    title: "Send an enquiry",
    description: "Tell us your dates, traveller count, and key preferences.",
  },
  {
    title: "Receive a custom quotation",
    description: "Review a tailored route with clear services and pricing details.",
  },
  {
    title: "Confirm the trip",
    description: "Finalize the plan and receive the information needed for travel.",
  },
] as const;

export const testimonialPreviews = [
  {
    quote:
      "The itinerary felt practical and left enough time to enjoy each stop without rushing.",
    attribution: "Ritu Malhotra",
    trip: "Himachal holiday",
  },
  {
    quote:
      "Communication was straightforward, and the route was adjusted around our travel dates.",
    attribution: "Neha Verma",
    trip: "Rajasthan journey",
  },
  {
    quote:
      "Having one place to discuss the hotel, vehicle, and sightseeing plan made preparation easier.",
    attribution: "Aditya & Simran Kapoor",
    trip: "Kerala getaway",
  },
] as const;

export const frequentlyAskedQuestions = [
  {
    question: "Can you customize an existing tour package?",
    answer:
      "Yes. Dates, hotel preferences, sightseeing priorities, and the overall pace can be discussed before a quotation is prepared.",
  },
  {
    question: "What information should I include in an enquiry?",
    answer:
      "Share your preferred destination, travel dates, number of travellers, departure city, and any important hotel or vehicle preferences.",
  },
  {
    question: "Are hotels and transport included in every package?",
    answer:
      "Inclusions depend on the quotation. Each proposal should clearly list accommodation, transport, sightseeing, meals, and exclusions before booking.",
  },
  {
    question: "Can you help with family and small group trips?",
    answer:
      "Yes. The route, vehicle size, room requirements, and daily schedule can be planned around families and small groups.",
  },
  {
    question: "When should I start planning my trip?",
    answer:
      "Planning earlier usually provides more flexibility, especially for peak seasons and long weekends. You can still enquire for closer dates to review available options.",
  },
  {
    question: "How will I receive the final price?",
    answer:
      "After your requirements are understood, a customized quotation can be shared with the services, inclusions, exclusions, and payment terms stated clearly.",
  },
] as const;
