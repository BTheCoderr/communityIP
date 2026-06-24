import Link from "next/link";

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
    <footer className="border-t border-border bg-slate-800 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-sm font-bold text-white">
                CIP
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Community IP
              </span>
            </div>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Community IP&apos;s mission is to help underserved inventors
              obtain intellectual property — through education, intake support,
              and community programs.
            </p>
            <p className="text-xs font-medium text-teal-400">
              501(c)(3) nonprofit organization
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get Involved
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              About
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-8">
          <p className="text-xs leading-relaxed text-slate-500">
            Community IP provides educational information and intake support
            only. Nothing on this site is legal advice. Submitting a form does
            not create an attorney-client relationship and does not guarantee
            services, funding, or representation.
          </p>
          <p className="mt-4 text-xs text-slate-600">
            © {new Date().getFullYear()} Community IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
