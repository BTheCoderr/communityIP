import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/for-inventors", label: "For Inventors" },
  { href: "/education", label: "Education" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partners", label: "Partners" },
  { href: "/donate", label: "Donate" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-warm-50/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            CIP
          </div>
          <div className="leading-tight">
            <span className="block font-heading text-base font-bold text-slate-800">
              Community IP
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              IP access for every inventor
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton href="/apply" size="sm" className="hidden sm:inline-flex">
            Get Help
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-border bg-white p-2.5 hover:bg-teal-50 [&::-webkit-details-marker]:hidden">
        <svg
          className="h-5 w-5 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="sr-only">Open menu</span>
      </summary>
      <nav
        className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border bg-white p-3 shadow-card"
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-2 border-t border-border pt-2">
          <Link
            href="/apply"
            className="block rounded-xl bg-teal-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-teal-800"
          >
            Get Help
          </Link>
        </div>
      </nav>
    </details>
  );
}
