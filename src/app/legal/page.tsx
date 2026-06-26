import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { DISCLAIMERS } from "@/lib/content/disclaimers";

export const metadata: Metadata = {
  title: "Legal & Disclaimers",
  description:
    "Legal disclaimers and privacy information for Community IP.",
};

export default function LegalPage() {
  return (
    <PageShell narrow>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blueprint-600">
        Legal
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
        Disclaimers & policies
      </h1>
      <p className="mt-6 text-lg text-navy-800/75">
        Community IP is a 501(c)(3) nonprofit. Licensed patent practitioners,
        including patent attorney Ashley Gregory, may be involved in education,
        intake support, mentoring, and patent filing assistance where
        appropriate.
      </p>

      <div className="mt-10 space-y-10">
        <DisclaimerBanner />

        <section>
          <SectionHeading title="What Community IP provides" />
          <div className="mt-4 space-y-3 leading-relaxed text-navy-800/75">
            <p>{DISCLAIMERS.full}</p>
            <p>{DISCLAIMERS.noGuarantee}</p>
          </div>
        </section>

        <section>
          <SectionHeading title="Nondisclosure Agreement" />
          <div className="mt-4 space-y-3 leading-relaxed text-navy-800/75">
            <p>
              When you apply for help and disclose an invention idea for
              evaluation, you may be asked to agree to a Nondisclosure Agreement
              with Keeley DeAngelo, LLP. Read the full agreement before
              submitting your intake form.
            </p>
            <p>
              <Link
                href="/legal/nondisclosure"
                className="font-medium text-blueprint-700 underline underline-offset-2"
              >
                View Nondisclosure Agreement
              </Link>
            </p>
          </div>
        </section>

        <section>
          <SectionHeading title="No attorney-client relationship from this site" />
          <div className="mt-4 space-y-3 leading-relaxed text-navy-800/75">
            <p>
              Submitting an intake form, contact form, volunteer interest form,
              or any other form on this website does not create an
              attorney-client relationship between you and Community IP or any
              of its volunteers, staff, or partners.
            </p>
            <p>
              Any formal representation or patent services must be confirmed
              separately in writing. Please do not submit confidential or
              time-sensitive information unless and until Community IP confirms
              that it is appropriate to do so.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading title="No guarantees" />
          <div className="mt-4 space-y-3 leading-relaxed text-navy-800/75">
            <p>{DISCLAIMERS.noGuarantee}</p>
            <p>
              Program availability depends on capacity, funding, volunteer
              availability, and eligibility criteria that may change over time.
              Intake review does not constitute acceptance into any program.
            </p>
            <p>
              IP Readiness Checker results are general suggestions based on your
              answers. They should not be relied upon as a substitute for
              professional advice on your specific situation.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading title="Privacy & consent" />
          <div className="mt-4 space-y-3 leading-relaxed text-navy-800/75">
            <p>
              We collect information you submit through intake, volunteer, and
              partnership forms to review your inquiry and follow up. We do not
              sell personal information.
            </p>
            <p>
              Information may be shared with screened volunteers or partner
              organizations only to provide support you have requested, and only
              with your consent. You may request correction or deletion of your
              data by contacting us at{" "}
              <a
                href="mailto:hello@communityip.org"
                className="font-medium text-blueprint-700 underline underline-offset-2"
              >
                hello@communityip.org
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <SectionHeading title="Third-party links & referrals" />
          <div className="mt-4 leading-relaxed text-navy-800/75">
            <p>
              Community IP may refer inventors to third-party programs such as
              the USPTO Patent Pro Bono Program, legal aid organizations, or
              other resources. These referrals are informational. Community IP
              does not control and is not responsible for third-party services,
              eligibility decisions, or outcomes.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading title="Contact" />
          <div className="mt-4 leading-relaxed text-navy-800/75">
            <p>
              For questions about these disclaimers or your data, contact us at{" "}
              <a
                href="mailto:hello@communityip.org"
                className="font-medium text-blueprint-700 underline underline-offset-2"
              >
                hello@communityip.org
              </a>{" "}
              or visit our{" "}
              <Link
                href="/contact"
                className="font-medium text-blueprint-700 underline underline-offset-2"
              >
                contact page
              </Link>
              .
            </p>
            <p className="mt-3 text-sm">
              Community IP is a 501(c)(3) nonprofit organization. ©{" "}
              {new Date().getFullYear()} Community IP. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
