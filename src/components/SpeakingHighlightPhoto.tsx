import Image from "next/image";

import { getImage } from "@/lib/data";
import type { SpeakingHighlight } from "@/lib/types";

/** Just the photo(s) for a speaking highlight — pair, single, or nothing
 * (text-only entry). Caption is rendered separately by the caller so it can
 * share a grid row with sibling highlights and end up the same height. */
export function SpeakingHighlightPhoto({
  highlight,
}: {
  highlight: SpeakingHighlight;
}) {
  const [topRightKey, bottomLeftKey] = highlight.images ?? [];
  const topRight = topRightKey ? getImage(topRightKey) : null;
  const bottomLeft = bottomLeftKey ? getImage(bottomLeftKey) : null;
  const single = highlight.image ? getImage(highlight.image) : null;

  if (topRight || bottomLeft) {
    return (
      <div className="relative aspect-[25/16] w-full">
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
    );
  }

  if (single) {
    return (
      <div className="relative aspect-[1600/1128] w-2/3 overflow-hidden rounded-sm shadow-lg shadow-ink/20">
        <Image src={single} alt="" fill className="object-cover" />
      </div>
    );
  }

  return null;
}
