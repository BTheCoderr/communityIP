import type { Metadata } from "next";
import { AccessGapReport } from "@/components/home/AccessGapReport";
import { CredibilitySection } from "@/components/home/CredibilitySection";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research on the intellectual property access gap — who gets to invent, and why Community IP exists.",
};

export default function ResearchPage() {
  return (
    <>
      <AccessGapReport />
      <CredibilitySection />
    </>
  );
}
