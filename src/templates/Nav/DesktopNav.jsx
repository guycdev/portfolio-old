import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import NavItems from "./NavItems";
import Heading from "../../components/Heading";

export default function DesktopNav() {
  function handleMouseEnter(e) {
    e.currentTarget.classList.add(styles.hovered);
  }
  function handleMouseExit(e) {
    e.currentTarget.classList.remove(styles.hovered);
  }

  return (
    <>
      <NavLink
        to=".."
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        className={`${styles.homeBtn}`}
      >
        <Heading content="GC" />
      </NavLink>
      <NavItems items={["About Me", "Projects", "Resume", "Get in Touch"]} />
    </>
  );
}
