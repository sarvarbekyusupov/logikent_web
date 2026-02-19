"use client";

import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Extract locale from pathname
  const localeMatch = pathname.match(/^\/(en|ru|uz)(?:\/|$)/);
  const locale = localeMatch ? localeMatch[1] : "en";

  return (
    <LanguageProvider locale={locale}>
      {children}
    </LanguageProvider>
  );
}
