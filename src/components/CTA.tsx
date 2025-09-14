import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from './ui/Button';
import { createWhatsAppLink } from '../utils/whatsapp';

export function CTA() {
  const { t } = useTranslation();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-16"
    >
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-r from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3"
            >
              {t('cta.title')}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-600 dark:text-neutral-300 max-w-md"
            >
              {t('cta.subtitle')}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href={createWhatsAppLink(t('beta.whatsappMessages.cta'))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                {t('cta.demoButton')}
              </Button>
            </a>
            <a 
              href={createWhatsAppLink(t('beta.whatsappMessages.ctaInfo'))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                {t('cta.exploreButton')}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
