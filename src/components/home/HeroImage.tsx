import Image from "next/image";
import { HERO_IMAGE } from "@/lib/content/home";
import { StampLabel } from "@/components/brand/StampLabel";

/**
 * Homepage hero image area.
 * TODO: Replace placeholder with original Community IP boy maker image from WordPress.
 *       Update HERO_IMAGE.src in src/lib/content/home.ts
 */
export function HeroImage() {
  return (
    <div className="relative">
      <div className="patent-file relative overflow-hidden p-3 sm:p-4">
        <div className="relative aspect-[4/3] overflow-hidden border border-navy-900/15 bg-cream-50">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 50vw"
            priority
          />
          {HERO_IMAGE.placeholder && (
            <div className="absolute inset-x-0 bottom-0 bg-navy-900/70 px-4 py-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-cream/90">
                Placeholder — replace with boy maker image
              </p>
            </div>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <StampLabel variant="idea">Idea</StampLabel>
          <StampLabel variant="prototype">Maker</StampLabel>
          <StampLabel variant="community">Community</StampLabel>
        </div>
      </div>
    </div>
  );
}
