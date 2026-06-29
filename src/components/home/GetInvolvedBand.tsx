import { GetInvolvedCards } from "@/components/GetInvolvedCards";
import { home } from "@/lib/content/home";

export function GetInvolvedBand() {
  const { getInvolved } = home;

  return (
    <section className="section-editorial border-b border-community-700/10 bg-white">
      <div className="section-wide">
        <div className="max-w-2xl">
          <p className="eyebrow">{getInvolved.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance">
            {getInvolved.title}
          </h2>
          <p className="prose-lead mt-4">{getInvolved.description}</p>
        </div>
        <GetInvolvedCards className="mt-10" />
      </div>
    </section>
  );
}
