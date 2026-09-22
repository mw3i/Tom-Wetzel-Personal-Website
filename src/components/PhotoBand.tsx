import type { ReactNode } from "react";

import { getImage } from "@/lib/data";
import type { ImageKey } from "@/lib/types";

interface PhotoBandProps {
  imageKey: ImageKey;
  alt: string;
  children: ReactNode;
  minHeight?: "xsmall" | "small" | "medium" | "large";
  align?: "start" | "center";
  /**
   * Two `background-attachment: fixed` sections visible on screen at once
   * causes a janky shake in some browsers while scrolling between them.
   * Set false on a band that sits close to another fixed one (e.g. the
   * second of two stacked hero photos) to use a normal scrolling background
   * instead.
   */
  parallax?: boolean;
}

const heightClass: Record<NonNullable<PhotoBandProps["minHeight"]>, string> = {
  xsmall: "min-h-[26vh] md:min-h-[30vh]",
  small: "min-h-[36vh] md:min-h-[42vh]",
  medium: "min-h-[46vh] md:min-h-[54vh]",
  large: "min-h-[64vh] md:min-h-[78vh]",
};

/**
 * Full-bleed photo section with a navy scrim, so every real photo on the
 * site reads as part of the same blue palette regardless of its own
 * lighting/colors. The background is a fixed (not scrolling-with-page)
 * CSS background-image, so content scrolls over a static image — the
 * classic parallax-ish hero effect. (`bg-fixed` degrades gracefully to a
 * normal scrolling background on browsers/platforms that don't support
 * fixed attachment, e.g. iOS Safari — no breakage, just no effect there.)
 * The header is a fixed overlay, so top padding here clears it.
 */
export function PhotoBand({
  imageKey,
  alt,
  children,
  minHeight = "medium",
  align = "center",
  parallax = true,
}: PhotoBandProps) {
  const src = getImage(imageKey);
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className={`relative overflow-hidden ${heightClass[minHeight]}`}>
      {src && (
        <div
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
          className={`absolute inset-0 bg-cover bg-center ${parallax ? "bg-fixed" : "bg-scroll"}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/65 to-navy-deep/85" />
      <div
        className={`relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 pb-16 pt-28 ${alignment}`}
      >
        {children}
      </div>
    </section>
  );
}
