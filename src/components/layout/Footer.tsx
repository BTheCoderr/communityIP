import Link from "next/link";
import { DISCLAIMERS } from "@/lib/content/disclaimers";
import { Logo } from "@/components/brand/Logo";

const footerLinks = {
  explore: [
    { href: "/for-inventors", label: "For Inventors" },
    { href: "/readiness-checker", label: "IP Readiness Checker" },
    { href: "/education", label: "Education Hub" },
    { href: "/apply", label: "Apply for Help" },
  ],
  getInvolved: [
    { href: "/volunteer", label: "Volunteer" },
    { href: "/partners", label: "Partners" },
    { href: "/donate", label: "Donate" },
  ],
  about: [
    { href: "/about", label: "About Us" },
    { href: "/board", label: "Board of Directors" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
    { href: "/legal", label: "Legal & Disclaimers" },
    { href: "/legal/nondisclosure", label: "Nondisclosure Agreement" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t-2 border-community-800/30 bg-community-700 text-cream/80">
      <div className="blueprint-grid-dense mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Logo variant="light" linked={false} className="mb-4" />
            </Link>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Community IP&apos;s mission is to help underserved inventors
              obtain intellectual property — through education, intake support,
              and community programs.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-sage-200">
              501(c)(3) nonprofit organization
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
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
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Get Involved
            </h3>
            <ul className="space-y-2.5">
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
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              About
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
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

        <div className="mt-12 border-t border-cream/10 pt-8">
          <p className="text-xs leading-relaxed text-cream/45">
            {DISCLAIMERS.compact} {DISCLAIMERS.noGuarantee}
          </p>
          <p className="mt-4 font-mono text-xs text-cream/30">
            © {new Date().getFullYear()} Community IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
