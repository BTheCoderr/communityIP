interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col border-2 border-navy-900/10 bg-cream p-6 shadow-file">
      <div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-navy-900/20 bg-navy-900 font-mono text-sm font-bold text-cream">
        {String(step).padStart(2, "0")}
      </div>
      <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
        {description}
      </p>
    </div>
  );
}
