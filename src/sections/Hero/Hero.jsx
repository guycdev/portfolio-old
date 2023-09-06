import React from "react";
import HeroCta from "./HeroCta";
import WordAnimation from "./WordAnimation";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <HeroCta />
      <WordAnimation />
    </section>
  );
}
