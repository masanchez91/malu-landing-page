import { useEffect } from 'react';

export const useScrollToTop = (trigger: any) => {
  useEffect(() => {
    if (trigger) {
      // NUCLEAR option - absolutely force scroll to top
      const scrollToTopNuclear = () => {
        // Stop any ongoing smooth scrolling
        window.stop?.();
        
        // Method 1: Direct property assignment
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Method 2: Window scroll with different options
        window.scrollTo(0, 0);
        window.scrollTo({ top: 0 });
        window.scrollTo({ top: 0, behavior: 'auto' });
        window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
        
        // Method 3: Query all possible scroll containers
        const scrollableElements = [
          document.documentElement,
          document.body,
          document.querySelector('html'),
          document.querySelector('body'),
          document.querySelector('#root'),
          document.querySelector('.min-h-screen'),
          ...Array.from(document.querySelectorAll('[class*="overflow"]'))
        ];
        
        scrollableElements.forEach(element => {
          if (element) {
            (element as HTMLElement).scrollTop = 0;
            (element as HTMLElement).scrollLeft = 0;
          }
        });
        
        // Method 4: Force browser viewport reset
        if (window.pageYOffset !== 0 || window.pageXOffset !== 0) {
          window.scrollTo(0, 0);
        }
        
        // Method 5: Use location hash to force jump to top
        const currentHash = window.location.hash;
        window.location.hash = '#top';
        window.location.hash = currentHash || '';
      };
      
      // Execute immediately and multiple times
      scrollToTopNuclear();
      requestAnimationFrame(scrollToTopNuclear);
      setTimeout(scrollToTopNuclear, 0);
      setTimeout(scrollToTopNuclear, 1);
      setTimeout(scrollToTopNuclear, 10);
      setTimeout(scrollToTopNuclear, 50);
      setTimeout(scrollToTopNuclear, 100);
      setTimeout(scrollToTopNuclear, 200);
      
      // Debug logging
      console.log('🔝 FORCE SCROLL TO TOP EXECUTED');
      setTimeout(() => {
        console.log('📊 Current scroll position:', window.pageYOffset);
      }, 300);
    }
  }, [trigger]);
};
