import React from "react";
import styles from "./Projects.module.css";
import { ReactSVG } from "react-svg";
import github from "../../assets/socials/github.svg";
import globe from "../../assets/globe.svg";
import { motion } from "framer-motion";
import SvgMarquee from "../../components/SvgMarquee";

export default function ProjectCard(props) {
  const { projects, selectedProject } = props;

  function handleMouseEnter(e) {
    e.currentTarget.classList.add(styles.hovered);
  }

  function handleMouseExit(e) {
    e.currentTarget.classList.remove(styles.hovered);
  }

  console.log(window.innerHeight);
  console.log(window.innerWidth);

  const projectCardArr = projects.map((project, index) => {
    const isActive = selectedProject == index;

    return (
      <div
        key={index}
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        <a
          href={project.links.live || project.links.github}
          target="_blank"
          className={styles.imgLink}
        >
          <img src={project.img} alt={project.title} />
          <div className={styles.projectInfoContainer}>
            <div>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>
                {project.descriptiveSubheading}
              </p>
            </div>
            <div className={styles.tagContainer}>
              {project.tech.map((t, index) => {
                return (
                  <p key={index} className={styles.tag}>
                    {t.name}
                  </p>
                );
              })}
            </div>
          </div>
        </a>
        <div className={styles.projectInfo}>
          <p>{project.subheading}</p>
          <SvgMarquee svgs={project.tech} />
          <div className={styles.linkContainer}>
            <a
              href={project.links.github}
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseExit}
            >
              <div className="react-svg">
                <ReactSVG src={github} />
              </div>
            </a>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
              >
                <div className="react-svg">
                  <ReactSVG src={globe} />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
        },
      }}
      className={`card ${styles.projectCard}`}
    >
      {projectCardArr}
    </motion.div>
  );
}
