import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";

export function formAction() {
  console.log("form action initiated");
}

export default function Contact() {
  return (
    <section className={`card ${styles.contactContainer}`}>
      <InfoCard />
      <ContactForm />
    </section>
  );
}
