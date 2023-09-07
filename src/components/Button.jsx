import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  const { text, style, id } = props;

  return (
    <motion.button
      className={style}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: id / 10 + 0.5,
        },
      }}
    >
      {text}
    </motion.button>
  );
}
