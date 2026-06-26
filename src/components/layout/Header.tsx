import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { MobileNav } from "@/components/layout/MobileNav";

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
    <header className="sticky top-0 z-50 border-b-2 border-navy-900/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-navy-900 bg-navy-900 font-mono text-xs font-bold text-cream shadow-stamp transition-transform group-hover:-rotate-1">
            CIP
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block font-display text-base font-bold text-navy-900">
              Community IP
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
              Invention access movement
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-blueprint-50 hover:text-blueprint-800 xl:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CTAButton href="/apply" size="sm">
            Get IP Help
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
