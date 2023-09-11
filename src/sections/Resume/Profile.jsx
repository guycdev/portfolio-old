import React from "react";
import styles from "./Resume.module.css";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      className={styles.profileContainer}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
        },
      }}
    >
      <p className={styles.resumeSubheading}>
        <span>Entrepreneurial web developer</span> with $362K revenue from
        multiple ventures.
      </p>
      <p className={styles.resumeSubheading}>
        <span>Proficient in React</span> and Node; pursuing a{" "}
        <span>dual degree</span> in CS and finance.
      </p>
      <p className={styles.resumeSubheading}>
        Currently searching for a <span>challenging internship</span> to apply a
        unique blend of <span>tech</span> and <span>financial</span> skills in.
      </p>
      <p className={styles.resumeSubheading}>
        Technologies in use listed below.
      </p>
    </motion.div>
  );
}
