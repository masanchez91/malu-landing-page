import { useTranslation } from 'react-i18next';

export function StatusPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('resources.status.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('resources.status.subtitle')}
          </p>
        </div>

        {/* Status Overview */}
        <div className="mb-12">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">
                {t('resources.status.allSystemsOperational')}
              </h2>
            </div>
            <p className="text-emerald-700 dark:text-emerald-300">
              {t('resources.status.operationalDesc')}
            </p>
          </div>
        </div>

        {/* System Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            {t('resources.status.systemComponents')}
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.webApplication')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {t('resources.status.webAppDesc')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    {t('resources.status.operational')}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    Uptime: 99.9%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.database')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {t('resources.status.databaseDesc')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    {t('resources.status.operational')}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t('resources.status.responseTime')}: 45ms
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.notifications')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {t('resources.status.notificationsDesc')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    {t('resources.status.operational')}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t('resources.status.deliveryRate')}: 99.5%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.fileStorage')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {t('resources.status.fileStorageDesc')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    {t('resources.status.operational')}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t('resources.status.availability')}: 100%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            {t('resources.status.roadmapTitle')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-600 dark:text-accent-400 font-bold text-sm">Q3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.status.q3Title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {t('resources.status.q3Description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs rounded-full">
                      {t('resources.status.bankIntegrations')}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      {t('resources.status.paymentGateways')}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  2025
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">Q4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.status.q4Title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {t('resources.status.q4Description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">
                      {t('resources.status.aiPredictions')}
                    </span>
                    <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 text-xs rounded-full">
                      {t('resources.status.automation')}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  2025
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">Q1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.status.q1Title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {t('resources.status.q1Description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs rounded-full">
                      {t('resources.status.advancedReports')}
                    </span>
                    <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-xs rounded-full">
                      {t('resources.status.dataExport')}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  2026
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary-600 dark:text-secondary-400 font-bold text-sm">Q2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {t('resources.status.q2Title')}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {t('resources.status.q2Description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                      iOS & Android
                    </span>
                    <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-xs rounded-full">
                      {t('resources.status.pushNotifications')}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            {t('resources.status.recentUpdates')}
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.update1.title')}
                    </h3>
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs rounded-full">
                      {t('resources.status.improvement')}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t('resources.status.update1.description')}
                  </p>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.update2.title')}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      {t('resources.status.newFeature')}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t('resources.status.update2.description')}
                  </p>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t('resources.status.update3.title')}
                    </h3>
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-xs rounded-full">
                      {t('resources.status.bugFix')}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t('resources.status.update3.description')}
                  </p>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
