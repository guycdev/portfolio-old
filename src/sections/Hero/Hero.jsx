import React, { useState, useEffect } from "react";
import HeroCta from "./HeroCta";
import WordAnimation from "./WordAnimation";
import styles from "./Hero.module.css";
import overlays from "../../utilities/overlayArr.js";

export default function Hero() {
  const [overlayIndex, setOverlayIndex] = useState(0);
  const [randomLetters, setRandomLetters] = useState(letterRandomizer());

  useEffect(() => {
    window.addEventListener("mousemove", () =>
      setRandomLetters(letterRandomizer)
    );

    const interval = setInterval(() => {
      setOverlayIndex((prev) => (prev + 1) % overlays.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function letterRandomizer() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();

    let randomizer = "";

    for (let i = 0; i < 1500; i++) {
      randomizer += lowerCase[randomNumber(24)];
      randomizer += upperCase[randomNumber(24)];
    }

    return randomizer;
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  const wordAnimationArr = overlays.map((overlay, index) => {
    return (
      <WordAnimation
        overlayIndex={overlayIndex}
        id={index}
        key={index}
        overlay={overlay}
        randomLetters={randomLetters}
      />
    );
  });

  return (
    <section className={styles.container}>
      <HeroCta />
      {wordAnimationArr}
    </section>
  );
}
