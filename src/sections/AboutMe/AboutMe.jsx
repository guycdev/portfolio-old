import React, { useState } from "react";
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
      name: "Minions Cursor Follower",
      description:
        "A minion face whose eyes follow mouse positioning using trigonometry",
      code: `export default function MinionFollower() {
  const [pupilStyle, setPupilStyle] = 
    useState({
    left: "50%",
    top: "50%",
    transform: "rotate(0deg)",
  });

  const eyeRadius = 8.96;

  const eyeRefs = [useRef(null), useRef(null)];

  function anglePositining(event) {
    eyeRefs.forEach((eyeRef) => {
      const eye = 
      eyeRef.
      current.
      getBoundingClientRect();
      const eyeCenterX = eye.left 
      + eye.width 
      / 2;
      const eyeCenterY = eye.top 
      + eye.height 
      / 2;
      const angle = Math.atan2(
        event.clientY - eyeCenterY,
        event.clientX - eyeCenterX
      );

      const pupilX = 
      eyeRadius 
      * Math.cos(angle) + 2.25 
      * eyeRadius;
      const pupilY =
      eyeRadius 
      * Math.sin(angle) 
      + 2.2 
      * eyeRadius;

      const rotation = angle * (180 / Math.PI);

      setPupilStyle({
        left: pupilX + "px",
        top: pupilY + "px",
        transform: \`rotate(\${rotation}deg)\`,
      });
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", 
    anglePositining);

    return () => {
      window.removeEventListener("mousemove", 
      anglePositining);
    };
  }, []);

  return (
      <div className="card">
        <div className={styles.goggleContainer}>
          <div className={styles.strapContainer}>
            <div className={styles.eyeWrapper}>
              <div 
              className={styles.eye} 
              ref={eyeRefs[0]}
              >
                <div className={styles.eyeBalls}>
                  <div className={styles.pupels} 
                  style={pupilStyle}
                  >
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eyeWrapper}>
              <div 
              className={styles.eye} 
              ref={eyeRefs[1]}
              >
                <div className={styles.eyeBalls}>
                  <div className={styles.pupels} 
                  style={pupilStyle}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  }`,
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
