import React from "react";
import { motion } from "framer-motion";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  const { text, style, id, onClick } = props;

  return (
    <motion.button
      className={`${style} ${onClick ? `${style}-clicked` : null}`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: id / 10 + 0.5,
        },
      }}
      disabled={onClick == true}
    >
      {onClick ? "Success" : text}
      {onClick && <FontAwesomeIcon icon={faCheck} />}
    </motion.button>
  );
}
