export function formatDate(iso: string): string {
  // Dates are plain "YYYY-MM-DD" with no time component. `new Date(iso)`
  // parses that as UTC midnight, so formatting in a timezone behind UTC
  // (most of the US) would otherwise roll it back a day.
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
