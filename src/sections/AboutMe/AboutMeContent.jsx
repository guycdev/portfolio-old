import React from "react";
import styles from "./AboutMe.module.css";
import { ReactSVG } from "react-svg";
import checkMark from "../../assets/checkmark.svg";
import Heading from "../../components/Heading";

export default function AboutMeContent() {
  return (
    <div className={`card ${styles.aboutMeContentContainer}`}>
      <h3>
        <Heading content="About Me" />
      </h3>
      <div className={`react-svg ${styles.workStatusContainer}`}>
        <ReactSVG src={checkMark} />
        <p>
          <Heading content="Open to Work" />
        </p>
      </div>
      <p>
        <Heading content="Web developer currently finishing my dual degree in computer science and finance. I'm all about pushing the boundaries of my knowledge and I awlays work towards filling my gaps." />
      </p>
      <p>
        <Heading content="I love working with React and Node and whenever I'm not trying to add cool visual components to my projects you'll find me playing basketball or at the gym." />
      </p>
    </div>
  );
}
