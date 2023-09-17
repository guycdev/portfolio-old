import React from "react";
import HeroCta from "./HeroCta";
import styles from "./Hero.module.css";
import overlays from "../../utilities/overlayArr.js";
import WordAnimationParent from "./WordAnimationParent";
import Cursor from "../../components/Cursor";

export default function Hero() {
  return (
    <section className={styles.container}>
      <Cursor />
      <HeroCta />
      <div className={styles.wordAnimationContainer}>
        <WordAnimationParent overlays={overlays} />
      </div>
    </section>
  );
}
