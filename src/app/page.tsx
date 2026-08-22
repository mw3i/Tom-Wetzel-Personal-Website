import type { Metadata } from "next";
import Link from "next/link";

import { BookCover } from "@/components/BookCover";
import { PhotoBand } from "@/components/PhotoBand";
import { Section } from "@/components/Section";
import { getBook, getSite } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Tom Wetzel is the Chief of Police for University Circle, Ohio, and author of \"A Cop and a Coffee Cup.\"",
  path: "/",
});

export default function Home() {
  const site = getSite();
  const book = getBook();

  return (
    <>
      {/* Book hero */}
      <PhotoBand imageKey="hero-home" alt="Tom Wetzel" minHeight="large" align="start">
        <div className="grid w-full gap-12 sm:grid-cols-2 sm:items-center sm:gap-16">
          <div className="order-2 sm:order-1">
            <p className="section-label-onDark">{site.title}</p>
            <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
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
              className="mt-8 inline-block rounded-sm bg-badge px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-badge-light"
            >
              {book.buyLabel}
            </a>
          </div>
          <div className="order-1 mx-auto w-full max-w-xs sm:order-2 sm:max-w-none">
            <BookCover book={book} />
          </div>
        </div>
      </PhotoBand>

      {/* Pull quote */}
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

      {/* About Tom teaser */}
      <PhotoBand imageKey="home-about-teaser-bg" alt="" minHeight="medium" parallax={false}>
        <p className="section-label-onDark">About</p>
        <h2 className="prose-heading mt-4 max-w-2xl text-3xl text-paper sm:text-4xl">
          Community policing, in practice
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft">
          Tom Wetzel is the Chief of Police for University Circle, Ohio — with
          a career built on the belief that a department&apos;s first job is
          serving the community it protects.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block rounded-sm bg-badge px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-badge-light"
        >
          About
        </Link>
      </PhotoBand>

      {/* Media / Articles split row */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/media"
            className="group rounded-sm border border-line bg-surface p-8 transition-colors hover:border-badge-light/50 hover:bg-surface-soft"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-badge-light">
              Media
            </p>
            <p className="prose-heading mt-3 text-2xl text-ink group-hover:text-badge-light">
              News, podcasts &amp; interviews
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Watch and listen to Tom&apos;s recent appearances.
            </p>
          </Link>
          <Link
            href="/articles"
            className="group rounded-sm border border-line bg-surface p-8 transition-colors hover:border-badge-light/50 hover:bg-surface-soft"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-badge-light">
              Articles
            </p>
            <p className="prose-heading mt-3 text-2xl text-ink group-hover:text-badge-light">
              Writing &amp; commentary
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              A collection of articles written by and about Tom.
            </p>
          </Link>
        </div>
      </Section>
    </>
  );
}
