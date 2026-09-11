"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home.module.scss";
import Sidebar from "@/components/home/Sidebar";
import Hero from "@/components/home/Hero";
import { SeccionSuperior, Servicios } from "@/components/home/Sections";
import Portfolio from "@/components/home/Portfolio";
import Testimonios from "@/components/home/Testimonios";
import Paquetes from "@/components/home/Paquetes";
import UltimosPosts from "@/components/home/UltimosPosts";
import Contacto from "@/components/home/Contacto";
import { Proyectos } from "@/components/home/Proyectos";
import Menu from "@/components/home/Menu";
import Noise from "@/components/reactbits/Noise/Noise";
import SiteGlowCursor from "@/components/reactbits/GlowCursor/SiteGlowCursor";
import ClickSpark from "@/components/reactbits/ClickSpark/ClickSpark";
import FloatingCta from "@/components/FloatingCta/FloatingCta";

export default function HomeClient() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [desktop, setDesktop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const onMatch = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = e.matches;
      setDesktop(matches);
      if (!matches) setOpen(false);
    };
    onMatch(mediaQuery);
    mediaQuery.addEventListener("change", onMatch);
    return () => mediaQuery.removeEventListener("change", onMatch);
  }, []);

  useEffect(() => {
    const layout = layoutRef.current;
    if (!layout) return;
    if (desktop && open) {
      layout.classList.add("open");
    } else {
      layout.classList.remove("open");
    }
  }, [desktop, open]);

  const toggleMenu = () => {
    if (desktop) setOpen((prev) => !prev);
  };

  return (
    <div className={styles.layout} ref={layoutRef}>
      <div className={styles["contenedor_info"]} id="perfil-sidebar">
        <Sidebar />
      </div>

      <section className={styles["parte-1"]}>
        <Hero />
        <SeccionSuperior />
      </section>

      <div className={styles["parte-2"]}>
        <Servicios />
        <Portfolio />
        <Testimonios />
        <Paquetes />
        <UltimosPosts />
        <Contacto />
        <Proyectos />
      </div>

      <aside className={styles.sidebar}>
        <div className={styles["contenido-sidebar"]}>
          <Menu onToggleMenu={toggleMenu} />
        </div>
      </aside>

      <SiteGlowCursor />
      <ClickSpark fixed sparkColor="#8B5CF6" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400} />
      <Noise patternAlpha={10} />
      <FloatingCta />
    </div>
  );
}