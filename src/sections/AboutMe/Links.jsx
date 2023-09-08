import React from "react";
import styles from "./AboutMe.module.css";
import { ReactSVG } from "react-svg";
import github from "../../assets/socials/github.svg";
import globe from "../../assets/globe.svg";

export default function (props) {
  const { linksArr } = props;

  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  return (
    <div className={styles.linkContainer}>
      <div>
        <a
          href={linksArr[0]}
          target="_blank"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <div className="react-svg">
            <ReactSVG src={github} />
          </div>
        </a>
        <a
          href={linksArr[1]}
          target="_blank"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <div className="react-svg">
            <ReactSVG src={globe} />
          </div>
        </a>
      </div>
    </div>
  );
}
