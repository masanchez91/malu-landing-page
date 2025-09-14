import { useState } from 'react';
import { PrivacyPolicy } from './legal/PrivacyPolicy';
import { TermsOfService } from './legal/TermsOfService';
import { CookiePolicy } from './legal/CookiePolicy';
import { GDPRCompliance } from './legal/GDPRCompliance';
import { GuidesPage } from './resources/GuidesPage';
import { SupportPage } from './resources/SupportPage';
import { StatusPage } from './resources/StatusPage';
import { AboutPage } from './company/AboutPage';
import { BlogPage } from './company/BlogPage';
import { CareersPage } from './company/CareersPage';
import { ContactPage } from './company/ContactPage';
import { FeaturesPage } from './product/FeaturesPage';
import { IntegrationsPage } from './product/IntegrationsPage';
import { SecurityPage } from './product/SecurityPage';
import { PricingPage } from './pricing/PricingPage';
import { BetaPage } from './beta/BetaPage';

type PageType = 'privacy' | 'terms' | 'cookies' | 'gdpr' | 'guides' | 'support' | 'status' | 'about' | 'blog' | 'careers' | 'contact' | 'features' | 'integrations' | 'security' | 'pricing' | 'beta' | null;

interface LegalRouterProps {
  activePage: PageType;
  onClose: () => void;
}

export function LegalRouter({ activePage, onClose }: LegalRouterProps) {
  if (!activePage) return null;

  const renderPage = () => {
    switch (activePage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'cookies':
        return <CookiePolicy />;
      case 'gdpr':
        return <GDPRCompliance />;
      case 'guides':
        return <GuidesPage />;
      case 'support':
        return <SupportPage />;
      case 'status':
        return <StatusPage />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      case 'features':
        return <FeaturesPage />;
      case 'integrations':
        return <IntegrationsPage />;
      case 'security':
        return <SecurityPage />;
      case 'pricing':
        return <PricingPage />;
      case 'beta':
        return <BetaPage onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 overflow-y-auto">
      {/* Close button - Solo mostrar para páginas que no sean beta */}
      {activePage !== 'beta' && (
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200/50 dark:border-neutral-800/50 px-6 py-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Page content */}
      {renderPage()}
    </div>
  );
}
