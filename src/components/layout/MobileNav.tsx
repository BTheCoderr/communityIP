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
        className="flex items-center justify-center rounded-xl border border-border bg-white p-2.5 hover:bg-teal-50"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <X className="h-5 w-5 text-slate-700" aria-hidden />
        ) : (
          <Menu className="h-5 w-5 text-slate-700" aria-hidden />
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          <nav
            className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,20rem)] rounded-2xl border border-border bg-white p-3 shadow-card"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-teal-50 text-teal-800"
                    : "text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 space-y-2 border-t border-border pt-2">
              <Link
                href="/readiness-checker"
                onClick={() => setOpen(false)}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-center text-sm font-semibold text-teal-800 hover:bg-teal-50"
              >
                IP Readiness Checker
              </Link>
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-teal-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-teal-800"
              >
                Get Help
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
