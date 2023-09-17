import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import ProfileCard from "./ProfileCard";
import CodeSnippet from "./CodeSnippet";
import AboutMeContent from "./AboutMeContent";
import AboutMeFeatures from "./AboutMeFeatures";
import featuresArr from "../../utilities/featureArr";

export default function AboutMe() {
  const [feature, setFeature] = useState(0);

  return (
    <section className={styles.container}>
      {/* change order of this page */}
      <ProfileCard />
      <div className={styles.miscContainer}>
        <AboutMeContent />
        <AboutMeFeatures
          features={featuresArr}
          setFeature={setFeature}
          activeFeature={feature}
        />
      </div>
      <CodeSnippet feature={featuresArr[feature]} activeFeature={feature} />
    </section>
  );
}
