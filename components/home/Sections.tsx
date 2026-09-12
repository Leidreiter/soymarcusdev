"use client";

import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { useInView } from "@/app/hooks/useInView";
import { DIAGNOSTICO, NUMEROS, SERVICIOS, SOLUCIONES } from "@/lib/site";
import CountUp from "@/components/reactbits/CountUp/CountUp";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";
import ElectricBorder from "@/components/reactbits/ElectricBorder/ElectricBorder";

function Numeros() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <FadeContent blur delay={100}>
      <div className={styles.numeros} ref={ref}>
        {NUMEROS.map((numero, idx) => (
          <div className={styles.numero} key={numero.labelKey}>
            <CountUpItem target={numero.dataNumero} start={inView} delayMs={idx * 300} />
            <p>{t[numero.labelKey]}</p>
          </div>
        ))}
      </div>
    </FadeContent>
  );
}

function CountUpItem({
  target,
  start,
  delayMs,
}: {
  target: number;
  start: boolean;
  delayMs: number;
}) {
  return (
    <span>
      +
      <CountUp
        to={target}
        startWhen={start}
        delay={delayMs / 1000}
        duration={1.8}
      />
    </span>
  );
}

function Historia() {
  const { t } = useLanguage();

  return (
    <div className={styles.historia}>
      <FadeContent>
        <div className={styles.timeline}>
          <div className={styles["timeline-column"]}>
            <h2>{t.problemasTitulo}</h2>
            {DIAGNOSTICO.map((item) => (
              <div className={styles["timeline-item"]} key={item.tituloKey}>
                <h3>{t[item.tituloKey]}</h3>
                <p>{t[item.descKey]}</p>
              </div>
            ))}
          </div>
          <div className={styles["timeline-column"]}>
            <h2>{t.solucionesTitulo}</h2>
            {SOLUCIONES.map((item) => (
              <div className={styles["timeline-item"]} key={item.tituloKey}>
                <h3>{t[item.tituloKey]}</h3>
                <p>{t[item.descKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  );
}

export function Servicios() {
  const { t } = useLanguage();

  return (
    <div className={styles.servicios} id="servicios">
      <h2>{t.serviciosTitulo}</h2>
      <FadeContent>
        <div className={styles["grid-servicios"]}>
          {SERVICIOS.map((servicio) => (
            <ElectricBorder
              key={servicio.tituloKey}
              color="#8B5CF6"
              speed={1}
              chaos={0.12}
              borderRadius={16}
              className={styles["servicio-borde"]}
            >
              <div className={styles.servicio}>
                <h3>{t[servicio.tituloKey]}</h3>
                <p>{t[servicio.descKey]}</p>
                <a href="#contacto" className={styles["servicio-link"]}>
                  {t.servicioLink} <span>&gt;</span>
                </a>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </FadeContent>
    </div>
  );
}

export function SeccionSuperior() {
  return (
    <>
      <Numeros />
      <Historia />
    </>
  );
}