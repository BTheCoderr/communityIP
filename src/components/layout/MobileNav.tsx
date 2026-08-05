"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { header } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { navLinks, ctaLabel, ctaHref } = header;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center rounded-lg border border-brand-cream/20 bg-brand-cream p-2.5 hover:bg-white focus-visible:ring-brand-cream focus-visible:ring-offset-brand-green"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <X className="h-5 w-5 text-brand-green" aria-hidden />
        ) : (
          <Menu className="h-5 w-5 text-brand-green" aria-hidden />
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-brand-ink/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          <nav
            className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,18rem)] rounded-xl border border-brand-green/10 bg-white p-2 shadow-card"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-brand-green-soft text-brand-green-dark"
                    : "text-brand-ink/85 hover:bg-brand-green-soft"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-brand-green/10 pt-2">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-brand-green px-4 py-3 text-center text-sm font-semibold text-brand-cream hover:bg-brand-green-dark"
              >
                {ctaLabel}
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
