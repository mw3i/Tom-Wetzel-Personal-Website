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
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded border border-line-onDark text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-onDark"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative block h-5 w-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ease-in-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <nav
        id="mobile-nav"
        aria-label="Main"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-navy-deep px-8 transition-opacity duration-300 ease-in-out ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={`transition-all duration-300 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
            >
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
    </div>
  );
}
