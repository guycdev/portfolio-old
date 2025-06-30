import React from "react";
import styles from "./Projects.module.css";
import Heading from "../../components/Heading";

export default function ProjectMenu(props) {
  const { selectedProject, setSelectedProject, projects } = props;

  function handleMouseOver(e) {
    const { id } = e.currentTarget;
    setSelectedProject(id);
  }

  function handleClick(e) {
    const href = e.currentTarget.href;
    if (href === "javascript:void(0)") {
      e.preventDefault();
    }
  }

  const projectsArr = projects.map((project, index) => {
    const isActive = selectedProject == index;
    return (
      <a
        href={project.links ? project.links.live : "javascript:void(0)"}
        key={index}
        target="_blank"
        onClick={handleClick}
      >
        <div
          id={index}
          className={`${styles.project} ${isActive ? styles.active : ""}`}
          onMouseEnter={handleMouseOver}
          style={{
            fontSize: isActive ? "1.5rem" : "",
            marginLeft: isActive ? "1rem" : "",
          }}
        >
          <h2 className={styles.projectHeading}>
            <Heading content={`${(index + 1).toString()}.`} />
            <Heading content={project.title} />
          </h2>
        </div>
      </a>
    );
  });

  return <div className={styles.projectMenuContainer}>{projectsArr}</div>;
}
