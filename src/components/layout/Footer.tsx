import Link from "next/link";
import { mission } from "@/lib/site";
import { DISCLAIMERS } from "@/lib/content/disclaimers";
import { BrandLogo } from "@/components/brand/BrandLogo";

const footerLinks = {
  getInvolved: [
    { href: "/apply", label: "Get IP Help" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/partners", label: "Partner" },
    { href: "/donate", label: "Support the Mission" },
  ],
  organization: [
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/board", label: "Board" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal", label: "Legal & Disclaimers" },
    { href: "/legal/nondisclosure", label: "Nondisclosure Agreement" },
  ],
};

export function Footer() {
  return (
    <footer className="overflow-visible border-t border-community-800/20 bg-community-800 text-cream/85">
      <div className="mx-auto max-w-6xl overflow-visible px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
          <div className="shrink-0 overflow-visible">
            <BrandLogo className="mb-5 block" />
            <p className="max-w-md text-sm leading-relaxed text-cream/65">
              {mission.statement}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-sage-200">
              501(c)(3) nonprofit organization
            </p>
          </div>

          <div className="grid min-w-0 flex-1 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-cream">
                Get involved
              </h3>
              <ul className="space-y-2">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-cream">
                Organization
              </h3>
              <ul className="space-y-2">
                {footerLinks.organization.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-cream">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-cream/45">
            {DISCLAIMERS.footer}
          </p>
          <p className="mt-4 text-xs text-cream/35">
            © {new Date().getFullYear()} Community IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
