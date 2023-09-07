import React from "react";
import styles from "./Hero.module.css";

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
      <div className={styles.maskContainer} style={maskStyle}>
        <p>{randomLetters}</p>
      </div>
    </div>
  );
}
