"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

type ThemeContextValue = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyBodyClass(isDark: boolean) {
  const body = document.body;
  if (!body) return;
  if (isDark) {
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
  }
}

function resolveInitialTheme(): boolean {
  // 1. Elección manual (localStorage) → 2. Preferencia del sistema → 3. Horario
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme) return savedTheme === "dark";

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (prefersDark) return true;

  const hour = new Date().getHours();
  const isNight = hour >= 20 || hour < 7;
  return isNight;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return resolveInitialTheme();
  });

  useLayoutEffect(() => {
    // El modo claro solo aplica en la home; el resto de las páginas siempre en dark.
    applyBodyClass(isHome ? isDark : true);
  }, [isHome, isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ isDark, toggleTheme }),
    [isDark, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  }
  return ctx;
}