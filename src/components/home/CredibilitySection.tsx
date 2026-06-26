import { CTAButton } from "@/components/CTAButton";
import { StampLabel } from "@/components/brand/StampLabel";

export function CredibilitySection() {
  return (
    <section className="section-editorial border-b border-navy-900/10 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <StampLabel variant="access" className="mb-6">
              About
            </StampLabel>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
              Built by patent professionals who saw the gap
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-800/80">
              Started by patent professionals in 2024, Community IP works to
              democratize access to intellectual property for inventors who
              might otherwise be unable to afford support.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-800/70">
              Accepted into Social Enterprise Greenhouse&apos;s 2025 Impact
              Accelerator. Growing partnerships with universities, incubators,
              and community organizations across Rhode Island and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/board">Board of Directors</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Contact Us
              </CTAButton>
            </div>
          </div>

          <div className="patent-file p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint-700">
              Organization file · Est. 2024
            </p>
            <ul className="mt-8 space-y-6">
              {[
                { label: "Status", value: "501(c)(3) nonprofit" },
                { label: "Focus", value: "IP access for underserved inventors" },
                { label: "Programs", value: "Education · Intake · Mentoring · Funding" },
                { label: "Accelerator", value: "SEG 2025 Impact Cohort" },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-dashed border-navy-900/15 pb-4 sm:flex-row sm:justify-between"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {row.label}
                  </span>
                  <span className="font-medium text-navy-900">{row.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-annotate text-2xl text-stamp-600">
              credibility + community = access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
