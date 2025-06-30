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
          Hi, I'm Guy — a <span>SWE</span> at <span>Hubio</span>,{" "}
          <span>AI researcher</span>, and entrepreneur. I co-authored published
          research on{" "}
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-031-95841-0_35"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI-powered rare disease diagnosis
          </a>{" "}
          at <span>Oregon State University</span>. Graduated{" "}
          <span>Computer Science</span> with a <span>4.0 GPA</span> and built
          ventures generating <span>$350K+</span> in revenue. I'm passionate
          about all things software engineering, and{" "}
          <span>always open to new ideas</span>.
        </p>
        {/* <p className={styles.resumeSubheading}>
          <span>Currently</span> searching for a{" "}
          <span>challenging internship</span> to apply a unique blend of{" "}
          <span>tech</span> and <span>financial</span> skills in.
        </p> */}
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
