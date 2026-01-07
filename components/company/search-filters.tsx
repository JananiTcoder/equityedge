"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

interface SearchFiltersProps {
  sectors: string[];
  selectedSector: string | null;
  onSectorChange: (sector: string | null) => void;
}

export function SearchFilters({
  sectors,
  selectedSector,
  onSectorChange,
}: SearchFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSectorChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          selectedSector === null
            ? "bg-[var(--color-muted-teal)] text-white"
            : "bg-[var(--color-surface-subtle)] text-[var(--color-cool-gray)] hover:bg-[var(--color-surface-muted)]"
        )}
      >
        All Sectors
      </button>
      {sectors.map((sector) => (
        <button
          key={sector}
          onClick={() => onSectorChange(sector)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedSector === sector
              ? "bg-[var(--color-muted-teal)] text-white"
              : "bg-[var(--color-surface-subtle)] text-[var(--color-cool-gray)] hover:bg-[var(--color-surface-muted)]"
          )}
        >
          {sector}
        </button>
      ))}
    </div>
  );
}
