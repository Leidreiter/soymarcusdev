"use client";

import { useState } from "react";
import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { PORTFOLIO } from "@/lib/site";
import DriftWall from "@/components/reactbits/DriftWall/DriftWall";

const MOBILE_ROWS = 4;

export default function Portfolio() {
  const { t } = useLanguage();
  const [verTodos, setVerTodos] = useState(false);

  const items = PORTFOLIO.map((item) => ({
    image: item.webp,
    title: t[item.tituloKey],
    alt: item.alt,
    href: item.url,
  }));

  const visibles = verTodos ? items.length : MOBILE_ROWS * 2;

  return (
    <div className={styles.trabajos} id="portfolio">
      <h2>{t.portfolioTitulo}</h2>
      <div className={styles["driftwall-container"]}>
        <DriftWall
          items={items}
          columns={7}
          tileWidth={155}
          tileHeight={90}
          gap={10}
          tilt={8}
          turn={0}
          fade={0.35}
          dim={0.68}
          speed={45}
          pauseOnHover
        />
      </div>
      <div className={styles["trabajos-movil"]}>
        <div className={styles["trabajos-grid"]}>
          {items.slice(0, visibles).map((item, i) => (
            <a
              key={`${item.href}-${i}`}
              className={styles["trabajo-card"]}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span className={styles["trabajo-card-titulo"]}>{item.title}</span>
            </a>
          ))}
        </div>
        {items.length > MOBILE_ROWS * 2 && (
          <button
            type="button"
            className={styles["trabajos-boton"]}
            onClick={() => setVerTodos((prev) => !prev)}
          >
            {verTodos ? t.portfolioVerMenos : t.portfolioVerTodos}
          </button>
        )}
      </div>
    </div>
  );
}