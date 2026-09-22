const indianRupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatIndianRupees(value: number) {
  return indianRupeeFormatter.format(value);
}

export function formatPackageDuration(duration: number, nights: number) {
  return `${duration} days / ${nights} nights`;
}
