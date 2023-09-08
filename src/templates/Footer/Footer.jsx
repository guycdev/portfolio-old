import React from "react";
import styles from "./Footer.module.css";
import { ReactSVG } from "react-svg";
import linkedin from "../../assets/socials/linkedin.svg";
import twitter from "../../assets/socials/twitter.svg";
import github from "../../assets/socials/github.svg";
import { motion } from "framer-motion";

export default function Footer() {
  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  const linksArr = [
    {
      logo: linkedin,
      link: "https://www.linkedin.com/in/guy-cohen-96a6141ab/",
    },
    {
      logo: twitter,
      link: "https://twitter.com/gcWDev",
    },
    {
      logo: github,
      link: "https://github.com/gcWDev",
    },
  ];

  const elementArr = linksArr.map((link, index) => {
    return (
      <motion.a
        href={link.link}
        target="_blank"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3 + index / linksArr.length,
          },
        }}
      >
        <div className="react-svg">
          <ReactSVG src={link.logo} />
        </div>
      </motion.a>
    );
  });

  return (
    <div className={styles.footerContainer}>
      <motion.div
        className={styles.footerItemContainer}
        initial={{ height: "0px" }} // Include units here
        animate={{
          height: "100%",
          transition: {
            delay: 0.2,
          },
        }}
      >
        {elementArr}
      </motion.div>
    </div>
  );
}
