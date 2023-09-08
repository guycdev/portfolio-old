import React from "react";
import HeroCta from "./HeroCta";
import styles from "./Hero.module.css";
import overlays from "../../utilities/overlayArr.js";
// import WordAnimationMaskSelector from "./WordAnimationMaskSelector";
import WordAnimationParent from "./WordAnimationParent";

export default function Hero() {
  return (
    <section className={styles.container}>
      <HeroCta />
      <div className={styles.wordAnimationContainer}>
        <WordAnimationParent overlays={overlays} />
        {/* <WordAnimationMaskSelector overlays={overlays} /> */}
      </div>
    </section>
  );
}
