import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import { getBio, getImage, getSite } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "About Tom Wetzel, Chief of Police for University Circle, Ohio.",
  path: "/about",
});

const offDuty = [
  {
    imageKey: "about-beachwood",
    caption: "Early days — Beachwood PD",
  },
  {
    imageKey: "about-dinosaur",
    caption: "Never too serious for a photo op",
  },
  {
    imageKey: "about-chicken",
    caption: "World famous chicken",
  },
  {
    imageKey: "about-tk4",
    caption: undefined,
  },
  {
    imageKey: "about-vr-training",
    caption: undefined,
  },
  {
    imageKey: "about-police-academy",
    caption: undefined,
  },
  {
    imageKey: "about-richmond-heights-pd",
    caption: undefined,
  },
  {
    imageKey: "about-beachwood-pd",
    caption: undefined,
  },
  {
    imageKey: "about-coaching-basketball",
    caption: undefined,
  },
  {
    imageKey: "about-skate-night",
    caption: undefined,
  },
  {
    imageKey: "about-governor-visit",
    caption: undefined,
  },
  {
    imageKey: "about-news-interview",
    caption: undefined,
  },
] as const;

export default function AboutPage() {
  const site = getSite();
  const bio = getBio();
  const teamPhoto = getImage("about-team");

  return (
    <>
      {/* About + bio + philosophy + timeline, on a dimmed team-photo background */}
      <section className="relative overflow-hidden">
        {teamPhoto && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-fixed bg-cover"
            style={{ backgroundImage: `url(${teamPhoto})`, backgroundPosition: "center 20%" }}
          />
        )}
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-28 md:pb-24 md:pt-32">
          <div className="grid gap-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:items-start sm:gap-16">
            <div>
              <p className="section-label-onDark">About</p>
              <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-paper-soft">
                {site.title}
              </p>
            </div>
            <div>
              <h2 className="prose-heading text-3xl text-paper sm:text-4xl">
                A career in service
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft">
                {bio.summary}
              </p>
              {bio.philosophy && (
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper-soft">
                  {bio.philosophy}
                </p>
              )}

              <ol className="mt-8 space-y-4 border-l border-line-onDark pl-6">
                {bio.timeline.map((entry) => (
                  <li key={`${entry.organization}-${entry.role}`}>
                    <p className="text-sm font-medium text-paper">
                      {entry.role}, {entry.organization}
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-paper-soft">
                      {entry.period}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Off duty gallery */}
      <Section variant="surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offDuty.map((item) => {
            const src = getImage(item.imageKey);
            if (!src) return null;
            return (
              <div key={item.imageKey}>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt={item.caption ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>
                {item.caption && (
                  <p className="mt-3 text-center text-sm text-ink-soft">
                    {item.caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
