interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 font-heading text-lg font-bold text-white">
        {step}
      </div>
      <h3 className="font-heading text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
