"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center border-2 border-community-700/15 bg-cream p-2.5 hover:bg-community-50"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <X className="h-5 w-5 text-forest-900" aria-hidden />
        ) : (
          <Menu className="h-5 w-5 text-forest-900" aria-hidden />
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-community-900/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          <nav
            className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,20rem)] border-2 border-community-700/10 bg-cream p-3 shadow-file"
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
                    ? "bg-community-50 text-community-800"
                    : "text-forest-800 hover:bg-community-50 hover:text-community-800"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 space-y-2 border-t border-community-700/10 pt-2">
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="block bg-community-700 px-4 py-3 text-center text-sm font-semibold text-cream hover:bg-community-800"
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
