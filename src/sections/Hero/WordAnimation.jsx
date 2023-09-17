import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function WordAnimation(props) {
  const { overlayIndex, id, overlay, randomLetters } = props;

  const maskStyle = {
    maskImage: `url(${overlay})`,
    WebkitMaskImage: `url(${overlay})`,
  };

  const isVisible = overlayIndex == id;

  return (
    <div
      className={styles.wordContainer}
      style={{
        opacity: isVisible ? 1 : 0,
        height: isVisible ? "400px" : "0px",
      }}
    >
      <motion.div
        className={styles.maskContainer}
        style={maskStyle}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
      >
        <p>{randomLetters}</p>
      </motion.div>
    </div>
  );
}
