"use client";

import GlowCursor from "./GlowCursor";
import { useFinePointer } from "@/app/hooks/useFinePointer";

export default function SiteGlowCursor() {
  const fine = useFinePointer();
  if (!fine) return null;

  return (
    <GlowCursor
      color="#8b5cf6"
      secondaryColor="#22d3ee"
      trailLength={36}
      trailWidth={6}
      trailTaper={0.8}
      followSpeed={0.16}
      glowIntensity={1.6}
      glowSpread={1.2}
      hotspot={0.65}
      brightness={1.2}
      opacity={0.85}
      pulseSpeed={0.9}
      noiseStrength={0.02}
      idleFade
      idleTimeout={800}
      fadeDuration={700}
      blendMode="screen"
    />
  );
}