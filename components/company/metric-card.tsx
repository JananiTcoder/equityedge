"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { MetricData } from "@/types";
import { formatPercent } from "@/lib/format";
import { cn } from "@/lib/cn";

interface MetricCardProps {
  label: string;
  data: MetricData;
  tooltip?: string;
}

export function MetricCard({ label, data, tooltip }: MetricCardProps) {
  const TrendIcon =
    data.trend === "up"
      ? TrendingUp
      : data.trend === "down"
      ? TrendingDown
      : Minus;

  const trendColor =
    data.trend === "up"
      ? "text-[var(--color-success)]"
      : data.trend === "down"
      ? "text-[var(--color-error)]"
      : "text-[var(--color-cool-gray)]";

  const content = (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)]">
            {label}
          </p>
          <p className="mt-1 text-2xl font-bold text-[var(--color-deep-navy)]">
            {data.formatted}
          </p>
        </div>
        <div className={cn("flex items-center gap-1", trendColor)}>
          <TrendIcon className="h-4 w-4" />
          <span className="text-sm font-medium">
            {formatPercent(Math.abs(data.changePercent))}
          </span>
        </div>
      </div>

      {/* Mini trend indicator */}
      <div className="mt-3 flex items-end gap-0.5 h-8">
        {data.history.slice(-5).map((point, i) => {
          const max = Math.max(...data.history.slice(-5).map((p) => p.value));
          const min = Math.min(...data.history.slice(-5).map((p) => p.value));
          const range = max - min || 1;
          const height = ((point.value - min) / range) * 100;

          return (
            <div
              key={i}
              className="flex-1 bg-[var(--color-soft-teal)] rounded-t transition-all"
              style={{ height: `${Math.max(height, 10)}%` }}
            />
          );
        })}
      </div>
    </Card>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} side="top">
        {content}
      </Tooltip>
    );
  }

  return content;
}
