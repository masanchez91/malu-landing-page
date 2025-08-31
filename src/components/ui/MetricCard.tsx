interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  className?: string;
}

export function MetricCard({ title, value, subtitle, className = "" }: MetricCardProps) {
  return (
    <div className={`rounded-lg p-4 bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}>
      <div className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-medium">
        {title}
      </div>
      <div className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
        {value}
      </div>
      {subtitle && (
        <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
          {subtitle}
        </div>
      )}
    </div>
  );
}
