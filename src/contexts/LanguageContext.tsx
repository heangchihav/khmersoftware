'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language, getNestedTranslation } from '@/utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  // Function to get language from URL
  const getLanguageFromURL = (path: string): Language | null => {
    const match = path.match(/^\/(en|km)(\/|$)/);
    return match ? (match[1] as Language) : null;
  };

  useEffect(() => {
    setIsClient(true);

    // Priority order: URL > localStorage > browser language > default
    let detectedLanguage: Language = 'en';

    // 1. Check URL first
    const urlLanguage = getLanguageFromURL(pathname);
    if (urlLanguage) {
      detectedLanguage = urlLanguage;
    } else {
      // 2. Check localStorage
      const stored = localStorage.getItem('language');
      if (stored && (stored === 'en' || stored === 'km')) {
        detectedLanguage = stored as Language;
      } else {
        // 3. Fallback to browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('km') || browserLang.includes('kh')) {
          detectedLanguage = 'km';
        }
      }
    }

    setLanguage(detectedLanguage);
  }, [pathname]);

  // Update localStorage when language changes (only on client)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language);
    }
  }, [language, isClient]);

  const t = (key: string): string => {
    const translation = getNestedTranslation(translations[language], key);

    // If Khmer translation is missing or just placeholder, fallback to English
    if (language === 'km' && (!translation || translation === '  0')) {
      return getNestedTranslation(translations.en, key) || key;
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
