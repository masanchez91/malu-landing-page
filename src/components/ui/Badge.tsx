interface BadgeProps {
  label: string;
  value: string;
  className?: string;
}

export function Badge({ label, value, className = "" }: BadgeProps) {
  return (
    <div className={`flex items-center gap-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="w-10 h-10 rounded-md bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        {value.split(" ")[0]}
      </div>
      <div className="text-xs text-neutral-600 dark:text-neutral-400">
        {label}
      </div>
    </div>
  );
}
