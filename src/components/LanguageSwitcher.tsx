'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: 'en' | 'km') => {
    setLanguage(newLang);

    // Get current path without language prefix
    const pathWithoutLang = pathname.replace(/^\/(en|km)/, '') || '/';

    // If we're on the homepage, redirect to language-specific homepage
    if (pathname === '/' || pathWithoutLang === '/') {
      // Homepage redirects to /en or /km
      router.push(`/${newLang}`);
    } else {
      // Other pages use language prefix
      router.push(`/${newLang}${pathWithoutLang}`);
    }
  };

  return (
    <div className="ks-language-switcher">
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'km')}
        className="ks-select"
      >
        <option value="en">English</option>
        <option value="km">{t('languageSwitcher.khmer')}</option>
      </select>
      <div className="ks-select-arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
