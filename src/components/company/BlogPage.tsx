import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createWhatsAppLink } from '../../utils/whatsapp';
import { ArticlePage } from '../blog/ArticlePage';
import { getFeaturedArticle, getRecentArticles, type Article } from '../../data/articles';

// Helper function to get localized article content
const getLocalizedArticle = (article: Article, language: string) => ({
  ...article,
  title: language === 'en' ? article.titleEn || article.title : article.title,
  excerpt: language === 'en' ? article.excerptEn || article.excerpt : article.excerpt,
  content: language === 'en' ? article.contentEn || article.content : article.content,
  category: language === 'en' ? article.categoryEn || article.category : article.category,
  date: language === 'en' ? article.dateEn || article.date : article.date,
  readTime: language === 'en' ? article.readTimeEn || article.readTime : article.readTime,
  tags: language === 'en' ? article.tagsEn || article.tags : article.tags,
});

export function BlogPage() {
  const { t, i18n } = useTranslation();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const currentLanguage = i18n.language;
  const featuredArticleRaw = getFeaturedArticle();
  const recentArticlesRaw = getRecentArticles(3);

  const featuredArticle = featuredArticleRaw ? getLocalizedArticle(featuredArticleRaw, currentLanguage) : null;
  const recentArticles = recentArticlesRaw.map(article => getLocalizedArticle(article, currentLanguage));

  // AGGRESSIVE scroll to top when an article is selected
  useEffect(() => {
    if (selectedArticle) {
      const forceScrollTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
        window.scrollTo({ top: 0, behavior: 'auto' });
        
        // Try different scroll targets
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        if (html) html.scrollTop = 0;
        if (body) body.scrollTop = 0;
      };
      
      // Execute immediately
      forceScrollTop();
      
      // Execute multiple times with different delays
      requestAnimationFrame(forceScrollTop);
      setTimeout(forceScrollTop, 0);
      setTimeout(forceScrollTop, 1);
      setTimeout(forceScrollTop, 10);
      setTimeout(forceScrollTop, 50);
      setTimeout(forceScrollTop, 100);
    }
  }, [selectedArticle]);

  const handleArticleClick = (article: Article) => {
    // Save current scroll position before opening article
    setPreviousScrollPosition(window.scrollY);
    
    // FORCE scroll to top BEFORE changing state
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Set the article state
    setSelectedArticle(article);
  };

  const handleBackToBlog = () => {
    setSelectedArticle(null);
    // Restore previous scroll position when returning to blog
    setTimeout(() => {
      window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });
    }, 100);
  };

  if (selectedArticle) {
    return (
      <ArticlePage 
        article={selectedArticle} 
        onBack={handleBackToBlog} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('company.blog.title')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('company.blog.subtitle')}
          </p>
        </div>

                 {/* Featured Article */}
         {featuredArticle && (
           <div className="mb-16">
             <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleArticleClick(featuredArticle)}>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                 <div>
                   <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full mb-4 inline-block">
                     {t('company.blog.featured.tag')}
                   </span>
                   <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                     {featuredArticle.title}
                   </h2>
                   <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                     {featuredArticle.excerpt}
                   </p>
                   <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                     <span>{featuredArticle.date}</span>
                     <span>•</span>
                     <span>{featuredArticle.readTime}</span>
                   </div>
                 </div>
                 <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-8 text-center">
                   <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                     </svg>
                   </div>
                   <p className="text-neutral-600 dark:text-neutral-300">
                     {t('company.blog.featured.imageAlt')}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         )}

                 {/* Recent Articles */}
         <div className="mb-16">
           <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
             {t('company.blog.recentTitle')}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {recentArticles.map((article, index) => {
               const icons = [
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                 </svg>,
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>,
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               ];
               
               const colors = [
                 { bg: 'bg-secondary-100 dark:bg-secondary-900', text: 'text-secondary-600 dark:text-secondary-400', badge: 'bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300' },
                 { bg: 'bg-emerald-100 dark:bg-emerald-900', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300' },
                 { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' }
               ];

               const colorScheme = colors[index % colors.length];
               const icon = icons[index % icons.length];

               return (
                 <div 
                   key={article.id} 
                   className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                   onClick={() => handleArticleClick(article)}
                 >
                   <div className="bg-neutral-100 dark:bg-neutral-700 p-8 text-center">
                     <div className={`w-12 h-12 ${colorScheme.bg} rounded-lg flex items-center justify-center mx-auto`}>
                       <div className={colorScheme.text}>
                         {icon}
                       </div>
                     </div>
                   </div>
                   <div className="p-6">
                     <span className={`px-2 py-1 ${colorScheme.badge} text-xs rounded-full mb-3 inline-block`}>
                       {article.category}
                     </span>
                     <h3 className="font-semibold text-neutral-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                       {article.title}
                     </h3>
                     <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                       {article.excerpt}
                     </p>
                     <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                       <span>{article.date}</span>
                       <span>•</span>
                       <span>{article.readTime}</span>
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
         </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('company.blog.comingSoon.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            {t('company.blog.comingSoon.description')}
          </p>
          <a
            href={createWhatsAppLink(t('beta.whatsappMessages.blog'))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('company.blog.comingSoon.subscribe')}
          </a>
        </div>
      </div>
    </div>
  );
}
