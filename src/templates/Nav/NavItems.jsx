import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Heading from "../../components/Heading";

export default function NavItems(props) {
  const { items } = props;

  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  const menuItems = items.map((item, index) => {
    const regex = / /g;
    const link = item.replace(regex, "-").toLowerCase();

    return (
      <li
        key={index}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <NavLink to={link}>
          <Heading content={item} />
        </NavLink>
      </li>
    );
  });

  return <ul className={styles.navItems}>{menuItems}</ul>;
}
