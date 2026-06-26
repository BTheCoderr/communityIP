import type { Metadata } from "next";
import { ReadinessChecker } from "@/components/forms/ReadinessChecker";

export const metadata: Metadata = {
  title: "IP Readiness Checker",
  description:
    "Answer a few questions to understand what type of IP support might fit your situation.",
};

export default function ReadinessCheckerPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            IP Readiness Checker
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl text-balance">
            Not sure where to start? Let&apos;s find out together.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Answer 7 quick questions to get a personalized recommendation to
            help you decide what to explore next.
          </p>
        </div>
        <ReadinessChecker />
      </div>
    </div>
  );
}
