import React from "react";
import Heading from "./Heading";

export default function Experience(props) {
  const { experiences } = props;

  console.log(experiences);

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
      </div>
    );
  });
  return <>{elementArr}</>;
}
