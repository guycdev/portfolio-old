import React, { useRef, useEffect } from "react";
import HeroCta from "./HeroCta";
import styles from "./Hero.module.css";
import overlays from "../../utilities/overlayArr.js";
// import WordAnimationMaskSelector from "./WordAnimationMaskSelector";
import WordAnimationParent from "./WordAnimationParent";

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.blob} ref={blobRef}></div>
      <div className={styles.blur}></div>
      <HeroCta />
      <div className={styles.wordAnimationContainer}>
        <WordAnimationParent overlays={overlays} />
        {/* <WordAnimationMaskSelector overlays={overlays} /> */}
      </div>
    </section>
  );
}
