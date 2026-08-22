import Link from "next/link";

import { getSite } from "@/lib/data";
import { navItems } from "@/lib/navigation";

export function Footer() {
  const site = getSite();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy-deep">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-2xl text-paper">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-paper-soft">
            {site.title}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent-onDark">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper-soft transition-colors hover:text-accent-onDark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-onDark px-6 py-4 text-center text-xs text-paper-soft/70">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
