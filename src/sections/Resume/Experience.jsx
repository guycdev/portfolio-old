import React from "react";
import styles from "./Resume.module.css";
import Experience from "../../components/Experience";
export default function Experiences() {
  const experiencesArr = [
    {
      duration: "May 2023 - Present",
      type: "Analog Designs",
      subject: "Founder",
      experience: "Design Agency",
      geo: "Toronto, On, Canada",
      bullets: [
        "Launched React website with user-friendly dashboard.",
        "Engineered a CRUD Node API, reducing communication time by 80%.",
        "Designed modular UI for easy theme swaps for future projects.",
        "Learned about db security, and responsive design.",
        "Earned $12K from 12 projects.",
      ],
    },
    {
      duration: "Fed 2020 - May 2022",
      type: "SNKRS Solutions",
      subject: "Founder",
      experience: "Retail Arbitrage",
      geo: "Toronto, ON, Canada",
      bullets: [
        "Utilized Python and Selenium for e-commerce automation.",
        "Crafted Excel dashboard for $40K real-time inventory tracking.",
        "Boosted brand via diverse social media channels.",
        "Established long-term relationships with wholesale and D2C clients",
        "Hit $350K lifetime revenue.",
      ],
    },
  ];

  return (
    <div className={styles.experienceContainer}>
      <Experience experiences={experiencesArr} />
    </div>
  );
}
