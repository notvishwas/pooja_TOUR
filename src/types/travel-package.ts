export type PackageCategory =
  | "Beach Holiday"
  | "Classic India"
  | "Family Holiday"
  | "Heritage Tour"
  | "Hill Station"
  | "Nature Escape"
  | "Pilgrimage";

export type VehicleType =
  | "Sedan"
  | "SUV"
  | "Tempo Traveller"
  | "Mini Coach";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  stateOrRegion: string;
  duration: number;
  nights: number;
  startingPrice: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: readonly string[];
  category: PackageCategory;
  suitableFor: readonly string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  highlights: readonly string[];
  itinerary: readonly ItineraryDay[];
  inclusions: readonly string[];
  exclusions: readonly string[];
  availableVehicleTypes: readonly VehicleType[];
  importantNotes: readonly string[];
  maximumTravellers: number;
};
