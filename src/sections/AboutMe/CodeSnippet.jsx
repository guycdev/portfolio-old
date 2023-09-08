import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./AboutMe.module.css";
import { motion } from "framer-motion";
import WindowController from "./WindowController";
import VideoPlayer from "./VideoPlayer";

export default function CodeSnippet(props) {
  const { feature, activeFeature } = props;

  const [window, setWindow] = useState("code");

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
        <WindowController setWindow={setWindow} window={window} />
        {window == "code" ? (
          <SyntaxHighlighter language="javascript" style={synthwave84}>
            {feature.code}
          </SyntaxHighlighter>
        ) : (
          <VideoPlayer videoIndex={activeFeature} video={feature.video} />
        )}
      </motion.div>
    </div>
  );
}
