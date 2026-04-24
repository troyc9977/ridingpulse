import type { Metadata } from "next";

import { DesignShowcase } from "./design-showcase";

export const metadata: Metadata = {
  title: "Design System · RidingPulse",
  description: "Internal RidingPulse UI reference and component gallery.",
};

export default function DesignPage() {
  return <DesignShowcase />;
}
