"use client";

import { useEffect, useState } from "react";

/**
 * Typewriter loop, portado de `app.js`:
 * velocidad de tipeo 100ms, borrado 50ms, pausa 1500ms.
 * Al cambiar el arreglo de textos (cambio de idioma) se reinicia.
 */
export function useTypewriter(texts: readonly string[]): string {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (texts.length === 0) return;

    let i = 0;
    let j = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const current = texts[i];

      if (!isDeleting && j <= current.length) {
        setDisplay(current.substring(0, j++));
        timeout = setTimeout(tick, 100);
      } else if (isDeleting && j >= 0) {
        setDisplay(current.substring(0, j--));
        timeout = setTimeout(tick, 50);
      } else if (!isDeleting && j > current.length) {
        isDeleting = true;
        timeout = setTimeout(tick, 1500);
      } else if (isDeleting && j < 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
        timeout = setTimeout(tick, 100);
      }
    };

    tick();

    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
    };
  }, [texts]);

  return display;
}