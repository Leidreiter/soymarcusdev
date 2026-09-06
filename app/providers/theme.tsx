"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

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
  const [isDark, setIsDark] = useState<boolean>(true);

  useLayoutEffect(() => {
    const initial = resolveInitialTheme();
    setIsDark(initial);
    applyBodyClass(initial);
  }, []);

  useEffect(() => {
    applyBodyClass(isDark);
  }, [isDark]);

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