import React from 'react';
import styles from './AboutMe.module.css';
import checkMark from '../../assets/checkmark.svg';
import Heading from '../../components/Heading';

export default function AboutMeContent() {
  return (
    <div className={`card ${styles.aboutMeContentContainer}`}>
      <div className={styles.headingContainer}>
        <h3>
          <Heading content="About Me" />
        </h3>
      </div>
      <p>
        <Heading content="I'm Guy, a web developer always looking to undertake new ventures and grow my skill set. I am current a software engineering intern at ZeroX Gaming where I work on both the frontend and backend of our products." />
      </p>
      <p>
        <Heading content="In addition to my hands-on experience, I'm actively pursuing dual degrees in Computer Science and Finance. The two domains synergise to give me the growth mindset and big picture view required to succeed on your development team." />
      </p>
    </div>
  );
}
