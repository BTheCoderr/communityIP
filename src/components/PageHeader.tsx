interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blueprint-600">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl text-balance">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-navy-800/75 text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
