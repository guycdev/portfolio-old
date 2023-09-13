import React from "react";

export default function (props) {
  const { amount } = props;

  function coordinateRandomizerY(i) {
    const clientY = window.innerHeight;
    return `${Math.floor(Math.random() * (clientY * 0.4))}px`;
  }

  function coordinateRandomizerX(i) {
    const clientX = window.innerWidth;
    return `${Math.floor(Math.random() * (clientX * 0.5))}px`;
  }

  const elementArr = [];

  for (let i = 0; i <= amount; i++) {
    elementArr.push(
      <div
        className="random-dots"
        style={
          i % 2 == 0
            ? {
                top: coordinateRandomizerY(i),
                left: coordinateRandomizerX(i),
              }
            : {
                bottom: coordinateRandomizerY(i),
                right: coordinateRandomizerX(i),
              }
        }
        key={i}
      ></div>
    );
  }
  return <>{elementArr}</>;
}
