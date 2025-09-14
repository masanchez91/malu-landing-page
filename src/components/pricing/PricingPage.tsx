import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createWhatsAppLink } from '../../utils/whatsapp';

type BillingCycle = 'monthly' | 'quarterly' | 'semiannual' | 'annual';
type Currency = 'USD' | 'MXN';

interface PricingPlan {
  name: string;
  icon: string;
  description: string;
  houses: string;
  calculations: {
    example: number;
    monthly: { usd: number; mxn: number };
    quarterly: { usd: number; mxn: number; savings: { usd: number; mxn: number } };
    semiannual: { usd: number; mxn: number; savings: { usd: number; mxn: number } };
    annual: { usd: number; mxn: number; savings: { usd: number; mxn: number } };
  };
}

export function PricingPage() {
  const { t, i18n } = useTranslation();
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');

  // Set default currency based on language
  useEffect(() => {
    const defaultCurrency = i18n.language === 'es' ? 'MXN' : 'USD';
    setSelectedCurrency(defaultCurrency);
  }, [i18n.language]);

  const plans: PricingPlan[] = [
    {
      name: t('pricing.plans.starter.name'),
      icon: '⚡',
      description: t('pricing.plans.starter.description'),
      houses: t('pricing.plans.starter.houses'),
      calculations: {
        example: 20,
        monthly: { usd: 33.6, mxn: 605 },
        quarterly: { usd: 95.9, mxn: 1727, savings: { usd: 4.9, mxn: 90 } },
        semiannual: { usd: 181.4, mxn: 3265, savings: { usd: 20.2, mxn: 362 } },
        annual: { usd: 343.0, mxn: 6174, savings: { usd: 66.3, mxn: 1191 } }
      }
    },
    {
      name: t('pricing.plans.growth.name'),
      icon: '📈',
      description: t('pricing.plans.growth.description'),
      houses: t('pricing.plans.growth.houses'),
      calculations: {
        example: 40,
        monthly: { usd: 42.8, mxn: 770 },
        quarterly: { usd: 121.9, mxn: 2195, savings: { usd: 6.4, mxn: 115 } },
        semiannual: { usd: 231.3, mxn: 4163, savings: { usd: 25.6, mxn: 461 } },
        annual: { usd: 436.3, mxn: 7853, savings: { usd: 77.1, mxn: 1390 } }
      }
    },
    {
      name: t('pricing.plans.pro.name'),
      icon: '🚀',
      description: t('pricing.plans.pro.description'),
      houses: t('pricing.plans.pro.houses'),
      calculations: {
        example: 100,
        monthly: { usd: 71.0, mxn: 1278 },
        quarterly: { usd: 202.5, mxn: 3645, savings: { usd: 10.6, mxn: 191 } },
        semiannual: { usd: 383.4, mxn: 6901, savings: { usd: 42.6, mxn: 765 } },
        annual: { usd: 724.2, mxn: 13036, savings: { usd: 127.8, mxn: 2300 } }
      }
    }
  ];

  const billingCycles = [
    { key: 'monthly' as BillingCycle, label: t('pricing.billing.monthly'), discount: null },
    { key: 'quarterly' as BillingCycle, label: t('pricing.billing.quarterly'), discount: '5%' },
    { key: 'semiannual' as BillingCycle, label: t('pricing.billing.semiannual'), discount: '10%' },
    { key: 'annual' as BillingCycle, label: t('pricing.billing.annual'), discount: '15%' }
  ];

  const formatPrice = (amount: number, currency: 'USD' | 'MXN') => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 1
      }).format(amount);
    } else {
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
      }).format(amount);
    }
  };

  const getDisplayPrice = (price: { usd: number; mxn: number }) => {
    return selectedCurrency === 'USD' ? price.usd : price.mxn;
  };

  const getDisplaySavings = (savings: { usd: number; mxn: number }) => {
    return selectedCurrency === 'USD' ? savings.usd : savings.mxn;
  };

  const getPriceForCycle = (plan: PricingPlan, cycle: BillingCycle) => {
    return plan.calculations[cycle];
  };

  const createContractWhatsAppMessage = (planName: string, houses: string, cycle: string) => {
    return `¡Hola! Me interesa contratar el plan ${planName} (${houses}) con facturación ${cycle}. ¿Podrían ayudarme con el proceso de contratación?`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Currency Selector */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
              <button
                onClick={() => setSelectedCurrency('USD')}
                className={`relative px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  selectedCurrency === 'USD'
                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">$</span>
                  </div>
                  <span>USD</span>
                </div>
              </button>
              <button
                onClick={() => setSelectedCurrency('MXN')}
                className={`relative px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  selectedCurrency === 'MXN'
                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">$</span>
                  </div>
                  <span>MXN</span>
                </div>
              </button>
            </div>
          </div>

            {/* Billing Cycle Selector */}
            <div className="w-full max-w-4xl mx-auto mb-8">
              {/* Mobile Grid Layout */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {billingCycles.map((cycle) => (
                  <button
                    key={cycle.key}
                    onClick={() => setSelectedCycle(cycle.key)}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      selectedCycle === cycle.key
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:border-primary-300 dark:hover:border-primary-600'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`font-semibold text-sm ${
                        selectedCycle === cycle.key 
                          ? 'text-primary-700 dark:text-primary-300' 
                          : 'text-neutral-900 dark:text-white'
                      }`}>
                        {cycle.label}
                      </div>
                      {cycle.discount && (
                        <div className="mt-1">
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            -{cycle.discount}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Desktop Inline Layout */}
              <div className="hidden md:inline-flex bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
                {billingCycles.map((cycle) => (
                  <button
                    key={cycle.key}
                    onClick={() => setSelectedCycle(cycle.key)}
                    className={`relative px-6 py-3 rounded-md text-sm font-medium transition-all ${
                      selectedCycle === cycle.key
                        ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{cycle.label}</span>
                      {cycle.discount && (
                        <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                          -{cycle.discount}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const currentPrice = getPriceForCycle(plan, selectedCycle);
            const isPopular = index === 1; // Growth plan is popular

            return (
              <div
                key={plan.name}
                className={`relative bg-white dark:bg-neutral-800 rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  isPopular
                    ? 'border-primary-500 shadow-lg scale-105'
                    : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                    {plan.description}
                  </p>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {plan.houses}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {formatPrice(getDisplayPrice(currentPrice), selectedCurrency)}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400 ml-1">
                      / {selectedCycle === 'monthly' ? 'mes' : 
                          selectedCycle === 'quarterly' ? 'trimestre' : 
                          selectedCycle === 'semiannual' ? 'semestre' : 'año'}
                    </span>
                  </div>
                  
                  {selectedCycle !== 'monthly' && 'savings' in currentPrice && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                      {t('pricing.savings')} {formatPrice(getDisplaySavings(currentPrice.savings), selectedCurrency)}
                    </div>
                  )}
                  
                  <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                    {t('pricing.example')} {plan.calculations.example} {i18n.language === 'es' ? 'casas' : 'units'}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('pricing.features.billing')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('pricing.features.access')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('pricing.features.reservations')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('pricing.features.communication')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('pricing.features.support')}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={createWhatsAppLink(createContractWhatsAppMessage(
                    plan.name, 
                    plan.houses, 
                    billingCycles.find(c => c.key === selectedCycle)?.label || 'mensual'
                  ))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 text-center block ${
                    isPopular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100'
                  }`}
                >
                  {t('pricing.contractButton')}
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
            {i18n.language === 'es' ? '¿Necesitas más de 100 casas?' : 'Need more than 100 units?'}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            {i18n.language === 'es' 
              ? 'Tenemos planes Enterprise y Corporate Plus diseñados para condominios grandes. Contáctanos para una cotización personalizada.'
              : 'We have Enterprise and Corporate Plus plans designed for large condominiums. Contact us for a personalized quote.'
            }
          </p>
          <a
            href={createWhatsAppLink(i18n.language === 'es' 
              ? '¡Hola! Necesito información sobre los planes Enterprise para más de 100 casas. ¿Podrían ayudarme con una cotización personalizada?'
              : 'Hello! I need information about Enterprise plans for more than 100 units. Could you help me with a personalized quote?'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {i18n.language === 'es' ? 'Cotización Personalizada' : 'Custom Quote'}
          </a>
        </div>

      </div>
    </div>
  );
}
