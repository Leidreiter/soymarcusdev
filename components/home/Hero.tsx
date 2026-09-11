"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { useTheme } from "@/app/providers/theme";
import { useTypewriter } from "@/app/hooks/useTypewriter";
import { WHATSAPP_HERO_URL } from "@/lib/site";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";
import Magnet from "@/components/reactbits/Magnet/Magnet";
import StarBorder from "@/components/reactbits/StarBorder/StarBorder";
import AeroShards from "@/components/reactbits/AeroShards/AeroShards";

const TITLE_LINES: Record<string, string[]> = {
  es: ["Creo soluciones digitales", "para hacer crecer tu proyecto"],
  en: ["Create digital solutions", "to grow your project"],
};

export default function Hero() {
  const { t, lang, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const typed = useTypewriter(t.heroTypewriterTexts);
  const titleLines = TITLE_LINES[lang] ?? TITLE_LINES.es;
  const [ocultaMovil, setOcultaMovil] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return;

    const update = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;
      setOcultaMovil(window.scrollY > hero.offsetTop + hero.offsetHeight * 3);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const onMqChange = (e: MediaQueryListEvent) => {
      if (!e.matches) setOcultaMovil(false);
    };
    mq.addEventListener("change", onMqChange);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  return (
    <div className={styles.hero} id="hero-section">
      <AeroShards
        className={styles["hero-shards"]}
        backgroundColor="#0B0A14"
        shardColor="#8B5CF6"
        accentColor="#22D3EE"
        placement="full"
        flow="stream"
        material="chrome"
        density={1.3}
        shardSize={1.1}
        glow={1.5}
        bloom={0.8}
        interaction="repel"
      />
      <div className={styles.overlay}>
        <div className={styles["hero-copy"]}>
          <div className={styles["hero-titulo"]}>
            <h1>
              <span>{titleLines[0]}</span>
              <br aria-hidden="true" />
              <span>{titleLines[1]}</span>
            </h1>
          </div>

          <div className={styles.typewriter}>
            <p>
              <span className={styles["texto-color"]}>&lt; Yo &gt;</span>
              <span className={styles.type}>{typed}</span>
            </p>
          </div>

          <div className={styles["hero-boton"]}>
            <Magnet disabled wrapperClassName="w-full md:w-auto" padding={40}>
              <StarBorder
                as="a"
                href="#portfolio"
                className={styles["hero-boton-star"]}
                color="#22D3EE"
                speed="6s"
                thickness={2}
                backgroundColor="#0B0A14"
                textColor="#FFFFFF"
                borderColor="#7C3AED"
                borderRadius={999}
              >
                {t.heroBoton} <i className="fa-solid fa-arrow-trend-up iconBtn"></i>
              </StarBorder>
            </Magnet>
          </div>
        </div>

        <div
          className={
            styles["hero-imagen"] +
            (ocultaMovil ? " " + styles.oculta : "")
          }
        >
          <FadeContent delay={150} duration={700} blur>
            <div className={styles.switchs}>
              <a href="#home">
                <div className={styles["icon-home"]}></div>
              </a>
              <label className={styles["switch-idioma"]}>
                <span className="sr-only">{t.srIdioma}</span>
                <input
                  id="language-switch"
                  type="checkbox"
                  checked={lang === "en"}
                  onChange={() => changeLanguage(lang === "en" ? "es" : "en")}
                />
                <span className={styles["slider-idioma"]}>
                  <span className={styles.flag + " " + styles["flag-es"]}>
                    <img src="/img/ES.png" alt="Bandera España" aria-hidden="true" />
                  </span>
                  <span className={styles.flag + " " + styles["flag-us"]}>
                    <img src="/img/EN.png" alt="Bandera Estados Unidos" aria-hidden="true" />
                  </span>
                </span>
              </label>
              <label className={styles["switch-dark"]}>
                <span className="sr-only">{t.srDarkMode}</span>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path
                    className="moonShape"
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  ></path>
                  <circle className="sunShape" cx="12" cy="12" r="4"></circle>
                  <path className="sunRay sunRay1" d="M12 2v2.5"></path>
                  <path className="sunRay sunRay2" d="m4.93 4.93 1.77 1.77"></path>
                  <path className="sunRay sunRay3" d="M2 12h2.5"></path>
                  <path className="sunRay sunRay4" d="M4.93 19.07 6.7 17.3"></path>
                  <path className="sunRay sunRay5" d="M12 19.5V22"></path>
                  <path className="sunRay sunRay6" d="m17.3 17.3 1.77 1.77"></path>
                  <path className="sunRay sunRay7" d="M19.5 12H22"></path>
                  <path className="sunRay sunRay8" d="m17.3 6.7 1.77-1.77"></path>
                </svg>
              </label>
              <Magnet padding={34} magnetStrength={2}>
                <a href={WHATSAPP_HERO_URL} target="_blank" rel="noopener noreferrer">
                  <div className={styles["icon-ws"]}></div>
                </a>
              </Magnet>
            </div>
          </FadeContent>

          <FadeContent delay={300} duration={800} blur>
            <div
              className={
                styles["contenedor-foto"] +
                " " +
                styles.foto +
                " " +
                styles["cursor-reveal"]
              }
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--mx",
                  `${e.clientX - rect.left}px`
                );
                e.currentTarget.style.setProperty(
                  "--my",
                  `${e.clientY - rect.top}px`
                );
              }}
            >
              <img
                className={styles["reveal-base"]}
                loading="lazy"
                src="/img/Soy_Marcus_Dev.png"
                alt="Martin Leidreiter - Fotografía de estudio"
                fetchPriority="high"
              />
              <img
                className={styles["reveal-target"]}
                src="/img/Leidreiter_Martin.png"
                alt=""
                loading="lazy"
              />
              <div className={styles["iconos-foto"]}>
                <i className="fa-solid fa-code float"></i>
                <i className="fa-brands fa-wordpress-simple float"></i>
                <i className="fa-brands fa-figma float"></i>
                <i className="fa-solid fa-wand-sparkles float"></i>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}