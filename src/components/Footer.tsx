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
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
