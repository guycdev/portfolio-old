import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./AboutMe.module.css";
import { motion } from "framer-motion";

export default function CodeSnippet(props) {
  const { feature } = props;

  return (
    <div className={`card ${styles.codeSnippetContainer}`}>
      <motion.div
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
        <SyntaxHighlighter language="javascript" style={synthwave84}>
          {feature.code}
        </SyntaxHighlighter>
      </motion.div>
    </div>
  );
}
