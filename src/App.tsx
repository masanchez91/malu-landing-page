import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LegalRouter } from './components/LegalRouter';

type PageType = 'privacy' | 'terms' | 'cookies' | 'gdpr' | 'guides' | 'support' | 'status' | 'about' | 'blog' | 'careers' | 'contact' | 'features' | 'integrations' | 'security' | 'pricing' | 'beta' | null;

function App() {
  const { t, i18n } = useTranslation();
  const [activePage, setActivePage] = useState<PageType>(null);

  useEffect(() => {
    // Set initial language in document
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLegalClick = (page: 'privacy' | 'terms' | 'cookies' | 'gdpr') => {
    setActivePage(page);
  };

  const handleResourceClick = (page: 'guides' | 'support' | 'status') => {
    setActivePage(page);
  };

  const handleCompanyClick = (page: 'about' | 'blog' | 'careers' | 'contact') => {
    setActivePage(page);
  };

  const handleProductClick = (page: 'features' | 'integrations' | 'security') => {
    setActivePage(page);
  };

  const handlePricingClick = () => {
    setActivePage('pricing');
  };

  const handleBetaClick = () => {
    setActivePage('beta');
  };

  const closePage = () => {
    setActivePage(null);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 antialiased">
        <Helmet>
          <title>{t('seo.title').toString()}</title>
          <meta name="description" content={t('seo.description').toString()} />
          <meta property="og:title" content={t('seo.title').toString()} />
          <meta property="og:description" content={t('seo.description').toString()} />
          <meta property="twitter:title" content={t('seo.title').toString()} />
          <meta property="twitter:description" content={t('seo.description').toString()} />
        </Helmet>

        {/* Pages overlay */}
        <LegalRouter activePage={activePage} onClose={closePage} />

        {/* Main content */}
        <div className={activePage ? 'hidden' : 'block'}>
            <Header onPricingClick={handlePricingClick} onBetaClick={handleBetaClick} />
          
          <main className="max-w-7xl mx-auto px-6 pb-24">
            <Hero />
            <Features />
            <DashboardPreview />
            <CTA />
          </main>
          
          <Footer onLegalClick={handleLegalClick} onResourceClick={handleResourceClick} onCompanyClick={handleCompanyClick} onProductClick={handleProductClick} />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
