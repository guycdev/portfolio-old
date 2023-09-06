import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function NavItems(props) {
  const { items } = props;

  const menuItems = items.map((item, index) => {
    const regex = / /g;
    const link = item.replace(regex, "-").toLowerCase();

    return (
      <li key={index}>
        <NavLink to={link}>{item}</NavLink>
      </li>
    );
  });

  return <ul className={styles.navItems}>{menuItems}</ul>;
}
