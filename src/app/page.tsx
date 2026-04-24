import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 p-6 md:p-10">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <p className="text-muted-foreground max-w-prose text-sm leading-relaxed">
          Prose uses{" "}
          <span className="text-foreground font-medium">Inter</span> via{" "}
          <code className="font-data bg-muted rounded px-1 py-0.5 text-xs">
            next/font/google
          </code>
          . Monospace samples use{" "}
          <span className="font-data text-foreground">JetBrains Mono</span> for
          data and code.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="sheet">Sheet</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Teal accent</CardTitle>
              <CardDescription>
                Primary actions use teal-500 (
                <span className="font-data text-primary">#14b8a6</span>) on a zinc
                neutral surface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dark mode is the default; use the sun icon in the header to switch
                to light mode.
              </p>
              <div className="font-data text-sm">
                <div className="text-muted-foreground">sample.metric</div>
                <div className="text-foreground text-lg font-medium tabular-nums">
                  42.7k rpm
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button size="sm">Primary action</Button>
              <Button size="sm" variant="outline">
                Secondary
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="forms" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>
                Shadcn form primitives wired to the shared theme tokens.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label>Role</Label>
                <Select defaultValue="rider">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Pick a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rider">Rider</SelectItem>
                    <SelectItem value="coach">Coach</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sheet" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
              <CardDescription>
                Slide-over panel built on Radix Dialog.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary">Open sheet</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Side panel</SheetTitle>
                    <SheetDescription>
                      Use sheets for filters, detail views, or transient workflows.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
