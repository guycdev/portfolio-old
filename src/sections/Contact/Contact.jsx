import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";
import emailjs from "@emailjs/browser";

export async function formAction(obj) {
  try {
    const formData = await obj.request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailObj = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      emailObj,
      import.meta.env.VITE_PUBLIC_KEY
    );
    return true;
  } catch (err) {
    return false;
  }
}

export default function Contact() {
  return (
    <section className={`card ${styles.contactContainer}`}>
      <InfoCard />
      <ContactForm />
    </section>
  );
}
