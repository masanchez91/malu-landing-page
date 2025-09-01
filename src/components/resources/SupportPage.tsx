import { useTranslation } from 'react-i18next';

export function SupportPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('resources.support.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('resources.support.subtitle')}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            {t('resources.support.faqTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ Items */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                {t('resources.support.faq1.question')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('resources.support.faq1.answer')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                {t('resources.support.faq2.question')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('resources.support.faq2.answer')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                {t('resources.support.faq3.question')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('resources.support.faq3.answer')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                {t('resources.support.faq4.question')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('resources.support.faq4.answer')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                {t('resources.support.faq5.question')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('resources.support.faq5.answer')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                {t('resources.support.faq6.question')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('resources.support.faq6.answer')}
              </p>
            </div>
          </div>
        </div>

        {/* Problemas Comunes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            {t('resources.support.commonIssuesTitle')}
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.support.issue1.title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    {t('resources.support.issue1.description')}
                  </p>
                  <div className="text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>{t('resources.support.solution')}:</strong> {t('resources.support.issue1.solution')}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.support.issue2.title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    {t('resources.support.issue2.description')}
                  </p>
                  <div className="text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>{t('resources.support.solution')}:</strong> {t('resources.support.issue2.solution')}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.support.issue3.title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    {t('resources.support.issue3.description')}
                  </p>
                  <div className="text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>{t('resources.support.solution')}:</strong> {t('resources.support.issue3.solution')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto de Soporte */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              {t('resources.support.contactTitle')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              {t('resources.support.contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('resources.support.emailSupport')}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                mauro@holy-code.com
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t('resources.support.responseTime')}: 24-48h
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('resources.support.businessHours')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {t('resources.support.hours')}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                GMT-6 (México)
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('resources.support.urgentIssues')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {t('resources.support.urgentDesc')}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t('resources.support.urgentNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
