import { GetInvolvedCards } from "@/components/GetInvolvedCards";

export function GetInvolvedBand() {
  return (
    <section className="section-editorial border-b border-community-700/10 bg-white">
      <div className="section-wide">
        <div className="max-w-2xl">
          <p className="eyebrow">Get involved</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance">
            Ways to connect with Community IP
          </h2>
          <p className="prose-lead mt-4">
            Whether you need help, want to volunteer, explore a partnership, or
            support our mission — start here.
          </p>
        </div>
        <GetInvolvedCards className="mt-10" />
      </div>
    </section>
  );
}
