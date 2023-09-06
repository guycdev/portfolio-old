import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import overlays from "../../utilities/overlayArr.js";

export default function WordAnimation() {
  const [randomLetters, setRandomLetters] = useState(letterRandomizer());
  const [overlayIndex, setOverlayIndex] = useState(0);

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

  useEffect(() => {
    window.addEventListener("mousemove", () =>
      setRandomLetters(letterRandomizer)
    );

    const interval = setInterval(() => {
      setOverlayIndex((prev) => (prev + 1) % overlays.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const maskStyle = {
    maskImage: `url(${overlays[overlayIndex]})`,
    WebkitMaskImage: `url(${overlays[overlayIndex]})`,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.6,
        transition: {
          duration: 1.3,
          delay: 1,
          type: "spring",
        },
      }}
      className={styles.wordContainer}
    >
      <div className={styles.maskContainer} style={maskStyle}>
        <p>{randomLetters}</p>
      </div>
    </motion.div>
  );
}
