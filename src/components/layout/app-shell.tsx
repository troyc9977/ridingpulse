"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  PanelLeft,
  PanelRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { cn } from "@/lib/utils";

const RAIL_WIDTH = "w-56";
const RAIL_COLLAPSED = "w-14";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [leftOpen, setLeftOpen] = React.useState(true);
  const [rightOpen, setRightOpen] = React.useState(true);

  return (
    <div className="flex h-svh w-full overflow-hidden bg-background text-foreground">
      <aside
        className={cn(
          "border-border bg-card/40 flex shrink-0 flex-col border-r transition-[width] duration-200 ease-out",
          leftOpen ? RAIL_WIDTH : RAIL_COLLAPSED
        )}
      >
        <div className="flex h-14 items-center justify-between gap-1 border-b px-2">
          {leftOpen ? (
            <span className="text-muted-foreground flex items-center gap-2 truncate px-2 text-xs font-medium tracking-wide uppercase">
              <LayoutDashboard className="size-4 shrink-0 text-primary" />
              <span className="truncate">Navigation</span>
            </span>
          ) : (
            <LayoutDashboard className="text-primary mx-auto size-5" />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-1 p-2">
          {leftOpen && (
            <p className="text-muted-foreground px-2 text-sm leading-relaxed">
              Collapse this rail to focus on the main canvas.
            </p>
          )}
        </div>
        <div className="mt-auto border-t p-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="w-full"
            onClick={() => setLeftOpen((o) => !o)}
            aria-expanded={leftOpen}
            aria-label={leftOpen ? "Collapse left rail" : "Expand left rail"}
          >
            {leftOpen ? (
              <ChevronLeft className="size-4" />
            ) : (
              <PanelLeft className="size-4" />
            )}
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-border bg-background/80 flex h-14 shrink-0 items-center gap-3 border-b px-4 backdrop-blur-sm">
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-semibold tracking-tight">
              RidingPulse
            </h1>
            <p className="text-muted-foreground truncate text-xs">
              App shell · three-column layout
            </p>
          </div>
          <Separator orientation="vertical" className="hidden h-6 sm:block" />
          <ModeToggle />
        </header>
        <main className="min-h-0 flex-1 overflow-auto">{children}</main>
      </div>

      <aside
        className={cn(
          "border-border bg-card/40 flex shrink-0 flex-col border-l transition-[width] duration-200 ease-out",
          rightOpen ? RAIL_WIDTH : RAIL_COLLAPSED
        )}
      >
        <div className="flex h-14 items-center justify-between gap-1 border-b px-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setRightOpen((o) => !o)}
            aria-expanded={rightOpen}
            aria-label={rightOpen ? "Collapse right rail" : "Expand right rail"}
          >
            {rightOpen ? (
              <ChevronRight className="size-4" />
            ) : (
              <PanelRight className="size-4" />
            )}
          </Button>
          {rightOpen && (
            <span className="text-muted-foreground truncate pr-2 text-xs font-medium tracking-wide uppercase">
              Details
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-2">
          {rightOpen && (
            <p className="text-muted-foreground px-2 text-sm leading-relaxed">
              Context, metadata, or tools can live in this rail.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
