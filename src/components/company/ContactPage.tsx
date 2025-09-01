import { useTranslation } from 'react-i18next';

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('company.contact.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('company.contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
              {t('company.contact.info.title')}
            </h2>
            
            <div className="space-y-6">
              {/* General */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {t('company.contact.info.general.title')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                      {t('company.contact.info.general.description')}
                    </p>
                    <a 
                      href="mailto:mauro@holy-code.com" 
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      mauro@holy-code.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Sales */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {t('company.contact.info.sales.title')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                      {t('company.contact.info.sales.description')}
                    </p>
                    <a 
                      href="mailto:mauro@holy-code.com" 
                      className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      mauro@holy-code.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {t('company.contact.info.support.title')}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                      {t('company.contact.info.support.description')}
                    </p>
                    <a 
                      href="mailto:mauro@holy-code.com" 
                      className="text-secondary-600 dark:text-secondary-400 hover:underline font-medium"
                    >
                      mauro@holy-code.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {t('company.contact.info.hours.title')}
                    </h3>
                    <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                      <p>{t('company.contact.info.hours.weekdays')}</p>
                      <p>{t('company.contact.info.hours.timezone')}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                        {t('company.contact.info.hours.response')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
              {t('company.contact.form.title')}
            </h2>
            
            <form className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      {t('company.contact.form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('company.contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      {t('company.contact.form.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('company.contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('company.contact.form.company')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t('company.contact.form.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('company.contact.form.subject')}
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">{t('company.contact.form.subjectSelect')}</option>
                    <option value="demo">{t('company.contact.form.subjectDemo')}</option>
                    <option value="pricing">{t('company.contact.form.subjectPricing')}</option>
                    <option value="support">{t('company.contact.form.subjectSupport')}</option>
                    <option value="partnership">{t('company.contact.form.subjectPartnership')}</option>
                    <option value="other">{t('company.contact.form.subjectOther')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('company.contact.form.message')}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder={t('company.contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t('company.contact.form.send')}
                </button>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                  {t('company.contact.form.privacy')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
