import Image from "next/image";

import { getImage } from "@/lib/data";
import type { SpeakingHighlight } from "@/lib/types";

export function SpeakingHighlightCard({
  highlight,
}: {
  highlight: SpeakingHighlight;
}) {
  const [topRightKey, bottomLeftKey] = highlight.images;
  const topRight = getImage(topRightKey);
  const bottomLeft = getImage(bottomLeftKey);

  return (
    <div>
      <div className="relative aspect-[5/4] w-full">
        {topRight && (
          <div className="absolute right-0 top-0 z-10 aspect-[4/3] w-3/5 overflow-hidden rounded-sm shadow-lg shadow-ink/20">
            <Image src={topRight} alt="" fill className="object-cover" />
          </div>
        )}
        {bottomLeft && (
          <div className="absolute bottom-0 left-0 z-20 aspect-[4/3] w-3/5 overflow-hidden rounded-sm border-4 border-navy shadow-lg shadow-ink/20">
            <Image src={bottomLeft} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        {highlight.caption}
      </p>
    </div>
  );
}
