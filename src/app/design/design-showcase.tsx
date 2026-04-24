"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StatCard } from "@/components/ui/stat-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import { cn } from "@/lib/utils";

function ShowcaseItem({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex min-h-10 items-center">{children}</div>
      <span className="font-mono text-[11px] leading-snug text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 space-y-6">
      <h2 className="border-border text-foreground border-b pb-2 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function DesignShowcase() {
  return (
    <div className="bg-background text-foreground">
      <header className="border-border bg-card/20 border-b">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              RidingPulse Design System
            </h1>
            <p className="text-muted-foreground mt-2 max-w-prose text-sm leading-relaxed">
              Internal reference for primitives, patterns, and RidingPulse-specific
              components. Dark mode is the default app theme; this page inherits it.
            </p>
          </div>
          <p className="font-mono text-muted-foreground text-xs tracking-wide whitespace-nowrap">
            v0.1 — April 2026
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-12">
        <Section id="primitives" title="Primitives">
          <div className="space-y-8">
            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Button
              </h3>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                <ShowcaseItem label="variant: default">
                  <Button type="button">Default</Button>
                </ShowcaseItem>
                <ShowcaseItem label="hover (simulated)">
                  <Button type="button" className="bg-primary/90">
                    Default hover
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="disabled">
                  <Button type="button" disabled>
                    Disabled
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="variant: destructive">
                  <Button type="button" variant="destructive">
                    Destructive
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="destructive · hover (simulated)">
                  <Button
                    type="button"
                    variant="destructive"
                    className="bg-destructive/90"
                  >
                    Destructive hover
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="destructive · disabled">
                  <Button type="button" variant="destructive" disabled>
                    Destructive off
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="variant: ghost">
                  <Button type="button" variant="ghost">
                    Ghost
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="ghost · hover (simulated)">
                  <Button type="button" variant="ghost" className="bg-accent/60">
                    Ghost hover
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="variant: outline">
                  <Button type="button" variant="outline">
                    Outline
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="outline · hover (simulated)">
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-accent text-accent-foreground"
                  >
                    Outline hover
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="variant: secondary">
                  <Button type="button" variant="secondary">
                    Secondary
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="secondary · hover (simulated)">
                  <Button type="button" variant="secondary" className="bg-secondary/80">
                    Secondary hover
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="variant: link">
                  <Button type="button" variant="link">
                    Link style
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="variant: primary-accent (teal-500)">
                  <Button type="button" variant="primary-accent">
                    Primary accent
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="primary-accent · hover (simulated)">
                  <Button
                    type="button"
                    variant="primary-accent"
                    className="bg-teal-400"
                  >
                    Accent hover
                  </Button>
                </ShowcaseItem>
                <ShowcaseItem label="primary-accent · disabled">
                  <Button type="button" variant="primary-accent" disabled>
                    Accent disabled
                  </Button>
                </ShowcaseItem>
              </div>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Badge
              </h3>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                <ShowcaseItem label="variant: default">
                  <Badge>Default</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="variant: secondary">
                  <Badge variant="secondary">Secondary</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="variant: destructive">
                  <Badge variant="destructive">Destructive</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="variant: outline">
                  <Badge variant="outline">Outline</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="semantic: teal">
                  <Badge variant="teal">On track</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="semantic: amber">
                  <Badge variant="amber">Watch</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="semantic: rose">
                  <Badge variant="rose">At risk</Badge>
                </ShowcaseItem>
                <ShowcaseItem label="semantic: violet">
                  <Badge variant="violet">Coalition</Badge>
                </ShowcaseItem>
              </div>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Separator
              </h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <ShowcaseItem label="horizontal">
                  <div className="bg-muted/20 flex w-full max-w-md flex-col gap-3 rounded-lg border p-4">
                    <p className="text-sm">Section A</p>
                    <Separator />
                    <p className="text-sm">Section B</p>
                  </div>
                </ShowcaseItem>
                <ShowcaseItem label="vertical">
                  <div className="bg-muted/20 flex h-24 max-w-md items-stretch gap-3 rounded-lg border p-3">
                    <span className="text-sm">Left</span>
                    <Separator orientation="vertical" />
                    <span className="text-sm">Right</span>
                  </div>
                </ShowcaseItem>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cards" title="Cards">
          <div className="space-y-10">
            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Card
              </h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <ShowcaseItem label="default body only">
                  <Card className="w-full max-w-sm py-5">
                    <CardContent className="text-sm">
                      Compact copy for a minimal card without chrome.
                    </CardContent>
                  </Card>
                </ShowcaseItem>
                <ShowcaseItem label="with header & footer">
                  <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Turnout program</CardTitle>
                      <CardDescription>
                        Scheduled knocks for Ward 11 this weekend.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      Assign volunteers and sync walk sheets before Saturday 9:00.
                    </CardContent>
                    <CardFooter className="border-border flex gap-2 border-t">
                      <Button size="sm" type="button">
                        Open run
                      </Button>
                      <Button size="sm" type="button" variant="outline">
                        Export
                      </Button>
                    </CardFooter>
                  </Card>
                </ShowcaseItem>
                <ShowcaseItem label="compact density">
                  <Card className="w-full max-w-sm gap-3 py-4">
                    <CardHeader className="gap-1 px-5 pb-0 [.border-b]:pb-3">
                      <CardTitle className="text-base">Quick stat</CardTitle>
                      <CardDescription className="text-xs">
                        Tighter vertical rhythm for dense dashboards.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-5 py-0 text-sm">
                      Use reduced padding on Card and sections.
                    </CardContent>
                  </Card>
                </ShowcaseItem>
              </div>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                StatCard
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ShowcaseItem label="Total Electors · no trend">
                  <StatCard label="Total Electors" value="68,340" className="w-full" />
                </ShowcaseItem>
                <ShowcaseItem label="Contacted · positive trend">
                  <StatCard
                    label="Contacted"
                    value="23,236"
                    trend={{ text: "+12%", sentiment: "positive" }}
                    className="w-full"
                  />
                </ShowcaseItem>
                <ShowcaseItem label="Identified · positive (pp)">
                  <StatCard
                    label="Identified"
                    value="6,424"
                    trend={{
                      text: "+1.8 pp vs last week",
                      sentiment: "positive",
                    }}
                    className="w-full"
                  />
                </ShowcaseItem>
                <ShowcaseItem label="Opposed · negative trend">
                  <StatCard
                    label="Opposed"
                    value="5,604"
                    trend={{ text: "-2.3%", sentiment: "negative" }}
                    className="w-full"
                  />
                </ShowcaseItem>
              </div>
            </div>
          </div>
        </Section>

        <Section id="forms" title="Forms">
          <div className="space-y-10">
            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Input
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ShowcaseItem label="default">
                  <Input className="max-w-xs" placeholder="Search electors…" />
                </ShowcaseItem>
                <ShowcaseItem label="focused (simulated ring)">
                  <Input
                    className="max-w-xs border-ring ring-ring/50 ring-[3px]"
                    defaultValue="Focused field"
                  />
                </ShowcaseItem>
                <ShowcaseItem label="disabled">
                  <Input
                    className="max-w-xs"
                    disabled
                    defaultValue="Read-only value"
                  />
                </ShowcaseItem>
                <ShowcaseItem label="error (aria-invalid)">
                  <Input
                    className="max-w-xs"
                    aria-invalid
                    defaultValue="Invalid postal code"
                  />
                </ShowcaseItem>
              </div>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Select
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <ShowcaseItem label="default (closed)">
                  <Select defaultValue="ward-11">
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue placeholder="Choose ward" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ward-9">Ward 9</SelectItem>
                      <SelectItem value="ward-10">Ward 10</SelectItem>
                      <SelectItem value="ward-11">Ward 11</SelectItem>
                    </SelectContent>
                  </Select>
                </ShowcaseItem>
                <ShowcaseItem label="open (defaultOpen)">
                  <Select defaultValue="canvass" defaultOpen>
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canvass">Canvass</SelectItem>
                      <SelectItem value="phone">Phone bank</SelectItem>
                      <SelectItem value="hold">On hold</SelectItem>
                    </SelectContent>
                  </Select>
                </ShowcaseItem>
                <ShowcaseItem label="disabled">
                  <Select disabled defaultValue="locked">
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="locked">Locked</SelectItem>
                    </SelectContent>
                  </Select>
                </ShowcaseItem>
              </div>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Label
              </h3>
              <div className="grid max-w-md grid-cols-1 gap-6">
                <ShowcaseItem label="Label + Input pairing">
                  <div className="flex w-full max-w-xs flex-col gap-2">
                    <Label htmlFor="design-vol-code">Volunteer code</Label>
                    <Input id="design-vol-code" placeholder="RP-0000" />
                  </div>
                </ShowcaseItem>
              </div>
            </div>
          </div>
        </Section>

        <Section id="data-display" title="Data Display">
          <div className="space-y-10">
            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Tabs
              </h3>
              <ShowcaseItem label="horizontal · with content" className="max-w-2xl">
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="exports">Exports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="summary" className="mt-4 text-sm leading-relaxed">
                    Riding-level aggregates for electors, contact rates, and turnout
                    projections. Use this tab for campaign-wide snapshots.
                  </TabsContent>
                  <TabsContent value="history" className="text-muted-foreground mt-4 text-sm">
                    Prior week deltas, canvass logs, and import batches appear here
                    for audit trails.
                  </TabsContent>
                  <TabsContent value="exports" className="text-muted-foreground mt-4 text-sm">
                    CSV and VAN sync jobs surface in this tab once scheduled.
                  </TabsContent>
                </Tabs>
              </ShowcaseItem>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                DataTable
              </h3>
              <ShowcaseItem label="5-row sample · numeric columns right-aligned">
                <DataTable>
                  <thead>
                    <tr>
                      <th scope="col">PS</th>
                      <th scope="col" className="num">
                        Electors
                      </th>
                      <th scope="col" className="num">
                        Turnout &apos;22
                      </th>
                      <th scope="col" className="num">
                        Margin &apos;22
                      </th>
                      <th scope="col" className="num">
                        Canvassed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>012</td>
                      <td className="num">2,840</td>
                      <td className="num">54.2%</td>
                      <td className="num text-teal-500">+3.1%</td>
                      <td className="num">412</td>
                    </tr>
                    <tr>
                      <td>018</td>
                      <td className="num">3,102</td>
                      <td className="num">49.8%</td>
                      <td className="num text-amber-500">-1.4%</td>
                      <td className="num">505</td>
                    </tr>
                    <tr>
                      <td>024</td>
                      <td className="num">1,976</td>
                      <td className="num">61.0%</td>
                      <td className="num text-teal-500">+6.8%</td>
                      <td className="num">388</td>
                    </tr>
                    <tr>
                      <td>031</td>
                      <td className="num">4,455</td>
                      <td className="num">52.4%</td>
                      <td className="num text-teal-500">+0.6%</td>
                      <td className="num">721</td>
                    </tr>
                    <tr>
                      <td>044</td>
                      <td className="num">2,203</td>
                      <td className="num">47.1%</td>
                      <td className="num text-amber-500">-4.2%</td>
                      <td className="num">260</td>
                    </tr>
                  </tbody>
                </DataTable>
              </ShowcaseItem>
            </div>
          </div>
        </Section>

        <Section id="navigation" title="Navigation">
          <div className="space-y-10">
            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Breadcrumb
              </h3>
              <ShowcaseItem label="chip segments · active = Ward 11">
                <Breadcrumb
                  segments={[
                    { code: "NA", label: "Canada" },
                    { code: "ON", label: "Ontario" },
                    { code: "MUN", label: "Toronto" },
                    { code: "WRD", label: "Ward 11" },
                  ]}
                  activeIndex={3}
                />
              </ShowcaseItem>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
                Sheet
              </h3>
              <ShowcaseItem label="trigger opens right sheet">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button type="button" variant="secondary">
                      Open sheet preview
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="gap-0">
                    <SheetHeader>
                      <SheetTitle>Walk sheet filters</SheetTitle>
                      <SheetDescription>
                        Narrow the list by tag, last contact, or support score before
                        exporting to PDF.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="text-muted-foreground space-y-3 p-4 text-sm">
                      <p>
                        Sheets inherit the teal accent for primary actions and zinc
                        surfaces for readability in the field.
                      </p>
                      <Separator />
                      <p className="font-mono text-xs tracking-tight">
                        Tip: pin this panel on tablet layouts while canvassing.
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </ShowcaseItem>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
