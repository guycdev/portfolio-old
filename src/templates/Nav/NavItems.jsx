import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Heading from "../../components/Heading";
import { easeInOut, motion } from "framer-motion";

export default function NavItems(props) {
  const { items } = props;

  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  const menuItems = items.map((item, index) => {
    const regex = / /g;
    const link = item.replace(regex, "-").toLowerCase();

    return (
      <motion.li
        key={index}
        onMouseEnter={handleMouseOver}
        className={index == items.length - 1 ? styles.last : ""}
        onMouseLeave={handleMouseOver}
        whileHover={
          index == items.length - 1
            ? {
                x: 15,
                scale: 1.05,
                transition: {
                  type: easeInOut,
                },
              }
            : ""
        }
      >
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          <Heading content={item} />
        </NavLink>
      </motion.li>
    );
  });

  return (
    <motion.ul
      className={styles.navItems}
      initial={{
        height: "0px",
      }}
      animate={{
        height: "fit-content",
        transition: {
          delay: 0.3,
        },
      }}
    >
      {menuItems}
    </motion.ul>
  );
}
