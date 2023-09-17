import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
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
    <>
      <motion.div
        className="blob"
        ref={blobRef}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
          transition: {
            delay: 0.7,
          },
        }}
      ></motion.div>
      <div className="blur"></div>
    </>
  );
}
