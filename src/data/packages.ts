import type { TravelPackage } from "@/types/travel-package";

const sharedInclusions = [
  "Accommodation in selected hotel category",
  "Daily breakfast at the hotel",
  "Private vehicle for listed transfers and sightseeing",
  "Driver allowance, tolls, and parking for the planned route",
] as const;

const sharedExclusions = [
  "Travel to and from the package starting point",
  "Lunch, dinner, and personal expenses unless stated",
  "Entry tickets, activities, and local guide charges",
  "Costs caused by weather, road closures, or itinerary changes",
] as const;

const sharedImportantNotes = [
  "Displayed prices are starting prices and can change with travel dates, hotel category, group size, and route changes.",
  "Hotels, vehicles, activities, and the final itinerary remain subject to availability and confirmation.",
  "Submitting an enquiry starts a planning conversation and does not confirm a booking.",
] as const;

export const travelPackages = [
  {
    id: "pkg-manali-001",
    slug: "manali-getaway",
    title: "Manali Getaway",
    destination: "Manali",
    stateOrRegion: "Himachal Pradesh",
    duration: 5,
    nights: 4,
    startingPrice: 18900,
    originalPrice: 21500,
    shortDescription:
      "A balanced mountain break with Solang Valley, local sightseeing, and time to unwind.",
    fullDescription:
      "Designed for travellers who want a comfortable introduction to Manali, this itinerary combines scenic drives, popular local sights, and unhurried evenings. The route can be adjusted around weather, interests, and your preferred hotel category.",
    image: "/images/packages/manali.svg",
    gallery: ["/images/packages/manali.svg", "/images/travel-hero-placeholder.svg"],
    category: "Hill Station",
    suitableFor: ["Couples", "Families", "Friends"],
    rating: { value: 4.7, isMock: true },
    reviewCount: { value: 84, isMock: true },
    featured: true,
    highlights: [
      "Solang Valley excursion",
      "Manali local sightseeing",
      "Scenic mountain transfers",
      "Flexible leisure time",
    ],
    itinerary: [
      { day: 1, title: "Arrive in Manali", description: "Hotel transfer, check-in, and a relaxed evening around the local market." },
      { day: 2, title: "Solang Valley", description: "A scenic excursion with time for seasonal activities and mountain views." },
      { day: 3, title: "Local Manali", description: "Visit selected local landmarks, temples, and neighbourhood attractions." },
      { day: 4, title: "Day at leisure", description: "Keep the day flexible or add an optional nearby sightseeing route." },
      { day: 5, title: "Departure", description: "Check out and continue to your onward travel point." },
    ],
    inclusions: sharedInclusions,
    exclusions: sharedExclusions,
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller"],
    importantNotes: sharedImportantNotes,
    maximumTravellers: 12,
    isMockData: true,
  },
  {
    id: "pkg-shimla-002",
    slug: "shimla-family-tour",
    title: "Shimla Family Tour",
    destination: "Shimla",
    stateOrRegion: "Himachal Pradesh",
    duration: 4,
    nights: 3,
    startingPrice: 16400,
    shortDescription:
      "An easy-paced family holiday covering Shimla, Kufri, and comfortable local travel.",
    fullDescription:
      "This compact family itinerary keeps daily travel manageable while covering Shimla's best-known sights and a Kufri excursion. Hotel, room, and vehicle options can be tailored to your family size and preferred comfort level.",
    image: "/images/packages/shimla.svg",
    gallery: ["/images/packages/shimla.svg", "/images/travel-hero-placeholder.svg"],
    category: "Family Holiday",
    suitableFor: ["Families", "Senior travellers", "Small groups"],
    rating: { value: 4.6, isMock: true },
    reviewCount: { value: 61, isMock: true },
    featured: true,
    highlights: ["Kufri day trip", "Mall Road evening", "Family-friendly pacing", "Private local vehicle"],
    itinerary: [
      { day: 1, title: "Arrival and Mall Road", description: "Check in and spend an easy evening exploring central Shimla." },
      { day: 2, title: "Kufri excursion", description: "Visit Kufri and selected viewpoints with time for seasonal activities." },
      { day: 3, title: "Shimla sightseeing", description: "Cover heritage landmarks and local points of interest at a relaxed pace." },
      { day: 4, title: "Departure", description: "Hotel check-out and transfer to the onward travel point." },
    ],
    inclusions: sharedInclusions,
    exclusions: sharedExclusions,
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller"],
    importantNotes: sharedImportantNotes,
    maximumTravellers: 15,
    isMockData: true,
  },
  {
    id: "pkg-kashmir-003",
    slug: "kashmir-paradise-tour",
    title: "Kashmir Paradise Tour",
    destination: "Kashmir",
    stateOrRegion: "Jammu & Kashmir",
    duration: 7,
    nights: 6,
    startingPrice: 32900,
    originalPrice: 36500,
    shortDescription:
      "A scenic Kashmir circuit with Srinagar, Gulmarg, Pahalgam, and a houseboat experience.",
    fullDescription:
      "Explore Kashmir through a thoughtfully sequenced route that combines Srinagar with major valley excursions. The plan leaves room for local conditions and can be adapted for couples, families, or a more leisurely travel style.",
    image: "/images/packages/kashmir.svg",
    gallery: ["/images/packages/kashmir.svg", "/images/travel-hero-placeholder.svg"],
    category: "Nature Escape",
    suitableFor: ["Couples", "Families", "Nature lovers"],
    rating: { value: 4.8, isMock: true },
    reviewCount: { value: 112, isMock: true },
    featured: true,
    highlights: ["Srinagar houseboat stay", "Gulmarg excursion", "Pahalgam valley", "Mughal garden visits"],
    itinerary: [
      { day: 1, title: "Arrive in Srinagar", description: "Airport transfer, check-in, and time by Dal Lake." },
      { day: 2, title: "Srinagar sights", description: "Visit selected gardens, local landmarks, and lakeside areas." },
      { day: 3, title: "Gulmarg", description: "Full-day excursion to Gulmarg with optional seasonal activities." },
      { day: 4, title: "Travel to Pahalgam", description: "Scenic drive and relaxed evening in the valley." },
      { day: 5, title: "Pahalgam exploration", description: "Choose local valley sightseeing based on weather and access." },
      { day: 6, title: "Return to Srinagar", description: "Return journey and houseboat experience." },
      { day: 7, title: "Departure", description: "Airport transfer for your onward flight." },
    ],
    inclusions: sharedInclusions,
    exclusions: [...sharedExclusions, "Gondola tickets and union vehicle charges"],
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller"],
    importantNotes: [
      ...sharedImportantNotes,
      "Excursions and local transport may change with weather, road access, and local operating rules.",
    ],
    maximumTravellers: 12,
    isMockData: true,
  },
  {
    id: "pkg-rajasthan-004",
    slug: "rajasthan-heritage-circuit",
    title: "Rajasthan Heritage Circuit",
    destination: "Jaipur, Jodhpur & Udaipur",
    stateOrRegion: "Rajasthan",
    duration: 8,
    nights: 7,
    startingPrice: 34900,
    shortDescription:
      "A culture-rich circuit connecting forts, old cities, lakes, and Rajasthan's heritage character.",
    fullDescription:
      "Travel through three of Rajasthan's most distinctive cities with a route that balances major monuments and time in local neighbourhoods. The circuit can be shortened, extended, or paired with different hotel styles.",
    image: "/images/packages/rajasthan.svg",
    gallery: ["/images/packages/rajasthan.svg", "/images/travel-hero-placeholder.svg"],
    category: "Heritage Tour",
    suitableFor: ["Families", "Culture lovers", "Small groups"],
    rating: { value: 4.7, isMock: true },
    reviewCount: { value: 76, isMock: true },
    featured: true,
    highlights: ["Jaipur fort circuit", "Blue City exploration", "Udaipur lakefront", "Three-city private vehicle"],
    itinerary: [
      { day: 1, title: "Arrive in Jaipur", description: "Check in and enjoy a relaxed introduction to the Pink City." },
      { day: 2, title: "Jaipur forts", description: "Explore selected forts, palaces, and heritage landmarks." },
      { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur and spend the evening near the old city." },
      { day: 4, title: "Jodhpur sightseeing", description: "Visit the fort, memorial, and selected Blue City lanes." },
      { day: 5, title: "Jodhpur to Udaipur", description: "Travel to Udaipur with an optional heritage stop en route." },
      { day: 6, title: "Udaipur city tour", description: "Explore the palace area, lakeside sights, and gardens." },
      { day: 7, title: "Leisure in Udaipur", description: "Keep time for shopping, local experiences, or optional excursions." },
      { day: 8, title: "Departure", description: "Transfer to the railway station or airport." },
    ],
    inclusions: sharedInclusions,
    exclusions: sharedExclusions,
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller", "Mini Coach"],
    importantNotes: sharedImportantNotes,
    maximumTravellers: 24,
    isMockData: true,
  },
  {
    id: "pkg-goa-005",
    slug: "goa-beach-escape",
    title: "Goa Beach Escape",
    destination: "Goa",
    stateOrRegion: "Goa",
    duration: 5,
    nights: 4,
    startingPrice: 21900,
    originalPrice: 24500,
    shortDescription:
      "A flexible coastal break with beach time, heritage neighbourhoods, and local sightseeing.",
    fullDescription:
      "Enjoy Goa at an easy pace with enough unplanned time for the beach and a guided structure for key sightseeing. Stay location and daily travel can be adapted around North Goa, South Goa, or a split experience.",
    image: "/images/packages/goa.svg",
    gallery: ["/images/packages/goa.svg", "/images/travel-hero-placeholder.svg"],
    category: "Beach Holiday",
    suitableFor: ["Couples", "Friends", "Families"],
    rating: { value: 4.5, isMock: true },
    reviewCount: { value: 97, isMock: true },
    featured: true,
    highlights: ["North Goa sightseeing", "South Goa heritage", "Two leisure days", "Airport transfers"],
    itinerary: [
      { day: 1, title: "Arrive in Goa", description: "Airport or station transfer and time to settle into your stay." },
      { day: 2, title: "North Goa", description: "Visit selected beaches, viewpoints, and local attractions." },
      { day: 3, title: "Leisure day", description: "Enjoy the beach or choose an optional activity independently." },
      { day: 4, title: "South Goa", description: "Explore heritage sites, neighbourhoods, and quieter coastal areas." },
      { day: 5, title: "Departure", description: "Transfer to the airport or railway station." },
    ],
    inclusions: sharedInclusions,
    exclusions: sharedExclusions,
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller"],
    importantNotes: sharedImportantNotes,
    maximumTravellers: 15,
    isMockData: true,
  },
  {
    id: "pkg-kerala-006",
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    destination: "Munnar, Thekkady & Alleppey",
    stateOrRegion: "Kerala",
    duration: 6,
    nights: 5,
    startingPrice: 28900,
    shortDescription:
      "Green hill country, wildlife landscapes, and a memorable Alleppey backwater stay.",
    fullDescription:
      "This Kerala route connects three contrasting landscapes without making the schedule feel crowded. It can be tailored with a resort or houseboat preference, additional nights, and family-friendly room options.",
    image: "/images/packages/kerala.svg",
    gallery: ["/images/packages/kerala.svg", "/images/travel-hero-placeholder.svg"],
    category: "Nature Escape",
    suitableFor: ["Couples", "Families", "Nature lovers"],
    rating: { value: 4.8, isMock: true },
    reviewCount: { value: 105, isMock: true },
    featured: true,
    highlights: ["Munnar tea country", "Thekkady landscapes", "Alleppey backwaters", "Private intercity vehicle"],
    itinerary: [
      { day: 1, title: "Kochi to Munnar", description: "Scenic drive into the hills with stops based on time and conditions." },
      { day: 2, title: "Munnar sightseeing", description: "Explore tea country, viewpoints, and selected local attractions." },
      { day: 3, title: "Munnar to Thekkady", description: "Drive through green landscapes and settle into Thekkady." },
      { day: 4, title: "Thekkady to Alleppey", description: "Continue to the backwaters for a distinctive overnight experience." },
      { day: 5, title: "Alleppey to Kochi", description: "Travel to Kochi and explore selected city sights if time permits." },
      { day: 6, title: "Departure", description: "Transfer to Kochi airport or railway station." },
    ],
    inclusions: sharedInclusions,
    exclusions: [...sharedExclusions, "Wildlife activities and premium houseboat upgrades"],
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller"],
    importantNotes: sharedImportantNotes,
    maximumTravellers: 12,
    isMockData: true,
  },
  {
    id: "pkg-chardham-007",
    slug: "char-dham-yatra",
    title: "Char Dham Yatra",
    destination: "Yamunotri, Gangotri, Kedarnath & Badrinath",
    stateOrRegion: "Uttarakhand",
    duration: 12,
    nights: 11,
    startingPrice: 46900,
    shortDescription:
      "A structured pilgrimage route with practical travel pacing across Uttarakhand's four dhams.",
    fullDescription:
      "This road-based pilgrimage plan is arranged with realistic travel times, acclimatization needs, and early starts in mind. Final routing remains subject to seasonal access, official guidance, and local weather conditions.",
    image: "/images/packages/chardham.svg",
    gallery: ["/images/packages/chardham.svg", "/images/travel-hero-placeholder.svg"],
    category: "Pilgrimage",
    suitableFor: ["Families", "Pilgrims", "Small groups"],
    rating: { value: 4.6, isMock: true },
    reviewCount: { value: 43, isMock: true },
    featured: false,
    highlights: ["All four dhams", "Route-paced overnight stops", "Suitable group vehicles", "Driver-led road journey"],
    itinerary: [
      { day: 1, title: "Haridwar arrival", description: "Meet the vehicle, review the route, and rest before departure." },
      { day: 2, title: "Travel toward Barkot", description: "Begin the hill journey with planned comfort stops." },
      { day: 3, title: "Yamunotri visit", description: "Complete the pilgrimage visit and return to the overnight base." },
      { day: 4, title: "Continue to Uttarkashi", description: "Travel to the Gangotri sector and settle in." },
      { day: 5, title: "Gangotri visit", description: "Temple visit with road timing based on local conditions." },
      { day: 6, title: "Travel toward Guptkashi", description: "Long transfer day with scheduled breaks." },
      { day: 7, title: "Kedarnath route", description: "Proceed according to confirmed trek or helicopter arrangements." },
      { day: 8, title: "Return from Kedarnath", description: "Return to the road base and rest." },
      { day: 9, title: "Travel toward Badrinath", description: "Continue across the Garhwal route." },
      { day: 10, title: "Badrinath visit", description: "Temple visit and selected nearby sights if conditions allow." },
      { day: 11, title: "Return toward Rishikesh", description: "Begin the return road journey with an overnight stop." },
      { day: 12, title: "Tour completion", description: "Arrive in Haridwar or Rishikesh for onward travel." },
    ],
    inclusions: sharedInclusions,
    exclusions: [...sharedExclusions, "Helicopter, pony, palki, and porter services", "Medical tests and official registrations"],
    availableVehicleTypes: ["SUV", "Tempo Traveller", "Mini Coach"],
    importantNotes: [
      ...sharedImportantNotes,
      "The pilgrimage route is seasonal and depends on official opening dates, registrations, health guidance, weather, and road access.",
    ],
    maximumTravellers: 24,
    isMockData: true,
  },
  {
    id: "pkg-golden-008",
    slug: "golden-triangle-tour",
    title: "Golden Triangle Tour",
    destination: "Delhi, Agra & Jaipur",
    stateOrRegion: "North India",
    duration: 6,
    nights: 5,
    startingPrice: 25900,
    originalPrice: 28400,
    shortDescription:
      "A classic first-time India circuit connecting Delhi, Agra, and Jaipur by private vehicle.",
    fullDescription:
      "Cover three landmark-rich cities through a compact route suitable for families, international visitors, and travellers short on time. Sightseeing depth and hotel category can be tailored before confirmation.",
    image: "/images/packages/golden-triangle.svg",
    gallery: ["/images/packages/golden-triangle.svg", "/images/travel-hero-placeholder.svg"],
    category: "Classic India",
    suitableFor: ["First-time visitors", "Families", "Culture lovers"],
    rating: { value: 4.7, isMock: true },
    reviewCount: { value: 89, isMock: true },
    featured: false,
    highlights: ["Old and New Delhi", "Taj Mahal visit", "Jaipur forts", "Private three-city route"],
    itinerary: [
      { day: 1, title: "Arrive in Delhi", description: "Meet your vehicle, transfer to the hotel, and rest." },
      { day: 2, title: "Delhi sightseeing", description: "Explore selected heritage and modern city landmarks." },
      { day: 3, title: "Delhi to Agra", description: "Drive to Agra and visit key Mughal-era sights." },
      { day: 4, title: "Agra to Jaipur", description: "Morning Taj Mahal visit followed by the drive to Jaipur." },
      { day: 5, title: "Jaipur sightseeing", description: "Visit selected forts, palaces, and city landmarks." },
      { day: 6, title: "Return to Delhi", description: "Drive back to Delhi for onward travel." },
    ],
    inclusions: sharedInclusions,
    exclusions: sharedExclusions,
    availableVehicleTypes: ["Sedan", "SUV", "Tempo Traveller", "Mini Coach"],
    importantNotes: sharedImportantNotes,
    maximumTravellers: 24,
    isMockData: true,
  },
] satisfies readonly TravelPackage[];

export const featuredTravelPackages = travelPackages.filter(
  (travelPackage) => travelPackage.featured,
);

export function getTravelPackageBySlug(slug: string) {
  return travelPackages.find((travelPackage) => travelPackage.slug === slug);
}

export function getRelatedTravelPackages(
  currentPackage: TravelPackage,
  limit = 3,
) {
  return travelPackages
    .filter((travelPackage) => travelPackage.id !== currentPackage.id)
    .sort((firstPackage, secondPackage) => {
      const firstScore =
        Number(firstPackage.category === currentPackage.category) +
        Number(firstPackage.stateOrRegion === currentPackage.stateOrRegion);
      const secondScore =
        Number(secondPackage.category === currentPackage.category) +
        Number(secondPackage.stateOrRegion === currentPackage.stateOrRegion);

      return secondScore - firstScore;
    })
    .slice(0, limit);
}
