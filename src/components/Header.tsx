import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';
import { IconMenu, IconClose, IconSun, IconMoon, IconGlobe } from './icons';
import { createWhatsAppLink } from '../utils/whatsapp';

interface HeaderProps {
  onPricingClick?: () => void;
  onBetaClick?: () => void;
}

export function Header({ onPricingClick, onBetaClick }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const { isDark, setIsDark } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  const navigation = [
    { name: t('nav.product'), href: '#product', action: null },
    { name: t('nav.pricing'), href: '#pricing', action: 'pricing' as const },
    { name: t('nav.developers'), href: '#developers', action: 'beta' as const }
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
                item.action ? (
                  item.action === 'beta' ? (
                    /* Botón destacado para Acceso Anticipado */
                    <motion.button
                      key={item.name}
                      onClick={() => onBetaClick?.()}
                      className="relative inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 transform hover:scale-105"
                      whileHover={{ 
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                        y: -1
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Indicador pulsante */}
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                      <span>🚀 {item.name}</span>
                      
                      {/* Badge de "NUEVO" */}
                      <motion.div 
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold"
                        animate={{ 
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        HOT
                      </motion.div>
                    </motion.button>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.action === 'pricing') onPricingClick?.();
                      }}
                      className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  )
                ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            )
          ))}
          
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle language"
            >
              <IconGlobe className="w-4 h-4" />
              <span className="ml-1 text-xs">
                {i18n.language.toUpperCase()}
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
            </button>

            <a 
              href={createWhatsAppLink(t('beta.whatsappMessages.header'))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">
                {t('nav.demo')}
              </Button>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <IconGlobe className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {isDark ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={t('nav.menu').toString()}
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          >
            <div className="px-6 py-6 space-y-6">
              {navigation.map((item) => (
                    item.action ? (
                      item.action === 'beta' ? (
                        /* Botón destacado para móvil con mejor spacing */
                        <div key={item.name} className="relative">
                          <button
                            onClick={() => {
                              onBetaClick?.();
                              setIsMenuOpen(false);
                            }}
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-4 rounded-2xl text-base font-semibold shadow-xl transition-all duration-200 relative overflow-hidden"
                          >
                            {/* Indicador pulsante */}
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg" />
                            <span className="flex items-center gap-2">
                              <span>🚀</span>
                              <span>{item.name}</span>
                            </span>
                            
                            {/* Badge HOT con mejor posicionamiento */}
                            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md">
                              HOT
                            </div>
                            
                            {/* Efecto de brillo sutil */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                          </button>
                          
                          {/* Separador visual después del botón destacado */}
                          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent" />
                        </div>
                      ) : (
                        <button
                          key={item.name}
                          onClick={() => {
                            if (item.action === 'pricing') onPricingClick?.();
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left py-3 px-2 text-base text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-all duration-200"
                        >
                          {item.name}
                        </button>
                      )
                    ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-3 px-2 text-base text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </a>
                )
              ))}
              {/* Separador antes del botón de demo */}
              <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent" />
              
              <a 
                href={createWhatsAppLink(t('beta.whatsappMessages.headerMobile'))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-2"
              >
                <Button className="w-full py-3 text-base font-semibold">
                  {t('nav.demo')}
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
