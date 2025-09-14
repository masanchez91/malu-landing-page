import { useTranslation } from 'react-i18next';
import { createWhatsAppLink } from '../../utils/whatsapp';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('company.about.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('company.about.subtitle')}
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                {t('company.about.mission.title')}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                {t('company.about.mission.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            {t('company.about.story.title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                {t('company.about.story.p1')}
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                {t('company.about.story.p2')}
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                {t('company.about.story.p3')}
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    2025
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t('company.about.story.founded')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                    LATAM
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t('company.about.story.focus')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t('company.about.story.remote')}
                  </div>
                </div>
                                 <div>
                   <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                     3
                   </div>
                   <div className="text-sm text-neutral-600 dark:text-neutral-400">
                     {t('company.about.story.betaUsers')}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            {t('company.about.values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('company.about.values.simplicity')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('company.about.values.simplicityDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('company.about.values.innovation')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('company.about.values.innovationDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('company.about.values.community')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t('company.about.values.communityDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            {t('company.about.team.title')}
          </h2>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              {t('company.about.team.description')}
            </p>
            <a
              href={createWhatsAppLink(t('beta.whatsappMessages.about'))}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('company.about.team.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
