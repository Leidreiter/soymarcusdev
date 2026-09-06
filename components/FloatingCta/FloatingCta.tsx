"use client";

import CircularText from "@/components/reactbits/CircularText/CircularText";
import styles from "./FloatingCta.module.css";

const WHATSAPP_URL = "https://wa.me/5493515957014";

export default function FloatingCta() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Trabajemos juntos por WhatsApp"
      className={styles.flotante}
    >
      <CircularText
        text="TRABAJEMOS✦JUNTOS✦"
        spinDuration={24}
        onHover="slowDown"
        size={100}
        className={styles.texto}
      />
      <span className={styles.icono} aria-hidden="true">
        <i className="fab fa-whatsapp"></i>
      </span>
    </a>
  );
}