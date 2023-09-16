import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import CursorFollower from "../../components/CursorFollower";

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` ${styles.specialCard}`}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      <div className={styles.specialCardContent}>
        {/* {isHovered ? (
          <div className={styles.backCard}>
            <h3>
              <Heading content="hi im just testing for now" />
            </h3>
          </div>
        ) : ( */}
        <div
          className={styles.frontCard}
          style={{
            backgroundColor: isHovered ? "transparent" : "var(--background)",
          }}
        >
          <CursorFollower />
          {/* <h3>
              <Heading content="I like building fun and unique UI elements" />
            </h3> */}
          <em>
            <Heading content="Hover me to get to know me better" />
          </em>
        </div>
        {/* )} */}
        <a href="/Guy-Cohen-Resume.pdf" download>
          <Button style="primary-btn" text="Download CV" />
        </a>
      </div>
    </div>
  );
}
