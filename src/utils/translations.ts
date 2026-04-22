import enTranslations from '@/locales/en.json';
import kmTranslations from '@/locales/km.json';

export const translations = {
  en: enTranslations,
  km: kmTranslations,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = string;

// Helper function to get nested translation values
export function getNestedTranslation(obj: any, key: string): string {
  return key.split('.').reduce((o, i) => o && o[i], obj) || key;
}
