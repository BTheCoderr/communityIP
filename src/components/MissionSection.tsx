import { SectionHeading } from "@/components/SectionHeading";
import { MISSION_EXTENDED, MISSION_STATEMENT, PROGRAMS } from "@/lib/site";

export function MissionSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title={MISSION_STATEMENT}
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {MISSION_EXTENDED}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Community IP will democratize access to intellectual property by
              offering expert patent services to innovators who might otherwise
              be unable to afford them — alongside education, mentoring, and
              needs-based support, subject to program capacity.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-heading text-lg font-bold text-slate-800">
              What we do today
            </h3>
            <ul className="mt-5 space-y-3">
              {PROGRAMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Community IP is a 501(c)(3) organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
