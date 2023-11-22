import React from "react";
import styles from "./Resume.module.css";
import Experience from "../../components/Experience";

export default function Education() {
  const educationArr = [
    {
      duration: "2019-2023",
      type: "Bachelor of Commerce",
      subject: "Finance with distinction",
      experience: "Toronto Metropolitan University",
      geo: "Toronto, ON, Canada",
    },
    {
      duration: "2023-Present",
      type: "Bachelor of Science",
      subject: "Computer Science",
      experience: "Oregon State University",
      geo: "Corvallis, OR, USA",
    },
  ];

  const involvmentArr = [
    {
      duration: "Nov 2023",
      type: "Google Hacks x OSU Hackathon",
      subject: "Full stack crowdsourcing survival map",
      experience: "Oregon State University",
      geo: "Corvallis, OR, United States",
    },
    {
      duration: "Oct 2023",
      type: "Oregon State Hackathon",
      subject: "Full stack student group finder",
      experience: "Oregon State University",
      geo: "Corvallis, OR, United States",
    },
    {
      duration: "Jan 2023 - Apr 2023",
      type: "High Frequency Trading Competition",
      subject: "High frequency AI trading bot",
      experience: "Ted Rogers School of Management",
      geo: "Toronto, ON, Canada",
    },
    {
      duration: "May 2021 - Aug 2021",
      type: "SMIF Analyst",
      subject: "Oversaw the allocation of a $500K portfolio",
      experience: "Ted Rogers School of Management",
      geo: "Corvallis, OR, United States",
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <Experience experiences={educationArr} />
      <Experience experiences={involvmentArr} />
    </div>
  );
}
