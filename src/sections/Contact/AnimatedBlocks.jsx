import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function AnimatedBlocks({ amount }) {
  const number = Math.floor(Math.sqrt(amount));

  const blockArr = Array.from({ length: number * number }, (_, index) => (
    <div className={styles.block} key={index}></div>
  ));

  return (
    <div
      className={`card ${styles.animatedCardContainer}`}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${Math.floor(Math.sqrt(amount))}, 1fr)`,
        gridTemplateColumns: `repeat(${Math.floor(Math.sqrt(amount))}, 1fr)`,
      }}
    >
      <div className={styles.cursor}></div>
      {blockArr}
    </div>
  );
}
