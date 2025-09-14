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
}

export function Header({ onPricingClick }: HeaderProps) {
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
    { name: t('nav.developers'), href: '#developers', action: null }
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
              <button
                key={item.name}
                onClick={() => item.action === 'pricing' && onPricingClick?.()}
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </button>
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
              href={createWhatsAppLink(`¡Hola! Me gustaría solicitar una demo de Malu desde el header. ¿Cuándo podríamos agendar una presentación?`)}
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
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                item.action ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.action === 'pricing') onPricingClick?.();
                      setIsMenuOpen(false);
                    }}
                    className="block text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a 
                href={createWhatsAppLink(`¡Hola! Me gustaría solicitar una demo de Malu desde móvil. ¿Cuándo podríamos agendar una presentación?`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">
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
