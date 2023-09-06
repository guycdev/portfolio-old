import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function WordAnimation() {
  const [randomLetters, setRandomLetters] = useState(letterRandomizer());

  function letterRandomizer() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();

    let randomizer = "";

    for (let i = 0; i < 1000; i++) {
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
  }, []);

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
      <p>{randomLetters}</p>
    </motion.div>
  );
}
