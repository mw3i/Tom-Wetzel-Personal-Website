import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const paths = ["/", "/about", "/articles", "/media", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));
}
