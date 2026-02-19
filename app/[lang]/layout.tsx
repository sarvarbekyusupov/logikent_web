import { LanguageProvider } from "@/contexts/LanguageContext";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <LanguageProvider locale={lang}>
      {children}
    </LanguageProvider>
  );
}
