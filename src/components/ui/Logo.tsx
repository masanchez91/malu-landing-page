import { useTranslation } from 'react-i18next';

interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const { t } = useTranslation();
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-12 h-12', text: 'text-xl' },
    lg: { icon: 'w-16 h-16', text: 'text-2xl' }
  };

  const iconClass = `flex items-center justify-center ${sizes[size].icon} rounded-2xl bg-gradient-to-br from-neutral-900 dark:from-neutral-100 to-primary-500 text-white dark:text-neutral-900 font-bold`;

  if (variant === 'icon') {
    return (
      <div className={`${iconClass} ${className}`}>
        M
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={iconClass}>
        M
      </div>
      <div>
        <h1 className={`${sizes[size].text} font-semibold text-neutral-900 dark:text-white`}>
          Malú
        </h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">
          {t('common.tagline')}
        </p>
      </div>
    </div>
  );
}
