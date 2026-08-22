"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/lib/navigation";

import { NavLink } from "./NavLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="rounded border border-line-onDark px-3 py-2 text-sm uppercase tracking-wider text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-onDark"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute left-0 right-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-line-onDark bg-navy-deep px-4 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  mobile
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
