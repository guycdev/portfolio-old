import React from "react";
import { motion } from "framer-motion";

export default function Heading(props) {
  const { content } = props;

  const letters = content.split("");

  const elementsArr = letters.map((letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.3,
            delay: index / 10,
            type: "spring",
          },
        }}
      >
        {letter}
      </motion.span>
    );
  });

  return <span className="heading-span">{elementsArr}</span>;
}
