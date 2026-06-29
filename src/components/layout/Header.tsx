import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { Logo } from "@/components/brand/Logo";
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
    <header className="sticky top-0 z-50 border-b-2 border-community-700/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-community-50 hover:text-community-700 xl:px-3"
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
