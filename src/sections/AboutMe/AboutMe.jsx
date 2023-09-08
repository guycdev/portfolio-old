import React from "react";
import styles from "./AboutMe.module.css";
import ProfileCard from "./ProfileCard";
import CodeSnippet from "./CodeSnippet";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <ProfileCard />
      <div className={styles.miscContainer}>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <CodeSnippet />
    </section>
  );
}
