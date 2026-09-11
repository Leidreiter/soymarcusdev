"use client";

import styles from "@/styles/home.module.scss";
import { useLanguage } from "@/app/providers/language";
import { POSTS } from "@/lib/site";
import CircularGallery from "@/components/reactbits/CircularGallery/CircularGallery";

export default function UltimosPosts() {
  const { t } = useLanguage();

  const items = POSTS.map((post) => ({
    image: post.image,
    text: t.verPost,
  }));

  return (
    <div className={styles.ultimosposts} id="posts">
      <h2>{t.ultimosPosts}</h2>
      <div className={styles["carousel-posts"]}>
        <CircularGallery
          items={items}
          bend={3}
          borderRadius={0.08}
          textColor="rgba(255,255,255,0.85)"
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
}