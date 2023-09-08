import React from "react";
import { motion } from "framer-motion";

export default function Heading(props) {
  const { content, style } = props;

  const letters = content.split("");

  const elementsArr = letters.map((letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.3,
            delay: index / letters.length,
            type: "spring",
          },
        }}
      >
        {letter}
      </motion.span>
    );
  });

  return <span className={`heading-span ${style}`}>{elementsArr}</span>;
}
