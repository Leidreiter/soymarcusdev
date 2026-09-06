"use client";

import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { PAQUETES } from "@/lib/site";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";
import SpotlightCard from "@/components/reactbits/SpotlightCard/SpotlightCard";

export default function Paquetes() {
  const { t } = useLanguage();

  return (
    <div className={styles.paquetes}>
      <h2>{t.paquetesTitulo}</h2>
      <FadeContent>
        <div className={styles["grid-paquetes"]}>
          {PAQUETES.map((paquete) => (
            <SpotlightCard
              key={paquete.nombreKey}
              className={`${styles.paquete} border-transparent!`}
              spotlightColor="rgba(139, 92, 246, 0.25)"
            >
              <div className={`${styles["icono_paq"]} ${styles[paquete.iconoClase]}`}></div>
              {paquete.ribbonKey ? (
                <div className={styles.ribbon}>{t[paquete.ribbonKey]}</div>
              ) : null}
              <h3 className={styles["paquete-titulo"]}>{t[paquete.nombreKey]}</h3>
              <ul className={styles.lista}>
                {paquete.itemsKeys.map((itemKey) => (
                  <li key={itemKey}>{t[itemKey]}</li>
                ))}
              </ul>
              <a href="#contacto" className={styles["paquete-link"]}>
                {t.paqueteLink} <span>&gt;</span>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </FadeContent>
    </div>
  );
}