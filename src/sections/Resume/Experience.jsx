import React from "react";
import styles from "./Resume.module.css";
import Experience from "../../components/Experience";
import { FaAws, FaNode, FaPython, FaReact, FaShopify } from "react-icons/fa";
import { SiSelenium, SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
export default function Experiences() {
  const experiencesArr = [
    {
      duration: "Sept 2024 - Present",
      type: "ZeroX Network",
      subject: "Software Engineer",
      experience: "Full stack development",
      geo: "Vancouver, BC, Canada",
      bullets: [],
      tech: [
        {
          icon: SiTypescript,
          label: "Typescript",
        },
        {
          icon: FaReact,
          label: "React",
        },
        {
          icon: FaNode,
          label: "Node.js",
        },
        {
          icon: FaPython,
          label: "Python",
        },
        {
          icon: FaAws,
          label: "AWS",
        },
      ],
    },
    {
      duration: "Jan 2024 - Aug 2024",
      type: "ZeroX Network",
      subject: "Software Engineering Intern",
      experience: "Full stack development",
      geo: "Vancouver, BC, Canada",
      bullets: [],
      tech: [
        {
          icon: SiTypescript,
          label: "Typescript",
        },
        {
          icon: FaReact,
          label: "React",
        },
        {
          icon: FaNode,
          label: "Node.js",
        },
        {
          icon: FaPython,
          label: "Python",
        },
        {
          icon: FaAws,
          label: "AWS",
        },
      ],
    },
    {
      duration: "May 2023 - Dec 2023",
      type: "Analog Designs",
      subject: "Freelance Developer",
      experience: "Design Agency",
      geo: "Toronto, On, Canada",
      bullets: [],
      tech: [
        {
          icon: FaReact,
          label: "React",
        },
        {
          icon: FaNode,
          label: "Node.js",
        },
        {
          icon: TbFileTypeSql,
          label: "SQL",
        },
        {
          icon: FaShopify,
          label: "Shopify",
        },
      ],
    },
    {
      duration: "Fed 2020 - May 2022",
      type: "SNKRS Solutions",
      subject: "Founder",
      experience: "Retail Arbitrage",
      geo: "Toronto, ON, Canada",
      bullets: [],
      tech: [
        {
          icon: FaPython,
          label: "Python",
        },
        {
          icon: SiSelenium,
          label: "Selenium",
        },
      ],
    },
  ];

  return (
    <div className={styles.experienceSectionContainer}>
      <Experience experiences={experiencesArr} />
    </div>
  );
}
