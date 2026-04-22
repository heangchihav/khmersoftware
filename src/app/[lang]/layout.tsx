import { LanguageProvider } from '@/contexts/LanguageContext';

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
