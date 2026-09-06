"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { TESTIMONIOS } from "@/lib/site";
import BorderGlow from "@/components/reactbits/BorderGlow/BorderGlow";

function testimoniosPorVista() {
  return typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 2;
}

export default function Testimonios() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [perView, setPerView] = useState(2);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, currentX: 0, startTransform: 0, isDragging: false });

  const total = TESTIMONIOS.length;
  const cantDots = Math.ceil(total / perView);

  const medir = useCallback(() => {
    const first = trackRef.current?.firstElementChild as HTMLElement | null;
    if (first) setSlideWidth(first.offsetWidth);
    setPerView(testimoniosPorVista());
  }, []);

  useEffect(() => {
    medir();
    const onResize = () => {
      medir();
      setIndex((prev) => {
        const max = Math.max(0, total - 1);
        return prev > max ? max : prev;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [medir, total]);

  const moverA = useCallback((pos: number) => {
    setIndex(pos * perView);
  }, [perView]);

  const next = useCallback(() => {
    setIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragState.current = {
      startX: e.clientX,
      currentX: e.clientX,
      startTransform: index * slideWidth,
      isDragging: true,
    };
    setDragging(true);
  }, [index, slideWidth]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const st = dragState.current;
    if (!st.isDragging) return;
    st.currentX = e.clientX;
    const diff = st.startX - st.currentX;
    const el = trackRef.current;
    if (el) {
      el.style.transition = "none";
      el.style.transform = `translateX(-${st.startTransform + diff}px)`;
    }
  }, []);

  const endDrag = useCallback(() => {
    const st = dragState.current;
    if (!st.isDragging) return;
    st.isDragging = false;
    setDragging(false);
    const el = trackRef.current;
    if (el) el.style.transition = "transform 0.3s ease-out";
    const diff = st.startX - st.currentX;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) setIndex((value) => (value < total - 1 ? value + 1 : 0));
      else setIndex((value) => (value > 0 ? value - 1 : total - 1));
    }
  }, [total]);

  const onPointerLeave = useCallback(() => {
    if (dragState.current.isDragging) endDrag();
  }, [endDrag]);

  return (
    <div className={styles.testimonials}>
      <h2>{t.testimonialesTitulo}</h2>
      <div className={styles["testimonial-container"]}>
        <div
          className={styles["testimonial-track"]}
          ref={trackRef}
          style={{ transform: `translateX(-${index * slideWidth}px)`, cursor: dragging ? "grabbing" : "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={onPointerLeave}
          onPointerCancel={endDrag}
        >
          {TESTIMONIOS.map((testimonio) => (
            <div className={styles["testimonial"]} key={testimonio.imagen}>
              <BorderGlow
                className={styles["testimonial-glow"]}
                backgroundColor="var(--testimonial-bg)"
                borderRadius={10}
                glowRadius={28}
                glowIntensity={0.9}
                coneSpread={22}
                glowColor="262 86 63"
                colors={["#8B5CF6", "#22D3EE", "#EC4899"]}
                fillOpacity={0.45}
              >
                <div className={styles["testimonial-card"]}>
                  <div className={styles["testimonial-header"]}>
                    <div className={styles["testimonial-info"]}>
                      <h3>{t[testimonio.nombreKey]}</h3>
                      <p>{t[testimonio.puestoKey]}</p>
                    </div>
                    <img
                      src={testimonio.imagen}
                      alt={t[testimonio.nombreKey]}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles["testimonial-text"]}>
                    &ldquo;{t[testimonio.textoKey]}&rdquo;
                  </div>
                  <div className={styles.stars}>{testimonio.estrella}</div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>

        <div className={styles["testimonial-nav"]}>
          <div className={styles.dots}>
            {Array.from({ length: cantDots }).map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${i === Math.floor(index / perView) ? styles["active"] : ""}`}
                onClick={() => moverA(i)}
              ></div>
            ))}
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={prev}>
              &lsaquo;
            </button>
            <button className={styles.arrow} onClick={next}>
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}