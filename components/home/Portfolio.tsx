"use client";

import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { PORTFOLIO } from "@/lib/site";
import DriftWall from "@/components/reactbits/DriftWall/DriftWall";

export default function Portfolio() {
  const { t } = useLanguage();

  const items = PORTFOLIO.map((item) => ({
    image: item.webp,
    title: t[item.tituloKey],
    href: item.url,
  }));

  return (
    <div className={styles.trabajos} id="portfolio">
      <h2>{t.portfolioTitulo}</h2>
      <div className={styles["driftwall-container"]}>
        <DriftWall
          items={items}
          columns={7}
          tileWidth={155}
          tileHeight={100}
          gap={10}
          tilt={8}
          turn={0}
          fade={0.35}
          dim={0.68}
          speed={45}
          pauseOnHover
        />
      </div>
    </div>
  );
}