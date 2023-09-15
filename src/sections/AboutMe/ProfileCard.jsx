import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` ${styles.specialCard}`}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      <div className={styles.specialCardContent}>
        {isHovered ? (
          <div className={styles.backCard}>
            <h3>
              <Heading content="hi im just testing for now" />
            </h3>
          </div>
        ) : (
          <div className={styles.frontCard}>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
              <li>Point 4</li>
              <li>Point 5</li>
              <li>Point 6</li>
            </ul>
          </div>
        )}
        <a href="/Guy-Cohen-Resume.pdf" download>
          <Button style="primary-btn" text="Download CV" />
        </a>
      </div>
    </div>
  );
}
