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
      duration: "2023-2024",
      type: "Bachelor of Science",
      subject: "Computer Science",
      experience: "Oregon State University",
      geo: "Corvallis, OR, USA",
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <Experience experiences={educationArr} />
    </div>
  );
}
