import { useTranslation } from 'react-i18next';

export function GuidesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('resources.guides.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('resources.guides.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Guía de Inicio Rápido */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {t('resources.guides.quickStart.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('resources.guides.quickStart.description')}
            </p>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('resources.guides.quickStart.step1')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('resources.guides.quickStart.step2')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('resources.guides.quickStart.step3')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                {t('resources.guides.quickStart.step4')}
              </li>
            </ul>
          </div>

          {/* Guía de Roles */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {t('resources.guides.roles.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('resources.guides.roles.description')}
            </p>
            <div className="space-y-3">
              <div className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-3">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
                  {t('resources.guides.roles.superAdmin')}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {t('resources.guides.roles.superAdminDesc')}
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-3">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
                  {t('resources.guides.roles.admin')}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {t('resources.guides.roles.adminDesc')}
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-3">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
                  {t('resources.guides.roles.resident')}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {t('resources.guides.roles.residentDesc')}
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-3">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
                  {t('resources.guides.roles.guard')}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {t('resources.guides.roles.guardDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Guía de Cobranza */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {t('resources.guides.billing.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('resources.guides.billing.description')}
            </p>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('resources.guides.billing.feature1')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('resources.guides.billing.feature2')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('resources.guides.billing.feature3')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('resources.guides.billing.feature4')}
              </li>
            </ul>
          </div>
        </div>

        {/* Sección adicional de recursos */}
        <div className="mt-16 bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
            {t('resources.guides.additionalTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  {t('resources.guides.videoTutorials')}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {t('resources.guides.videoTutorialsDesc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  {t('resources.guides.bestPractices')}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {t('resources.guides.bestPracticesDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
