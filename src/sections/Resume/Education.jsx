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
      duration: "Mar 2024",
      type: "BeatBytes",
      subject: "🏆 2nd place at beaverhack Winter 2024 event 🏆",
      experience: "Beaverhacks Winter 2024 Hackathon",
      geo: "Corvallis, OR, United States",
    },
    {
      duration: "Nov 2023",
      type: "Outbreak Navigator",
      subject: "🏆 1st place at Google Hacks x OSU Fall 2023 event 🏆",
      experience: "Google Hacks x OSU Hackathon Fall 2023",
      geo: "Corvallis, OR, United States",
    },
    {
      duration: "Oct 2023",
      type: "Beaverhacks Fall 2023 Hackathon",
      subject: "Full stack student group finder",
      experience: "Beaverhacks Fall 2023 Hackathon",
      geo: "Corvallis, OR, United States",
    },
    {
      duration: "Jan 2023 - Apr 2023",
      type: "High Frequency Trading Bot",
      subject: "🏆 1st place at TMU high frequency trading competition 🏆",
      experience: "Ted Rogers School of Management",
      geo: "Toronto, ON, Canada",
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <Experience experiences={educationArr} />
      <Experience experiences={involvmentArr} />
    </div>
  );
}
