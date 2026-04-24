import * as React from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type BreadcrumbSegment = {
  /** Two-letter (or short) prefix shown in mono */
  code: string;
  /** Human-readable title */
  label: string;
};

export type BreadcrumbProps = React.ComponentProps<"nav"> & {
  segments: BreadcrumbSegment[];
  /** Index of the active (teal-highlighted) segment */
  activeIndex: number;
};

export function Breadcrumb({
  segments,
  activeIndex,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      data-slot="breadcrumb"
      aria-label="Breadcrumb"
      className={cn("flex flex-wrap items-center gap-1", className)}
      {...props}
    >
      {segments.map((segment, index) => {
        const isActive = index === activeIndex;
        const isLast = index === segments.length - 1;

        return (
          <React.Fragment key={`${segment.code}-${segment.label}`}>
            <div
              className={cn(
                "border-border inline-flex items-center gap-2 rounded-full border bg-card/60 px-2.5 py-1 text-sm shadow-xs backdrop-blur-sm",
                isActive &&
                  "border-teal-500/45 bg-teal-500/10 text-foreground ring-1 ring-teal-500/35"
              )}
            >
              <span className="font-mono text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                {segment.code}
              </span>
              <span
                className={cn(
                  "text-[13px] font-medium",
                  isActive ? "text-teal-600 dark:text-teal-300" : "text-foreground"
                )}
              >
                {segment.label}
              </span>
            </div>
            {!isLast ? (
              <ChevronRight
                className="text-muted-foreground size-4 shrink-0 opacity-70"
                aria-hidden
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
