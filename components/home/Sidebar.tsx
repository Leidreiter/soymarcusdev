"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import {
  CONOCIMIENTOS,
  HABILIDADES,
  HABILIDADES_TECNICAS,
  IDIOMAS_DATOS,
  REDES_FOOTER,
} from "@/lib/site";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";

function IdiomaItem({
  porcentaje,
  label,
}: {
  porcentaje: number;
  label: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = cardRef.current;
    const rect = rectRef.current;
    if (!el || !rect) return;

    const strokeWidth = 4;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const r = parseFloat(getComputedStyle(el).borderRadius) || 10;
    const half = strokeWidth / 2;

    rect.setAttribute("x", String(half));
    rect.setAttribute("y", String(half));
    rect.setAttribute("width", String(w - strokeWidth));
    rect.setAttribute("height", String(h - strokeWidth));
    rect.setAttribute("rx", String(r));

    const rw = w - strokeWidth;
    const rh = h - strokeWidth;
    const perimeter = 2 * (rw + rh) - 8 * r + 2 * Math.PI * r;
    rect.setAttribute("stroke-dasharray", String(perimeter));
    rect.setAttribute("stroke-dashoffset", String(perimeter));

    let count = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      timer = setInterval(() => {
        count += 1;
        if (count >= porcentaje) {
          count = porcentaje;
          if (timer) clearInterval(timer);
        }
        setValue(count);
        rect.setAttribute(
          "stroke-dashoffset",
          String(perimeter - (count / 100) * perimeter)
        );
      }, 15);
    }, 0);

    return () => {
      clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, [porcentaje]);

  return (
    <div className={styles.idioma} ref={cardRef} data-percentage={porcentaje}>
      <svg
        className={styles["progress-border"]}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={styles["progress-rect"]}
          ref={rectRef}
          fill="none"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.percentage}>{value}%</span>
      <p>{label}</p>
    </div>
  );
}

export default function Sidebar() {
  const { t } = useLanguage();

  return (
    <>
      <header id="home" className={`${styles.header} ${styles.perfil}`}>
        <FadeContent delay={0} duration={700}>
          <div className={styles.logo}>
            <div className={styles.pulseOnline}></div>
            <picture>
              <source srcSet="/img/perfil.svg" type="image/webp" />
              <img
                loading="lazy"
                src="/img/perfil.png"
                alt="Logo @soymarcusdev - Martin Leidreiter"
              />
            </picture>
          </div>
        </FadeContent>

        <FadeContent delay={80} duration={700}>
          <div className={styles["mis-datos"]}>
            <p className={styles.nombre}>{t.nombre}</p>
            <span className={styles.puesto}>{t.puesto1}</span>
            <span className={styles.puesto}>{t.puesto2}</span>
            <span className={styles.puesto}>{t.puesto3}</span>
          </div>
        </FadeContent>
      </header>

      <FadeContent delay={160} duration={700}>
        <div className={styles.informacion}>
          <div className={styles.info}>
            <div className={styles.row}>
              <span className={styles.label}>{t.residencia}</span>
              <span className={styles.value}>{t.residenciaValor}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>{t.provincia}</span>
              <span className={styles.value}>{t.provinciaValor}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>{t.edad}</span>
              <span className={styles.value}>{t.edadValor}</span>
            </div>
          </div>
        </div>
      </FadeContent>

      <FadeContent delay={240} duration={700}>
        <div className={styles.idiomas}>
          {IDIOMAS_DATOS.map((idioma) => (
            <IdiomaItem
              key={idioma.key}
              porcentaje={idioma.porcentaje}
              label={t[idioma.key]}
            />
          ))}
        </div>
      </FadeContent>

      <FadeContent delay={320} duration={700}>
        <div className={styles.habilidades}>
          {HABILIDADES.map((hab) => (
            <div className={styles.habilidad} key={hab.nombre}>
              <div className={styles["hab-info"]}>
                <span>{hab.nombre}</span>
                <span className={styles.value}>{hab.valor}%</span>
              </div>
              <div className={styles.bar}>
                <div className={styles.fill} style={{ "--ancho": `${hab.valor}%` } as React.CSSProperties}></div>
              </div>
            </div>
          ))}
        </div>
      </FadeContent>

      <FadeContent delay={400} duration={700}>
        <div className={styles.redes} aria-hidden="true">
          {HABILIDADES_TECNICAS.map((icono) => (
            <i key={icono} className={icono}></i>
          ))}
        </div>
      </FadeContent>

      <FadeContent delay={480} duration={700}>
        <div className={styles.conocimientos}>
          <ul className={styles["skills-list"]}>
            {CONOCIMIENTOS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </FadeContent>

      <FadeContent delay={560} duration={700}>
        <div className={styles.curriculum}>
          <a href={t.cvPath} download className={styles["link-descarga"]}>
            {t.descargarCV} <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </FadeContent>

      <FadeContent delay={640} duration={700}>
        <footer className={styles.redes}>
          {REDES_FOOTER.map((red) => (
            <a
              key={red.label}
              href={red.href}
              target="_blank"
              rel="noreferrer"
              aria-label={red.label}
            >
              <i className={red.icon}></i>
            </a>
          ))}
        </footer>
      </FadeContent>
    </>
  );
}