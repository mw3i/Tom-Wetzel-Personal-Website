import type { Metadata } from "next";
import Image from "next/image";

import { MediaCard } from "@/components/MediaCard";
import { PhotoBand } from "@/components/PhotoBand";
import { PullQuote } from "@/components/PullQuote";
import { Section } from "@/components/Section";
import { getBook, getImage, getMediaAppearances } from "@/lib/data";
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
  const diagram = getImage("book-motivation-diagram");
  const coverArt = getImage("book-cover-art");

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
          <div className="grid gap-10 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:items-center sm:gap-16">
            <p className="text-lg leading-relaxed text-ink-soft">
              {book.longDescription}
            </p>
            {diagram && (
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                  <Image
                    src={diagram}
                    alt="Motivation vs. discipline diagram"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="mt-2 text-right text-xs text-steel">&copy;</p>
              </div>
            )}
          </div>
        </Section>
      )}

      <PullQuote book={book} />

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

      {coverArt && (
        <Section variant="surface">
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm shadow-lg shadow-ink/10">
              <Image
                src={coverArt}
                alt="Original cover art for A Cop and a Coffee Cup"
                fill
                className="object-cover"
              />
              <p className="absolute inset-x-0 bottom-0 bg-navy-deep/60 py-1.5 text-center text-xs text-paper-soft">
                Cover art by Emma Buda
              </p>
            </div>
            <div />
          </div>
        </Section>
      )}
    </>
  );
}
