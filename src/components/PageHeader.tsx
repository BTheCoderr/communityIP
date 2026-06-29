interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl text-balance">
        {title}
      </h1>
      {description && (
        <p className="prose-lead mt-5 text-balance">{description}</p>
      )}
    </div>
  );
}
