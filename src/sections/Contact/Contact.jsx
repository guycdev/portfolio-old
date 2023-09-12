import React from "react";
import styles from "./Contact.module.css";
import AnimatedBlocks from "./AnimatedBlocks";
import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";

export default function Contact() {
  const random = [4, 9, 16];

  return (
    <section className={`card ${styles.contactContainer}`}>
      <InfoCard />
      <ContactForm />
    </section>
  );
}
