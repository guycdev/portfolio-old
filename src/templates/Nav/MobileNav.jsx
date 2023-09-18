import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import close from "../../assets/close.svg";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

import Heading from "../../components/Heading";

export default function MobileNav() {
  const navVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <div
        className="burger-icon"
        onClick={handleClick}
        style={{ opacity: isClicked ? "0" : "1" }}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <NavLink to=".." className={`${styles.homeBtn}`}>
        <Heading content="GC" />
      </NavLink>
      <motion.nav
        className={styles.mobileNav}
        animate={isClicked ? "open" : "closed"}
        initial="closed"
        variants={navVariants}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <ReactSVG
          src={close}
          onClick={() => handleClick()}
          beforeInjection={(svg) => {
            svg.classList.add(styles.closeBtn);
          }}
        />
        <NavItems items={["About Me", "Projects", "Resume", "Get in Touch"]} />
      </motion.nav>
      <div
        className={styles.navOverlay}
        style={{ display: isClicked ? "block" : "none" }}
        onClick={handleClick}
      ></div>
    </>
  );
}
