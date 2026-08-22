import Image from "next/image";

import { getImage } from "@/lib/data";
import type { Book } from "@/lib/types";

import { BadgeMark } from "./BadgeMark";

/** Real cover art once available in data/images.json; a designed stand-in until then. */
export function BookCover({ book }: { book: Book }) {
  const src = getImage(book.coverImage);

  if (src) {
    return (
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm shadow-2xl shadow-black/40">
        <Image src={src} alt={`${book.title} cover`} fill className="object-cover" priority />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-sm border border-line bg-gradient-to-br from-white via-surface to-surface-soft p-6 shadow-xl shadow-ink/10 sm:p-8"
      role="img"
      aria-label={`${book.title} — cover art coming soon`}
    >
      <BadgeMark className="h-9 w-9 text-badge-light/80" />
      <div>
        <p className="font-display text-2xl leading-tight text-ink sm:text-3xl">
          {book.title}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-steel">
          Tom Wetzel
        </p>
      </div>
    </div>
  );
}
