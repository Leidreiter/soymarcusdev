"use client";

import type { FormEvent } from "react";
import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { CONTACTO_INFO, WHATSAPP_NUMBER } from "@/lib/site";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";
import Magnet from "@/components/reactbits/Magnet/Magnet";
import StarBorder from "@/components/reactbits/StarBorder/StarBorder";

function BlockInfo({ indices }: { indices: [number, number] }) {
  const { t } = useLanguage();
  const rows = CONTACTO_INFO.slice(indices[0], indices[1]);

  return (
    <div className={styles.informacion}>
      <div className={styles.info}>
        {rows.map((row) => (
          <div className={styles.row} key={row.labelKey}>
            <span className={styles.label}>{t[row.labelKey]}</span>
            {row.href ? (
              <a href={row.href} target="_blank" rel="noreferrer">
                <span className={styles.value}>{row.value}</span>
              </a>
            ) : (
              <span className={styles.value}>{row.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Contacto() {
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const origen = (
      form.elements.namedItem("origen") as HTMLSelectElement
    ).value;
    const fullName = (
      form.elements.namedItem("fullName") as HTMLInputElement
    ).value;
    const consulta = (
      form.elements.namedItem("consulta") as HTMLTextAreaElement
    ).value;

    let messageText = `Hola, soy ${fullName}.\n`;
    messageText += `Llegué a tu web por ${origen}.\n`;
    if (consulta) {
      messageText += `Quería consultar ${consulta}.\n`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(url, "_blank");
  }

  return (
    <div className={styles.contacto} id="contacto">
      <h2>{t.contactoTitulo}</h2>

      <FadeContent>
        <div className={styles["contacto-grid"]}>
          <BlockInfo indices={[0, 3]} />
          <BlockInfo indices={[3, 6]} />
        </div>
      </FadeContent>

      <h2>{t.contactoFormTitulo}</h2>
      <FadeContent delay={150}>
        <div className={styles["contacto-form"]}>
        <form id="contactForm" onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.field}>
            <label htmlFor="origen" className="sr-only">
              {t.formOrigen}
            </label>
            <div className={styles["icon-form"]}>
              <i className="fa-solid fa-circle-question"></i>
            </div>
            <select id="origen" name="origen" required className={styles.campo} defaultValue="">
              <option value="" disabled>
                {t.formOrigen}
              </option>
              <option value="redes sociales">{t.formOrigenOp1}</option>
              <option value="google">{t.formOrigenOp2}</option>
              <option value="recomendacion">{t.formOrigenOp3}</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="fullName" className="sr-only">
              {t.formNombre}
            </label>
            <div className={styles["icon-form"]}>
              <i className="fa-solid fa-user"></i>
            </div>
            <input type="text" id="fullName" className={styles.campo} name="fullName" required placeholder={t.formNombre} />
          </div>

          <div className={styles.field}>
            <label htmlFor="consulta" className="sr-only">
              {t.formMensaje}
            </label>
            <div className={styles["icon-form"]}>
              <i className="fa-solid fa-comment"></i>
            </div>
            <textarea name="consulta" id="consulta" className={styles.campo} placeholder={t.formMensaje}></textarea>
          </div>

          <div className={styles.boton}>
            <Magnet disabled wrapperClassName="w-full md:w-auto" padding={40}>
              <StarBorder
                type="submit"
                className={styles["boton-star"]}
                color="#22D3EE"
                speed="6s"
                thickness={2}
                backgroundColor="#0B0A14"
                textColor="#FFFFFF"
                borderColor="#7C3AED"
                borderRadius={999}
              >
                {t.formBoton} <i className="fab fa-whatsapp iconBtn"></i>
              </StarBorder>
            </Magnet>
          </div>
        </form>
        </div>
      </FadeContent>
    </div>
  );
}