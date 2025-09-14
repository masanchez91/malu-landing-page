import { useTranslation } from 'react-i18next';
import { createWhatsAppLink } from '../../utils/whatsapp';

export function SecurityPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('product.security.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('product.security.subtitle')}
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Data Encryption */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.security.encryption.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.security.encryption.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {t('product.security.encryption.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {t('product.security.encryption.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {t('product.security.encryption.feature3')}
              </li>
            </ul>
          </div>

          {/* Access Control */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.security.access.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.security.access.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                {t('product.security.access.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                {t('product.security.access.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                {t('product.security.access.feature3')}
              </li>
            </ul>
          </div>

          {/* Monitoring */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.security.monitoring.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.security.monitoring.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {t('product.security.monitoring.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {t('product.security.monitoring.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {t('product.security.monitoring.feature3')}
              </li>
            </ul>
          </div>

          {/* Backup & Recovery */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.security.backup.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.security.backup.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {t('product.security.backup.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {t('product.security.backup.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {t('product.security.backup.feature3')}
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.security.compliance.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.security.compliance.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                {t('product.security.compliance.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                {t('product.security.compliance.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                {t('product.security.compliance.feature3')}
              </li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('product.security.infrastructure.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {t('product.security.infrastructure.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('product.security.infrastructure.feature1')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('product.security.infrastructure.feature2')}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                {t('product.security.infrastructure.feature3')}
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            {t('product.security.certifications.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">ISO</span>
              </div>
              <h3 className="font-medium text-neutral-900 dark:text-white text-sm">ISO 27001</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{t('product.security.certifications.iso')}</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xs">SOC</span>
              </div>
              <h3 className="font-medium text-neutral-900 dark:text-white text-sm">SOC 2 Type II</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{t('product.security.certifications.soc')}</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xs">PCI</span>
              </div>
              <h3 className="font-medium text-neutral-900 dark:text-white text-sm">PCI DSS</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{t('product.security.certifications.pci')}</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xs">GDPR</span>
              </div>
              <h3 className="font-medium text-neutral-900 dark:text-white text-sm">GDPR Ready</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{t('product.security.certifications.gdpr')}</p>
            </div>
          </div>
        </div>

        {/* Security Practices */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              {t('product.security.practices.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                  {t('product.security.practices.development')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    {t('product.security.practices.dev1')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    {t('product.security.practices.dev2')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    {t('product.security.practices.dev3')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                  {t('product.security.practices.operations')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    {t('product.security.practices.ops1')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    {t('product.security.practices.ops2')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    {t('product.security.practices.ops3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('product.security.cta.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {t('product.security.cta.description')}
          </p>
          <a
            href={createWhatsAppLink(t('beta.whatsappMessages.security'))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('product.security.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}
