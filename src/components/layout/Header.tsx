import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { MobileNav } from "@/components/layout/MobileNav";
import { header } from "@/lib/site";

export function Header() {
  const { navLinks, ctaLabel, ctaHref } = header;

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-brand-green-dark/40 bg-brand-green/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-visible px-4 py-3 sm:gap-4 sm:px-6 sm:py-3.5">
        <div className="flex min-w-0 shrink-0 items-center overflow-visible">
          <BrandLogo iconOnly className="inline-flex max-[319px]:inline-flex min-[320px]:hidden" />
          <BrandLogo className="hidden min-[320px]:inline-flex" />
        </div>

        <nav
          className="hidden shrink items-center gap-0.5 lg:flex lg:flex-1 lg:justify-center"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-brand-cream/85 transition-colors hover:bg-brand-cream/15 hover:text-brand-cream focus-visible:ring-brand-cream focus-visible:ring-offset-brand-green xl:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CTAButton
            href={ctaHref}
            size="sm"
            className="hidden bg-brand-cream text-brand-green hover:bg-white focus-visible:ring-brand-cream focus-visible:ring-offset-brand-green sm:inline-flex"
          >
            {ctaLabel}
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
