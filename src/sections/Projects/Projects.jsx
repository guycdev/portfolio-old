import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectMenu from "./ProjectMenu";
import ProjectCard from "./ProjectCard";
import projects from "../../utilities/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

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
