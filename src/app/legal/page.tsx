import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Legal & Disclaimers",
  description:
    "Legal disclaimers and privacy information for Community IP.",
};

export default function LegalPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
          Legal
        </p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Disclaimers & policies
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Please read this page carefully. Community IP is an educational and
          intake support organization — not a law firm.
        </p>

        <div className="mt-10 space-y-10">
          <DisclaimerBanner />

          <section>
            <SectionHeading title="Educational information only" />
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <p>
                All content on this website — including articles, guides, quiz
                results, and intake responses — is provided for general
                educational and informational purposes only. Nothing on this
                platform constitutes legal advice.
              </p>
              <p>
                Community IP staff and volunteers may provide educational
                guidance and intake support, but they are not acting as your
                attorneys unless a separate written agreement explicitly
                establishes an attorney-client relationship through an approved
                pro bono program.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading title="Nondisclosure Agreement" />
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <p>
                When you apply for help and disclose an invention idea for
                evaluation, you may be asked to agree to a Nondisclosure
                Agreement with Keeley DeAngelo, LLP. Read the full agreement
                before submitting your intake form.
              </p>
              <p>
                <Link
                  href="/legal/nondisclosure"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  View Nondisclosure Agreement
                </Link>
              </p>
            </div>
          </section>

          <section>
            <SectionHeading title="No attorney-client relationship" />
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Submitting an intake form, contact form, volunteer interest
                form, or any other form on this website does not create an
                attorney-client relationship between you and Community IP or any
                of its volunteers, staff, or partners.
              </p>
              <p>
                Do not send confidential or time-sensitive legal information
                through this platform expecting attorney-client privilege
                protection. If you need legal advice, consult a licensed
                attorney in your jurisdiction.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading title="No guarantees" />
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Community IP does not guarantee that you will receive services,
                funding, mentoring, pro bono legal representation, or any
                particular outcome related to your intellectual property.
              </p>
              <p>
                Program availability depends on capacity, funding, volunteer
                availability, and eligibility criteria that may change over time.
                Intake review does not constitute acceptance into any program.
              </p>
              <p>
                IP Readiness Checker results are general educational suggestions
                based on your answers. They are not legal opinions and should
                not be relied upon as a substitute for professional advice.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading title="Privacy & consent" />
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <p>
                We collect information you submit through intake, volunteer, and
                partnership forms to review your inquiry and provide educational
                follow-up. We do not sell personal information.
              </p>
              <p>
                Information may be shared with screened volunteers or partner
                organizations only to provide support you have requested, and
                only with your consent. You may request correction or deletion
                of your data by contacting us at{" "}
                <a
                  href="mailto:hello@communityip.org"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  hello@communityip.org
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <SectionHeading title="Third-party links & referrals" />
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
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
            <div className="mt-4 text-muted-foreground leading-relaxed">
              <p>
                For questions about these disclaimers or your data, contact us
                at{" "}
                <a
                  href="mailto:hello@communityip.org"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  hello@communityip.org
                </a>{" "}
                or visit our{" "}
                <a
                  href="/contact"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  contact page
                </a>
                .
              </p>
              <p className="mt-3 text-sm">
                Community IP is a 501(c)(3) nonprofit organization. ©{" "}
                {new Date().getFullYear()} Community IP. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
