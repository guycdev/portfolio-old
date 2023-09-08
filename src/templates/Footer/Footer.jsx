import React from "react";
import styles from "./Footer.module.css";
import { ReactSVG } from "react-svg";
import linkedin from "../../assets/socials/linkedin.svg";
import twitter from "../../assets/socials/twitter.svg";
import github from "../../assets/socials/github.svg";

export default function Footer() {
  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItemContainer}>
        <a
          href="https://www.linkedin.com/in/guy-cohen-96a6141ab/"
          target="_blank"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <div className="react-svg">
            <ReactSVG src={linkedin} />
          </div>
        </a>
        <a
          href="https://twitter.com/gcWDev"
          target="_blank"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <div className="react-svg">
            <ReactSVG src={twitter} />
          </div>
        </a>
        <a
          href="https://github.com/gcWDev"
          target="_blank"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <div className="react-svg">
            <ReactSVG src={github} />
          </div>
        </a>
      </div>
    </div>
  );
}
