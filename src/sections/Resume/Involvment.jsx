import React from "react";
import styles from "./Resume.module.css";
import Experience from "../../components/Experience";

export default function Involvment() {
  const educationArr = [
    {
      duration: "Jan 2023 - Apr 2023",
      type: "High Frequency Trading Competition",
      subject: "1st Place out of 38 participants",
      experience: "Ted Rogers School of Management",
      geo: "Toronto, On, Canada",
    },
    {
      duration: "May 2021 - Aug 2021",
      type: "SMIF Analyst",
      subject: "Oversaw the allocation of a $500K portfolio",
      experience: "Ted Rogers School of Management",
      geo: "Toronto, ON, Canada",
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <Experience experiences={educationArr} />
    </div>
  );
}
