import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/lib/content/team";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center border-2 border-navy-900/10 bg-cream-50 p-8 text-center">
      <div className="relative h-36 w-36 overflow-hidden border-2 border-navy-900/15 bg-blueprint-50">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>
      <h2 className="mt-5 font-display text-xl font-bold text-navy-900">
        {member.name}
      </h2>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-blueprint-700">
        {member.role}
      </p>
      {member.bio ? (
        <p className="mt-3 text-sm leading-relaxed text-navy-800/75">
          {member.bio}
        </p>
      ) : null}
      {member.linkedin ? (
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-blueprint-700 hover:underline"
        >
          <Linkedin className="h-4 w-4" aria-hidden />
          LinkedIn
        </Link>
      ) : null}
    </div>
  );
}
