import React from "react";
import styles from "./Resume.module.css";
import { motion } from "framer-motion";
import { langArr, toolsArr, frameArr } from "../../utilities/techArr";
import SvgMarquee from "../../components/SvgMarquee";

export default function Profile() {
  return (
    <motion.div
      className={styles.profileContainer}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
        },
      }}
    >
      <div>
        <p className={styles.resumeSubheading}>
          <span>Entrepreneurial web developer</span> with{" "}
          <span>$362K in lifetime revenue </span>from multiple ventures.
        </p>
        <p className={styles.resumeSubheading}>
          <span>Proficient in React</span> and Node; pursuing a{" "}
          <span>dual degree</span> in CS and Finance.
        </p>
        <p className={styles.resumeSubheading}>
          <span>Currently</span> searching for a{" "}
          <span>challenging internship</span> to apply a unique blend of{" "}
          <span>tech</span> and <span>financial</span> skills in.
        </p>
      </div>
      <div className="resume-marquee">
        <div>
          <p className={styles.marqueeLabel}>Languages</p>
          <SvgMarquee svgs={langArr} pause={true} />
        </div>
        <div>
          <p className={styles.marqueeLabel}>Frameworks & Libraries</p>
          <SvgMarquee svgs={frameArr} pause={true} />
        </div>
        <div>
          <p className={styles.marqueeLabel}>Tools</p>
          <SvgMarquee svgs={toolsArr} pause={true} />
        </div>
      </div>
    </motion.div>
  );
}
