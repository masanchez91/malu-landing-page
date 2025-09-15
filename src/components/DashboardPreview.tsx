import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MetricCard } from './ui/MetricCard';

export function DashboardPreview() {
  const { t } = useTranslation();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="lg:col-span-2 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 p-8 shadow-lg"
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            {t('insights.title')}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            {t('insights.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <MetricCard 
            title={t('insights.collection')} 
            value="$12,430" 
            subtitle={t('insights.month') || undefined} 
          />
          <MetricCard 
            title={t('insights.progress')} 
            value="69%" 
            subtitle={t('insights.progressSubtitle') || undefined} 
          />
          <MetricCard 
            title={t('insights.reservations')} 
            value="18" 
            subtitle={t('insights.week') || undefined} 
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t('insights.trendTitle')}
          </h4>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-48 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-600"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {t('insights.chartPlaceholder')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.aside 
        initial={{ opacity: 0, x: 30 }}
        animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 p-6 shadow-lg"
      >
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          {t('insights.alerts')}
        </h4>
        
        <div className="space-y-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex justify-between items-center p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {t('insights.alert1')}
            </span>
            <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">
              {t('insights.time1')}
            </span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex justify-between items-center p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {t('insights.alert2')}
            </span>
            <span className="text-xs font-medium text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
              {t('insights.time2')}
            </span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex justify-between items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {t('insights.alert3')}
            </span>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              {t('insights.time3')}
            </span>
          </motion.div>
        </div>
      </motion.aside>
    </section>
  );
}
