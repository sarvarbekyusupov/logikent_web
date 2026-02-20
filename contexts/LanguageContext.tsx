"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
} | undefined>(undefined);

export function LanguageProvider({
  children,
  locale = "en",
}: {
  children: React.ReactNode;
  locale?: string;
}) {
  const [language, setLanguageState] = useState(locale);
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Check localStorage first for saved language preference
    const savedLanguage = localStorage.getItem("language");
    const languageToUse = savedLanguage || locale;

    // If saved language differs from URL locale, redirect
    if (savedLanguage && savedLanguage !== locale) {
      const pathname = window.location.pathname;
      const localeMatch = pathname.match(/^\/(en|ru|uz)(?:\/|$)/);
      if (localeMatch) {
        const newPath = pathname.replace(/^\/(en|ru|uz)/, `/${savedLanguage}`);
        window.location.href = newPath;
        return;
      }
    }

    // Load translations for the detected locale
    loadTranslations(languageToUse);
    setLanguageState(languageToUse);
  }, [locale]);

  const loadTranslations = async (lang: string) => {
    try {
      const response = await fetch(`/locales/${lang}/common.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error("Failed to load translations:", error);
    }
  };

  const setLanguage = async (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    await loadTranslations(lang);

    // Navigate to the new locale URL
    const pathname = window.location.pathname;
    const localeMatch = pathname.match(/^\/(en|ru|uz)(?:\/|$)/);
    const currentLocale = localeMatch ? localeMatch[1] : "en";

    if (lang !== currentLocale) {
      const newPath = pathname.replace(/^\/(en|ru|uz)/, `/${lang}`);
      window.location.href = newPath;
    }
  };

  const t = (key: string, options?: any) => {
    if (options) {
      // Support for interpolation (e.g., t("key", { count: 5 }))
      let translation = translations[key] || key;
      Object.keys(options).forEach((optionKey) => {
        translation = translation.replace(`{{${optionKey}}}`, options[optionKey]);
      });
      return translation;
    }
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
