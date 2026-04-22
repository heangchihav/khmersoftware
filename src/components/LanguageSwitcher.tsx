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
    <div className="relative">
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'km')}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
      >
        <option value="en">English</option>
        <option value="km">{t('languageSwitcher.khmer')}</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
}
