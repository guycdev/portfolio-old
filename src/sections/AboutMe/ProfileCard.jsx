import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import CursorFollower from "../../components/CursorFollower";
import { motion } from "framer-motion";

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
            boxShadow: isHovered ? "none" : "var(--box-shadow)",
          }}
        >
          <CursorFollower />
          <em>
            <Heading
              content={
                isHovered
                  ? "I like to make cool UI elemnts"
                  : "Hover me to get to know me better"
              }
            />
          </em>
        </div>
        {isHovered && (
          <motion.a
            href="/Guy-Cohen-Resume.pdf"
            download
            className={styles.resumeContainer}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            }}
          >
            <Button style="primary-btn" text="Download CV" />
          </motion.a>
        )}
      </div>
    </div>
  );
}
