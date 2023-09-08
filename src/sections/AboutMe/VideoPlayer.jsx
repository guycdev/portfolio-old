import React from "react";
import styles from "./AboutMe.module.css";

export default function VideoPlayer(props) {
  const test = ["video 1", "video 2"];

  const { videoIndex, video } = props;

  const elementArr = test.map((e, index) => {
    return (
      <video
        src={video}
        style={{ display: videoIndex == index ? "block" : "none" }}
        autoPlay
        loop
        muted
      />
    );
  });

  return <div className={styles.videoPlayerContainer}>{elementArr}</div>;
}
