import type { Metadata } from "next";

import { MediaCard } from "@/components/MediaCard";
import { PhotoBand } from "@/components/PhotoBand";
import { Section } from "@/components/Section";
import { getMediaAppearances } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Media",
  description:
    "News appearances, podcast episodes, and interviews featuring Tom Wetzel.",
  path: "/media",
});

export default function MediaPage() {
  const appearances = getMediaAppearances();

  return (
    <>
      <PhotoBand imageKey="hero-home" alt="Tom Wetzel" minHeight="small" align="start">
        <p className="section-label-onDark">Media</p>
        <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
          News, podcasts &amp; interviews
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft">
          Recent news appearances, podcast episodes, and interviews.
        </p>
      </PhotoBand>

      <Section>
        <div className="divide-y divide-line border-t border-line">
          {appearances.map((appearance) => (
            <MediaCard key={appearance.id} appearance={appearance} />
          ))}
        </div>
      </Section>
    </>
  );
}
