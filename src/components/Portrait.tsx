import Image from "next/image";

import { getImage } from "@/lib/data";

import { BadgeMark } from "./BadgeMark";

/** Real portrait once available in data/images.json; a designed stand-in until then. */
export function Portrait({
  imageKey,
  alt,
}: {
  imageKey: string;
  alt: string;
}) {
  const src = getImage(imageKey);

  if (src) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-gradient-to-br from-white to-surface-soft"
      role="img"
      aria-label={`${alt} — photo coming soon`}
    >
      <BadgeMark className="h-16 w-16 text-badge-light/60" />
    </div>
  );
}
