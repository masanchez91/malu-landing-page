import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createWhatsAppLink } from '../../utils/whatsapp';

interface BetaPageProps {
  onClose?: () => void;
}

export function BetaPage({ onClose }: BetaPageProps = {}) {
  const { t } = useTranslation();
  const [spotsLeft, setSpotsLeft] = useState(31);
  const [isCounterAnimating, setIsCounterAnimating] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Contador realista: inicia en 31, sube 1 cada 12 horas, se reinicia en 44
  useEffect(() => {
    // Calcular el spot actual basado en el tiempo
    const calculateCurrentSpot = () => {
      const now = Date.now();
      const startTime = new Date('2025-01-01T00:00:00Z').getTime(); // Tiempo base
      const hoursElapsed = Math.floor((now - startTime) / (1000 * 60 * 60 * 12)); // Cada 12 horas
      const cyclePosition = hoursElapsed % 14; // Ciclo de 14 pasos (31-44)
      return 31 + cyclePosition;
    };

    // Establecer el valor inicial
    setSpotsLeft(calculateCurrentSpot());

    // Actualizar cada 12 horas (43200000 ms)
    const interval = setInterval(() => {
      setSpotsLeft(calculateCurrentSpot());
    }, 43200000);

    // También verificar cada minuto para transiciones exactas
    const minuteCheck = setInterval(() => {
      const newSpot = calculateCurrentSpot();
      if (spotsLeft !== newSpot) {
        setIsCounterAnimating(true);
        setTimeout(() => {
          setSpotsLeft(newSpot);
          setTimeout(() => setIsCounterAnimating(false), 500);
        }, 100);
      }
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(minuteCheck);
    };
  }, []);

  // Detectar scroll para mostrar/ocultar botón
  useEffect(() => {
    const handleScroll = () => {
      // Detectar si estamos en overlay o página normal
      const scrollElement = document.querySelector('.fixed.inset-0.z-50') || window;
      const scrollTop = scrollElement === window 
        ? window.pageYOffset 
        : (scrollElement as HTMLElement)?.scrollTop || 0;
      
      setShowScrollButton(scrollTop > 300);
    };

    // Escuchar scroll en overlay y window
    const overlayElement = document.querySelector('.fixed.inset-0.z-50');
    if (overlayElement) {
      overlayElement.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (overlayElement) {
        overlayElement.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función mejorada de scroll al top
  const scrollToTop = () => {
    // Detectar si estamos en overlay
    const overlayElement = document.querySelector('.fixed.inset-0.z-50.overflow-y-auto');
    
    if (overlayElement) {
      // Scroll en overlay
      overlayElement.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (containerRef.current) {
      // Scroll en el contenedor local
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback a window scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Variantes de animación agresivas pero elegantes
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08
      }
    }
  };

  const heroVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const benefitVariants = {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const energyPulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0)",
        "0 0 0 8px rgba(59, 130, 246, 0.1)",
        "0 0 0 16px rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };


  const floatingElements = [
    { size: 60, top: "10%", left: "5%", delay: 0, color: "bg-primary-200/30 dark:bg-primary-800/20" },
    { size: 40, top: "20%", right: "10%", delay: 1, color: "bg-primary-300/25 dark:bg-primary-700/15" },
    { size: 80, bottom: "15%", left: "8%", delay: 2, color: "bg-primary-400/20 dark:bg-primary-600/10" },
    { size: 50, bottom: "25%", right: "5%", delay: 0.5, color: "bg-primary-100/35 dark:bg-primary-900/25" },
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/40 to-primary-100/30 dark:from-neutral-900 dark:via-primary-950/20 dark:to-neutral-800 py-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Botón flotante de cierre/navegación */}
      {onClose && (
        <motion.div 
          className="fixed top-4 right-4 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            {/* Botón de cerrar */}
            <motion.button
              onClick={onClose}
              className="w-12 h-12 bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 rounded-full shadow-lg backdrop-blur-sm border border-white/20 dark:border-neutral-700/30 flex items-center justify-center transition-all duration-200 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Cerrar y volver al inicio"
            >
              <svg 
                className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            {/* Indicador de scroll hacia arriba - Solo visible cuando hay scroll */}
            {showScrollButton && (
              <motion.button
                onClick={scrollToTop}
                className="w-12 h-12 bg-primary-500/90 hover:bg-primary-600 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-200 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                aria-label="Ir al inicio de la página"
              >
                <svg 
                  className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* Botón flotante inferior para CTA rápido */}
      <motion.div 
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href={createWhatsAppLink(t('beta.whatsappMessage'))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl font-semibold text-sm transition-all duration-200"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 2.011c-5.506 0-9.974 4.469-9.974 9.974 0 1.747.454 3.393 1.249 4.831l-1.303 4.7 4.864-1.276c1.377.738 2.934 1.126 4.522 1.126 5.506 0 9.974-4.468 9.974-9.974s-4.468-9.974-9.974-9.974l-.358.002zm.358 18.117c-1.475 0-2.906-.382-4.162-1.104l-.299-.177-3.099.813.826-2.986-.194-.311c-.795-1.267-1.214-2.734-1.214-4.243 0-4.389 3.571-7.96 7.96-7.96s7.96 3.571 7.96 7.96-3.571 7.96-7.96 7.96l-.018.008z"/>
            <path d="M16.735 13.492c-.253-.127-1.496-.738-1.728-.823-.231-.085-.4-.127-.568.127-.169.253-.654.823-.802.991-.148.169-.297.19-.55.063-.253-.127-1.069-.394-2.035-1.255-.753-.673-1.261-1.504-1.409-1.757-.148-.253-.016-.39.111-.516.114-.113.253-.296.38-.444.127-.148.169-.253.253-.421.085-.169.043-.316-.021-.444-.063-.127-.568-1.369-.779-1.875-.206-.491-.417-.424-.568-.432-.148-.007-.316-.009-.484-.009-.169 0-.444.063-.676.316-.231.253-.881.862-.881 2.104s.902 2.44 1.029 2.608c.127.169 1.789 2.732 4.334 3.833.606.263 1.079.42 1.447.538.608.194 1.162.166 1.598.101.488-.073 1.496-.612 1.707-1.203.211-.59.211-1.096.148-1.203-.063-.106-.231-.169-.484-.296z"/>
          </svg>
          <span>{t('beta.joinNowButton')}</span>
        </motion.a>
      </motion.div>
      {/* Elementos flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute w-${element.size/4} h-${element.size/4} ${element.color} rounded-full blur-xl`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
              width: `${element.size}px`,
              height: `${element.size}px`
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={heroVariants}>
          <motion.div 
            className="inline-block mb-6"
            variants={pulseVariants}
            animate="animate"
          >
            {/* Badge responsive - Desktop */}
            <span className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
              🎯 {t('beta.title')}
            </span>
            
            {/* Badge responsive - Mobile */}
            <span className="sm:hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              {t('beta.titleMobile')}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 mb-6 leading-tight"
            variants={heroVariants}
          >
            <span className="hidden sm:inline">👑</span> {t('beta.subtitle')}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
            variants={heroVariants}
          >
            {t('beta.description')}
          </motion.p>

          {/* Contador renovado - Diseño espectacular y minimalista */}
          <motion.div 
            className="relative max-w-sm sm:max-w-md mx-auto mb-12 px-4 sm:px-0"
            variants={energyPulseVariants}
            animate="animate"
          >
            {/* Panel principal del contador */}
            <motion.div 
              className="relative bg-white/90 dark:bg-neutral-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden border border-white/20 dark:border-neutral-700/30"
              animate={isCounterAnimating ? {
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 20px 60px rgba(0, 0, 0, 0.08)",
                  "0 30px 80px rgba(59, 130, 246, 0.12)",
                  "0 20px 60px rgba(0, 0, 0, 0.08)"
                ]
              } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Indicador de energía en la esquina */}
              <motion.div 
                className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Badge de estado */}
              <div className="text-center mb-6">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-primary-500/10 dark:from-emerald-400/10 dark:to-primary-400/10 border border-emerald-200/30 dark:border-emerald-600/30 rounded-full px-4 py-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xl">🚀</span>
                  <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    {t('beta.progressLabel')}
                  </span>
                </motion.div>
              </div>

              {/* Números principales - Mostrando progreso ocupado */}
              <div className="text-center mb-6">
                <motion.div 
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 leading-none"
                  key={spotsLeft}
                  initial={{ y: -20, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                >
                  {spotsLeft}
                </motion.div>
                
                <motion.div 
                  className="text-xl font-semibold text-neutral-500 dark:text-neutral-400 -mt-2 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t('beta.of')} 50 {t('beta.enrolled')}
                </motion.div>
              </div>

              {/* Barra de progreso horizontal espectacular */}
              <div className="relative mb-6">
                <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${(spotsLeft / 50) * 100}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  >
                    {/* Efecto de brillo en la barra */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Porcentaje dinámico */}
                <motion.div 
                  className="absolute -top-8 left-0 text-xs font-bold text-primary-600 dark:text-primary-400"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    x: `${(spotsLeft / 50) * 100}%`
                  }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  style={{ transform: 'translateX(-50%)' }}
                >
                  {Math.round((spotsLeft / 50) * 100)}%
                </motion.div>
              </div>

              {/* Copy atractivo */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-2">
                  {t('beta.exclusiveAccess')}
                </div>
                
                {/* Indicador de urgencia mejorado */}
                {spotsLeft >= 45 && (
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/50 dark:border-amber-600/30 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                    >
                      ⚡
                    </motion.span>
                    {t('beta.almostFull')}
                  </motion.div>
                )}
                
                {spotsLeft < 45 && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t('beta.spotsRemaining', { count: 50 - spotsLeft })}
                  </div>
                )}
              </motion.div>

              {/* Efecto de partículas sutiles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`
                    }}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.7
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Anillo de energía sutil */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-primary-400/10 pointer-events-none"
              animate={{
                scale: [1, 1.01, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Benefits */}
          <motion.div 
            className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6 flex items-center gap-2">
              🔥 {t('beta.benefitsTitle')}
            </h3>
            <div className="space-y-4">
              {Object.values(t('beta.benefits', { returnObjects: true })).map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  variants={benefitVariants}
                >
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conditions */}
          <motion.div 
            className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-neutral-600 dark:text-neutral-400 mb-6 flex items-center gap-2">
              📌 {t('beta.conditionsTitle')}
            </h3>
            <div className="space-y-4">
              {Object.values(t('beta.conditions', { returnObjects: true })).map((condition, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  variants={benefitVariants}
                >
                  <div className="w-6 h-6 bg-neutral-500 dark:bg-neutral-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {condition}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Urgency & CTA */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 shadow-2xl"
          variants={heroVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-white mb-4"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⏳ {t('beta.urgencyTitle')}
          </motion.h2>
          
          <p className="text-xl text-white/90 mb-8">
            {t('beta.urgencyDescription')}
          </p>

          <motion.a
            href={createWhatsAppLink(t('beta.whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl transform transition-all duration-200 hover:shadow-3xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {t('beta.ctaButton')}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
