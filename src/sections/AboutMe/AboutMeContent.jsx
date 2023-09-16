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
        <Heading content="I'm Guy, an entrepenurial web developer always looking to undertake new ventures and grow my skill set. Between 2020 - 2022 I ran an automation business that generated $350K in lifetime revenue, and currently I run a web agency tailored towards mortgage broakers." />
      </p>
      <p>
        <Heading content="In addition to my hands-on experience, I'm actively pursuing dual degrees in Computer Science and Finance. The two domains synergise to give me the growth mindset and big picture view required to succeed on your development team." />
      </p>
    </div>
  );
}

{
  /* <Heading content="Currently finishing dual degrees in Computer Science and Finance while also utilizing the power of code to generate $362K in lifetime revenue, I'm dedicated to pushing the boundaries of my knowledge and filling any gaps in my skill set. I love working with React and Node and whenever I'm not trying to add cool visual components to my projects you'll find me playing basketball or at the gym." /> */
}
