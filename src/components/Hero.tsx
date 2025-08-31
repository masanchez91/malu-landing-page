import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { MetricCard } from './ui/MetricCard';

export function Hero() {
  const { t } = useTranslation();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-8 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 px-3 py-1.5 rounded-full"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          {t('hero.badge')}
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white"
        >
          {t('hero.title')}
          <br />
          <span className="text-primary-500">
            {t('hero.titleHighlight')}
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg">
            {t('hero.tryButton')}
          </Button>

          <Button variant="outline" size="lg">
            {t('hero.demoButton')}
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-8"
        >
          <Badge 
            label={t('hero.stat1Label')} 
            value={t('hero.stat1Value')} 
          />
          <Badge 
            label={t('hero.stat2Label')} 
            value={t('hero.stat2Value')} 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
          {/* Dashboard Header */}
          <div className="p-6 bg-gradient-to-r from-neutral-900 to-primary-500 text-white flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">{t('dashboard.title')}</h3>
              <p className="text-sm opacity-90 mt-1">{t('dashboard.subtitle')}</p>
            </div>
            <div className="text-right text-sm opacity-90">
              <div>{t('dashboard.unit')}</div>
              <div className="mt-2 text-base font-medium">
                {t('dashboard.balance')} <span className="ml-1 text-lg">$1,240</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <MetricCard 
              title={t('dashboard.collection')} 
              value="$12,430" 
              subtitle={t('dashboard.currentMonth')} 
            />
            <MetricCard 
              title={t('dashboard.access')} 
              value="1,024" 
              subtitle={t('dashboard.today')} 
            />
            <MetricCard 
              title={t('dashboard.reservations')} 
              value="18" 
              subtitle={t('dashboard.week')} 
            />
          </div>

          {/* Dashboard Content */}
          <div className="p-6 border-t border-neutral-100 dark:border-neutral-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                  {t('dashboard.lastPayments')}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center py-1">
                    <span className="text-neutral-700 dark:text-neutral-300">Unidad B-101</span>
                    <span className="text-neutral-500 dark:text-neutral-400 font-medium">$1,200</span>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <span className="text-neutral-700 dark:text-neutral-300">Unidad C-203</span>
                    <span className="text-neutral-500 dark:text-neutral-400 font-medium">$980</span>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <span className="text-neutral-700 dark:text-neutral-300">Unidad A-302</span>
                    <span className="text-neutral-500 dark:text-neutral-400 font-medium">$1,240</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                  {t('dashboard.amenitiesCalendar')}
                </h4>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>{t('dashboard.poolTime')}</div>
                  <div>{t('dashboard.hallTime')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decoration */}
        <motion.div 
          animate={{ 
            rotate: [0, 6, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-6 -bottom-6 w-40 h-24 rounded-xl bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-700 opacity-60 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
