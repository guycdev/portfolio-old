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
        <Heading content="I'm Guy, an entrepenurial web developer always looking to undertake new ventures and grow my skill set. From bootstrapping a business to over $350K in lifetime revenue, to currently running a web agency tailored to mortgage broakers, I always love to learn new skills and turn ideas to solutions. I'm currently completing a dual degree in Computer Science and Finance and am looking to provide that big picture view on your development team." />

        {/* <Heading content="Currently finishing dual degrees in Computer Science and Finance while also utilizing the power of code to generate $362K in lifetime revenue, I'm dedicated to pushing the boundaries of my knowledge and filling any gaps in my skill set. I love working with React and Node and whenever I'm not trying to add cool visual components to my projects you'll find me playing basketball or at the gym." /> */}
      </p>
    </div>
  );
}
