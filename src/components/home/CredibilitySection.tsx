import { CTAButton } from "@/components/CTAButton";
import { research } from "@/lib/content/cms";

export function CredibilitySection() {
  return (
    <section className="section-editorial border-b border-community-700/10 bg-cream">
      <div className="section-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">About Community IP</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance">
              {research.credibilityTitle}
            </h2>
            <p className="prose-lead mt-5">{research.credibilityBody1}</p>
            <p className="mt-4 leading-relaxed text-forest-800/75">
              {research.credibilityBody2}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/board">Board of Directors</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Contact Community IP
              </CTAButton>
            </div>
          </div>

          <div className="rounded-2xl border border-community-700/10 bg-white p-8 shadow-soft sm:p-10">
            <p className="text-sm font-semibold text-community-700">
              Organization overview
            </p>
            <ul className="mt-6 divide-y divide-community-700/10">
              {[
                { label: "Status", value: "501(c)(3) nonprofit" },
                { label: "Focus", value: "IP access for underserved inventors" },
                {
                  label: "Programs",
                  value: "Education · Intake · Mentoring · Funding",
                },
                { label: "Accelerator", value: "SEG 2025 Impact Cohort" },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:justify-between sm:gap-4"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-forest-900 sm:text-right">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
