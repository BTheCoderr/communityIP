import Image from "next/image";
import { HERO_IMAGE } from "@/lib/content/home";
import { StampLabel } from "@/components/brand/StampLabel";

export function HeroImage() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-sm border-2 border-community-700/15 bg-cream-50 shadow-[6px_6px_0_0_rgba(20,83,45,0.1)]">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 50vw"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-community-900/20 via-transparent to-transparent" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <StampLabel variant="idea">Idea</StampLabel>
        <StampLabel variant="prototype">Maker</StampLabel>
        <StampLabel variant="community">Community</StampLabel>
      </div>
    </div>
  );
}
