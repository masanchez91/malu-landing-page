import { useTranslation } from 'react-i18next';
import { createWhatsAppLink } from '../../utils/whatsapp';

export function IntegrationsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('product.integrations.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('product.integrations.subtitle')}
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Payment Integrations */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              {t('product.integrations.payments.title')}
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">MP</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">MercadoPago</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.payments.mercadopago')}</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">ST</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Stripe</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.payments.stripe')}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">PP</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">PayPal</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.payments.paypal')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Integrations */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              {t('product.integrations.communication.title')}
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">WhatsApp Business</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.communication.whatsapp')}</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Email Marketing</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.communication.email')}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM12 12h.01M8 21l4-7H8l4-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">SMS</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.communication.sms')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Webhook & API */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {t('product.integrations.webhooks.title')}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              {t('product.integrations.webhooks.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{t('product.integrations.webhooks.realtime')}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.webhooks.realtimeDesc')}</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{t('product.integrations.webhooks.custom')}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.webhooks.customDesc')}</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{t('product.integrations.webhooks.secure')}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('product.integrations.webhooks.secureDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('product.integrations.cta.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {t('product.integrations.cta.description')}
          </p>
          <a
            href={createWhatsAppLink(t('beta.whatsappMessages.integrations'))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('product.integrations.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}
