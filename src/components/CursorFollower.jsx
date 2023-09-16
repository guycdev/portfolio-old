import React, { useState, useEffect, useRef } from "react";

export default function CursorFollower() {
  const [pupilStyle, setPupilStyle] = useState({
    left: "50%",
    top: "100%", // sets it to the bottom of the container
    transform: "rotate(0deg)",
  });

  const eyeRadius = 2.475;

  const eyeRefs = [useRef(null)];

  function anglePositining(event) {
    eyeRefs.forEach((eyeRef) => {
      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;
      const angle = Math.atan2(
        event.clientY - eyeCenterY,
        event.clientX - eyeCenterX
      );

      let pupilX = eyeRadius * Math.cos(angle) * eyeRadius;
      let pupilY = eyeRadius * Math.sin(angle) * eyeRadius;

      pupilX += 7.5;
      pupilY += 7.5;

      const rotation = angle * (180 / Math.PI);

      setPupilStyle({
        left: pupilX + "px",
        top: pupilY + "px",
        transform: `rotate(${rotation}deg)`,
      });
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", anglePositining);

    return () => {
      window.removeEventListener("mousemove", anglePositining);
    };
  }, []);

  return (
    <div className="face-container">
      <div className="goggle-container">
        <div className="mask-container">
          <div className="eye-container">
            <div className="pupel-container">
              <div className="cursor-container">
                <div
                  className="cursor-follower"
                  style={pupilStyle}
                  ref={eyeRefs[0]}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
