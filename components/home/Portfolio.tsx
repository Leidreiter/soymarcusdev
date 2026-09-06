"use client";

import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { PORTFOLIO } from "@/lib/site";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";
import GlareHover from "@/components/reactbits/GlareHover/GlareHover";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className={styles.trabajos} id="portfolio">
      <h2>{t.portfolioTitulo}</h2>
      <FadeContent>
        <div className={styles.portfolio}>
          {PORTFOLIO.map((item) => (
            <div className={styles.card} key={item.png}>
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="1rem"
                borderColor="transparent"
                glareColor="#ffffff"
                glareOpacity={0.16}
                glareSize={230}
                transitionDuration={500}
              >
                <div className={styles["card-image"]}>
                  <picture>
                    <source srcSet={item.webp} type="image/webp" />
                    <img loading="lazy" src={item.png} alt={item.alt} />
                  </picture>
                </div>
                <div className={styles["card-info"]}>
                  <h3>{t[item.tituloKey]}</h3>
                  <p>{t[item.descKey]}</p>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {t.verTrabajo} <span>&gt;</span>
                  </a>
                </div>
              </GlareHover>
            </div>
          ))}
        </div>
      </FadeContent>
    </div>
  );
}