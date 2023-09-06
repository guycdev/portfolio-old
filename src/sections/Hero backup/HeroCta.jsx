import React from "react";
import styles from "./Hero.module.css";
import Heading from "../../components/Heading";

export default function HeroCta() {
  return (
    <div className={styles.heroContainer}>
      <h1 className="main-heading">
        <Heading content="GUY COHEN" />
      </h1>
    </div>
  );
}
