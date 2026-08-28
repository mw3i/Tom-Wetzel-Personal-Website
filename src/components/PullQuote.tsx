import type { Book } from "@/lib/types";

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="ml-0.5 inline-block h-[0.6em] w-[0.6em] align-super"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The book's pull-quote, with the author credited alongside any other
 * books of theirs (each linking out, marked with a small external-link
 * icon). Shared by the Home and Book pages. */
export function PullQuote({ book }: { book: Book }) {
  if (!book.pullQuote) return null;

  const works = book.pullQuoteAuthorWorks ?? [];

  return (
    <div className="border-b border-line bg-navy">
      <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-20">
        <p className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
          &ldquo;{book.pullQuote}&rdquo;
        </p>
        {book.pullQuoteAuthor && (
          <p className="mt-4 text-sm uppercase tracking-[0.15em] text-steel">
            {book.pullQuoteAuthor}
            {works.length > 0 && (
              <>
                , author of{" "}
                {works.map((work, index) => (
                  <span key={work.title}>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                      className="italic normal-case tracking-normal text-badge-light transition-colors hover:text-ink"
                    >
                      {work.title}
                      <ExternalLinkIcon />
                    </a>
                    {index < works.length - 2 && ", "}
                    {index === works.length - 2 && " and "}
                  </span>
                ))}
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
