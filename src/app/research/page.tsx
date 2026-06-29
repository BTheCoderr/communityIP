import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AccessGapReport } from "@/components/home/AccessGapReport";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research on the intellectual property access gap — who gets to invent, and why Community IP exists.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <div className="pb-4 pt-8 sm:pt-12">
        <PageHeader
          eyebrow="Research"
          title="The IP access gap"
          description="Community IP exists because invention opportunity is not evenly distributed. These findings shape our nonprofit mission."
        />
      </div>
      <AccessGapReport />
      <CredibilitySection />
    </PageShell>
  );
}
