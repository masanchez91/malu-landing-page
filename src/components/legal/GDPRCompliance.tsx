import { useTranslation } from 'react-i18next';

export function GDPRCompliance() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">
            {t('legal.gdpr.title')}
          </h1>
          
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            {t('legal.gdpr.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.gdpr.section1.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('legal.gdpr.section1.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.gdpr.section2.title')}
            </h2>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
              <li>{t('legal.gdpr.section2.right1')}</li>
              <li>{t('legal.gdpr.section2.right2')}</li>
              <li>{t('legal.gdpr.section2.right3')}</li>
              <li>{t('legal.gdpr.section2.right4')}</li>
              <li>{t('legal.gdpr.section2.right5')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.gdpr.section3.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('legal.gdpr.section3.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.gdpr.contact.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('legal.gdpr.contact.content')}
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-primary-600 dark:text-primary-400">
                Email: mauro@holy-code.com
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {t('legal.gdpr.contact.address')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
