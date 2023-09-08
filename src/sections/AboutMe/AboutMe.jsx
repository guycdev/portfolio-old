import React, { useState, useEffect } from "react";
import styles from "./AboutMe.module.css";
import ProfileCard from "./ProfileCard";
import CodeSnippet from "./CodeSnippet";
import AboutMeContent from "./AboutMeContent";
import AboutMeFeatures from "./AboutMeFeatures";

export default function AboutMe() {
  const [feature, setFeature] = useState(0);

  console.log(feature);

  const featuresArr = [
    {
      name: "Feature 1",
      description: "This is feature 1",
      code: `<div className="example">\n  <p>Hello, World!</p>\n</div>`,
    },
    {
      name: "Feature 2",
      description: "This is feature 2",
      code: `console.log("Hello, World!");`,
    },
  ];

  return (
    <section className={styles.container}>
      <ProfileCard />
      <div className={styles.miscContainer}>
        <AboutMeContent />
        <AboutMeFeatures
          features={featuresArr}
          setFeature={setFeature}
          activeFeature={feature}
        />
      </div>
      <CodeSnippet feature={featuresArr[feature]} />
    </section>
  );
}
