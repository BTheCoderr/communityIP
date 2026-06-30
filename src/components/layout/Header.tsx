import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { MobileNav } from "@/components/layout/MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-community-700/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-visible px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4">
        <div className="flex shrink-0 items-center overflow-visible">
          <BrandLogo iconOnly className="hidden max-[379px]:inline-flex" />
          <BrandLogo className="hidden min-[380px]:inline-flex" />
        </div>

        <nav
          className="hidden shrink items-center gap-0.5 lg:flex lg:flex-1 lg:justify-center"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-community-50 hover:text-community-700 xl:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CTAButton href="/apply" size="sm" className="hidden sm:inline-flex">
            Get IP Help
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
