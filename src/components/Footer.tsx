import { useTranslation } from 'react-i18next';
import { Logo } from './ui/Logo';

interface FooterProps {
  onLegalClick?: (page: 'privacy' | 'terms' | 'cookies' | 'gdpr') => void;
  onResourceClick?: (page: 'guides' | 'support' | 'status') => void;
  onCompanyClick?: (page: 'about' | 'blog' | 'careers' | 'contact') => void;
  onProductClick?: (page: 'features' | 'integrations' | 'security') => void;
}

export function Footer({ onLegalClick, onResourceClick, onCompanyClick, onProductClick }: FooterProps) {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: t('footer.links.features'), href: '#features', action: 'features' as const },
      { name: t('footer.links.integrations'), href: '#integrations', action: 'integrations' as const },
      { name: t('footer.links.security'), href: '#security', action: 'security' as const }
    ] as Array<{ name: string; href: string; action?: 'features' | 'integrations' | 'security' }>,
    company: [
      { name: t('footer.links.about'), href: '#about', action: 'about' as const },
      { name: t('footer.links.blog'), href: '#blog', action: 'blog' as const },
      { name: t('footer.links.careers'), href: '#careers', action: 'careers' as const },
      { name: t('footer.links.contact'), href: '#contact', action: 'contact' as const }
    ] as Array<{ name: string; href: string; action?: 'about' | 'blog' | 'careers' | 'contact' }>,
    resources: [
      { name: t('footer.links.guides'), href: '#guides', action: 'guides' as const },
      { name: t('footer.links.support'), href: '#support', action: 'support' as const },
      { name: t('footer.links.status'), href: '#status', action: 'status' as const }
    ] as Array<{ name: string; href: string; action?: 'guides' | 'support' | 'status' }>,
    legal: [
      { name: t('footer.links.privacy'), href: '#privacy', action: 'privacy' as const },
      { name: t('footer.links.terms'), href: '#terms', action: 'terms' as const },
      { name: t('footer.links.cookies'), href: '#cookies', action: 'cookies' as const },
      { name: t('footer.links.gdpr'), href: '#gdpr', action: 'gdpr' as const }
    ] as Array<{ name: string; href: string; action?: 'privacy' | 'terms' | 'cookies' | 'gdpr' }>
  };

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Links */}
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide mb-4">
              {t('footer.sections.product')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={() => link.action && onProductClick?.(link.action)}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide mb-4">
              {t('footer.sections.company')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={() => link.action && onCompanyClick?.(link.action)}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide mb-4">
              {t('footer.sections.resources')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={() => link.action && onResourceClick?.(link.action)}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide mb-4">
              {t('footer.sections.legal')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                                      <button
                      onClick={() => link.action && onLegalClick?.(link.action)}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-left"
                    >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              © {currentYear} {t('footer.copyright')}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              Desarrollado por{' '}
              <a 
                href="https://holy-code.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                The Holy Code
              </a>
              {' • '}
              <a 
                href="https://holy-code.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                holy-code.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
