import React from "react";
import styles from "./AboutMe.module.css";
import Heading from "../../components/Heading";

export default function ProfileCard() {
  return (
    <div className="card">
      <h3>
        <Heading content="Guy Cohen" />
      </h3>
      <h5>
        <Heading content="cohenguy74@gmail.com" />
      </h5>
    </div>
  );
}
