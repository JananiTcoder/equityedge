/**
 * Format number as Indian Rupees (₹)
 * Examples: 1500000 -> "₹15L", 10000000 -> "₹1Cr", 150000000000 -> "₹1.5L Cr"
 */
export function formatINR(value: number): string {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1e12) {
    return `${sign}₹${(absValue / 1e12).toFixed(1)}L Cr`;
  }
  if (absValue >= 1e9) {
    return `${sign}₹${(absValue / 1e9).toFixed(1)}K Cr`;
  }
  if (absValue >= 1e7) {
    return `${sign}₹${(absValue / 1e7).toFixed(1)} Cr`;
  }
  if (absValue >= 1e5) {
    return `${sign}₹${(absValue / 1e5).toFixed(1)}L`;
  }
  if (absValue >= 1e3) {
    return `${sign}₹${(absValue / 1e3).toFixed(1)}K`;
  }
  return `${sign}₹${absValue.toFixed(0)}`;
}

/**
 * Format number as percentage
 * Examples: 0.125 -> "12.5%", -0.05 -> "-5%"
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format large numbers compactly
 * Examples: 1500000 -> "1.5M", 2500000000 -> "2.5B"
 */
export function formatCompact(value: number): string {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1e9) {
    return `${sign}${(absValue / 1e9).toFixed(1)}B`;
  }
  if (absValue >= 1e6) {
    return `${sign}${(absValue / 1e6).toFixed(1)}M`;
  }
  if (absValue >= 1e3) {
    return `${sign}${(absValue / 1e3).toFixed(1)}K`;
  }
  return `${sign}${absValue.toFixed(0)}`;
}

/**
 * Format ratio value with appropriate decimals
 */
export function formatRatio(value: number): string {
  if (Math.abs(value) >= 100) {
    return value.toFixed(0);
  }
  if (Math.abs(value) >= 10) {
    return value.toFixed(1);
  }
  return value.toFixed(2);
}

/**
 * Format date as relative time
 * Examples: "2 days ago", "Just now"
 */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours === 0) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins < 5) return "Just now";
      return `${diffMins} minutes ago`;
    }
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  }
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
  return then.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
