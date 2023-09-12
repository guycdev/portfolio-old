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

  const projectCardArr = projects.map((project, index) => {
    const isActive = selectedProject == index;

    return (
      <div
        key={index}
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        <a href={project.links.live} target="_blank">
          <img src={project.img} alt={project.title} />
        </a>
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
      className={styles.projectCard}
    >
      {projectCardArr}
    </motion.div>
  );
}
