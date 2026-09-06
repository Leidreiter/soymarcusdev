"use client";

import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { MENU_ITEMS } from "@/lib/site";

export default function Menu({ onToggleMenu }: { onToggleMenu?: () => void }) {
  const { t } = useLanguage();

  return (
    <div className={styles.menu}>
      <button className={styles["hamburger-menu"]} onClick={onToggleMenu} aria-label="Menú">
        &#9776;
      </button>
      <ul className={styles["menu-items"]}>
        {MENU_ITEMS.map((item) => (
          <li key={item.labelKey}>
            <a
              href={item.href}
              target={item.target}
              rel={item.target ? "noreferrer" : undefined}
              className={item.color ? styles.color : undefined}
            >
              {t[item.labelKey]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}