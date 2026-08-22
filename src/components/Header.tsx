"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getSite } from "@/lib/data";
import { navItems } from "@/lib/navigation";

import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

const site = getSite();

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line-onDark bg-navy-deep/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-onDark"
        >
          <span className="truncate font-display text-lg tracking-wide text-paper transition-colors group-hover:text-accent-onDark">
            {site.headerName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
