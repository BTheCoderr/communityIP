"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/for-inventors", label: "For Inventors" },
  { href: "/education", label: "Education" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partners", label: "Partners" },
  { href: "/donate", label: "Donate" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center border-2 border-navy-900/15 bg-cream p-2.5 hover:bg-blueprint-50"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <X className="h-5 w-5 text-navy-900" aria-hidden />
        ) : (
          <Menu className="h-5 w-5 text-navy-900" aria-hidden />
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-navy-900/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          <nav
            className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,20rem)] border-2 border-navy-900/10 bg-cream p-3 shadow-file"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-blueprint-50 text-blueprint-800"
                    : "text-navy-800 hover:bg-blueprint-50 hover:text-blueprint-800"
                )}
              >
                {link.label}
              </Link>
            ))}
            {[
              { href: "/contact", label: "Contact" },
              { href: "/news", label: "News" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-blueprint-50 text-blueprint-800"
                    : "text-navy-800 hover:bg-blueprint-50 hover:text-blueprint-800"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 space-y-2 border-t border-navy-900/10 pt-2">
              <Link
                href="/readiness-checker"
                onClick={() => setOpen(false)}
                className="block border border-navy-900/15 px-4 py-3 text-center text-sm font-semibold text-navy-900 hover:bg-blueprint-50"
              >
                IP Readiness Checker
              </Link>
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="block bg-navy-900 px-4 py-3 text-center text-sm font-semibold text-cream hover:bg-navy-800"
              >
                Get IP Help
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
