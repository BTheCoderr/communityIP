import type { Metadata } from "next";
import { IntakeWizard } from "@/components/forms/IntakeWizard";

export const metadata: Metadata = {
  title: "Apply for Help",
  description:
    "Submit an intake application to Community IP for education, intake support, mentoring, and patent filing assistance where appropriate.",
};

export default function ApplyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            Apply for Help
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl text-balance">
            Tell us about your situation
          </h1>
          <p className="mt-4 text-muted-foreground">
            This intake form helps our team understand your needs and connect
            you with appropriate resources. It takes about 10 minutes.
          </p>
        </div>
        <IntakeWizard />
      </div>
    </div>
  );
}
