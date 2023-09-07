import React from "react";
import styles from "./Hero.module.css";
import { ReactSVG } from "react-svg";

export default function WordAnimationMaskSelector(props) {
  const { overlays } = props;

  const elementArr = overlays.map((overlay, index) => {
    return (
      <div className="react-svg">
        <ReactSVG
          key={index}
          src={overlay}
          beforeInjection={(svg) => {
            svg.classList.add(styles.overlayContainer);
            svg.classList.add(index % 2 == 0 ? styles.evenSvg : styles.oddSvg);
          }}
        />
      </div>
    );
  });

  return <div className={styles.maskSelectorContainer}>{elementArr}</div>;
}
