import React from "react";
import Heading from "./Heading";
import { IconBase } from "react-icons";
import { motion } from "framer-motion";

export default function Experience(props) {
  const { experiences } = props;

  const elementArr = experiences.map((experience, index) => {
    return (
      <div className="experience-container" key={index}>
        <div>
          <p className="date">
            <Heading content={experience.duration} />
          </p>
          <h2 className="type">
            <Heading content={experience.type} />
          </h2>
        </div>
        <div>
          <p className="subject">
            <Heading content={experience.subject} />
          </p>
          <p className="experience">
            <Heading content={experience.experience} />
          </p>
        </div>
        <p className="location">
          <Heading content={experience.geo} />
        </p>
        {experience.bullets && experience.bullets.length !== 0 && (
          <ul className="bullet-list">
            {experience.bullets.map((bullet, index) => {
              return (
                <li className="bullet" key={index}>
                  <Heading content={bullet} />
                </li>
              );
            })}
          </ul>
        )}
        {experience.tech && (
          <ul>
            {experience.tech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  className="icon-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 * index } }}
                >
                  <Icon />
                  <p>{tech.label}</p>
                </motion.div>
              );
            })}
          </ul>
        )}
      </div>
    );
  });
  return <>{elementArr}</>;
}
