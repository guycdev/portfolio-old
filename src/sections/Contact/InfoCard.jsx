import React from "react";
import styles from "./Contact.module.css";
import Heading from "../../components/Heading";
import RandomDots from "../../components/RandomDots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";
import github from "../../assets/socials/github.svg";
import linkedin from "../../assets/socials/linkedin.svg";
import twitter from "../../assets/socials/twitter.svg";

export default function InfoCard() {
  return (
    <div className={styles.contactInformation}>
      <div className={styles.borderedLine}></div>
      <div className={styles.borderedLineBig}></div>
      <RandomDots amount={180} />
      <div className={styles.headingContainer}>
        <h2>
          <Heading content="Contact Information" />
        </h2>
        <p>
          <Heading content="Fill out the form and I will respond within 24 hours" />
        </p>
      </div>
      <div className={styles.iconContainer}>
        <a className={styles.contactLine} href="mailto:cohenguy74@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            <Heading content="cohenguy74@gmail.com" />
          </p>
        </a>
        <a className={styles.contactLine} href="tel:+16472027484">
          <FontAwesomeIcon icon={faPhone} />
          <p>
            <Heading content="(647) 202-7484" />
          </p>
        </a>
        <a className={styles.contactLine}>
          <FontAwesomeIcon icon={faLocation} />
          <p>
            <Heading content="Toronto, ON, Canada" />
          </p>
        </a>
      </div>
      <div className={styles.socialsContainer}>
        <a
          className="react-svg"
          href="https://github.com/gcWDev"
          target="_blank"
        >
          <ReactSVG src={github} />
        </a>
        <a
          className="react-svg"
          href="https://twitter.com/gcWDev"
          target="_blank"
        >
          <ReactSVG src={twitter} />
        </a>
        <a
          className="react-svg"
          href="https://www.linkedin.com/in/guy-cohen-96a6141ab/"
          target="_blank"
        >
          <ReactSVG src={linkedin} />
        </a>
      </div>
      <div className={styles.accentBlob}>
        <div className={styles.primaryBlob}></div>
      </div>
    </div>
  );
}
