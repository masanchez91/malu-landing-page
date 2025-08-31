import { useTranslation } from 'react-i18next';

export function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">
            {t('legal.cookies.title')}
          </h1>
          
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            {t('legal.cookies.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.cookies.section1.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('legal.cookies.section1.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.cookies.section2.title')}
            </h2>
            <div className="space-y-4">
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {t('legal.cookies.section2.essential.title')}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  {t('legal.cookies.section2.essential.content')}
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {t('legal.cookies.section2.analytics.title')}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  {t('legal.cookies.section2.analytics.content')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.cookies.section3.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('legal.cookies.section3.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('legal.cookies.contact.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('legal.cookies.contact.content')}
            </p>
            <p className="text-primary-600 dark:text-primary-400 mt-2">
              Email: mauro@holy-code.com
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
              Basado en México, sirviendo a LATAM
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
