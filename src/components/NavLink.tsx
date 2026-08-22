"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  onNavigate?: () => void;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ href, label, mobile = false, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  const tone = active
    ? "bg-paper/10 text-accent-onDark"
    : "text-paper/75 hover:bg-paper/5 hover:text-accent-onDark";

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        mobile
          ? `prose-heading block rounded px-3 py-2 text-3xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-onDark ${tone}`
          : `rounded px-3 py-2 text-sm uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-onDark ${tone}`
      }
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
