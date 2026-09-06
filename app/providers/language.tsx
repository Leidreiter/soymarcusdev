"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Lang, type Translation } from "@/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translation;
  changeLanguage: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectUserLanguage(): Lang {
  if (typeof navigator === "undefined") return "es";
  const browserLang = navigator.language || "es";
  return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
}

function getInitialLanguage(): Lang {
  if (typeof window === "undefined") return "es";
  const savedLang = window.localStorage.getItem("preferredLanguage");
  if (savedLang === "es" || savedLang === "en") return savedLang;
  return detectUserLanguage();
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    setLang(getInitialLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLanguage = useCallback((next: Lang) => {
    setLang(next);
    window.localStorage.setItem("preferredLanguage", next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], changeLanguage }),
    [lang, changeLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}