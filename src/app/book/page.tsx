import type { Metadata } from "next";

import { MediaCard } from "@/components/MediaCard";
import { PhotoBand } from "@/components/PhotoBand";
import { Section } from "@/components/Section";
import { getBook, getMediaAppearances } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "The Book",
  description:
    "A Cop and a Coffee Cup — plain-spoken wisdom for police leadership, by Chief Tom Wetzel.",
  path: "/book",
});

export default function BookPage() {
  const book = getBook();
  const reviews = getMediaAppearances().filter(
    (appearance) => appearance.type === "review",
  );

  return (
    <>
      <PhotoBand imageKey="about-book-bg" alt="A Cop and a Coffee Cup" minHeight="medium" align="start">
        <p className="section-label-onDark">The Book</p>
        <h1 className="prose-heading mt-4 max-w-2xl text-4xl leading-tight text-paper sm:text-5xl">
          {book.title}
        </h1>
        {book.subtitle && (
          <p className="mt-3 font-display text-lg italic text-paper-soft">
            {book.subtitle}
          </p>
        )}
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-soft">
          {book.shortDescription}
        </p>
        <a
          href={book.buyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-sm bg-badge px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-badge-light"
        >
          {book.buyLabel}
        </a>
      </PhotoBand>

      {book.longDescription && (
        <Section>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            {book.longDescription}
          </p>
        </Section>
      )}

      {book.pullQuote && (
        <div className="border-b border-line bg-navy">
          <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-20">
            <p className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
              &ldquo;{book.pullQuote}&rdquo;
            </p>
            {book.pullQuoteAttribution && (
              <p className="mt-4 text-sm uppercase tracking-[0.15em] text-steel">
                {book.pullQuoteAttribution}
              </p>
            )}
          </div>
        </div>
      )}

      {reviews.length > 0 && (
        <Section variant="surface">
          <p className="section-label">Reviews</p>
          <div className="mt-6 divide-y divide-line border-t border-line">
            {reviews.map((appearance) => (
              <MediaCard key={appearance.id} appearance={appearance} showType={false} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
