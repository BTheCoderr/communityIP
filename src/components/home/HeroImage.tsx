import Image from "next/image";
import { HERO_IMAGE } from "@/lib/content/home";

export function HeroImage() {
  return (
    <figure className="overflow-hidden rounded-2xl shadow-card">
      <div className="relative aspect-[4/3] sm:aspect-[5/4]">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <figcaption className="sr-only">{HERO_IMAGE.alt}</figcaption>
    </figure>
  );
}
