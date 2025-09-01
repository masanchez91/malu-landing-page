import { useTranslation } from 'react-i18next';

export function FeaturesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('product.features.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('product.features.subtitle')}
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Financial Management */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.features.financial.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.features.financial.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('product.features.financial.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('product.features.financial.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('product.features.financial.feature3')}
              </li>
            </ul>
          </div>

          {/* Access Control */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.features.access.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.features.access.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                {t('product.features.access.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                {t('product.features.access.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                {t('product.features.access.feature3')}
              </li>
            </ul>
          </div>

          {/* Communication */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.features.communication.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.features.communication.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('product.features.communication.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('product.features.communication.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('product.features.communication.feature3')}
              </li>
            </ul>
          </div>

          {/* Maintenance */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.features.maintenance.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.features.maintenance.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {t('product.features.maintenance.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {t('product.features.maintenance.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {t('product.features.maintenance.feature3')}
              </li>
            </ul>
          </div>

          {/* Reservations */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.features.reservations.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.features.reservations.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {t('product.features.reservations.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {t('product.features.reservations.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {t('product.features.reservations.feature3')}
              </li>
            </ul>
          </div>

          {/* Analytics */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.features.analytics.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.features.analytics.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {t('product.features.analytics.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {t('product.features.analytics.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {t('product.features.analytics.feature3')}
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('product.features.cta.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {t('product.features.cta.description')}
          </p>
          <a
            href="mailto:mauro@holy-code.com"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('product.features.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}
