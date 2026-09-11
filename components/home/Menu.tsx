"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { MENU_ITEMS } from "@/lib/site";

const ACCENT = "#8B5CF6";
const BASE_COLOR = "#fff";

export default function Menu({
  open = false,
  onToggleMenu,
}: {
  open?: boolean;
  onToggleMenu?: () => void;
}) {
  const { t } = useLanguage();
  const listRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    const btn = btnRef.current;
    if (!list) return;

    const labels = Array.from(
      list.querySelectorAll<HTMLElement>(`.${styles["menu-item-label"]}`)
    );
    const links = Array.from(
      list.querySelectorAll<HTMLElement>(`.${styles["menu-item-link"]}`)
    );

    const ctx = gsap.context(() => {
      if (!window.matchMedia("(min-width: 768px)").matches) {
        gsap.set(labels, { clearProps: "all" });
        if (btn) gsap.set(btn, { clearProps: "color" });
        return;
      }

      if (open) {
        gsap.fromTo(
          labels,
          { yPercent: 140, rotate: 8, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
            stagger: { each: 0.09, from: "start" },
            delay: 0.15,
            overwrite: "auto",
          }
        );
        gsap.fromTo(
          links,
          { "--sm-num-opacity": 0 },
          {
            "--sm-num-opacity": 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: { each: 0.08, from: "start" },
            delay: 0.3,
            overwrite: "auto",
          }
        );
        if (btn) {
          gsap.to(btn, {
            color: ACCENT,
            delay: 0.18,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      } else {
        gsap.to(labels, {
          yPercent: 120,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          overwrite: "auto",
        });
        if (links.length) gsap.set(links, { "--sm-num-opacity": 0 });
        if (btn) {
          gsap.to(btn, {
            color: BASE_COLOR,
            duration: 0.35,
            ease: "power3.inOut",
            overwrite: "auto",
          });
        }
      }
    }, list);

    return () => ctx.revert();
  }, [open]);

  return (
    <div className={styles.menu}>
      <button
        ref={btnRef}
        className={styles["hamburger-menu"]}
        onClick={onToggleMenu}
        aria-label="Menú"
        aria-expanded={open}
      >
        &#9776;
      </button>
      <ul
        className={styles["menu-items"]}
        ref={listRef}
        data-numbering
        aria-hidden={!open}
      >
        {MENU_ITEMS.map((item) => (
          <li key={item.labelKey} className={styles["menu-item-wrap"]}>
            <a
              href={item.href}
              target={item.target}
              rel={item.target ? "noreferrer" : undefined}
              className={`${styles["menu-item-link"]} ${
                item.color ? styles.color : ""
              }`}
            >
              <span className={styles["menu-item-label"]}>
                {t[item.labelKey]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}