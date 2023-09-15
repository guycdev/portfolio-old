import React from "react";
import styles from "./Hero.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <Heading content="I'm Guy, an aspiring innovator in both code and commerce, ready to contribute a big-picture skillset to your team. With a track record of turning ideas into profit through entrepreneurial experience, I bring the growth mindset required to succeed." />
      </p>
      <div className={styles.btnContainer}>
        <Link to="get-in-touch">
          <Button style="primary-btn" text="Get in Touch" id={1} />
        </Link>
        <Link to="projects">
          <Button style="secondary-btn" text="My Projects" id={2} />
        </Link>
      </div>
    </div>
  );
}
