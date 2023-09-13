import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import styles from "./Nav.module.css";
import MobileNav from "./MobileNav";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 550);

  const location = useLocation();

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
    <header className={styles.navContainer}>
      {windowWidth ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}
