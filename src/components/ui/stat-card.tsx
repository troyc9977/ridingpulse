import * as React from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type StatTrend = {
  text: string;
  sentiment: "positive" | "negative" | "neutral";
};

export type StatCardProps = React.ComponentProps<typeof Card> & {
  label: string;
  value: React.ReactNode;
  trend?: StatTrend;
};

function TrendIcon({ sentiment }: { sentiment: StatTrend["sentiment"] }) {
  if (sentiment === "positive") {
    return <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />;
  }
  if (sentiment === "negative") {
    return <ArrowDownRight className="size-3.5 shrink-0" aria-hidden />;
  }
  return <Minus className="size-3.5 shrink-0" aria-hidden />;
}

export function StatCard({
  label,
  value,
  trend,
  className,
  ...props
}: StatCardProps) {
  const trendColor =
    trend?.sentiment === "positive"
      ? "text-teal-500"
      : trend?.sentiment === "negative"
        ? "text-amber-500"
        : "text-muted-foreground";

  return (
    <Card
      data-slot="stat-card"
      className={cn("gap-0 py-5 shadow-sm", className)}
      {...props}
    >
      <CardContent className="flex flex-col gap-3 px-5">
        <div
          className="font-mono text-3xl leading-none font-semibold tracking-tight tabular-nums text-foreground sm:text-4xl"
          data-slot="stat-card-value"
        >
          {value}
        </div>
        <div className="text-muted-foreground text-sm leading-snug">
          {label}
        </div>
        {trend ? (
          <div
            className={cn(
              "font-mono flex items-center gap-1.5 text-xs font-medium tabular-nums",
              trendColor
            )}
            data-slot="stat-card-trend"
          >
            <TrendIcon sentiment={trend.sentiment} />
            <span>{trend.text}</span>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
