import React from "react";
import styles from "./Resume.module.css";
import Experience from "../../components/Experience";
export default function Experiences() {
  const experiencesArr = [
    {
      duration: "Dec 2023 - Present",
      type: "ZeroX Network",
      subject: "Software Engineering Intern",
      experience: "Full stack development",
      geo: "Vancouver, BC, Canada",
      bullets: [
        "Design and implements APIs and UIs for blockchain native products in Node, Django, and React",
        "Led migraiton of smart contract interactions from client to server",
        "Spearheaded migration of file upload logic from client to server, reducing server load by 99%",
        "Automated repo forking process by building Python scripts",
        "Collaborate with the DevOps team to iterate CI/CD processes for our VC demo monorepo",
      ],
    },
    {
      duration: "May 2023 - Dec 2023",
      type: "Analog Designs",
      subject: "Freelance Developer",
      experience: "Design Agency",
      geo: "Toronto, On, Canada",
      bullets: [
        "Launched React website with user-friendly dashboard.",
        "Engineered a CRUD Node API, reducing communication time by 80%.",
        "Designed modular UI for easy theme swaps for future projects.",
        "Learned about db security, and responsive design.",
        "Managed 6 projects to date.",
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
    <div className={styles.experienceSectionContainer}>
      <div className={styles.experienceContainer}>
        <Experience experiences={experiencesArr} />
      </div>
    </div>
  );
}
