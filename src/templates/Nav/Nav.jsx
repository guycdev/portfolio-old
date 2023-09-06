import React from "react";
import styles from "./Nav.module.css";
import NavItems from "./NavItems";
export default function Nav() {
  return (
    <header className={styles.navContainer}>
      <h4>GC</h4>
      <NavItems items={["About Me", "Projects", "Resume", "Get in Touch"]} />
    </header>
  );
}
