import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { IconDollar, IconQR, IconCalendar, IconChat } from './icons';

export function Features() {
  const { t } = useTranslation();
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    { 
      title: t('features.block1Title'), 
      desc: t('features.block1Desc'), 
      icon: <IconDollar className="w-6 h-6 text-primary-500" />,
      gradient: "from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900"
    },
    { 
      title: t('features.block2Title'), 
      desc: t('features.block2Desc'), 
      icon: <IconQR className="w-6 h-6 text-secondary-500" />,
      gradient: "from-secondary-50 to-secondary-100 dark:from-secondary-950 dark:to-secondary-900"
    },
    { 
      title: t('features.block3Title'), 
      desc: t('features.block3Desc'), 
      icon: <IconCalendar className="w-6 h-6 text-accent-500" />,
      gradient: "from-accent-50 to-accent-100 dark:from-accent-950 dark:to-accent-900"
    },
    { 
      title: t('features.block4Title'), 
      desc: t('features.block4Desc'), 
      icon: <IconChat className="w-6 h-6 text-emerald-500" />,
      gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900"
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="product" ref={ref} className="py-16">
      <motion.div
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
            className="group p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
