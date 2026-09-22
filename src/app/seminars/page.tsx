import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PhotoBand } from "@/components/PhotoBand";
import { Section } from "@/components/Section";
import { SpeakingHighlightPhoto } from "@/components/SpeakingHighlightPhoto";
import { getBio } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Leadership Seminars",
  description:
    "Speaking engagements and leadership consulting with Tom Wetzel, Chief of Police for University Circle, Ohio.",
  path: "/seminars",
});

export default function SeminarsPage() {
  const bio = getBio();

  return (
    <>
      <PhotoBand imageKey="hero-about" alt="" minHeight="xsmall" align="start">
        <p className="section-label-onDark">Speaking &amp; Consulting</p>
        <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
          Leadership Seminars
        </h1>
      </PhotoBand>

      <Section>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
          {bio.speaking.summary}
        </p>

        {bio.speaking.highlights && bio.speaking.highlights.length > 0 && (
          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {/*
              Each highlight is one flex-column item (photo, then caption),
              so mobile order is correct by construction. Grid's default
              row-stretch equalizes card height within a row (h-full +
              flex-1 on the photo wrapper), so captions in the same row
              start at the same offset even when photos differ in aspect
              ratio.
            */}
            {bio.speaking.highlights.map((highlight) => (
              <div key={highlight.caption} className="flex h-full flex-col">
                <div className="flex flex-1 items-center justify-center">
                  <SpeakingHighlightPhoto highlight={highlight} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {highlight.caption}
                </p>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section variant="surface">
        <div className="max-w-xl">
          <h2 className="prose-heading text-3xl text-ink sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Interested in a speaking engagement or leadership consulting?
            Send a message using the form below.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
