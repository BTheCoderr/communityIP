import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { CommunityUpdates } from "@/components/home/CommunityUpdates";

export const metadata: Metadata = {
  title: "News",
  description: "Updates and stories from Community IP.",
};

export default function NewsPage() {
  return (
    <>
      <PageShell>
        <PageHeader
          eyebrow="News"
          title="Updates from the movement"
          description="Stories about our programs, partnerships, and mission to expand IP access for underserved inventors — migrated from the original Community IP blog."
        />
      </PageShell>
      <CommunityUpdates />
    </>
  );
}
