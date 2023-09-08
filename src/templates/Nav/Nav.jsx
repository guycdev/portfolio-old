import React from "react";
import styles from "./Nav.module.css";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";
import Heading from "../../components/Heading";

export default function Nav() {
  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  return (
    <header className={styles.navContainer}>
      <NavLink
        to=".."
        className={styles.homeBtn}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <Heading content="GC" />
      </NavLink>
      <NavItems items={["About Me", "Projects", "Resume", "Get in Touch"]} />
    </header>
  );
}
