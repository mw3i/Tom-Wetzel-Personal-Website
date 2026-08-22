import type { Metadata } from "next";

import { getSite } from "./data";

/**
 * Two envs, set at build time:
 *  - Local dev: neither var is set, so the site behaves as if root-served at "/".
 *  - Production (no custom domain yet): CI sets both to the github.io/<repo> URL.
 *  - Production (custom domain, later): drop NEXT_PUBLIC_BASE_PATH, point
 *    NEXT_PUBLIC_SITE_URL at the real domain, add public/CNAME.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const site = getSite();
  const url = absoluteUrl(path);
  const pageTitle = path === "/" ? `${site.name} — ${site.title}` : title;

  return {
    title: path === "/" ? { absolute: pageTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: path === "/" ? pageTitle : `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? pageTitle : `${title} | ${site.name}`,
      description,
    },
  };
}
