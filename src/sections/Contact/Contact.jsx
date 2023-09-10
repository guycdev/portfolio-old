import React from "react";
import styles from "./Contact.module.css";
import AnimatedBlocks from "./AnimatedBlocks";
import ContactForm from "./ContactForm";

export default function Contact() {
  const random = [4, 9, 16];

  return (
    <section className={styles.contactContainer}>
      <ContactForm />
      <AnimatedBlocks
        amount={random[Math.floor(Math.random() * random.length)]}
      />
    </section>
  );
}
