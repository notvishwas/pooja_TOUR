export type TripType = "Family" | "Group" | "Honeymoon" | "Pilgrimage";

export type Testimonial = {
  id: string;
  displayName: string;
  tripType: TripType;
  destination: string;
  quote: string;
};
