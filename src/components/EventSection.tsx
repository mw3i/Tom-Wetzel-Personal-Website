import Image from "next/image";

import { getImage } from "@/lib/data";
import type { Event } from "@/lib/types";

export function EventSection({ event }: { event: Event }) {
  if (!event.active) return null;

  const flyer = getImage(event.image);

  return (
    <section className="border-b border-line bg-navy">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:grid-cols-2 sm:items-start sm:gap-16 md:py-24">
        <div>
          <p className="section-label">Upcoming Event</p>
          <h2 className="prose-heading mt-4 text-3xl leading-tight text-ink sm:text-4xl">
            {event.title}
          </h2>
          <p className="mt-2 font-display text-lg italic text-steel">
            {event.subtitle}
          </p>

          <p className="mt-6 text-lg font-medium leading-relaxed text-ink">
            {event.dateLine}
          </p>
          <p className="mt-1 text-lg leading-relaxed text-ink-soft">
            {event.location}
            <br />
            {event.room}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.15em] text-badge-light">
            {event.registrationNote}
          </p>

          <div className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-ink-soft">
            <p>{event.address}</p>
            <p className="mt-1">
              <a
                href={event.website}
                target="_blank"
                rel="noreferrer"
                className="text-badge-light transition-colors hover:text-ink"
              >
                {event.websiteLabel}
              </a>{" "}
              | {event.phone}
            </p>
          </div>

          {event.mapEmbedUrl && (
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-sm border border-line">
              <iframe
                src={event.mapEmbedUrl}
                title={`Map to ${event.location}`}
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          )}
        </div>

        <div className="mx-auto w-full max-w-sm">
          {flyer && (
            <div className="relative aspect-[1170/1832] w-full overflow-hidden rounded-sm shadow-lg shadow-ink/10">
              <Image
                src={flyer}
                alt={`${event.title} event flyer`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
