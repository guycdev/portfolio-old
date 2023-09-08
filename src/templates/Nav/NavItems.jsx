import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Heading from "../../components/Heading";
import { motion } from "framer-motion";

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

  return (
    <motion.ul
      className={styles.navItems}
      initial={{
        height: "0px",
      }}
      animate={{
        height: "100%",
        transition: {
          delay: 0.3,
        },
      }}
    >
      {menuItems}
    </motion.ul>
  );
}
