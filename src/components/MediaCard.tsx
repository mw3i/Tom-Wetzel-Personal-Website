import { formatDate } from "@/lib/format";
import type { MediaAppearance, MediaType } from "@/lib/types";

const typeLabel: Record<MediaType, string> = {
  news: "News",
  podcast: "Podcast",
  interview: "Interview",
  review: "Book Review",
};

export function MediaCard({ appearance }: { appearance: MediaAppearance }) {
  return (
    <a
      href={appearance.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-3 py-6 transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-badge-light sm:-mx-4 sm:flex-row sm:items-center sm:gap-6 sm:px-4"
    >
      <div className="flex items-center gap-3 sm:w-28 sm:shrink-0 sm:flex-col sm:items-start sm:gap-2">
        <span className="rounded-full border border-badge-light/30 px-2.5 py-1 text-xs uppercase tracking-[0.15em] text-badge-light">
          {typeLabel[appearance.type]}
        </span>
        <p className="text-xs text-steel">{formatDate(appearance.date)}</p>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-steel">
          {appearance.outlet}
        </p>
        <p className="prose-heading mt-1 text-xl text-ink transition-colors group-hover:text-badge-light sm:text-2xl">
          {appearance.title}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {appearance.description}
        </p>
      </div>
      {appearance.thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={appearance.thumbnail}
          alt=""
          className="h-32 w-full shrink-0 rounded-sm object-cover sm:h-16 sm:w-28"
        />
      )}
    </a>
  );
}
