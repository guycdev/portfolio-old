import React from "react";
import styles from "./Contact.module.css";
import AnimatedBlocks from "./AnimatedBlocks";

export default function Contact() {
  const random = Math.floor(Math.random() * 100);

  return (
    <section className={styles.contactContainer}>
      <div></div>
      <AnimatedBlocks amount={random} />
    </section>
  );
}
