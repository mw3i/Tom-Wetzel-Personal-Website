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
  const video = bio.speaking.video;

  return (
    <>
      <PhotoBand imageKey="hero-about" alt="" minHeight="small" align="start">
        <p className="section-label-onDark">Speaking &amp; Consulting</p>
        <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
          Leadership Seminars
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper">
          {bio.speaking.summary}
        </p>
      </PhotoBand>

      {bio.speaking.testimonial && (
        <div className="bg-navy">
          <div
            className={`mx-auto max-w-5xl px-6 py-14 sm:py-20 ${
              video
                ? "grid items-center gap-10 sm:grid-cols-2 sm:gap-14"
                : "max-w-3xl text-center"
            }`}
          >
            {video && (
              <div className="w-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-navy-deep shadow-lg shadow-ink/20">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=560&height=315`}
                    title={video.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-center text-xs uppercase tracking-[0.15em] text-badge-light transition-colors hover:text-ink"
                >
                  Watch on Facebook
                </a>
              </div>
            )}
            <div className={video ? "text-center sm:text-left" : ""}>
              <p className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
                &ldquo;{bio.speaking.testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.15em] text-steel">
                {bio.speaking.testimonial.author}
              </p>
            </div>
          </div>
          <hr className="mx-auto w-2/5 border-line" />
        </div>
      )}

      <Section>
        {bio.speaking.highlights && bio.speaking.highlights.length > 0 && (
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
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
