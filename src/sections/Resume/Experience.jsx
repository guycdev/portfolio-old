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
        "Managed 14 projects to date.",
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
        "Crafted Excel dashboard for real-time inventory tracking.",
        "Boosted brand via diverse social media channels.",
        "Established long-term relationships with wholesale and D2C clients",
        "Led the business to profitability",
      ],
    },
  ];

  return (
    <div className={styles.experienceContainer}>
      <Experience experiences={experiencesArr} />
    </div>
  );
}
