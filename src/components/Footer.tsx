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
          {site.footerVerse && (
            <blockquote className="mt-5 border-l-2 border-accent-onDark/40 pl-4">
              <p className="font-display text-base italic leading-snug text-paper-soft">
                &ldquo;{site.footerVerse.text}&rdquo;
              </p>
              <cite className="mt-1 block text-xs not-italic uppercase tracking-[0.15em] text-accent-onDark">
                {site.footerVerse.reference}
              </cite>
            </blockquote>
          )}
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
        {site.builderCredit && (
          <>
            {" "}
            &middot; Site by{" "}
            <a
              href={site.builderCredit.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-accent-onDark"
            >
              {site.builderCredit.name}
            </a>
          </>
        )}
      </div>
    </footer>
  );
}
