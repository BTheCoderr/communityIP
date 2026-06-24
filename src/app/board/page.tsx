import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { boardMembers } from "@/lib/board";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the Community IP Board of Directors.",
};

export default function BoardPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          eyebrow="Leadership"
          title="Board of Directors"
          description="Community IP is guided by leaders committed to expanding intellectual property access for underserved inventors and entrepreneurs."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-card"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-teal-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h2 className="mt-4 font-heading text-lg font-bold text-slate-800">
                {member.name}
              </h2>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
