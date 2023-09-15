import React from "react";
import styles from "./Resume.module.css";
import Heading from "../../components/Heading";
import { NavLink } from "react-router-dom";

export default function ResumeMenu() {
  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  return (
    <ul className={styles.menuContainer}>
      <li>
        <NavLink
          to="../resume"
          className={({ isActive }) => (isActive ? styles.active : null)}
          end
          style={({ isActive }) => {
            return {
              fontSize: isActive ? "2rem" : "",
              marginLeft: isActive ? "1rem" : "",
            };
          }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <Heading content="Profile" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="education"
          className={({ isActive }) => (isActive ? styles.active : null)}
          style={({ isActive }) => {
            return {
              fontSize: isActive ? "2rem" : "",
              marginLeft: isActive ? "1rem" : "",
            };
          }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <Heading content="Education & Involvment" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="experience"
          className={({ isActive }) => (isActive ? styles.active : null)}
          style={({ isActive }) => {
            return {
              fontSize: isActive ? "2rem" : "",
              marginLeft: isActive ? "1rem" : "",
            };
          }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <Heading content="Experience" />
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="involvment"
          className={({ isActive }) => (isActive ? styles.active : null)}
          style={({ isActive }) => {
            return {
              fontSize: isActive ? "2rem" : "",
              marginLeft: isActive ? "1rem" : "",
            };
          }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <Heading content="Involvment" />
        </NavLink>
      </li> */}
    </ul>
  );
}
