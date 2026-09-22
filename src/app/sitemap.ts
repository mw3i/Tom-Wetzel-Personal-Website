import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const paths = ["/", "/book", "/seminars", "/articles", "/media", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));
}
