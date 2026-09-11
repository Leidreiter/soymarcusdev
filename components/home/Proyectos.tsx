"use client";

import { useState } from "react";
import styles from "@/styles/home.module.scss";
import { PROYECTOS_PROPIOS, EMAIL } from "@/lib/site";
import { useLanguage } from "@/app/providers/language";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop/LogoLoop";

type LogoData = {
  img?: string;
  alt?: string;
  tooltip?: string;
  href?: string;
  target?: string;
};

const PROYECTOS_LOGOS = PROYECTOS_PROPIOS as unknown as LogoItem[];

export function Proyectos() {
  const { t } = useLanguage();
  const [year] = useState(() => new Date().getFullYear());

  return (
    <>
      <div className={styles.proyectos}>
        <h2>Mis Proyectos</h2>
        <div className={styles.proyecto}>
          <LogoLoop
            speed={40}
            direction="left"
            gap={52}
            pauseOnHover
            logos={PROYECTOS_LOGOS}
            ariaLabel="Logos de proyectos"
            renderItem={(item) => {
              const p = item as LogoData;
              const img = (
                <img src={p.img} alt={p.alt} loading="lazy" draggable={false} />
              );
              if (p.href) {
                return (
                  <a
                    href={p.href}
                    data-tooltip={p.tooltip}
                    target={p.target}
                    rel={p.target ? "noreferrer" : undefined}
                  >
                    {img}
                  </a>
                );
              }
              return (
                <span data-tooltip={p.tooltip}>{img}</span>
              );
            }}
          />
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; <span>{year}</span>{" "}
          <span className={styles.copyright}>
            {t.footerCopy}{" "}
            <i className={`fa-solid fa-heart ${styles["footer-heart"]}`}></i>{" "}
            {t.footerCopySujeto}
          </span>
        </p>
        <a href={`mailto:${EMAIL}`}>
          <p>{EMAIL}</p>
        </a>
      </footer>
    </>
  );
}