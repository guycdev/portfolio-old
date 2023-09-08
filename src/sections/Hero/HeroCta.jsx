import React from "react";
import styles from "./Hero.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function HeroCta() {
  return (
    <div className={styles.heroContainer}>
      <h1 className="main-heading">
        <Heading content="Guy " />
        <Heading content="Cohen" />
      </h1>
      <motion.h3
        className="typewriter"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
      >
        <Typewriter
          options={{
            strings: ["Frontend", "Backend", "UX/UI"],
            autoStart: true,
            loop: true,
            pauseFor: 1000,
          }}
        />
        Developer
      </motion.h3>
      <p className="subheading">
        <Heading content="I'm Guy, a computer science and finance student eager to innovate on your engineering team. Data-Driven, Dollar-Smart: Uniting Financial Acumen and Tech Skills to provide your team with a big picture perspective." />
      </p>
      <div className={styles.btnContainer}>
        <Button style="primary-btn" text="Get in Touch" id={1} />
        <Button style="secondary-btn" text="My Projects" id={2} />
      </div>
    </div>
  );
}
