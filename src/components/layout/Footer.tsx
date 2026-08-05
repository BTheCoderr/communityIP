import Link from "next/link";
import {
  mission,
  footer,
  social,
  CONTACT_EMAIL,
  DISCLAIMERS,
} from "@/lib/site";
import { BrandLogo } from "@/components/brand/BrandLogo";

const socialEntries = [
  { key: "linkedin" as const, label: "LinkedIn" },
  { key: "facebook" as const, label: "Facebook" },
  { key: "twitter" as const, label: "X (Twitter)" },
  { key: "instagram" as const, label: "Instagram" },
];

export function Footer() {
  const activeSocial = socialEntries.filter(({ key }) => social[key]?.trim());

  return (
    <footer className="overflow-visible border-t border-brand-green-dark/30 bg-brand-green text-brand-cream/85">
      <div className="mx-auto max-w-6xl overflow-visible px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
          <div className="shrink-0 overflow-visible lg:max-w-sm">
            <BrandLogo variant="footer" className="mb-4 block" />
            <p className="max-w-md text-sm leading-relaxed text-brand-cream/75">
              {mission.statement}
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-cream/55">
              {footer.nonprofitLabel}
            </p>
            {footer.showContactEmail && (
              <p className="mt-4 text-sm">
                <span className="text-brand-cream/55">
                  {footer.contactEmailLabel}:{" "}
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-brand-cream transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}
            {activeSocial.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {activeSocial.map(({ key, label }) => (
                  <li key={key}>
                    <a
                      href={social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid min-w-0 flex-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-3 text-sm font-semibold text-brand-cream">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-brand-cream/10 pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-brand-cream/45">
            {DISCLAIMERS.footer}
          </p>
          <p className="mt-3 text-xs text-brand-cream/35">
            © {new Date().getFullYear()} {footer.copyrightName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
