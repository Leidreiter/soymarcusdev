"use client";

import { useSyncExternalStore } from "react";

const finePointer = () =>
  typeof window === "undefined"
    ? false
    : window.matchMedia("(pointer: fine)").matches;

function subscribeFinePointer(onChange: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export function useFinePointer() {
  return useSyncExternalStore(subscribeFinePointer, finePointer, () => false);
}