'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import HomePageContent from '@/components/HomePageContent';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const params = useParams();
  const { setLanguage } = useLanguage();

  // Sync URL language with context
  React.useEffect(() => {
    if (params.lang && (params.lang === 'en' || params.lang === 'km')) {
      setLanguage(params.lang as 'en' | 'km');
    }
  }, [params.lang, setLanguage]);

  return <HomePageContent />;
}
