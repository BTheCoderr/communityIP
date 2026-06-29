import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AccessGapReport } from "@/components/home/AccessGapReport";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { PageShell } from "@/components/layout/PageShell";
import { research } from "@/lib/content/cms";

export const metadata: Metadata = {
  title: "Research",
  description: research.pageDescription,
};

export default function ResearchPage() {
  return (
    <PageShell>
      <div className="pb-4 pt-8 sm:pt-12">
        <PageHeader
          eyebrow={research.pageEyebrow}
          title={research.pageTitle}
          description={research.pageDescription}
        />
      </div>
      <AccessGapReport />
      <CredibilitySection />
    </PageShell>
  );
}
