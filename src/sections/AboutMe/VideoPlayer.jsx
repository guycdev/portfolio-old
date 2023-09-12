import React from "react";
import styles from "./AboutMe.module.css";

export default function VideoPlayer(props) {
  const { video } = props;

  return (
    <div className={styles.videoPlayerContainer}>
      <video src={video} autoPlay loop muted />
    </div>
  );
}
