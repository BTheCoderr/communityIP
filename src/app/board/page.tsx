import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { allBoardMembers } from "@/lib/content/team";
import { board } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the Community IP Board of Directors.",
};

export default function BoardPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Leadership" title={board.title} description={board.intro} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allBoardMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </PageShell>
  );
}
