import React from "react";
import styles from "./AboutMe.module.css";
import Heading from "../../components/Heading";
import { ReactSVG } from "react-svg";

export default function AboutMeFeatures(props) {
  const { features, setFeature, activeFeature } = props;

  const featureControllerArr = features.map((feature, index) => {
    return (
      <div
        className={
          activeFeature == index ? styles.activeFeature : styles.feature
        }
        onMouseEnter={() => setFeature(index)}
      >
        <div className="react-svg">
          <ReactSVG src={feature.icon} />
        </div>
        <h4>
          <Heading content={feature.name} />
        </h4>
        <p
          className={styles.featureItem}
          style={{ display: activeFeature == index ? "block" : "none" }}
        >
          <Heading content={feature.description} />
        </p>
      </div>
    );
  });

  return (
    <div className={`card ${styles.aboutMeFeatureControllerContainer}`}>
      <div className={styles.aboutMeFeatureHeadings}>
        <h3>
          <Heading content="Favorite Features" />
        </h3>
        <p className={styles.subheading}>
          <Heading content="Scroll to look through some of the UI components I'm most proud of" />
        </p>
      </div>
      <div className={styles.featureController}>{featureControllerArr}</div>
    </div>
  );
}
