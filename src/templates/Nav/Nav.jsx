import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import styles from "./Nav.module.css";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 550);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth <= 550);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      className={styles.navContainer}
      initial={{
        y: -500,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      {windowWidth ? <MobileNav /> : <DesktopNav />}
    </motion.header>
  );
}
