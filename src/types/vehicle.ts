export type Vehicle = {
  id: string;
  name: string;
  type: string;
  /** Passenger seats available to guests. */
  seats: number;
  /** Approximate large bags that fit alongside passengers. */
  bags: number;
  /** Price in rupees per kilometre. */
  ratePerKm: number;
  image: string;
  bestFor: string;
  features: readonly string[];
};
