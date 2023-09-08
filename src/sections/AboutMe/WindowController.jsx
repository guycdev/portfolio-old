import React from "react";
import styles from "./AboutMe.module.css";
import { ReactSVG } from "react-svg";
import code from "../../assets/window-controller/code.svg";
import video from "../../assets/window-controller/video.svg";
import Heading from "../../components/Heading";

export default function WindowController(props) {
  const { window, setWindow } = props;

  function handleMouseOver(e) {
    e.currentTarget.classList.toggle(styles.hovered);
  }

  function handleClick(e) {
    setWindow(e.currentTarget.id);
  }

  return (
    <div className={styles.windowControllerContainer}>
      <div>
        <div
          className={`react-svg ${window == "code" ? styles.clicked : ""}`}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
          id="code"
          onClick={handleClick}
        >
          <ReactSVG src={code} />
        </div>
        <div
          className={`react-svg ${window == "video" ? styles.clicked : ""}`}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
          id="video"
          onClick={handleClick}
        >
          <ReactSVG src={video} />
        </div>
      </div>
      <h3>
        <Heading content="Snippets" />
      </h3>
    </div>
  );
}
