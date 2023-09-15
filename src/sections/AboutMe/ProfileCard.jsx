import React from "react";
import styles from "./AboutMe.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import blob from "../../assets/blob/blob.png";
import { motion } from "framer-motion";

export default function ProfileCard() {
  const breathingVariant = {
    initial: {
      x: -500,
      scale: 0.7,
    },
    breathe: {
      rotate: [60, -60, 60],
      scale: [0.7, 0.9, 0.7],
      x: [0, 0, 0],
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 4,
      },
    },
  };

  return (
    <div className={`card ${styles.aboutMeProfileContainer}`}>
      <motion.div
        className={styles.blobContainer}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        }}
      >
        <motion.img
          src={blob}
          alt="blobs"
          initial="initial"
          animate="breathe"
          variants={breathingVariant}
        />
      </motion.div>
      <h3>
        <Heading content="Guy Cohen" />
      </h3>
      <h5>
        <Heading content="cohenguy74@gmail.com" />
      </h5>
      <a href="/Guy-Cohen-Resume.pdf" download>
        <Button style="primary-btn" text="Download CV" />
      </a>
    </div>
  );
}
