export const ANNUAL_DISCOUNT = 0.2;

export function getDisplayPrice(monthlyPrice: number, annual: boolean): number {
  if (monthlyPrice === 0 || !annual) return monthlyPrice;
  return Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT));
}

export function getPerCompetitorPrice(
  monthlyPrice: number,
  competitors: number | null,
  annual: boolean
): string | null {
  if (!competitors || monthlyPrice === 0) return null;
  const effectiveMonthly = annual
    ? monthlyPrice * (1 - ANNUAL_DISCOUNT)
    : monthlyPrice;
  return (effectiveMonthly / competitors).toFixed(2);
}
