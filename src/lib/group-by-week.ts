/** Group items with a `createdAt` field into ISO weeks (Monday–Sunday). Returns newest week first. */
export function groupByWeek<T extends { createdAt: Date }>(
  items: T[],
): { weekStart: Date; weekEnd: Date; label: string; items: T[] }[] {
  const weeks = new Map<string, T[]>();

  for (const item of items) {
    const d = new Date(item.createdAt);
    // Find Monday of this week
    const day = d.getDay(); // 0=Sun
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(d);
    monday.setDate(d.getDate() + diff);
    const key = monday.toISOString().slice(0, 10);
    const group = weeks.get(key);
    if (group) {
      group.push(item);
    } else {
      weeks.set(key, [item]);
    }
  }

  return Array.from(weeks.entries())
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, items]) => {
      const weekStart = new Date(key);
      const weekEnd = new Date(key);
      weekEnd.setDate(weekEnd.getDate() + 6);
      const label = `${weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${weekEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
      return { weekStart, weekEnd, label, items };
    });
}
