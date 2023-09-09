import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectMenu from "./ProjectMenu";
import ProjectCard from "./ProjectCard";
import analogDesigns from "../../assets/projects/analog-designs.png";
import snkrsSolutions from "../../assets/projects/SNKRS-solutions.png";
import ritComp from "../../assets/projects/RIT-comp.png";
import quizzical from "../../assets/projects/quizzical.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Analog Designs",
      subheading:
        "Full-stack application for a design agency where users can manage orders and deployments",
      links: {
        github: "https://github.com/gcWDev/Analog-Designs",
        live: "http://ec2-18-215-255-171.compute-1.amazonaws.com/#home",
      },
      img: analogDesigns,
    },
    {
      title: "SNKRS Solutions",
      subheading:
        "Suite of web scrapers / automation pool used for retail arbitrage",
      links: {
        github: "",
        live: "live.com",
      },
      img: snkrsSolutions,
    },
    {
      title: "High Frequency Trading Bot",
      subheading:
        "Arbitrage trading bot used in the RIT simulation. Utilized OpenAI API to analyze real time market sentiment",
      links: {
        github: "https://github.com/gcWDev/HFT-Case-Comp-case-1-2",
        live: "https://github.com/gcWDev/HFT-Case-Comp-case-1-2",
      },
      img: ritComp,
    },
    {
      title: "Quizical Quiz App",
      subheading:
        "Dynamic quiz app utilizing the trivia API to test users on common knowledge questions.",
      links: {
        github: "https://github.com/gcWDev/Quizzical",
        live: "https://dancing-douhua-4d4ac1.netlify.app/",
      },
      img: quizzical,
    },
  ];

  return (
    <section className={styles.projectsContainer}>
      <ProjectMenu
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <ProjectCard projects={projects} selectedProject={selectedProject} />
    </section>
  );
}
