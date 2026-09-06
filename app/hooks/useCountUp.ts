"use client";

import { useEffect, useState } from "react";

/**
 * Contador animado con prefijo "+", portado de `animarNumeros()` de `app.js`.
 * Se activa cuando `start` pasa a true (sección en viewport).
 */
export function useCountUp(target: number, start: boolean, delayMs = 0): string {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const increment = Math.ceil(target / 100);
    let count = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const finished = { done: false };

    const timeout = setTimeout(() => {
      if (finished.done) return;
      timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          if (timer) clearInterval(timer);
        }
        setValue(count);
      }, 20);
    }, delayMs);

    return () => {
      finished.done = true;
      clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, [start, target, delayMs]);

  return `+${value}`;
}