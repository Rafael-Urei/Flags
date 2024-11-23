export function getFlatCountryInfo(value: Record<string, string>) {
  return Object.values(value)
    .map((value) => value)
    .join(', ');
}
