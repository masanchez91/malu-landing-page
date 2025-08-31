import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Set initial language in document
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 antialiased">
        <Helmet>
          <title>{t('seo.title')}</title>
          <meta name="description" content={t('seo.description')} />
          <meta property="og:title" content={t('seo.title')} />
          <meta property="og:description" content={t('seo.description')} />
          <meta property="twitter:title" content={t('seo.title')} />
          <meta property="twitter:description" content={t('seo.description')} />
        </Helmet>

        <Header />
        
        <main className="max-w-7xl mx-auto px-6 pb-24">
          <Hero />
          <Features />
          <DashboardPreview />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
