import React from "react";
import styles from "./Resume.module.css";
import Experience from "../../components/Experience";
import { FaAws, FaNode, FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiDuckdb, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
export default function Experiences() {
  const experiencesArr = [
    {
      duration: "Jan 2025 - Present",
      type: "Hubio Technologies",
      subject: "Software Engineer",
      experience: "Full stack development",
      geo: "Toronto, ON, Canada",
      bullets: [],
      tech: [
        {
          icon: FaGolang,
          label: "Golang",
        },
        {
          icon: BiLogoPostgresql,
          label: "PostgreSQL",
        },
        {
          icon: SiDuckdb,
          label: "DuckDB",
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
      duration: "Sept 2024 - Dec 2024",
      type: "Ramsey Labs - OSU",
      subject: "Research Assistant",
      experience: "PhD Product Development",
      geo: "Toronto, ON, Canada",
      bullets: [],
      tech: [
        {
          icon: FaGolang,
          label: "Golang",
        },
        {
          icon: FaReact,
          label: "React",
        },
        {
          icon: DiMongodb,
          label: "MongoDB",
        },
        {
          icon: SiTypescript,
          label: "Typescript",
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
      duration: "Sept 2024 - November 2024",
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
  ];

  return (
    <div className={styles.experienceSectionContainer}>
      <Experience experiences={experiencesArr} />
    </div>
  );
}
